// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.4;

import  "./ream.sol";

contract ReamFactory {

    Ream[] private _Ream;

    event CreateReam(address _admin, address contractAddr);

    function createReamTreasury(address _adminAddr) public {
        Ream ream = new Ream(_adminAddr);
        _Ream.push(ream);
        emit CreateReam(_adminAddr, address(ream));
    }

    function allReamTreasury() public view returns (Ream[] memory) {
         return _Ream;
    }

    // both returns contract address.
    function getReamTreasury(uint index) public view returns(Ream) {
        require(index < _Ream.length, "Not an index yet");
        return _Ream[index];
    }


}