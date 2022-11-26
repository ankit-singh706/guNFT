
import React, { Suspense,useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Aug_Eagle from '../Aug_eaglecomm';
import NFTMarket from "../components/NFTMarket";


const NFT = () =>{

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
                        <Aug_Eagle/>
                        <OrbitControls />
                    </Suspense>
                    </Canvas>
                </div>
                <div className="gun_model_name">
                    Aug EagleCommando #328
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
                        <p>Buy NFT</p>
                    </div>
            </div>
        </div>
        <NFTMarket heading="Explore Skins"/>
        </>
    )
}

export default NFT;