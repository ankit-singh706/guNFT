
import React, { useState,Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Plain_Aug from '../Plain_Aug';
import { TextureLoader } from 'three/src/loaders/TextureLoader'; 
import { Environment, Stage } from '@react-three/drei'

// Importing Images

import Tex1 from '../assets/textures/aug_birds.png';
import Tex2 from '../assets/textures/aug_mead.png';
import Tex3 from '../assets/textures/aug_momentum.png';
import Tex4 from '../assets/textures/aug_prog.png';
import Tex5 from '../assets/textures/aug_swallows.png';

// const Scene = () => {
//     const [colorMap] = useLoader(TextureLoader,Tex1);
//     return(
//         <mesh> 
//         <Plain_Aug  
//           map={colorMap}  /> 
//       </mesh> 
//     )
// }


const AugLab = () =>{
    const [currentTexture,setCurrentTexture] = useState(Tex1);

    const handleTextureChange = (event,texture) =>{
        event.preventDefault();
        if(texture === 'Tex1'){
            setCurrentTexture(Tex1);
            console.log("sdgsfjg")
        }
        else if(texture === 'Tex2'){
            setCurrentTexture(Tex2);
        }
        else if(texture === 'Tex3'){
            setCurrentTexture(Tex3);
        }
        else if(texture === 'Tex4'){
            setCurrentTexture(Tex4);
        }
        else if(texture === 'Tex5'){
            setCurrentTexture(Tex5);
        }
    }
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
                            <Plain_Aug />
                        <OrbitControls />
                    </Suspense>
                    </Canvas>
                </div>
                <div className="skin_selects">
                    <h2>Select Skin</h2>
                    <div className="skins_holder">
                        <div className="skin">
                            <img src={Tex1} onClick={event => {
                                handleTextureChange(event,'Tex1')
                            }} alt="" />
                        </div>
                        <div className="skin">
                            <img src={Tex2} alt="" />
                        </div>
                        <div className="skin">
                            <img src={Tex3} alt="" />
                        </div>
                        <div className="skin">
                            <img src={Tex4} alt="" />
                        </div>
                        <div className="skin">
                            <img src={Tex5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="showcase_details">
            </div>
        </div>
        </>
    )
}

export default AugLab;