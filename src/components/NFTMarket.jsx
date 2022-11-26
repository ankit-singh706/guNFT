import React from 'react';

// import NFT1 from '../assets/images/aug_disco.png';
import NFT1 from '../assets/images/aug_disco.jpg';
import NFT2 from '../assets/images/awp_hunaya.png';
import NFT3 from '../assets/images/m16a_nm_skin.png';
import NFT4 from '../assets/images/aug_eaglecom.png';

const NFTMarket = (props) => {
    return(
        <div className="explore_product">
                <h1 className="heading">{props.heading}</h1>
                <div className="categories">
                    <div className="cat all"><button>All</button></div>
                    <div className="cat colors"><button>Colors</button></div>
                    <div className="cat pattern"><button>Patterns</button></div>
                    <div className="cat neons"><button>Neons</button></div>
                </div>
                <div className="nft_holder">
                    <a href='/nft/1'>
                    <div className="nft">
                        <div className="image_holder">
                            <img src={NFT1} alt=""/>
                        </div>
                        <h2> Aug Blasted #328</h2>
                        <div className="cost">
                            <div className="price">0.0032 ETH</div>
                            <div className="favs">432</div>
                        </div>
                    </div>
                    </a>
                    <a href='/nft/2'>
                    <div className="nft">
                    <div className="image_holder">
                            <img src={NFT2} alt=""/>
                        </div>
                        <h2>AWP HURANYA #354</h2>
                        <div className="cost">
                            <div className="price">0.0032 ETH</div>
                            <div className="favs">432</div>
                        </div>
                    </div>
                    </a>
                    <a href='/nft/3'>
                    <div className="nft">
                    <div className="image_holder">
                            <img src={NFT3} alt=""/>
                        </div>  
                        <h2>M416 Nightmare #432</h2>
                        <div className="cost">
                            <div className="price">0.0032 ETH</div>
                            <div className="favs">432</div>
                        </div>
                    </div>
                    </a>
                    <a href='/nft/4'>
                    <div className="nft">
                        <div className="image_holder">
                            <img src={NFT4} alt=""/>
                        </div>  
                        <h2>Aug EagleComm #432</h2>
                        <div className="cost">
                            <div className="price">0.0032 ETH</div>
                            <div className="favs">432</div>
                        </div>
                    </div>
                    </a>
                    <div className="nft">
                    <div className="image_holder">
                            <img src={NFT4} alt=""/>
                        </div>  
                        <h2>Draco #432</h2>
                        <div className="cost">
                            <div className="price">0.0032 ETH</div>
                            <div className="favs">432</div>
                        </div>
                    </div>
                    <div className="nft">
                    <div className="image_holder">
                            <img src={NFT4} alt=""/>
                        </div>  
                        <h2>Draco #432</h2>
                        <div className="cost">
                            <div className="price">0.0032 ETH</div>
                            <div className="favs">432</div>
                        </div>
                    </div>
                    <div className="nft">
                    <div className="image_holder">
                            <img src={NFT4} alt=""/>
                        </div>  
                        <h2>Draco #432</h2>
                        <div className="cost">
                            <div className="price">0.0032 ETH</div>
                            <div className="favs">432</div>
                        </div>
                    </div>
                    <div className="nft">
                    <div className="image_holder">
                            <img src={NFT4} alt=""/>
                        </div>  
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