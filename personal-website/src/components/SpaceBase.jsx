import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { RoundedBox, Text3D, TorusKnot } from '@react-three/drei'
import TextList from './TextList';
import { useState } from 'react';
import { useRef } from 'react'
import * as THREE from 'three'
import { Planet } from '../../public/Planet';


const SpaceBase = (props) => {
    const ref = useRef()
    const meteor4 = useLoader(FBXLoader, '/meteor4.fbx')
    const fbx = useLoader(FBXLoader, '/SpaceBase.fbx')

    const skillList = ["React.JS", "Node.JS", "AWS Development", "Postman", "MongoDB", "Three.js", "Docker", "Git", "Postman", "Kubernetes", "Kafka"]
    const languageList = ["Java", "Python", "JavaScript", "TypeScript", "Scala", "Go", "C", "SQL"]
    const planetPosition = [30, -6.5, 25]
    const [learnMoreHover, setLearnMoreHover] = useState(false)
    const position = [-6,3.5,19]
    const radius = 2
    const tube = 0.1
// const speed = 0.3

return (
    <>
    {/* <mesh>
        <Planet displaySpaceBase={props.displaySpaceBase} />
    </mesh> */}
    <mesh onClick={props.displaySpaceBase} onPointerEnter={() => setLearnMoreHover(true)} onPointerLeave={() => setLearnMoreHover(false)} scale={[0.05, 0.04, 0.04]} position={[-5, -0.4, 18]} rotation={[0, 0, 0]} >
        <primitive object={meteor4}/>
    </mesh>
    <Text3D scale={[0.2, 0.2, 0.2]} position={[-4.2, 2.9, 19.5]} rotation={[0, 0.8, 0]} font="./roboto_black.json" >
        See
        <meshToonMaterial color={learnMoreHover ? "#022e4e" : "#ffffff"} />
    </Text3D>
    <Text3D scale={[0.2, 0.2, 0.2]} position={[-4.2, 2.5, 19.9]} rotation={[0, 0.8, 0]} font="./roboto_black.json" >
        skills here
        <meshToonMaterial color={learnMoreHover ? "#022e4e" : "#ffffff"} />
    </Text3D>
    <TextList label = {"Skills"} list = {skillList} right = {false} />
    <directionalLight position={[-10,20,40]} lookAt={[30, .5, 50]} intensity={0.4}>
    </directionalLight>
    <TextList displaySpaceBase = {props.displaySpaceBase} label = {"Languages"} list = {languageList} right = {true} />
    <mesh position={planetPosition} scale={[0.09, 0.09, 0.09]} rotation={[-Math.PI/2, 0, 0]}>
        <primitive object={fbx} />
    </mesh>
    </>
  );
};

export default SpaceBase;
