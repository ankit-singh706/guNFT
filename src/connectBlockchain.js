const Tx = require("ethereumjs-Tx");
import './GuNFT_ABI';
import './Marketplace_ABI';
const Web3 = require("Web3");
const web3 = new Web3("https://goerli.infura.io/v3/97017a1177fd4e4893f047b09f8cf317")

// const account1 = "0xFd8C39f22b7Fd754e78211918B49478A37eDd3fF"
// const account2 = "0xbbB6623C5938cA5331f53B32BAe8dDe13d974dE0"

// const privateKey1 = "9538cacb2e18106928025cbdb57ebad330024e6788a72ff6ce9f0ad8ae124db8"
// const privateKey2 = "e386cbef6351dc36cdc896a14b97ac908013f77229c2d9aefab63ff169de9ada"

const guNFTContract = new Contract(gdata.abi, "0x04C6C2726c57292aFc8bfb980068EFC52D620D4B")

const marketplaceContract = new Contract(mdata.abi, "0x8eCEE3795D22f95F608a7000bAda71ff1b8cAdA0")


