// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.4;

import  "./ream.sol";

contract ReamFactory {

    address public admin;
    constructor(address _admin) {
        admin = admin;
    }

    Ream[] private _Ream;

    event CreateReam(address _admin, address contractAddr);
    event Send(uint amount, address to, string desc);
    event Receive(uint amount, address from);
    mapping(address => bool) public userCreated;
    mapping(address => address) public userToReamAddr;
    mapping(address=>uint) depositor;


    modifier onlyAdmin() {
        require(msg.sender == admin);
        _;
    }

    function createReamTreasury() public returns (address){
        if(userCreated[msg.sender] == true) return userToReamAddr[msg.sender]; 
        Ream ream = new Ream(msg.sender);
        userToReamAddr[msg.sender] = address(ream);
        userCreated[msg.sender] = true;
        emit CreateReam(msg.sender, address(ream));
    }

    function sendFundsToReam(uint amount, address _to, string memory desc) public onlyAdmin {
        (bool sent, ) = _to.call{value:amount}(abi.encodeWithSignature("sendFunds(uint amount, address _to, string memory desc)",amount,_to,desc));
        require(sent, "Failed to send");
        emit Send(amount, _to, desc);
    }

    function depositToReam(uint amount) public payable onlyAdmin{
        depositor[msg.sender] += msg.value;
        (bool sent, ) = userToReamAddr[msg.sender].call{value:amount}(abi.encodeWithSignature("deposit(amount)"));
        emit Receive(msg.value, msg.sender);
    }

    function allReamTreasury() public view returns (Ream[] memory) {
         return _Ream;
    }

    function getReamTreasury(uint index) public view returns(Ream) {
        require(index < _Ream.length, "Not an index yet");
        return _Ream[index];
    }


}