// contracts/StarDuck.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract StarDuck is ERC20 {
    constructor(uint256 initialSupply) ERC20("Star Duck Token", "SRD") {
        _mint(msg.sender, initialSupply);
    }
}
