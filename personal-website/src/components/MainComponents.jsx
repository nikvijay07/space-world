import { useEffect, useRef, Suspense, createRef, useState } from 'react'
// import './App.css'
import { useFrame } from '@react-three/fiber';
import Background from '../components/Background.jsx';
import { PerspectiveCamera } from '@react-three/drei';
import Rocket from '../../public/Rocket.jsx'
import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js'
import Button from '../../public/Button.jsx';
import SpaceBase from './SpaceBase.jsx';
import Experience from './Experience.jsx';



const MainComponents = (props) => {
    const rocketRef = useRef();
    const cameraRef = useRef();

    const [toggleSkills, setToggleSkils] = useState(false);
    const [toggleExperience, setToggleExperience] = useState(false);


    const [cameraPosition, setCameraPosition] = useState(new THREE.Vector3(20, 8, -15))
    const [cameraTarget, setCameraTarget] = useState(new THREE.Vector3(0, -1, -20))

    // let firstTweenStarted = useRef(false);
    // let secondTweenStarted = useRef(false);

    const lookAtAboutMe = () => {
        const astronautPosition = new THREE.Vector3(-1, 2.5, 25);
                const astronautCameraPosition = new THREE.Vector3(8, 3.5, 25);

                // firstTweenStarted.current = true;
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

    const lookAtSpaceBase = () => {
        const spaceBasePosition = new THREE.Vector3(12, 2, 25);
        const spaceBaseCameraPosition = new THREE.Vector3(8, 2.5, 25)

        // firstTweenStarted.current = false;
        new TWEEN.Tween(cameraPosition)
        .to(spaceBaseCameraPosition, 2000)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate(() => {
            setCameraPosition(cameraPosition)
        }).start()

        new TWEEN.Tween(cameraTarget)
        .to(spaceBasePosition, 2000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(() => {
            setCameraTarget(cameraTarget)
        }).start()

    }
    const lookAtExperience = () => {
        const experiencePosition = new THREE.Vector3(25, 5, 58);
        const experienceCameraPosition = new THREE.Vector3(17, 7, 51)

        // firstTweenStarted.current = false;
        new TWEEN.Tween(cameraPosition)
        .to(experienceCameraPosition, 1500)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate(() => {
            setCameraPosition(cameraPosition)
        }).start()

        new TWEEN.Tween(cameraTarget)
        .to(experiencePosition, 1500)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(() => {
            setCameraTarget(cameraTarget)
        }).start()

    }

    const mainRocketView = (rocketPos) => {
        const originalCameraPosition = new THREE.Vector3(rocketPos.x + 10, rocketPos.y + 6, rocketPos.z + 2) //10, 6, 23 |||| 0, 10, 0
        const originalCameraTarget = new THREE.Vector3(rocketPos.x - 5, rocketPos.y + 1, rocketPos.z - 5 ) //-5, 1, -5 |||| 0, 8, 0

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

    const lookAtProjects = (rocketPos) => {
        const originalCameraPosition = new THREE.Vector3(rocketPos.x + 7, rocketPos.y + 4, rocketPos.z)
        const originalCameraTarget = new THREE.Vector3(rocketPos.x - 9, rocketPos.y + 3, rocketPos.z )

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


  
    useFrame((state) => {
        const rocketPos = rocketRef.current.position;
        TWEEN.update()

        if (toggleSkills) {
            lookAtSpaceBase()
        } else if (toggleExperience) {
            lookAtExperience()
        } else if (rocketPos.z < 30.6 && rocketPos.z > 20.6 ) {   
            lookAtAboutMe()
        } else if (rocketPos.z < 2 && rocketPos.z > -60 ) {   
            lookAtProjects(rocketPos);
        } else {
            mainRocketView(rocketPos);
        }
        state.camera.lookAt(cameraTarget)
        state.camera.position.copy(cameraPosition)
        state.camera.updateProjectionMatrix();
    });


    function displaySpaceBase() {
        setToggleSkils(!toggleSkills)
    }

    function displayExperience() {
        setToggleExperience(!toggleExperience)
    }


return (
    <>
        <PerspectiveCamera makeDefault position={[0, 0, 0]} ref={cameraRef} />
        <ambientLight/>
        <directionalLight position={[12, 2, -10]} intensity={0.3}/>
        <Background />
        <Rocket ref={rocketRef}/>
        <Button />
        <SpaceBase displaySpaceBase={displaySpaceBase}/>
        <Experience displaySpaceBase={displayExperience}/>
    </>
    )

}

export default MainComponents;
