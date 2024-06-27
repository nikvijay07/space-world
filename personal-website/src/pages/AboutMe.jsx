import { useEffect, useRef, Suspense } from 'react'
// import './App.css'
import { Canvas, render, useFrame } from '@react-three/fiber';
import { Html, OrbitControls, PerspectiveCamera, PresentationControls } from '@react-three/drei';
import Welcome from '../../public/Welcome.jsx';
import MainComponents from '../components/MainComponents.jsx';
import { RocketProvider } from '../hooks/useRocket.jsx';
import InstructionText from '../../public/InstructionText.jsx';
import Astronaut from '../../public/Astronaut.jsx';
import AboutMeText from '../../public/AboutMeText.jsx';




const AboutMe = () => {

return (
    <section className='About'>
        <Suspense fallback={null}>
            <Canvas>
                <MainComponents />
                <Welcome />
                <InstructionText />
                <Astronaut />
                <AboutMeText />
            </Canvas>
        </Suspense>
    </section>
    )

}

export default AboutMe;