import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno, done } from '@reach-sh/stdlib/ask.mjs';
import * as sha512 from 'js-sha512';

// Setting the id of out token
const ASSET_ID_SYS = 78065319;
let isCompany=null
let who = null
let ctc = null; //The contract created or to use

const stdlib = loadStdlib(process.env);

// Using the function hasRandomm of reach's library because:
// "Reach does not natively support randomness and leaves random number generation to the frontend implementation"
const interact = { ...stdlib.hasRandom };  

//implement the functions to log inside the backend
interact.log = async (...args) => {
  console.log(...args)
};

//implementation of redeemInvestmentGet() function, define inside the backend. It is used for logging purposes
interact.redeemInvestmentGet = async(addr,quantity) =>{
  console.log(`Creator saw ${stdlib.formatAddress(addr)} has redeem his ${quantity} Algos of investment.`)
}


/********************************************************************************************************** 
 * *****************************__________ NOTE: __________************************************************
 * 
 *  CREATOR: create a new crowdfunding campaign
 *  COMPANY: only one Company exist, and it's owns 10.000.000.000 of SYS token. It's empower to rewards users
 *  INVESTOR: user that invest in crowdfunding campaign and get rewards if the goal is reached
 * 
 * ********************************************************************************************************** 
 * */


/*********************************************************************
 * 
 *                    ENTERING IN CAMPAIGN
 * 
 *********************************************************************/

//ask to user if he is a creator
const isCreator = await ask(
  `Are you a Campaign Creator?`,
  yesno
);


if(!isCreator){ //if is not a creator, asking if he is a Company
  isCompany = await ask(
  `Are you a Campaign Company?`,
  yesno
  );
}

if(isCreator){
  who = 'Creator'
}
else if (isCompany){
  who = 'Company'
}
else { //setting who to 'investor'
  who = 'Investor'
}

console.log('\t\t*****************************************************************\t')
console.log(`\t\tHi, ${who} . Welcome to Crowdfunding project!\t`);
console.log('\t\t*****************************************************************\t')

//setting the DApp to execute on the testnet (and not in local)
stdlib.setProviderByName('TestNet');

//asking for the passphase, which is need to interact with backend in the following operations
const secret = await ask(
  `Insert passphase`,
  (x => x)
);

//get the Wallet using newAccountFromMnemonic() function and the passphase
const acc = await stdlib.newAccountFromMnemonic(secret);

//Address formatting 
const fmt = (x) => stdlib.formatCurrency(x, 4);

//getting balance of the address
const getBalance = async (acc) => fmt(await stdlib.balanceOf(acc));

//calling getBalance() function
const before = await getBalance(acc);
console.log(`Your balance is: ${before}`);

//Utility function that allow to call Reach's backend api
const call = async (f) => {
  let res = undefined;
  try {
    res = await f();
    console.log(`res`, res);
    return res;
  } catch (e) {
    res = [`err`, e]
    console.log(`res`, res);
    return false;
  }
  
};

/*********************************************************************
 * 
 *                    STARTING OF CAMPAIGN
 * 
 *********************************************************************/


if (isCreator) {  //check if is the CRETOR of campaign

  // ---------- CREATE  a new campaign ----------
  ctc = acc.contract(backend); //creating the contract
  ctc.getInfo().then((info) => {
    console.log(`\t\tStarting Crowdfunding Campaign! as ${who}`);
    console.log(`The contract is deployed as = ${JSON.parse(info)}`); //display the id of the contract
  });

  //GOAL to reach 
  const goal_amt = await ask(
    `How much do you want to reach?`,
    stdlib.parseCurrency
  );
  
  const goal_formatted = stdlib.formatCurrency(goal_amt); //formatted goal 
  //passing goal and goal_formatted to the backend using 'interact' function to interact with it
  interact.max_goal = goal_amt;
  interact.goal_formatted = goal_formatted;

  //implementation of backend's function 'showInvestment()' defined inside 'creator' partcipants interface
  interact.showInvestment = async(addr,quantity) =>{
    console.log(`Creator saw ${stdlib.formatAddress(addr)} has invest ${quantity} Algos`)
  }

  // const date = new Date();

  // const dl = parseInt((date.getTime() + 1000000) / 1000)

  // relative works only on testnet testnet!!!

  interact.deadline = 340/5; // seconds that I want the campaign stay up divided timeblock. Passing it to the backend
  
  // getting the creator participant
  const part = backend.Creator;
  await part(ctc, interact); //creating the contract

  const after = await getBalance(acc);
  console.log(`Your balance is now ${after}`);
  
} else if(isCompany){

  // ---------- VALIDATE  a new campaign sendings SYS tokens to the contract----------
  const info = await ask(
    `Please paste the contract information:`,
    JSON.parse
  );

  ctc = acc.contract(backend, info); //attach to the contract created by creator using the id 'info'

  /**
   * comunicate to the backend which is the id of the token. Is not a good idea save it inside
   * the backend because reach works with differents blockchains (the id for the same token could change between them)
   */
  interact.tokenId = ASSET_ID_SYS; 
  
  //Implementing the 'checkpw()' reach's Company (participangt) backend function
  //inserting the password to check if the Company is who it say it is
  interact.checkpw = async() => {
    const pw = await ask(
      `Please insert password:`,
        (y => y)
    );
    
    //hashing the password to guarantee security, integrity and confidentiality
    const pw_hash = sha512.sha512(pw);
    return pw_hash;
  }

  //attaching to the backend contract, sending information
  const part = backend.Company;
  await part(ctc, interact);
  
} else {

  // ---------- INVESTOR invest in campaign----------
  const info = await ask(
    `Please paste the contract information:`,
    JSON.parse
  );
  
  ctc = acc.contract(backend, info); // attaching to the contract using its ID

  //setting of api; 'ctc' stand for contract, 'a' stand for api, 'investAPI' is the label of backend's api
  const investor_user_api = ctc.a.investAPI;

  /**
   * FIRST OF ALL:
   * we check if the campaing is finished and goal is reached, so the user can claim his rewards
   */
  //if goal is reached ...     
  const check_goal_reached = await ctc.v.views.checkGoalReachedV(); //calling the backend's views
  if(check_goal_reached[1]){
    console.log("Claiming of rewards ...")
    
    //calling the api tha allow user to claim his rewards (SYS token)
    await call(() => investor_user_api.claimReward());

    process.exit(0); //stopping the execution
  }

  // calling some views ...
  const isCampaignOn = await ctc.v.views.isCampaignOnV();
  const campaignGoal = await ctc.v.views.getGoalV();
  const campaignFund = await ctc.v.views.getCtcBalanceV();

  //formatting the actual balance of the contract (algos)
  const campaignFundFormatted = stdlib.formatCurrency(campaignFund[1]);

  console.log("Goal : "+ campaignGoal[1] +" - actual balance : " + campaignFundFormatted);

  /**
   * If campaign is on
   *   an investor could invest
   * else
   *  an investor could redeem is investment (if the deadline is not reached)
   */
  // Checking if campaing is on
  if(isCampaignOn[1]){

    //asking for the amount to invest
    var amt_invest = await ask(
      `How much do you want to invest?`,
      stdlib.parseCurrency
    );
    
    //investing in the contract using backend api 'makeInvest()'
    await call(() => investor_user_api.makeInvest(amt_invest));

    const after = await getBalance(acc);
    console.log(`Your balance is now ${after}`);

  } else {

    //calling the backend's api to redeem the investment
    await call(() => investor_user_api.redeemInvestment());

    const after = await getBalance(acc);
    console.log(`Your balance is now ${after}`);
    
  }
}

done();
