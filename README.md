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

## Notes:

If you want to test this project you have to use the following passphase for the Company wallet: "squeeze social impulse disease pencil gloom expect escape jewel panda disease cry spin flame aspect kiss lizard parade fat salt dial erosion thought able strategy" .

The asset id to opt-in is: 78065319.


## Roadmap
Tokenomics & new web application


## MIT License

Copyright (c) 2022 Michele Bonini

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

