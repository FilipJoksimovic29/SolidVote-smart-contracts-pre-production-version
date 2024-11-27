// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";


contract SolidVoteToken is ERC20, ERC20Burnable {
    address public owner;

    constructor() ERC20("SolidVote", "SOV") {
        owner = msg.sender;
       
        _mint(owner, 10000 * (10 ** decimals()));
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }
    function destroy() public onlyOwner {
        selfdestruct(payable(owner));
    }
}