// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract PaintColor is ERC721 {
    constructor() public ERC721("PaintColor", "PNTCOLOR") {}
}
