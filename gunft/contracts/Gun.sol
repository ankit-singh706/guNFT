// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "./GuNFT.sol";

contract Gun {
    struct GunSetup{
        // [model, skinTexture, skinPaint]
        // 0 for default/none
        uint8[3] muzzle;
        uint8[3] barrel;
        uint8[3] underbarrel;
        uint8[3] stock;
        uint8[3] scope;
    }

    // GunSetup[1000] guns;

    // tokenId to GunSetup
    mapping(uint => GunSetup)setupOfToken;

    address public caller;

    constructor(address _contract) {
        caller = _contract;
    }
    

    function addSetup(GunSetup memory _gunSetup, uint _tokenId) public {
        require(msg.sender==caller,"can only be called by GuNFT contract");
        require(isUniqueSetup(_gunSetup, _tokenId),"Setup must be unique");
        setupOfToken[_tokenId]=_gunSetup;

    }

    function isUniqueSetup(GunSetup memory _gunSetup, uint _total) public view returns(bool) {
        if (_total==0) {
            return true;
        }
        for(uint i = 0; i<_total; i++) {
            if (isUniqueAttachment(_gunSetup.muzzle, setupOfToken[i].muzzle) == true){
                return true;
            }
            if (isUniqueAttachment(_gunSetup.barrel, setupOfToken[i].barrel) == true){
                return true;
            }
            if (isUniqueAttachment(_gunSetup.underbarrel, setupOfToken[i].underbarrel) == true){
                return true;
            }
            if (isUniqueAttachment(_gunSetup.scope, setupOfToken[i].scope) == true){
                return true;
            }
            if (isUniqueAttachment(_gunSetup.stock, setupOfToken[i].stock) == true){
                return true;
            }
        }
        return false;
    }

    function isUniqueAttachment(uint8[3] memory _sampleAttachment, uint8[3] memory _existingAttachment) public pure returns (bool) {
        if (_sampleAttachment[0]!=_existingAttachment[0]) {
            return true;
        }
        if (_sampleAttachment[1]!=_existingAttachment[1]) {
            return true;
        }
        if (_sampleAttachment[2]!=_existingAttachment[2]) {
            return true;
        }
        return false;
    }
    
    
    function getSetupByTokenId(uint _id) public view returns(GunSetup memory) {
        return setupOfToken[_id];
    }
}