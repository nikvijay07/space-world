import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, useGLTF} from '@react-three/drei';
import { useTexture, Text } from '@react-three/drei';
import SpaceFont from "../../public/AntonSC-Regular.ttf"
import bodyText from "../../public/Saira_SemiCondensed-Medium.ttf"
import {  useEffect, useState } from 'react'
import STARTING_Z from '../../public/constants';




const ProjectCube = () => {

    const cube = useGLTF("projectCube.glb")
    const cube2 = useGLTF("projectCube2.glb")
    const cube3 = useGLTF("GreenCube.glb")


    const cubePositionX = -13
    const cubePositionY = 0
    const cubePositionZ = STARTING_Z - 57



    const [hovered, setHovered] = useState(false);
    const [hovered2, setHovered2] = useState(false);
    const [hovered3, setHovered3] = useState(false);



    const transport = (e, url) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }        
        window.open(url, '__blank');
    };

    return (
        <>
        <group>
            <mesh onClick={(e) => {transport(e, "https://github.com/kashyapnathan/HexLabs")}}  onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)} >
            <primitive object={cube.scene} rotation = {[0, Math.PI/2, 0]} position = {[cubePositionX, cubePositionY ,cubePositionZ]} scale = {[65, 65, 55]} />
            <Text position = {[cubePositionX + 2.68, cubePositionY + 5.1 , cubePositionZ]} rotation = {[0, Math.PI/2, -0.01]} scale={[0.6, 0.6, 0.6]} font={SpaceFont}> 
                FraudGenie
                <meshStandardMaterial color={hovered ? "#232F4F" : "#FFFFFF" }  />
            </Text>
            <Text position = {[cubePositionX + 2.68, cubePositionY + 2.95 , cubePositionZ + 0.18]} rotation = {[0, Math.PI/2, -0.01]} scale={[0.3, 0.3, 0.3]} maxWidth={16} lineHeight={1.3} font={bodyText} textAlign='center'> 
                Real-time credit-card fraud detection dashboard for small businesses, enabling real-time data analytics and visualization, driving data-driven decision-making, and improving their control over financial security. Used Python, Flask, Jupyter Notebook, XGBoost, and Javascript.
                <meshStandardMaterial color={hovered ? "#232F4F" : "#FFFFFF" } />
            </Text>
            </mesh>


            <mesh onClick={(e) => {transport(e, "https://github.com/nikvijay07/space-world")}}  onPointerEnter={() => setHovered2(true)} onPointerLeave={() => setHovered2(false)} >
            <primitive object={cube2.scene} rotation = {[0, Math.PI/2, 0]} position = {[cubePositionX, cubePositionY + 1 , cubePositionZ - 9.1]} scale = {[60, 58, 55]} />
            <Text position = {[cubePositionX + 2.68, cubePositionY + 5.55 ,cubePositionZ - 8.9]}  rotation = {[0, Math.PI/2, -0.02]} scale={[0.6, 0.6, 0.6]} font={SpaceFont}> 
                Personal Website
                <meshStandardMaterial color={hovered2 ? "#232F4F" : "#FFFFFF" }  />
            </Text>
            <Text position = {[cubePositionX + 2.68, cubePositionY + 3.6 ,cubePositionZ - 8.9]} rotation = {[0, Math.PI/2, -0.01]} scale={[0.3, 0.3, 0.3]} maxWidth={15} textAlign='center' lineHeight={1.3} font={bodyText}> 
                My 3D take on the classic personal website. I wanted to showcase creativity in my design and bring in some of my previous react experience to create something interactive. Built using React, Javascript, Three.JS, and Vectary.
                <meshStandardMaterial color={hovered2 ? "#232F4F" : "#FFFFFF" } />
            </Text>
            </mesh>
            
            <mesh onClick={(e) => {transport(e, "https://github.com/pennonshue/CS2340A_DreamTeam27")}}  onPointerEnter={() => setHovered3(true)} onPointerLeave={() => setHovered3(false)} >
            <primitive object={cube3.scene} rotation = {[0, Math.PI/2, 0]} position = {[cubePositionX, cubePositionY, cubePositionZ - 18.2]} scale = {[63, 55, 55]} />
            <Text position = {[cubePositionX + 2.68, cubePositionY + 4.2 ,cubePositionZ - 18.0]} rotation = {[0, Math.PI/2, -0.01]} scale={[0.6, 0.6, 0.6]} font={SpaceFont}> 
                Dungeon Explorer
                <meshStandardMaterial color={hovered3 ? "#232F4F" : "#FFFFFF" }  />
            </Text>
            <Text position = {[cubePositionX + 2.68, cubePositionY + 2.5 ,cubePositionZ - 17.95]} rotation = {[0, Math.PI/2, -0.01]} scale={[0.3, 0.3, 0.3]} maxWidth={15} textAlign='center' lineHeight={1.3} font={bodyText}> 
            Created a 2D game with enemies, leaderboard tracking, collision detection, and shooting animations in a team environment. Used Java, Kotlin, and Android Studio
                <meshStandardMaterial color={hovered3 ? "#232F4F" : "#FFFFFF" } />
            </Text>
            </mesh>
        </group>
        </>
    );
};

export default ProjectCube;
