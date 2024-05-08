import { useEffect, useRef, Suspense } from 'react'
import './App.css'
import { Canvas, render } from '@react-three/fiber';
import Background from './components/Background';
import { Html, OrbitControls, PerspectiveCamera, PresentationControls } from '@react-three/drei';
import Rocket from '../public/Rocket.jsx'
import Welcome from '../public/Welcome.jsx';
import NavBar from './components/Navbar.jsx'
import InstructionText from './components/InstructionText.jsx';

const App = () => {
  const controls = useRef();

  // Function to update camera position and orientation to follow the rocket
  // Call updateCamera whenever the rocket position changes;


  return (
    <>
    <main className='everything'>
      <NavBar></NavBar>
      <Router>
        <Routes>
        </Routes>
      </Router>
      <Suspense fallback={null}>
      <Canvas>
        <PerspectiveCamera makeDefault fov={20} position={[38, -46, 0]} />
        <OrbitControls ref={controls} />
        <ambientLight />
          <Background />
          <Rocket/>
          <Welcome />
          <InstructionText />
      </Canvas>
      </Suspense>
    </main>
    </>
  );
};

export default App;