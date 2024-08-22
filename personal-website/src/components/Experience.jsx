import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { Cylinder, RoundedBox, Text3D, TorusKnot } from '@react-three/drei'
import TextList from './TextList';
import { useState } from 'react';
import ExperienceText from './ExperienceText';
import * as THREE from 'three';


const Experience = (props) => {

const fbx = useLoader(FBXLoader, '/Notebook.fbx')

const notebookPositionX = 29
const notebookPositionY = 3
const notebookPositionZ = 60

const [learnMoreHover, setLearnMoreHover] = useState(false)


const cfa_url = "/cfa.png"
const cfa_map = useLoader(THREE.TextureLoader, cfa_url)
// onClick={props.displaySpaceBase}

return (
    <>
    <RoundedBox radius={0.2} args={[1, 2, 3]} position={[-5, 1.5, 19]} rotation={[0, -0.4, 0.1]} onPointerEnter={() => setLearnMoreHover(true)} onPointerLeave={() => setLearnMoreHover(false)}> 
        <Text3D scale={[0.3, 0.3, 0.3]} position={[1,-0.1,1.1]} rotation={[0, Math.PI/2, 0]} font="./roboto_black.json" >
            Experience
            <meshToonMaterial color={learnMoreHover ? "#022e4e" : "#ffffff"} />
        </Text3D>
    <meshBasicMaterial color={"#636d89"}/>
    </RoundedBox>
    <Cylinder position = {[notebookPositionX, notebookPositionY, notebookPositionZ]} rotation={[0, 0.8, 0]} scale={[7, 0.1, 0.1]} >
        <RoundedBox  position = {[0.5, 26, 0]} radius={0.2} args={[0.5, 40, 3]} rotation={[0.2, 0, 0]}>
            <meshBasicMaterial color = {"#ad463e"}/>
        </RoundedBox>
    </Cylinder>
    <Cylinder position = {[31.5, 3.1, 57]} rotation={[0, 0, 0]} scale={[0.1, 0.4, 0.1]} >
    </Cylinder>
    <mesh position={[31.2, 6.8, 57.2]} rotation={[0,-2.24,0]}>
        <planeGeometry args={[2.375 ,2]} />
        <meshBasicMaterial transparent map={cfa_map} side={THREE.DoubleSide}  />
    </mesh>

    </>
  );
};

export default Experience;
