'reach 0.1';

export const main = Reach.App(() => {
  /*
  * Partecipant interface defintion
  **/

  /*
  * The creator of the crowdfunding campaign
  **/
  const Creator = Participant('Creator',{
    ...hasRandom, // interface to interact with frontend and get the variables
    ...hasConsoleLogger, // interface to let the creator print on the terminal from the smart contract
    max_goal: UInt, // goal that the creator want to reach
    goal_formatted: UInt, // currency is in microalgos, so we sent back also the formatted goal in Algo
    deadline: UInt, // day which will end the campaign
    showInvestment: Fun([Address,UInt], Null), // function that shows the investor and the amount the investment
    redeemInvestmentGet: Fun([Address,UInt], Null), // function that show the investor that have redeemed his investment if the campaign not reach the goal
  });

  /*
  * The address that holds all the SYS token to redistribute to the investors
  **/
  const Company = Participant('Company',{
    ...hasRandom, // interface to interact with frontend and get the variables
    ...hasConsoleLogger, // interface to let the creator print on the terminal from the smart contract
    amtTokenToSend: UInt, // the amonut of token to send to the smart contract and than redistribute to the invastors
    tokenId: Token, // token id sent from frontend
    checkpw: Fun([],Bytes(128)), // function to request to insert the password to authenticate as Company. Request till the password is correct 
  })

  /*
  * Set of API called from investors to interact with the smart contract
  **/
  const investAPI = API('investAPI', {
    makeInvest: Fun([UInt], UInt), // API that let investors to invest in the crowdfunding campaing ( samrt contract )
    redeemInvestment: Fun([], Bool), // API that let investors redeem their investment if the campaign not reache the goal or ends
    claimReward: Fun([], Bool), // API that let the investors to cleaim their rewards based of their investments
  });

  /*
  * Set of view to check some variables setted in the smart contract, from the frontend for the investors
  **/
  const views = View('views', { 
    isCampaignOnV: Bool, // View that let investors to check if the campaign is still on
    getGoalV: UInt, // View that let investors to check the goal that the creator want to reach 
    getCtcBalanceV: UInt, // View that let investors to see the amount of algorand reached till that moment
    checkGoalReachedV: Bool, // View that let investors to check if the goal is reached and claim thier rewards
  });

  setOptions({ untrustworthyMaps: true });
  /*
  * Ending the interface declaration
  **/
  init();


  /*
  * After the Creator have choosen the goal and deadline, they are sent to the backend and published
  **/
  Creator.only(() => {
    // declassify: make readable the value that return from the frontend, otherwise it remain unreadable.
    const max_amt = declassify(interact.max_goal); // assign the goal value that the creator choose from the frontend to a costant that only him knows
    const goal_formatted = declassify(interact.goal_formatted); // assign the goal value formatted to a costant that only him knows
    const deadline = declassify(interact.deadline); // assign the deadline value that the creator choose from the frontend to a costant that only him knows
  });
  Creator.publish(max_amt, goal_formatted, deadline); // publish all the variable on the blockchain

  /*
  * The Creator have put the basis to start the campaign and the view are setted
  **/
  views.getGoalV.set(goal_formatted);
  views.isCampaignOnV.set(false);
  views.checkGoalReachedV.set(false);
  views.getCtcBalanceV.set(balance());

  /*
  * Ending this consensus step with the commit function
  **/
  commit();

  /*
  * Company send the token id that want to pay as reward to the investors
  **/
  Company.only (() =>{
    // declassify: make readable the value that return from the frontend, otherwise it remain unreadable.
    const tokenID = declassify(interact.tokenId) // assign the token id taken from the frontend to a costant that only him knows
  });
  Company.publish(tokenID); // publish the token id on the blockchain

  /*
  * Function that check if the company have inserted the right password
  **/
  const passwordChecked = (x,y) => {
    if(x==y){
      Company.interact.log("Company verified!");
      commit(); // commit needed because there is a publish before that this function is called
      Company.pay([[max_amt,tokenID]]); // if the password hash is equal to the hash saved on the contract, the company pay the token to reward the investors
      return true;
    } else {
      Company.interact.log("Wrong password, try again.");
      return false;
    }
  }
  /*
  * Starting the while that ask the company to insert the password till is correct
  **/
  var pwchecked = false; // tille the password is checkdd is setted to false 
  invariant(balance() == 0); // invariant: the condition inside must be true for the all time that the while goes on
  while(!pwchecked){
    commit(); // have to commit for all the time that a publish is done
    Company.only (() =>{
      const pwhash = declassify(interact.checkpw()); // call the function to ask the password
      const hash = "4f215eff8112095c178769c2ca9a29fc91783edc7ac70093c92a0c9fb7fe9d60786f078aab73ba9fa417e87949c14580821671ec38ace803880373beeec43ae5" // the hash of the company password to check 
    });
    Company.publish(pwhash,hash);// publish the two hashes 
    pwchecked = passwordChecked(pwhash,hash); // compairing the hashes and exit if they are equal
    continue;
  }

  /*
  * Map(): object key-value to store the address as key and the investment as value
  **/
  const mAmt = new Map(UInt); 
  views.isCampaignOnV.set(true); // setting the view to on 

  /*
  * Starting the parallel reduce that allow users to invest in the campaign 
  * The parallel reduce allow to start a while with a fork, an operand like the switch case that 
  * execute code when the api to make an investment is called
  **/
  const [total_balance, keepGoing] = // total_balance take trace of the balance when an investment is done, keepGoing is needed to see if the parallel reduce con in timeout
    parallelReduce([0, true]) // starting setting the total balance to 0 and keepGoing to true
      .invariant(balance() == total_balance) // invariant: the condition inside must be true for the all time that the while goes on
      .define(() => {views.getCtcBalanceV.set(balance());}) // define: the code inside is executed when a function in the while is called (ex. the api call). Needed to update the balance of the contract to show to the investors
      .while((total_balance < max_amt) && keepGoing)
      // an API call is formed by 4 steps:
      .api(investAPI.makeInvest, // the name of the api that is called - this API let users to do an investment
        (invst) => { // the assume that have to be true to continue the execution of the API
          assume(invst > 0);
          assume(balance()+invst<=max_amt, 'Not allow to invest more than goal amount')
        },      
        (invst) => invst, // the payment that the users have to do when call the api
        (invst,y) => { // the code to execute and the returning variable of the api (y)
          y(invst);
          mAmt[this] = fromSome(mAmt[this],0) + invst; // saving the investment into the Map (or adding the investment to an existing one) 
          Creator.only(() => interact.showInvestment(this, invst)); // function that shows the wallet address of the user that made the investment and the amount invested
          return [total_balance+invst, true]; // the returning of the API for the parallel reduce necessary to update the initial variable 
        }
      )
      // TIMEOUT WORKS ONLY ON TESTNET
      .timeout(relativeTime(deadline), () => { // timeout: function that executes code every amount of time decided by the first parameter
        Creator.interact.log("The campaign has finished") // log on the Creator cli to inform the end of the campaign
        Anybody.publish(); // publish needed to finish the parallel reduce
        return [total_balance,false]; // set keepGoing to false to finish the campaign
      }); 

  views.isCampaignOnV.set(false);

  /*
  * If the goal is reached
  **/
  if(balance() == max_amt){
    
    Creator.interact.log("Goal reached. Transfer money to the Founder...");
    /**
     * Transfering the FIRST half part of the balance to the Creator
     */
    const first_trance = balance()/2
    transfer(first_trance).to(Creator);
    
    views.checkGoalReachedV.set(true); // setting this view to true so the investor can claim their rewards

    Creator.interact.log("Claim SYS token from investors");
    /**
     * Starting the claiming reward periods for investors - same mechanism of the first parallel reduce
     */
    
    const [remain_tokens, keepGoing_claim] = 
    parallelReduce([balance(tokenID), true])
      .invariant(balance(tokenID) == remain_tokens)
      .while((remain_tokens > 0) && keepGoing_claim)
      .api(investAPI.claimReward,
        () => {
          assume(fromSome(mAmt[this], 0) <= balance(tokenID));
          assume(balance(tokenID)>0, 'No rewards left in the contract');
        },
        () => 0,
        (ret) => {
          const your_made_investment = fromSome(mAmt[this], 0);
          Creator.interact.log("An investor is claiming his reward...");
          require(balance(tokenID) >= your_made_investment);
          ret(true);
          transfer([[your_made_investment, tokenID]]).to(this) ; 
          delete mAmt[this];
          return [remain_tokens-your_made_investment, true];

        }
      )
      // TIMEOUT WORKS ONLY ON TESTNET
      .timeout(relativeTime(2592000/5), () => { //seconds in a month divided timeblock. Time that users have to claim their rewards
        Anybody.publish();    
        return [remain_tokens,false];
      }); 

      /**
      * At the end of the claiming peridos, transfer the second half to the Creator
      * Future work: transfer the second half when the contract receive the confirmation that the solar panel was built (send a signal by a sensor put on the solar panel)
      */
      transfer(balance()).to(Creator);

  /**
  * Goal not reached. Strating the redeeming period for the investors investments
  */
  } else {
    
    Creator.interact.log("Goal not reached. Waiting investors redeem thier money.");
    
    const [balance_to_redeem, keepGoing_redeem] = 
      parallelReduce([total_balance, true])
        .invariant(balance() == balance_to_redeem)
        .while((balance_to_redeem > 0) && keepGoing_redeem)
        .api(investAPI.redeemInvestment, 
          () => {
            assume(fromSome(mAmt[this], 0) <= balance());
          },
          () => 0,
          (returnOfAPIredeem) => {
            const your_made_investment = fromSome(mAmt[this], 0);
            require(balance() >= your_made_investment);
            returnOfAPIredeem(true);
            Creator.only(() => interact.redeemInvestmentGet(this,your_made_investment)); 
            transfer(your_made_investment).to(this);
            delete mAmt[this];
            return [balance_to_redeem-your_made_investment, true];
          }
        )
        // TIMEOUT WORKS ONLY ON TESTNET
        .timeout(relativeTime(2592000/5), () => { 
          Anybody.publish();      
          return [balance_to_redeem,false];
        });

  }


  if(balance() > 0){
    transfer(balance()).to(Company);
  }
  if (balance(tokenID)>0){
    transfer([[balance(tokenID),tokenID]]).to(Company);
  }

  commit();
  exit();
});




