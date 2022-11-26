import React from "react";
import '../assets/css/Footer.css';

import LogoImg from '../assets/images/logo.png';
import TMemImg from '../assets/images/t_mem.jpg';
import LinkedLogo from '../assets/images/Llogo.png';

const Footer = () => {
    return(
        <div className="footer_holder">
            <div className="footer">
                <div className="web_info">
                    <img src={LogoImg} alt=""/>
                    <p>A platform providing gun skins as NFT for showcasing your skills and skin in-game.</p>
                 </div>
                <div className="team_info">
                    <p>Made by team GUNFT</p>
                    <div className="teammates">
                        <div className="team_mem">
                            <img src={TMemImg} alt="" />
                            <div className="name">Ankit Kumar Singh</div>
                            <div className="social"><a href=".www.linkedin.com/in/"><img src={LinkedLogo} alt=""/></a></div>
                        </div>
                        <div className="team_mem">
                            <img src={TMemImg} alt="" />
                            <div className="name">Sreeniketh Madgula</div>
                            <div className="social"><a href="www.linkedin.com/in/sreenikethmadgula"><img src={LinkedLogo} alt=""/></a></div>
                        </div>
                        <div className="team_mem">
                            <img src={TMemImg} alt="" />
                            <div className="name">Mahesh Chavan</div>
                            <div className="social"><a href="www.linkedin.com"><img src={LinkedLogo} alt=""/></a></div>
                        </div>
                        <div className="team_mem">
                            <img src={TMemImg} alt="" />
                            <div className="name">Abhijeet Kumar</div>
                            <div className="social"><a href="www.linkedin.com"><img src={LinkedLogo} alt=""/></a></div>
                        </div>
                    </div>
                </div>
                <div className="top_sells">
                    <p>Top contributors</p>
                    <div className="contris">
                        <div className="contri">
                            <img src={TMemImg} alt="" />
                            <div className="text_content">
                                <div className="name">#32 Thrust</div>
                                <div className="noOfContris">3 contributions</div>
                            </div>
                        </div>
                        <hr/>
                        <div className="contri">
                            <img src={TMemImg} alt="" />
                            <div className="text_content">
                                <div className="name">#32 Thrust</div>
                                <div className="noOfContris">3 contributions</div>
                            </div>
                        </div>
                        <hr/><div className="contri">
                            <img src={TMemImg} alt="" />
                            <div className="text_content">
                                <div className="name">#32 Thrust</div>
                                <div className="noOfContris">3 contributions</div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer;