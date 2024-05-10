import { useEffect, useRef, Suspense, createRef } from 'react'
// import './App.css'
import { Canvas, render, useFrame } from '@react-three/fiber';
import Background from '../components/Background.jsx';
import { OrbitControls, PerspectiveCamera, PresentationControls } from '@react-three/drei';
import Rocket from '../../public/Rocket.jsx'
import Welcome from '../../public/Welcome.jsx';
import * as THREE from 'three';



const MainComponents = () => {
    const rocketRef = createRef();
    const cameraRef = useRef();


    const lookAtVec = new THREE.Vector3(0, 0, -6);
    let cameraVector = new THREE.Vector3(0, 0, -20);
  
    useFrame((state) => {
        // console.log(rocketRef.current)
        const rocketPos = rocketRef.current.position;
        const tempRocketPos = rocketPos.clone().add(lookAtVec)
        console.log(rocketPos)
        const cameraOffset = new THREE.Vector3(0, 11, 7.5)
        const targetVec = rocketPos.clone().add(cameraOffset);

        console.log(rocketPos);
        cameraVector.lerp(targetVec, 1); 
        state.camera.position.copy(targetVec);
        // console.log("ADFASDDFSDF")

        // console.log(state.camera.position)
        // console.log(rocketPos)
        // console.log("ADFASDDFSDF")
        state.camera.lookAt(tempRocketPos);
        console.log(state.camera.position)
        state.camera.updateProjectionMatrix();
    });


return (
    <>
        <PerspectiveCamera makeDefault position={[0, 0, -20]} ref={cameraRef} />
        <OrbitControls  />
        <ambientLight />
        <Background />
        <Rocket rocketPosition={[0, 0, 35]} ref={rocketRef}/>
        <Welcome />
    </>
    )

}

export default MainComponents;