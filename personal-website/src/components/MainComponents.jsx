import { useEffect, useRef, Suspense, createRef } from 'react'
// import './App.css'
import { Canvas, render, useFrame } from '@react-three/fiber';
import Background from '../components/Background.jsx';
import { OrbitControls, PerspectiveCamera, PresentationControls } from '@react-three/drei';
import Rocket from '../../public/Rocket.jsx'
import Welcome from '../../public/Welcome.jsx';
import * as THREE from 'three';
import InstructionText from '../../public/InstructionText.jsx';



const MainComponents = (props) => {
    const rocketRef = createRef();
    const cameraRef = useRef();


    const lookAtVec = new THREE.Vector3(0, 0, -6);
    let cameraVector = new THREE.Vector3(0, 0, -20);
  
    useFrame((state) => {
        console.log(rocketRef.current.position)
        const rocketPos = rocketRef.current.position;
        const tempRocketPos = rocketPos.clone().add(lookAtVec)
        const cameraOffset = new THREE.Vector3(0, 11, 7.5)
        const targetVec = rocketPos.clone().add(cameraOffset);
        cameraVector.lerp(targetVec, 1); 
        state.camera.position.copy(targetVec);
        state.camera.lookAt(tempRocketPos);
        state.camera.updateProjectionMatrix();
    });


return (
    <>
        <PerspectiveCamera makeDefault position={[0, 0, -20]} ref={cameraRef} />
        <OrbitControls  />
        <ambientLight />
        <Background />
        <Rocket ref={rocketRef}/>
    </>
    )

}

export default MainComponents;

//(0, 11, 7.5)