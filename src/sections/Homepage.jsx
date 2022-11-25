import React,{ useEffect, useState } from "react";
import '../App.css';

import NFTImg from '../assets/images/nft.jpg';
import NFT1 from '../assets/images/nft-1.jpeg';




const HomePage = () => {
    return(
        <div className="container">
            <div className="offCounter">
                <div className="offCounterNFTs">
                    <div className="lDisplay">
                        <img src={NFTImg} alt=""/>
                    </div>
                    <div className="rDisplay">
                        <div className="r1Display">
                            <div className="box1">
                                <img src={NFTImg} alt=""/>
                            </div>
                            <div className="box2"><img src={NFTImg} alt=""/></div>
                            <div className="box3"><img src={NFTImg} alt=""/></div>
                        </div>
                        <div className="r2Display">
                            <div className="box1"><img src={NFTImg} alt=""/></div>
                            <div className="box2"><img src={NFTImg} alt=""/></div>
                            <div className="box3"><img src={NFTImg} alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="explore_product">
                <h1 className="heading">Explore Skins</h1>
                <div className="categories">
                    <div className="cat all"><button>All</button></div>
                    <div className="cat colors"><button>Colors</button></div>
                    <div className="cat pattern"><button>Patterns</button></div>
                    <div className="cat neons"><button>Neons</button></div>
                </div>
                <div className="nft_holder">
                    <div className="nft">
                        <img src={NFT1} alt=""/>
                        <h2>Draco #432</h2>
                        <div className="cost">
                            <div className="price">0.0032 ETH</div>
                            <div className="favs">432</div>
                        </div>
                    </div>
                    <div className="nft">
                        <img src={NFT1} alt=""/>
                        <h2>Draco #432</h2>
                        <div className="cost">
                            <div className="price">0.0032 ETH</div>
                            <div className="favs">432</div>
                        </div>
                    </div>
                    <div className="nft">
                        <img src={NFT1} alt=""/>
                        <h2>Draco #432</h2>
                        <div className="cost">
                            <div className="price">0.0032 ETH</div>
                            <div className="favs">432</div>
                        </div>
                    </div>
                    <div className="nft">
                        <img src={NFT1} alt=""/>
                        <h2>Draco #432</h2>
                        <div className="cost">
                            <div className="price">0.0032 ETH</div>
                            <div className="favs">432</div>
                        </div>
                    </div>
                    <div className="nft">
                        <img src={NFT1} alt=""/>
                        <h2>Draco #432</h2>
                        <div className="cost">
                            <div className="price">0.0032 ETH</div>
                            <div className="favs">432</div>
                        </div>
                    </div>
                    <div className="nft">
                        <img src={NFT1} alt=""/>
                        <h2>Draco #432</h2>
                        <div className="cost">
                            <div className="price">0.0032 ETH</div>
                            <div className="favs">432</div>
                        </div>
                    </div>
                    <div className="nft">
                        <img src={NFT1} alt=""/>
                        <h2>Draco #432</h2>
                        <div className="cost">
                            <div className="price">0.0032 ETH</div>
                            <div className="favs">432</div>
                        </div>
                    </div>
                    <div className="nft">
                        <img src={NFT1} alt=""/>
                        <h2>Draco #432</h2>
                        <div className="cost">
                            <div className="price">0.0032 ETH</div>
                            <div className="favs">432</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="guidelines">
                <div className="heading"><h1>Create and Sell your NFTs</h1></div>
                <div className="guide_holder">
                    <div className="guide">
                        <img src="https://opensky-nft.vercel.app/assets/svg/sell-nft-icon1.svg" alt=""/>
                        <h2>Set up your Wallet</h2>
                        <p>Once you set up wallet of choice, connect it to opensky by clicking the wallet icon in the top right corner. Learn about the wallets we support</p>
                    </div>
                    <div className="guide">
                    <img src="https://opensky-nft.vercel.app/assets/svg/sell-nft-icon2.svg" alt=""/>
                    <h2>Browse through collections</h2>
                    <p>Go through a variety of collections of gun skins to apply it in-game for showcase among different players in the world.</p>
                    </div>
                    <div className="guide">
                    <img src="https://opensky-nft.vercel.app/assets/svg/sell-nft-icon3.svg" alt=""/>
                    <h2>Buy your NFT skins</h2>
                    <p>Choose your most loved skins and buy it's NFT to apply to the basic guns and play with the amazing skins in-game.</p>
                    </div>
                    <div className="guide">
                    <img src="https://opensky-nft.vercel.app/assets/svg/sell-nft-icon4.svg" alt=""/>
                    <h2>Set up skins in game</h2>
                    <p>Bought skins are visible inside the game, for applying on the guns.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomePage;