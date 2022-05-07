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


    event Send(uint amount, address to, string desc, uint _time);
    event Receive(uint amount, address from, uint _time);

    function sendFunds(uint amount, address _to, string memory desc) public {
            require(_to != address(0), "Ream: Cannot send funds to address zero");
            // (bool success,) = _to.call{value:amount}("");
            // require(success, "Ream: Failed to send");
            payable(_to).transfer(amount);
            emit Send(amount, _to, desc, block.timestamp);
    }

    function deposit() public payable {
        depositor[msg.sender] += msg.value;
        emit Receive(msg.value, msg.sender, block.timestamp);
    }


    function changeAdmin(address _admin) public onlyAdmin {
        admin = _admin;
    }

    function getContractBal() public view returns (uint256) {
        return address(this).balance;
    }


    receive() external payable {
        emit Receive(msg.value, msg.sender, block.timestamp);
    }

}