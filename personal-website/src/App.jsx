import { useEffect, useRef, Suspense } from 'react'
import './App.css'
import { Canvas, render } from '@react-three/fiber';
import Background from './components/Background';
import { Html, OrbitControls, PerspectiveCamera, PresentationControls } from '@react-three/drei';
import Rocket from '../public/Rocket.jsx'
import Welcome from '../public/Welcome.jsx';
import Navbar from './components/Navbar.jsx'
import InstructionText from './components/InstructionText.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import { RocketProvider } from './hooks/useRocket.jsx';

const App = () => {
  // const controls = useRef();

  // Function to update camera position and orientation to follow the rocket
  // Call updateCamera whenever the rocket position changes;


  return (
    <>
    <main className='everything'>
    <Router>
      <RocketProvider>
      <Navbar />
        <Routes>
          <Route path='/' Component = {Home} />
          <Route path='/about-me' element = {'AboutMe'} />
          <Route path='/projects' element = {'Projects'} />
          <Route path='/experience' element = {'Experience'} />
        </Routes>
      </RocketProvider>
    </Router>
    </main>
    </>
  );
};

export default App;

