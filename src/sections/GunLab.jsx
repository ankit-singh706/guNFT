import React from 'react'

// Importing Images
import Aug from '../assets/images/plane_aug.png';
import Awp from '../assets/images/plane_awp.png';
import M4 from '../assets/images/plane_m4.png';

const GunLab = () => {
    return(
        <>
            <div className="guns_container">
                <div className="gun_holder">
                    <div className="gun_subholder">
                        <div className="gun">
                            <img src={Aug} alt="" />
                        </div>
                        <a href="/gunlab/aug">
                            <div className="gun_name">AUG</div>
                        </a>
                        <div className="short_desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, incidunt architecto? Necessitatibus unde adipisci sit</div>
                    </div>
                </div>
                <div className="gun_holder">
                <div className="gun_subholder">
                        <div className="gun">
                            <img src={Awp} alt="" />
                        </div>
                        <a href="">
                            <div className="gun_name">AWP</div>
                        </a>
                        <div className="short_desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, incidunt architecto? Necessitatibus unde adipisci sit</div>
                    </div>
                </div>
                <div className="gun_holder">
                <div className="gun_subholder">
                        <div className="gun">
                            <img src={M4} alt="" />
                        </div>
                        <a href="">
                            <div className="gun_name">M416</div>
                        </a>
                        <div className="short_desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, incidunt architecto? Necessitatibus unde adipisci sit</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GunLab;