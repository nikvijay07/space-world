import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { Cylinder, RoundedBox, Text3D, TorusKnot } from '@react-three/drei'
import TextList from './TextList';
import { useState } from 'react';
import ExperienceText from './ExperienceText';
import * as THREE from 'three';


const Experience = (props) => {

const fbx = useLoader(FBXLoader, '/Notebook.fbx')

const notebookPosition = [29, 3, 43]
const [learnMoreHover, setLearnMoreHover] = useState(false)


const cfa_url = "/cfa.png"
const cfa_map = useLoader(THREE.TextureLoader, cfa_url)


return (
    <>
    <RoundedBox onClick={props.displaySpaceBase} radius={0.2} args={[1, 2, 3]} position={[-5, 1.5, 19]} rotation={[0, -0.4, 0.1]} onPointerEnter={() => setLearnMoreHover(true)} onPointerLeave={() => setLearnMoreHover(false)}>
        <Text3D scale={[0.3, 0.3, 0.3]} position={[1,-0.1,1.1]} rotation={[0, Math.PI/2, 0]} font="./roboto_black.json" >
            Experience
            <meshToonMaterial color={learnMoreHover ? "#022e4e" : "#ffffff"} />
        </Text3D>
    <meshBasicMaterial color={"#636d89"}/>
    </RoundedBox>
    <Cylinder position = {notebookPosition} rotation={[0, 0.9, 0]} scale={[7, 0.1, 0.1]} >
        <RoundedBox  position = {[0.5, 26, 0]} radius={0.2} args={[0.5, 40, 3]} rotation={[0.2, 0, 0]}>
            <meshBasicMaterial color = {"#ad463e"}/>
        </RoundedBox>
    </Cylinder>
    <Cylinder position = {[28, 4.7, 38.7]} rotation={[0, 0, 0.2]} scale={[0.1, 0.4, 0.1]} >
    </Cylinder>
    <mesh position={[28, 7.6, 38.7]} rotation={[0,-2.2,0]}>
        <planeGeometry args={[1.9, 1.6]} />
        <meshBasicMaterial transparent map={cfa_map} side={THREE.DoubleSide}  />
    </mesh>

    </>
  );
};

export default Experience;
