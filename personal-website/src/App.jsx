import { useState, useRef, Suspense } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber';
import StarTest from './components/StarTest';
import Background from './components/Background';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Rocket from '../public/Rocket'
const App = () => {
  // Ref for accessing the OrbitControls instance
  const controls = useRef();

  // Function to log camera position and orientation
  const logCameraInfo = () => {
    console.log('Camera Position:', controls.current.object.position);
    console.log('Camera Rotation (Euler):', controls.current.object.rotation);
  };

  return (
    <Canvas onClick={logCameraInfo}>
      <PerspectiveCamera makeDefault fov={20} position={[38, -46, 0]} />
      <OrbitControls ref={controls} />
      <ambientLight />
      <Suspense fallback={null}>
        <Background />
        <Rocket />
      </Suspense>
    </Canvas>
  );
};

export default App;