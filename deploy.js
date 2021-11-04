const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const {interface,bytecode} = require("./compile");

const provider = new HDWalletProvider(
    "truth evoke mule lounge worry feed heavy sugar real stereo helmet next",
    "https://ropsten.infura.io/v3/79b35e610ff14cf0989e28e481d437d2"
);

const web3 = new Web3(provider);

const deploy = async () =>{
    accounts = await web3.eth.getAccounts();
   const result = await new web3.eth.Contract(JSON.parse(inferace))
    .deploy({data: bytecode,arguments:["Hello There"]})
    .send({from:accounts[0],gas:"1000000"})

    console.log("Contract deployed to", result.options.address)
};

deploy();