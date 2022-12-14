
import React, { Suspense,useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import M4_nightmare from '../M4_nightmare';
import * as THREE from "three";
import NFTMarket from "../components/NFTMarket";
import { useTexture } from "@react-three/drei";


//Importing Textures



const NFT3 = () =>{

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
                <Canvas className="canvas_bg" camera={{ position: [20,12, 18.5], fov: 55 }}>
                    <ambientLight intensity={0.3} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    <Suspense fallback={null}>
                        <M4_nightmare/>
                        <OrbitControls />
                    </Suspense>
                </Canvas>
                </div>
                <div className="gun_model_name">
                    M416 NIGHTMARE #354
                </div>
                <div className="gun_model_desc">
                    <p>The M4 carbine (officially Carbine, Caliber 5.56 mm, M4) is a 5.56×45mm NATO, gas-operated,[b] magazine-fed carbine developed in the United States during the 1980s. It is a shortened version of the M16A2 assault rifle.
The M4 is extensively used by the United States Armed Forces.</p>
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

export default NFT3;