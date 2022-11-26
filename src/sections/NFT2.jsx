
import React, { Suspense,useS } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Awp_Model_Hunaya } from "../Awp_Hunaya_Model";
import NFTMarket from "../components/NFTMarket";


const NFT2 = () =>{

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
                <Canvas className="canvas_bg" camera={{ position: [30, 12, 28.5], fov: 55 }}>
                    <ambientLight intensity={0.3} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    <Suspense fallback={null}>
                        <Awp_Model_Hunaya/>
                        <OrbitControls />
                    </Suspense>
                    </Canvas>
                </div>
                <div className="gun_model_name">
                    AWP HURANYA #354
                </div>
                <div className="gun_model_desc">
                    <p>The AWP is normally chambered for 7.62 x 51mm NATO/.308 Winchester or .243 Winchester ammunition, though it can be chambered for other cartridges. The AWP is distinct from the Accuracy International AW AE, which also has a black finish but is a cheaper non-military version of the AW series.</p>
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

export default NFT2;