/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Astronaut.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Astronaut(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('Astronaut.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group  position={[-6, 0, -11]} ref={group} {...props} dispose={null}>
      <group name="Astronaut">
        <group name="Group" rotation={[-Math.PI / 2, 0, 3 * Math.PI/4]} scale={0.004}>
          <mesh name="Blue_astronaut_5" geometry={nodes.Blue_astronaut_5.geometry} material={materials['blue astronaut 5']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('Astronaut.gltf')

