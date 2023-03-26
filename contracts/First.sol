//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract First {
    uint public number;

    event NumberChanged(uint oldNumber, uint newNumber);

    constructor (uint num) {
        number = num;
    }

    function updateNumber(uint newNumber) public {
        require(number != newNumber, "The new number should be different from the old one");

        uint temp = number;
        number = newNumber;
        emit NumberChanged(temp, newNumber);
    }


}