import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, useGLTF} from '@react-three/drei';
import { useTexture, Text } from '@react-three/drei';
import SpaceFont from "../../public/AntonSC-Regular.ttf"
import {  useState } from 'react'




const ProjectCube = () => {

    const cube = useGLTF("projectCube.glb")
    const cube2 = useGLTF("projectCube2.glb")


    const [hovered, setHovered] = useState(false);
    const [hovered1, setHovered1] = useState(false);




    const transport = () => {


    }

    return (
        <>
        <group>
            <mesh onClick={() => {}}  onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)} >
            <primitive object={cube.scene} rotation = {[0, Math.PI/2, 0]} position = {[-12, 0 ,-27]} scale = {[60, 58, 55]} />
            <Text position = {[-9, 4.55 ,-27]} rotation = {[0, Math.PI/2, 0]} scale={[0.6, 0.6, 0.6]} font={SpaceFont}> 
                FraudGenie
                <meshStandardMaterial color={hovered ? "#232F4F" : "#FFFFFF" }  />
            </Text>
            <Text position = {[-9, 2.6 ,-26.95]} rotation = {[0, Math.PI/2, 0]} scale={[0.3, 0.3, 0.3]} maxWidth={15}> 
                Real-time credit-card fraud detection dashboard for small businesses, enabling real-time data analytics and visualization, driving data-driven decision-making, and improving their control over financial security.
                <meshStandardMaterial color={hovered ? "#232F4F" : "#FFFFFF" } />
            </Text>
            </mesh>
            <mesh onClick={() => {}}  onPointerEnter={() => setHovered1(true)} onPointerLeave={() => setHovered1(false)} >
            <primitive object={cube2.scene} rotation = {[0, Math.PI/2, 0.0]} position = {[-12, 1 ,-36.1]} scale = {[60, 58, 55]} />
            <Text position = {[-9, 5.55 ,-35.8]} rotation = {[0, Math.PI/2, 0.0]} scale={[0.6, 0.6, 0.6]} font={SpaceFont}> 
                FraudGenie
                <meshStandardMaterial color={hovered1 ? "#232F4F" : "#FFFFFF" }  />
            </Text>
            <Text position = {[-9, 3.6 ,-35.95]} rotation = {[0, Math.PI/2, 0]} scale={[0.3, 0.3, 0.3]} maxWidth={15}> 
                Real-time credit-card fraud detection dashboard for small businesses, enabling real-time data analytics and visualization, driving data-driven decision-making, and improving their control over financial security.
                <meshStandardMaterial color={hovered1 ? "#232F4F" : "#FFFFFF" } />
            </Text>
            </mesh>
        </group>
        </>
    );
};

export default ProjectCube;
