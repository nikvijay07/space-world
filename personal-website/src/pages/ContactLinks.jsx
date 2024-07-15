import { Suspense } from 'react'
// import './App.css'
import { Canvas } from '@react-three/fiber';
import Welcome from '../../public/Welcome.jsx';
import * as THREE from 'three';
import MainComponents from '../components/MainComponents.jsx';
import { RocketProvider } from '../hooks/useRocket.jsx';
import Astronaut from '../../public/Astronaut.jsx';
import AboutMeText from '../../public/AboutMeText.jsx';
import ProjectCube from '../components/ProjectCube.jsx';
import Button from '../../public/Button.jsx';
import InstructionalText from '../components/InstructionalText.jsx';
import Links from '../components/Links.jsx';

const ContactLinks = () => {

return (
    <section className='start'>
        <Suspense fallback={null}>
            <Canvas>
                <MainComponents />
                <Welcome />
                <InstructionalText />
                <Astronaut />
                <AboutMeText />
                <Button />
                <ProjectCube />
                <Links />
            </Canvas>
        </Suspense>
    </section>
    )

}

export default ContactLinks;