import { useEffect, useRef, Suspense } from 'react'
import './App.css'
import { Canvas, render } from '@react-three/fiber';
import Background from './components/Background';
import { OrbitControls, PerspectiveCamera, PresentationControls } from '@react-three/drei';
import Rocket from '../public/Rocket'
const App = () => {
  const controls = useRef();

  // Function to update camera position and orientation to follow the rocket
  // Call updateCamera whenever the rocket position changes;


  return (
    <Suspense fallback={null}>
    <Canvas>
      {/* <PresentationControls snap global zoom={0.1} rotation={[0, -Math.PI / 2, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 8]}> */}
      <PerspectiveCamera makeDefault fov={20} position={[38, -46, 0]} />
      <OrbitControls ref={controls} />
      <ambientLight />
        <Background />
        <Rocket/>
      {/* </PresentationControls> */}
    </Canvas>
    </Suspense>
  );
};

export default App;