// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.4;

import  "./ream.sol";

contract ReamFactory {

    address public admin;
    
    Ream[] private _Ream;

    event CreateReam(address _admin, address contractAddr);
    event Send(uint amount, address to, string desc);
    event Receive(uint amount, address from);
    mapping(address => bool) public userCreated;
    mapping(address => address) public userToReamAddr;
    mapping(address=>uint) public depositor;


    address _ream = userToReamAddr[msg.sender];

    modifier onlyAdmin() {
        require(msg.sender == admin,"Only admin can perform this action");
        _;
    }

    function createReamTreasury() public returns (address){
        if(userCreated[msg.sender] == true) return userToReamAddr[msg.sender]; 
        Ream ream = new Ream(msg.sender);
        userToReamAddr[msg.sender] = address(ream);
        userCreated[msg.sender] = true;
        admin = msg.sender; 
        emit CreateReam(msg.sender, address(ream));
    }

    function depositToReam() public payable onlyAdmin{
        (bool sent, ) = userToReamAddr[msg.sender].call{value:msg.value}(abi.encodeWithSignature("deposit()"));
        require(sent, "Ream: Failed to send");
        depositor[msg.sender] += msg.value;
        emit Receive(msg.value, msg.sender);
    }

     event Response(bool success, bytes data);

    function getBalance() public {
        (bool sent, bytes memory data) = userToReamAddr[msg.sender].call(abi.encodeWithSignature("getContractBal()"));
        emit Response(sent, data);
    }

    function sendFundsFromReam(uint amount, address _to, string memory desc) public onlyAdmin {
        require(amount <= userToReamAddr[msg.sender].balance,"Amount above treasury");
        (bool sent, ) = userToReamAddr[msg.sender].call(abi.encodeWithSignature("sendFunds(uint, address, string)",amount,_to,desc));
        // require(sent, "Failed to send");
        emit Send(amount, _to, desc);
    }

    function allReamTreasury() public view returns (Ream[] memory) {
         return _Ream;
    }

    function getReamTreasury(uint index) public view returns(Ream) {
        require(index < _Ream.length, "Not an index yet");
        return _Ream[index];
    }

    receive() external payable {

    }


}