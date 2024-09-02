import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { RoundedBox, Text3D, TorusKnot } from '@react-three/drei'
import TextList from './TextList';
import { useState } from 'react';


const SpaceBase = (props) => {

const meteor4 = useLoader(FBXLoader, '/meteor4.fbx')
const fbx = useLoader(FBXLoader, '/SpaceBase.fbx')

const skillList = ["React", "Node", "AWS", "Postman", "MongoDB", "Three.js"]
const languageList = ["Java", "Python", "JavaScript", "TypeScript", "HTML", "C", "SQL"]
const planetPosition = [30, -6.5, 25]
const [learnMoreHover, setLearnMoreHover] = useState(false)


return (
    <>
    <mesh onClick={props.displaySpaceBase} onPointerEnter={() => setLearnMoreHover(true)} onPointerLeave={() => setLearnMoreHover(false)} scale={[0.05, 0.04, 0.04]} position={[-5, 1.8, 18]} rotation={[0, 0, 0]} >
        <primitive object={meteor4}/>
    </mesh>
    <Text3D scale={[0.4, 0.4, 0.4]} position={[-4, 4.4, 20.1]} rotation={[0, 1, 0]} font="./roboto_black.json" >
        Skills
        <meshToonMaterial color={learnMoreHover ? "#022e4e" : "#ffffff"} />
    </Text3D>
    {/* <RoundedBox onClick={props.displaySpaceBase} radius={0.2} args={[1, 2, 3]} position={[-5, 4.6, 19]} rotation={[0, -0.4, -0.1]} onPointerEnter={() => setLearnMoreHover(true)} onPointerLeave={() => setLearnMoreHover(false)}>
        <Text3D scale={[0.5, 0.5, 0.5]} position={[1,-0.2,0.8]} rotation={[-0.0, Math.PI/2, 0]} font="./roboto_black.json" >
            Skills
            <meshToonMaterial color={learnMoreHover ? "#022e4e" : "#ffffff"} />
        </Text3D>
        <meshBasicMaterial color={"#636d89"}/>
    </RoundedBox> */}
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
