
import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import M4_nightmare from '../M4_nightmare';
import NFTMarket from "../components/NFTMarket";


const NFT3 = () =>{

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
                    AWP HURANYA #354
                </div>
                <div className="gun_model_desc">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus molestias non hic eos deleniti, laborum beatae magni asperiores nihil aliquid porro, quidem mollitia ducimus reiciendis provident! Architecto quis eum accusantium hic alias enim libero magni et! Officia dicta debitis</p>
                </div>
            </div>
            <div className="showcase_details">
            </div>
        </div>
        <NFTMarket/>
        </>
    )
}

export default NFT3;