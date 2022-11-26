import React from 'react';

import Player from '../assets/images/player.png';
import NFTMarket from './NFTMarket';


const DashBoard = () => {
    return(
        <>
            <div className="wallet_info_dash">
                <div className="user">
                    <div className="user_dp">
                        <img src={Player} alt="" />
                    </div>
                    <div className="userName">
                        Ankit Singh
                    </div>
                </div>
                <div className="userid">
                    <p>12345678iasdfghjkxcfvg234567</p>
                </div>
            </div>
            
            <NFTMarket heading="Your Skins"/>
        </>
    )
}

export default DashBoard;