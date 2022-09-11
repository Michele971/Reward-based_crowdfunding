# Reward-based crowdfunding DApp 

Decentralized crowdfunding platform build on Algorand blockchain


## Description
In this project, we have developed a Decentralized Application where the purpose is to incentive people to invest in crowdfunding campaign.

We developed our DApp using **Reach** language which allows us to deploy our smart contract on different blockchains such as **Ethereum** or **Algorand**. We focused on Algorand because of its features such as fast transactions, security, and low fees. 

Every DApp could have one or more smart contracts, in this case only one was necessary and it is the core point of crowdfunding application.


## Installation
You have to install docker.
Inside the project folder run:

```
curl https://docs.reach.sh/reach -o reach ; chmod +x reach
./reach update
npm install
```



## Usage on Algorand blockchain
The asset id of SYS_2 token is defined in the first line of **index.mjs** files. Recall to change the _ASSET_ID_SYS_ variable with the new id if you want to test in on Ethereum network. 
It is also very important do the optin to the asset in your wallet if you want receive your reward.

Create new account on testnet using **nuovo_account.py** script and save the **public key** and the **passphase** (you'll have to use them to interact with out DApp).


```
REACH_CONNECTOR_MODE=ALGO-live ./reach run
```




## Roadmap
Tokenomics & new web application


## License


