import { useEffect, useRef, Suspense } from 'react'
// import './App.css'
import { Canvas, render, useFrame } from '@react-three/fiber';
import Background from '../components/Background.jsx';
import { Html, OrbitControls, PerspectiveCamera, PresentationControls } from '@react-three/drei';
import Rocket from '../../public/Rocket.jsx'
import Welcome from '../../public/Welcome.jsx';
import * as THREE from 'three';
import MainComponents from '../components/MainComponents.jsx';



const Home = () => {
    const rocketRef = useRef();
    const cameraRef = useRef();


    const lookAtVec = new THREE.Vector3(0, 0, 0);
    const cameraVector = new THREE.Vector3(0, 0, 0);
  
    // useFrame((state) => {
    //   const rocketPos = rocketRef.current.translation();
    //   console.log(rocketPos);
    //   lookAtVec.set(rocketPos.x, rocketPos.y, rocketPos.z);
    //   cameraVector.lerp(lookAtVec, 0.1);
    //   state.camera.lookAt(cameraVector);
    //   state.camera.updateProjectionMatrix();
    // });


return (
    <section className='start'>
        <Suspense fallback={null}>
            <Canvas>
                <MainComponents />
            </Canvas>
        </Suspense>
    </section>
    )

}

export default Home;