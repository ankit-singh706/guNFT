import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export default function Famas_white(props) {
  const { nodes, materials } = useGLTF('/Famas_white.glb')

  const model_ref = useRef();

  useFrame(() => {
    model_ref.current.rotation.y +=0.01;
  })
  return (
    <group ref={model_ref} {...props} dispose={null}>
      <mesh geometry={nodes.v_rif_famas_v_famas_model.geometry} material={materials.rif_famas} />
    </group>
  )
}

useGLTF.preload('/Famas_white.glb')
