// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import "./Marketplace.sol";
// import "Gun.sol";

contract GuNFT is ERC721, ERC721Enumerable, Ownable {

    // CONSTANTS

    uint256 public mintCost = 0.001 ether;
    uint public MAX_SUPPLY = 1000;
    string private baseURI;
    
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    // Gun public gunContract;

    Marketplace marketplace;

    constructor(Marketplace _marketplace) ERC721("GuNFT", "GUN") {
        marketplace = _marketplace;
        // gunContract = new Gun(address(this));
    }

    function setBaseURI(string memory _baseURI) public onlyOwner {
        baseURI=_baseURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    // function safeMint(address to, Gun.GunSetup memory _gunSetup) public payable {
    function safeMint(address to) public payable {
        require(totalSupply() < MAX_SUPPLY, "Cannot mint more NFTs");
        require(msg.value >= mintCost, "Minimum 0.001 ether required to mint");
        uint256 tokenId = _tokenIdCounter.current();
        setApprovalForAll(address(marketplace), true);
        // gunContract.addSetup(_gunSetup, tokenId);
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function withdraw() public onlyOwner {
        require(address(this).balance >= 0, "Balance is 0");
        payable(owner()).transfer(address(this).balance);
    }
}
