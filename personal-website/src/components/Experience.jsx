import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { Cylinder, RoundedBox, Text3D, TorusKnot } from '@react-three/drei'
import TextList from './TextList';
import { useState } from 'react';
import ExperienceText from './ExperienceText';
import * as THREE from 'three';


const Experience = (props) => {

const meteor = useLoader(FBXLoader, '/meteor3.fbx')

const notebookPositionX = 29
const notebookPositionY = 3
const notebookPositionZ = 60

const [learnMoreHover, setLearnMoreHover] = useState(false)
const [returnHover, setReturnHover] = useState(false)


const cfa_url = "/cfa.png"
const cfa_map = useLoader(THREE.TextureLoader, cfa_url)



return (
    <>
    <mesh onClick={props.displaySpaceBase} onPointerEnter={() => setLearnMoreHover(true)} onPointerLeave={() => setLearnMoreHover(false)} scale={[0.05, 0.04, 0.04]} position={[-5, -1.5, 18]} rotation={[0, 0, 0]} >
        <primitive object={meteor}/>
    </mesh>
    <Text3D scale={[0.25, 0.25, 0.25]} position={[-4.6, 1.5, 20.1]} rotation={[0, 1, 0]} font="./roboto_black.json" >
        Experience
        <meshToonMaterial color={learnMoreHover ? "#022e4e" : "#ffffff"} />
    </Text3D>
    <Cylinder position = {[notebookPositionX, notebookPositionY, notebookPositionZ]} rotation={[0, 0.85, 0]} scale={[7, 0.1, 0.1]} >
        <RoundedBox  position = {[0.5, 26, 0]} radius={0.2} args={[0.5, 40, 3]} rotation={[0.2, 0, 0]}>
            <meshBasicMaterial color = {"#ad463e"}/>
        </RoundedBox>
    </Cylinder>
    <Cylinder position = {[31.5, 3.1, 57]} rotation={[0, 0, 1.8]} scale={[0.1, 0.1, 0.1]} >
    </Cylinder>
    <mesh position={[31, 6.9, 57.3]} rotation={[0.02,-2.31,0]}>
        <planeGeometry args={[2.6 ,2]} />
        <meshBasicMaterial transparent map={cfa_map} side={THREE.DoubleSide}  />
        <Text3D scale={[0.17, 0.17, 0.17]} position={[-1.5,-1.1,0.1]} rotation={[-0.3, 0, 0.01]} font="./roboto_black.json" >
            Software Engineering Co-op {"\n\n"} • Web Dev {"\n"} • AWS Invoice System
            <meshToonMaterial color={learnMoreHover ? "#022e4e" : "#ffffff"} />
        </Text3D>
    </mesh>
    <mesh rotation={[0, 0, 0]}> 
        <Text3D onPointerEnter={() => setReturnHover(true)} onPointerLeave={() => setReturnHover(false)} onClick={props.displaySpaceBase} scale={[0.6, 0.6, 0.6]} position={[31.5, 0, 58]} rotation={[0, -Math.PI/1.35, 0]} font="./roboto_black.json">
            return to ship
            <meshPhysicalMaterial color={returnHover ? "#636d89" : "#FFFFFF"}/>
    </Text3D>
    </mesh>
    </>
  );
};

export default Experience;
