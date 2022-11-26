
import React, { useState, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Plain_Aug from '../Plain_Aug';
import NFTMarket from '../components/NFTMarket';



// Importing Images

import Tex0 from '../assets/textures/Tex0.jpg';
import Tex1 from '../assets/textures/aug_birds.png';
import Tex2 from '../assets/textures/aug_mead.png';
import Tex3 from '../assets/textures/aug_momentum.png';
import Tex4 from '../assets/textures/aug_prog.png';
import Tex5 from '../assets/textures/aug_swallows.png';

import Aug_momentum from '../../public/Aug_momentum';
import Aug_birds from '../../public/Aug_birds';
import Aug_mead from '../../public/Aug_mead';
import Aug_prog from '../../public/Aug_prog';
import Aug_swallows from '../../public/Aug_swallows';


const AugLab = () => {
    const [currentTexture, setCurrentTexture] = useState(<Plain_Aug />);
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


    
    const handleTextureChange = (id) => {
        if (id === 0){
            return <Plain_Aug isScopePresent={currentScope} isMuzzlePresent={currentMuzzle}/>;
        }
        if(id === 1){
            return <Aug_birds isScopePresent={currentScope} isMuzzlePresent={currentMuzzle}/>
        }
        if(id === 2){
            return <Aug_mead isScopePresent={currentScope} isMuzzlePresent={currentMuzzle}/>
        }
        if(id === 3){
            return <Aug_momentum isScopePresent={currentScope} isMuzzlePresent={currentMuzzle}/>
        }
        if(id === 4){
            return <Aug_prog isScopePresent={currentScope} isMuzzlePresent={currentMuzzle}/>
        }
        if(id === 5){
            return <Aug_swallows isScopePresent={currentScope} isMuzzlePresent={currentMuzzle}/>
        }
    }

    return (
        <>

            <div className='showcase_container'>
                <div className="showcase">
                    <div className="gun_model">
                        <Canvas className="canvas_bg" camera={{ position: [30, 12, -8.5], fov: 55 }}>
                            <ambientLight intensity={0.3} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                            <pointLight position={[-10, -10, -10]} />
                            <Suspense fallback={null}>
                                {currentTexture}
                                <OrbitControls />
                            </Suspense>
                        </Canvas>
                    </div>
                    <div className="skin_selects">
                        <h2>Select Skin</h2>
                        <div className="skins_holder">
                        <div className="skin">
                                <img src={Tex0} onClick={event => {
                                    
                                    setCurrentTexture(handleTextureChange(0))
                                }} alt="" />
                            </div>
                            <div className="skin">
                                <img src={Tex1} onClick={event => {
                                    
                                    setCurrentTexture(handleTextureChange(1))
                                }} alt="" />
                            </div>
                            <div className="skin">
                                <img src={Tex2} onClick={event => {
                                    setCurrentTexture(handleTextureChange(2))
                                    
                                }} alt="" />
                            </div>
                            <div className="skin">
                            <img src={Tex3} onClick={event => {
                                setCurrentTexture(handleTextureChange(3))

                            }} alt="" />
                            </div>
                            <div className="skin">
                                <img src={Tex4} onClick={event => {
                                setCurrentTexture(handleTextureChange(4))
                            }}
                                alt="" />
                            </div>
                            <div className="skin">
                                <img src={Tex5} 
                                onClick={event => {
                                    setCurrentTexture(handleTextureChange(5))
                                }} alt="" />
                            </div>
                        </div>
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
                            <hr/>
                        <div className="muzzle_availability">
                            <h2>Attach Muzzle</h2>
                            <div className="checks">
                                    <button onClick={setMuzzle}>Yes</button>
                                    <button onClick={removeMuzzle}>No</button>
                            </div>
                        </div>
                            <p className="para">Press 'YES/NO' to attach/remove Muzzle</p>
                            <p className="para">The end of the barrel out of which the bullet comes to help dampens the recoil.</p>
                            <hr/>
                    </div>
                    <div className="mint_nft">
                        <p>Mint NFT</p>
                    </div>
                </div>
            </div>
            <NFTMarket heading="Explore More Skins"/>
        </>
    )
}

export default AugLab;