// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.4;

contract Ream{

    address public admin;
    constructor(address _admin) {
        admin = _admin;
    }

    mapping(address=>uint) depositor;

    modifier onlyAdmin() {
        require(msg.sender == admin);
        _;
    }


    event Send(uint amount, address to, string desc);
    event Receive(uint amount, address from);

    function sendFunds(uint amount, address _to, string memory desc) public {
            (bool success,) = _to.call{value:amount}("");
            require(success, "Ream: Failed to send");
            emit Send(amount, _to, desc);
    }

    function deposit() public payable {
        depositor[msg.sender] += msg.value;
        emit Receive(msg.value, msg.sender);
    }


    function changeAdmin(address _admin) public onlyAdmin {
        admin = _admin;
    }

    function getContractBal() public view returns (uint256) {
        return address(this).balance;
    }


    receive() external payable {
        emit Receive(msg.value, msg.sender);
    }

}