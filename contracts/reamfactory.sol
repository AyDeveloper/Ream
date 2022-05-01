// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.4;

import  "./ream.sol";

contract ReamFactory {

    Ream[] private _Ream;

    event CreateReam(address _admin, address contractAddr);
    mapping(address => bool) public userCreated;
    mapping(address => address) public userToReamAddr;

    function createReamTreasury() public returns (address){
        if(userCreated[msg.sender] == true) return userToReamAddr[msg.sender]; 
        Ream ream = new Ream(msg.sender);
        userToReamAddr[msg.sender] = address(ream);
        userCreated[msg.sender] = true;
        emit CreateReam(msg.sender, address(ream));
    }

    function allReamTreasury() public view returns (Ream[] memory) {
         return _Ream;
    }

    function getReamTreasury(uint index) public view returns(Ream) {
        require(index < _Ream.length, "Not an index yet");
        return _Ream[index];
    }


}