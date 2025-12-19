import { useTexture, Text, Text3D } from '@react-three/drei';
import { useState } from 'react';
import STARTING_Z from './constants';
import { useGLTF } from '@react-three/drei'

export default function AboutMeText2() {
    const { nodes, materials } = useGLTF('textBox.gltf')
    

    return (
        <>
            <group  position={[-6, 0, 0]} ref={group} {...props} dispose={null}>
            <group name="textBox">
                <group name="Group" rotation={[-Math.PI / 2, 0, 3 * Math.PI/4]} scale={0.004}>
                <mesh name="Blue_astronaut_5" geometry={nodes.group.geometry} material={materials['blue astronaut 5']} />
                </group>
            </group>
            </group>
            <Text3D
                scale={[0.2, 0.2, 0.2]}
                position={[-4, 4, 26]}
                rotation={[0, Math.PI/2, 0]}
                font="./roboto_black.json"
            >
                HELLO MY NAME IS NIKHIL
                <meshToonMaterial color={"#ffffff"} />
            </Text3D>
        </>
    )
    
}

useGLTF.preload('textBox.gltf')
