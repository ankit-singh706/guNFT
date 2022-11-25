import React from 'react';

import NFT1 from '../assets/images/nft-1.jpeg';

const NFTMarket = () => {
    return(
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
    )
}

export default NFTMarket;