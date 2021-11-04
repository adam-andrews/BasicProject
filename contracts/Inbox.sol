pragma solidity ^0.4.2;

contract Inbox {
    string public message;

    constructor(string memory _Message) public { 
        message = _Message;
    }
    
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}