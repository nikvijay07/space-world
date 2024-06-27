import { useEffect, useRef, Suspense, createRef, useState } from 'react'
// import './App.css'
import { Canvas, render, useFrame, useThree } from '@react-three/fiber';
import Background from '../components/Background.jsx';
import { OrbitControls, PerspectiveCamera, PresentationControls } from '@react-three/drei';
import Rocket from '../../public/Rocket.jsx'
import Welcome from '../../public/Welcome.jsx';
import * as THREE from 'three';
import InstructionText from '../../public/InstructionText.jsx';
import TWEEN from '@tweenjs/tween.js'
import AboutMeText from '../../public/AboutMeText.jsx';




const MainComponents = (props) => {
    const rocketRef = createRef();
    const cameraRef = useRef();

    const [cameraPosition, setCameraPosition] = useState(new THREE.Vector3(22, 6, -15))
    const [cameraTarget, setCameraTarget] = useState(new THREE.Vector3(0, 0, -20))
    let cameraVector = new THREE.Vector3(0, 0, 0);

    let firstTweenStarted = useRef(false);
    let secondTweenStarted = useRef(false);


  
    useFrame((state) => {
       
        const rocketPos = rocketRef.current.position;
        TWEEN.update()
        // console.log(rocketPos)
        if (rocketPos.z < -9 && rocketPos.z > -25 ) {   
            secondTweenStarted.current = false
            if (!firstTweenStarted.current) {

                const astronautPosition = new THREE.Vector3(-2, 4.5, -16);
                const astronautCameraPosition = new THREE.Vector3(9, 4.5, -14);

                firstTweenStarted.current = true;
                new TWEEN.Tween(cameraPosition)
                .to(astronautCameraPosition, 1000)
                .easing(TWEEN.Easing.Quadratic.Out)
                .onUpdate(() => {
                    setCameraPosition(cameraPosition)
                }).start()
    
                new TWEEN.Tween(cameraTarget)
                .to(astronautPosition, 2000)
                .easing(TWEEN.Easing.Quadratic.Out)
                .onUpdate(() => {
                    setCameraTarget(cameraTarget)
                }).start()
            }      
        } else {
            firstTweenStarted.current = false;
            if (!secondTweenStarted.current) {
                const originalCameraPosition = new THREE.Vector3(rocketPos.x + 10, rocketPos.y + 5, rocketPos.z + 2)
                const originalCameraTarget = new THREE.Vector3(rocketPos.x - 5, rocketPos.y, rocketPos.z - 5 )
    
                new TWEEN.Tween(cameraPosition)
                .to(originalCameraPosition, 1000)
                .easing(TWEEN.Easing.Quadratic.Out)
                .onUpdate(() => {
                    setCameraPosition(cameraPosition)
                }).start()

                new TWEEN.Tween(cameraTarget)
                .to(originalCameraTarget, 1000)
                .easing(TWEEN.Easing.Quadratic.Out)
                .onUpdate(() => {
                    setCameraTarget(cameraTarget)
                }).start()
            }



        }
        state.camera.lookAt(cameraTarget)
        state.camera.position.copy(cameraPosition)
        state.camera.updateProjectionMatrix();
    });


return (
    <>
        <PerspectiveCamera makeDefault position={[0, 0, 0]} ref={cameraRef} />
        {/* <OrbitControls  /> */}
        <ambientLight  p/>
        <directionalLight position={[12, 2, -3]} intensity={1}/>
        <Background />
        <Rocket ref={rocketRef}/>
    </>
    )

}

export default MainComponents;
