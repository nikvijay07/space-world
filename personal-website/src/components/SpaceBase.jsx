import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { RoundedBox, Text3D } from '@react-three/drei'
import TextList from './TextList';
import { useState } from 'react';


const SpaceBase = (props) => {

const fbx = useLoader(FBXLoader, '/SpaceBase.fbx')

const skillList = ["React", "Node", "AWS", "Postman", "MongoDB", "Three.js"]
const languageList = ["Java", "Python", "JavaScript", "TypeScript", "HTML", "C", "SQL"]

const planetPosition = [30, -6.5, 25]

const [learnMoreHover, setLearnMoreHover] = useState(false)


return (
    <>
    <RoundedBox onClick={props.displaySpaceBase} radius={0.2} args={[1, 2, 3]} position={[-5, 4, 19]} rotation={[0, -0.4, 0]} onPointerEnter={() => setLearnMoreHover(true)} onPointerLeave={() => setLearnMoreHover(false)}>
        <Text3D scale={[0.5, 0.5, 0.5]} position={[1,-0.2,0.8]} rotation={[-0.0, Math.PI/2, 0]} font="./roboto_black.json" >
            Skills
            <meshToonMaterial color={learnMoreHover ? "#022e4e" : "#ffffff"} />
        </Text3D>
        <meshBasicMaterial color={"#636d89"}/>
    </RoundedBox>
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
