import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, useGLTF, RoundedBox, MeshReflectorMaterial} from '@react-three/drei';
import { useTexture, Text } from '@react-three/drei';
import SpaceFont from "../../public/AntonSC-Regular.ttf"
import computerFont from "../../public/Monospace.ttf"
import {  useEffect, useState } from 'react'
import * as THREE from 'three';
import { extend } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

extend({ MeshReflectorMaterial });



const Links = () => {


    const transport = (e, url) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }        
        window.open(url, '__blank');
    };

    return (
        <>
        <group>
            <RoundedBox args={[2, 2, 8]} radius={0.4} smoothness={9} position={[-13, 3, -41]}>
                <MeshReflectorMaterial  color={"#716B83"} />
            </RoundedBox>
            <RoundedBox args={[2, 2, 8]} radius={0.4} smoothness={9} position={[-13, 6, -41]}>
                <MeshReflectorMaterial color={"#6699cc"} />
            </RoundedBox>
            <RoundedBox args={[2, 2, 8]} radius={0.4} smoothness={9} position={[-13, 0, -41]}>
                <MeshReflectorMaterial color={"#ae4a4d"} />
            </RoundedBox>
        </group>
        </>
    );
};

export default Links;
