import { useEffect, useRef, Suspense } from 'react'
import './Home.css'
import { Canvas, render, useFrame } from '@react-three/fiber';
import Background from '../components/Background.jsx';
import { Html, OrbitControls, PerspectiveCamera, PresentationControls } from '@react-three/drei';
import Rocket from '../../public/Rocket.jsx'
import Welcome from '../../public/Welcome.jsx';
import * as THREE from 'three';
import MainComponents from '../components/MainComponents.jsx';
import { RocketProvider } from '../hooks/useRocket.jsx';
import InstructionText from '../../public/InstructionText.jsx';
import Astronaut from '../../public/Astronaut.jsx';
import AboutMeText from '../../public/AboutMeText.jsx';
import ProjectCube from '../components/ProjectCube.jsx';
import Button from '../../public/Button.jsx';
import InstructionalText from '../components/InstructionalText.jsx';
import Links from '../components/Links.jsx';
import Screen from '../components/Screen.jsx';
import SpaceBase from '../components/SpaceBase.jsx';



const Home = () => {

return (
    <section className='start'>
        <Suspense fallback={null}>
            <Canvas style={{ width: '100%', height: '100vh' }}>
                <MainComponents />
                <Welcome />
                <InstructionalText />
                <Astronaut />
                <AboutMeText/>
                <Button />
                <ProjectCube />
                <Links />
            </Canvas>
        </Suspense>
    </section>
    )

}

export default Home;