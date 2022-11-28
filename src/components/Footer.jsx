import React from "react";
import '../assets/css/Footer.css';

import LogoImg from '../assets/images/logo.png';
import TMemImg from '../assets/images/t_mem.jpg';
import LinkedLogo from '../assets/images/Llogo.png';

import AbhiImg from '../assets/images/abhijeet_mem.jpg';
import AnkImg from '../assets/images/Ank_mem.jpg';
import SreeniImg from '../assets/images/sreeni_tmem.jpeg';
import MahImg from '../assets/images/mah_tmem.png';


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
                            <img src={AnkImg} alt="" />
                            <div className="name">Ankit Kumar Singh</div>
                            <div className="social"><a href="https://www.linkedin.com/in/ankit-kumar-singh-b23789191/"><img src={LinkedLogo} alt=""/></a></div>
                        </div>
                        <div className="team_mem">
                            <img src={SreeniImg} alt="" />
                            <div className="name">Sreeniketh Madgula</div>
                            <div className="social"><a href="https://www.linkedin.com/in/sreenikethmadgula/"><img src={LinkedLogo} alt=""/></a></div>
                        </div>
                        <div className="team_mem">
                            <img src={MahImg} alt="chakk" />
                            <div className="name">Mahesh Chavan</div>
                            <div className="social"><a href="https://www.linkedin.com/in/mahesh-chavan-6581b6171/"><img src={LinkedLogo} alt=""/></a></div>
                        </div>
                        <div className="team_mem">
                            <img src={AbhiImg} alt="" />
                            <div className="name">Abhijeet Kumar</div>
                            <div className="social"><a href="https://www.linkedin.com/in/abhijeet-kumar1608/"><img src={LinkedLogo} alt=""/></a></div>
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
                        <hr id="footer_hr"/>
                        <div className="contri">
                            <img src={TMemImg} alt="" />
                            <div className="text_content">
                                <div className="name">#24 Wollframe</div>
                                <div className="noOfContris">2 contributions</div>
                            </div>
                        </div>
                        <hr id="footer_hr"/><div className="contri">
                            <img src={TMemImg} alt="" />
                            <div className="text_content">
                                <div className="name">#12 Detonate</div>
                                <div className="noOfContris">1 contributions</div>
                            </div>
                        </div>
                        <hr id="footer_hr"/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer;