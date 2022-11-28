// import '../GuNFT_ABI';
// import '../Marketplace_ABI';
import React, { Suspense,useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Aug_Model from "./../Aug_Model";
import NFTMarket from "../components/NFTMarket";
import detectEthereumProvider from '@metamask/detect-provider';
// // const Web3 = require("Web3");
// import { Web3 } from 'Web3'

import web3 from 'web3';
const NFT = () =>{

    const [ walletAccount, setWalletAccount ] = useState('')
  const [ currentChain, setCurrentChain ] = useState('')
  const [ showBalanceModal, setShowBalanceModal ] = useState(false)
  const [ showTransactionModal, setShowTransactionModal ] = useState(false)
  const [ isConnected, setIsConnected ] = useState(false)
  const [ ethBalance, setEthBalance ] = useState(null)
//   const provider = await detectEthereumProvider();


  useEffect(() => {

    // Setup Listen Handlers on MetaMask change events
    if(typeof window.ethereum !== 'undefined') {
        // Add Listener when accounts switch
        window.ethereum.on('accountsChanged', (accounts) => {

          console.log('Account changed: ', accounts[0])
          setWalletAccount(accounts[0])

        })
        
        // Do something here when Chain changes
        window.ethereum.on('chainChanged', (chaindId) => {

          console.log('Chain ID changed: ', chaindId)
          setCurrentChain(chaindId)

        })

    } else {

        alert('Please install MetaMask to use this service!')

    }
  }, [])

  // Used to see if the wallet is currently connected to the application
  // If an account has been accessed with MetaMask, then the wallet is connected to the application.
  useEffect(() => {
      setIsConnected(walletAccount ? true : false)
  }, [walletAccount])

  // Connect the Wallet to the current selected account in MetaMask. 
  // Will generate a login request for user if no account is currently connected to the application
  const handleConnectWallet = async () => {

      console.log('Connecting MetaMask...')

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      const account = accounts[0]
      
      console.log('Account: ', account)
      setWalletAccount(account)
  }

  // Handle Disconnected. Removing the state of the account connected 
  // to your app should be enough to handle Disconnect with your application.
  const handleDisconnect = async () => {

      console.log('Disconnecting MetaMask...')
      setIsConnected(false)
      setWalletAccount('')
  }

  // Connect Once and set the account. 
  // Can be used to trigger a new account request each time, 
  // unlike 'eth_requestAccounts'
  const handleConnectOnce = async () => {

      const accounts = await window.ethereum.request({ method: 'wallet_requestPermissions',
          params: [{
            eth_accounts: {}
          }]
      }).then(() => window.ethereum.request({ method: 'eth_requestAccounts' }))
      
      setWalletAccount(accounts[0])

  }

  // Request the personal signature of the user via MetaMask and deliver a message.
  const handlePersonalSign = async () => {

    console.log('Sign Authentication')

    const message = [
      "This site is requesting your signature to approve login authorization!",
      "I have read and accept the terms and conditions (https://example.org/) of this app.",
      "Please sign me in!"
    ].join("\n\n")

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];

    const sign = await window.ethereum.request({ method: 'personal_sign', params: [message, account] })

  }

  // Get the Accounts current Balance and convert to Wei and ETH
  const handleGetBalance = async () => {

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];

    const balance  = await window.ethereum.request({ method: 'eth_getBalance' , params: [ account, 'latest' ]})

    // // Returns a hex value of Wei
    const wei = parseInt(balance, 16)
    const gwei = (wei / Math.pow(10, 9)) // parse to Gwei
    const eth = (wei / Math.pow(10, 18))// parse to ETH

    setEthBalance({ wei, gwei, eth })
    setShowBalanceModal(true)

  }
 
  const handleSendTransaction = async (sender, receiver, amount) => {
    console.log('adkfkv')
    const gasPrice = '0x5208' // 21000 Gas Price
    const amountHex = (amount * Math.pow(10,18)).toString(16)
    
    const tx = {
      from: sender,
      to: receiver,
      value: amountHex,
      gas: gasPrice,
    }

    await window.ethereum.request({ method: 'eth_sendTransaction', params: [ tx ]})

    setShowTransactionModal(false)
  }

  const handleCloseBalanceModal = () => {
    setShowBalanceModal(false)
  }

  const handleOpenTransactionModal = () => {
    setShowTransactionModal(true)
  }
 
  const handleCloseTransactionModal = () => {
    setShowTransactionModal(false)
  }
     

    const [currentScope, setCurrentScope] = useState(false)
    const [currentMuzzle, setCurrentMuzzle] = useState(false)

    // console.log(currentScope)
    const setScope = () => {
            setCurrentScope(true)
    }
    const removeScope = (obj) => {
            setCurrentScope(false)
        }

    const setMuzzle = () => { setCurrentMuzzle(true)}
    const removeMuzzle = () => {setCurrentMuzzle(false)}

    const [currentAccount,setCurrentAccount] = useState(null);

const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if(!ethereum){
        alert("Make sure you have Metamask installed!!");
        return;
    }
    else{
        console.log("Wallet exists!")
    }

    const accounts = await ethereum.request({ method : 'eth_requestAccounts' });

    if(accounts.length !== 0){
        const account = accounts[0];
        console.log("Found an authorized wallet :",account);
        setCurrentAccount(account);
    }
    else{
        console.log("No authorized account found");
    }

    mintNft(currentAccount)


}

const connectWalletHandler = async () => {
    const {ethereum} = window;

    if(!ethereum){
        alert("Please install metamask wallet!")
    }

    try{
        const accounts = await ethereum.request({ method : 'eth_requestAccounts' });
        console.log("Account found!",ethereum);
        setCurrentAccount(accounts[0]);
    }
    catch(err){
        console.log(err)
    }
}

const mintNftHandler = () => { }

const connectWalletButton = () => {
    connectWalletHandler();
  }

const mintNftButton = () => {
    return (
      <button onClick={mintNftHandler} className='cta-button mint-nft-button'>
        Mint NFT
      </button>
    )
}


// function mintNft(account) {
//   // const Tx = require("ethereumjs-Tx");
  
//   // const Web3 = require("Web3");
//   const web3 = web3("https://goerli.infura.io/v3/97017a1177fd4e4893f047b09f8cf317")
  
//   // const account1 = "0xFd8C39f22b7Fd754e78211918B49478A37eDd3fF"
//   // const account2 = "0xbbB6623C5938cA5331f53B32BAe8dDe13d974dE0"
  
//   // const privateKey1 = "9538cacb2e18106928025cbdb57ebad330024e6788a72ff6ce9f0ad8ae124db8"
//   // const privateKey2 = "e386cbef6351dc36cdc896a14b97ac908013f77229c2d9aefab63ff169de9ada"
  
//   const guNFTContract = new Contract([
// 		{
// 			"inputs": [
// 				{
// 					"internalType": "uint256",
// 					"name": "_feePercent",
// 					"type": "uint256"
// 				}
// 			],
// 			"stateMutability": "nonpayable",
// 			"type": "constructor"
// 		},
// 		{
// 			"anonymous": false,
// 			"inputs": [
// 				{
// 					"indexed": false,
// 					"internalType": "uint256",
// 					"name": "itemId",
// 					"type": "uint256"
// 				},
// 				{
// 					"indexed": true,
// 					"internalType": "address",
// 					"name": "nft",
// 					"type": "address"
// 				},
// 				{
// 					"indexed": false,
// 					"internalType": "uint256",
// 					"name": "tokenId",
// 					"type": "uint256"
// 				},
// 				{
// 					"indexed": false,
// 					"internalType": "uint256",
// 					"name": "price",
// 					"type": "uint256"
// 				},
// 				{
// 					"indexed": true,
// 					"internalType": "address",
// 					"name": "seller",
// 					"type": "address"
// 				},
// 				{
// 					"indexed": true,
// 					"internalType": "address",
// 					"name": "buyer",
// 					"type": "address"
// 				}
// 			],
// 			"name": "Bought",
// 			"type": "event"
// 		},
// 		{
// 			"inputs": [
// 				{
// 					"internalType": "contract IERC721",
// 					"name": "_nft",
// 					"type": "address"
// 				},
// 				{
// 					"internalType": "uint256",
// 					"name": "_tokenId",
// 					"type": "uint256"
// 				},
// 				{
// 					"internalType": "uint256",
// 					"name": "_price",
// 					"type": "uint256"
// 				}
// 			],
// 			"name": "makeItem",
// 			"outputs": [],
// 			"stateMutability": "nonpayable",
// 			"type": "function"
// 		},
// 		{
// 			"anonymous": false,
// 			"inputs": [
// 				{
// 					"indexed": false,
// 					"internalType": "uint256",
// 					"name": "itemId",
// 					"type": "uint256"
// 				},
// 				{
// 					"indexed": true,
// 					"internalType": "address",
// 					"name": "nft",
// 					"type": "address"
// 				},
// 				{
// 					"indexed": false,
// 					"internalType": "uint256",
// 					"name": "tokenId",
// 					"type": "uint256"
// 				},
// 				{
// 					"indexed": false,
// 					"internalType": "uint256",
// 					"name": "price",
// 					"type": "uint256"
// 				},
// 				{
// 					"indexed": true,
// 					"internalType": "address",
// 					"name": "seller",
// 					"type": "address"
// 				}
// 			],
// 			"name": "Offered",
// 			"type": "event"
// 		},
// 		{
// 			"inputs": [
// 				{
// 					"internalType": "uint256",
// 					"name": "_itemId",
// 					"type": "uint256"
// 				}
// 			],
// 			"name": "purchaseItem",
// 			"outputs": [],
// 			"stateMutability": "payable",
// 			"type": "function"
// 		},
// 		{
// 			"inputs": [],
// 			"name": "feeAccount",
// 			"outputs": [
// 				{
// 					"internalType": "address payable",
// 					"name": "",
// 					"type": "address"
// 				}
// 			],
// 			"stateMutability": "view",
// 			"type": "function"
// 		},
// 		{
// 			"inputs": [],
// 			"name": "feePercent",
// 			"outputs": [
// 				{
// 					"internalType": "uint256",
// 					"name": "",
// 					"type": "uint256"
// 				}
// 			],
// 			"stateMutability": "view",
// 			"type": "function"
// 		},
// 		{
// 			"inputs": [
// 				{
// 					"internalType": "uint256",
// 					"name": "_itemId",
// 					"type": "uint256"
// 				}
// 			],
// 			"name": "getTotalPrice",
// 			"outputs": [
// 				{
// 					"internalType": "uint256",
// 					"name": "",
// 					"type": "uint256"
// 				}
// 			],
// 			"stateMutability": "view",
// 			"type": "function"
// 		},
// 		{
// 			"inputs": [],
// 			"name": "itemCount",
// 			"outputs": [
// 				{
// 					"internalType": "uint256",
// 					"name": "",
// 					"type": "uint256"
// 				}
// 			],
// 			"stateMutability": "view",
// 			"type": "function"
// 		},
// 		{
// 			"inputs": [
// 				{
// 					"internalType": "uint256",
// 					"name": "",
// 					"type": "uint256"
// 				}
// 			],
// 			"name": "items",
// 			"outputs": [
// 				{
// 					"internalType": "uint256",
// 					"name": "itemId",
// 					"type": "uint256"
// 				},
// 				{
// 					"internalType": "contract IERC721",
// 					"name": "nft",
// 					"type": "address"
// 				},
// 				{
// 					"internalType": "uint256",
// 					"name": "tokenId",
// 					"type": "uint256"
// 				},
// 				{
// 					"internalType": "uint256",
// 					"name": "price",
// 					"type": "uint256"
// 				},
// 				{
// 					"internalType": "address payable",
// 					"name": "seller",
// 					"type": "address"
// 				},
// 				{
// 					"internalType": "bool",
// 					"name": "sold",
// 					"type": "bool"
// 				}
// 			],
// 			"stateMutability": "view",
// 			"type": "function"
// 		}
// 	], "0x04C6C2726c57292aFc8bfb980068EFC52D620D4B")
  
//   // const marketplaceContract = new Contract(mdata.abi, "0x8eCEE3795D22f95F608a7000bAda71ff1b8cAdA0")

//   // nonce = web3.eth.getTransactionCount(account)
//   // // tx = guNFTContract.safeMint(account).call().
//   // txObject = {
//   //   nonce: web3.utils.toHex(nonce),
//   //   to: account,
//   //   value: web3.utils.toHex(web3.utils.toWei('0.001','ether'))
//   // }

//   // web3.eth.sendSignedTransaction(row,(err,txHash)=>{
//   //   console.log('txHash', txHash)
//   // })

//   guNFTContract.methods.safeMint(account).send({
//     from:"account",
//     value:"1000000000000000"
//   })


// }


    return(
        <>
        
        <div className='showcase_container'>
            <div className="showcase">
                <div className="gun_model">
                <Canvas className="canvas_bg" camera={{ position: [30,12, -8.5], fov: 55 }}>
                    <ambientLight intensity={0.3} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    <Suspense fallback={null}>
                        <Aug_Model/>
                        <OrbitControls />
                    </Suspense>
                    </Canvas>
                </div>
                <div className="gun_model_name">
                    Aug Blasted #328
                </div>
                <div className="gun_model_desc">
                    <p>The Steyr AUG (German: Armee-Universal-Gewehr, lit.'universal army rifle') is an Austrian bullpup assault rifle chambered for the 5.56 x 45mm NATO intermediate cartridge, designed in the 1960s by Steyr-Daimler-Puch, and now manufactured by Steyr Arms GmbH & Co KG.</p>
                    
                </div>
            </div>
            <div className="showcase_details">
                <div className="customs">
                        <div className="scope_availability">
                            <h2>Apply Scope</h2>
                            <div className="checks">
                                <button onClick={setScope}>Yes</button>
                                <button onClick={removeScope}>No</button>
                            </div>
                        </div>
                        <p className="para">Press 'YES/NO' to attach/remove Scope</p>
                        <p className="para">An aiming instrument that indicates where your bullet should impact.</p>
                        <hr />
                        <div className="muzzle_availability">
                            <h2>Attach Muzzle</h2>
                            <div className="checks">
                                <button onClick={setMuzzle}>Yes</button>
                                <button onClick={removeMuzzle}>No</button>
                            </div>
                        </div>
                        <p className="para">Press 'YES/NO' to attach/remove Muzzle</p>
                        <p className="para">The end of the barrel out of which the bullet comes to help dampens the recoil.</p>
                        <hr />
                    </div>
                    <div className="mint_nft">
                        <p onClick={checkWalletIsConnected}>Buy NFT</p>
                    </div>
                </div>
        </div>
        <NFTMarket heading="Explore Skins"/>
        </>
    )
}

export default NFT;