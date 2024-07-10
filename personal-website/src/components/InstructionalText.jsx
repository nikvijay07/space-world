import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, useGLTF} from '@react-three/drei';
import { useTexture, Text } from '@react-three/drei';
import SpaceFont from "../../public/AntonSC-Regular.ttf"
import computerFont from "../../public/Monospace.ttf"
import {  useEffect, useState } from 'react'
import STARTING_Z from '../../public/constants';




const InstructionalText = () => {

    const text = useGLTF("instructionalText.glb")

    const textPositionX = -5
    const textPositionY = 1
    const textPositionZ = STARTING_Z

    return (
        <>
        <group>
            <mesh >
                <primitive object={text.scene} rotation = {[0, Math.PI/3.1, 0]} position = {[textPositionX, textPositionY ,textPositionZ]} scale = {[40, 40, 40]} />
            </mesh>
        </group>
        </>
    );
};

export default InstructionalText;
