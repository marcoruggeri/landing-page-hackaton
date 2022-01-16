//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.11;

import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TalesOfEldevia is ERC1155Burnable, Ownable {
    string private _uri;
    mapping(address => uint256) public minted;
    uint256 public totalMinted;
    uint256 public maxSupply;
    uint256 public price;
    bool public freezed;

    constructor() ERC1155("") {}

    function mint() external payable {
        require(minted[msg.sender] < 5, "max 5 per address");
        require(totalMinted < maxSupply, "minting currently closed");
        require(msg.value == price, "wrong price");
        minted[msg.sender]++;
        totalMinted++;
        _mint(msg.sender, 0, 1, "");
    }

    function uri(uint256) public view override returns (string memory) {
        return _uri;
    }

    function setUri(string calldata __uri) external onlyOwner {
        _uri = __uri;
    }

    function setMaxSupply(uint256 _maxSupply) external onlyOwner {
        require(!freezed, "contract freezed");
        maxSupply = _maxSupply;
    }

    function setPrice(uint256 _price) external onlyOwner {
        require(!freezed, "contract freezed");
        price = _price;
    }

    function freeze() external onlyOwner {
        freezed = true;
    }
}
