const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const {interface,bytecode} = require("../compile")
const INITIAL_STRING = "Hi there!"
let accounts;
let inbox;
beforeEach(async () =>{
    accounts = await web3.eth.getAccounts();

    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy(
        {data: bytecode, arguments:[INITIAL_STRING] })
        .send({from: accounts[0],gas:"1000000"})
    
})


describe('Inbox', () => {
    it("deploys a contract", () =>{
        assert.ok(inbox.options.address);
    })

    it("Checks default message", async ()=>{
        const message = await inbox.methods.message().call();
        assert.equal(message,INITIAL_STRING )
    })

    it("can change the message", async() =>{
        await inbox.methods.setMessage("Hello").send({from: accounts[0],gas:"1000000"});
        const newMessage = await inbox.methods.message().call();

        assert.equal(newMessage,"Hello" )
    })
})
