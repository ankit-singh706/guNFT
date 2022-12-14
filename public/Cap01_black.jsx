/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export default function Cap(props) {
  const { nodes, materials } = useGLTF('/Cap01_black-transformed.glb')

  const model_ref = useRef();

  useFrame(() => {
    model_ref.current.rotation.y +=0.01;
  })
  return (
    <group ref={model_ref} {...props} dispose={null}>
      <mesh geometry={nodes.Body.geometry} material={materials['Material.004']} position={[0, -0.8, -0.02]} rotation={[-3.13, 0, Math.PI]} scale={-1} />
    </group>
  )
}

useGLTF.preload('/Cap01_black-transformed.glb')
