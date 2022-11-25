import React,{useState,useEffect} from "react";
import '../assets/css/NavBar.css';

import Logo from '../assets/images/logo.png';
import PlayerLogo from '../assets/images/player.png';



const NavBar = () => {

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

useEffect(() => {
    checkWalletIsConnected();
  }, [])

    const addDots = (string) => {
        var dots = ".....";
        if(string.length > 10){{
            string = string.substring(0,5) + dots + string.substring(10,15);
        }
        return string;
        }
    }

    return(
        <div className="header">
            <div className="logo_holder">
                <img src={Logo} alt="gunFT logo" />
            </div>
            <div className="navContent_holder">
                <ul>
                    <a href=""><li>Home</li></a>
                    <a href=""><li>Dashboard</li></a>
                </ul>
            </div>
            <div className="wallet_holder">
            {currentAccount ? <div className="connected_user">
                <img src={PlayerLogo} alt="player"/>
                <p className="wallet_id">{addDots(currentAccount)}</p>
            </div> : <div className="wallet_btn"><button onClick={connectWalletButton}>Connect Wallet</button></div>}
            </div>
        </div>
    )
}

export default NavBar;