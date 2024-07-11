import { Suspense } from 'react'
import { Canvas, render, useFrame } from '@react-three/fiber';
import Welcome from '../../public/Welcome.jsx';
import MainComponents from '../components/MainComponents.jsx';
import Astronaut from '../../public/Astronaut.jsx';
import AboutMeText from '../../public/AboutMeText.jsx';
import ProjectCube from '../components/ProjectCube.jsx';
import './Home.css'
import Button from '../../public/Button.jsx';
import InstructionalText from '../components/InstructionalText.jsx';
import Links from '../components/Links.jsx';



const AboutMe = () => {

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

export default AboutMe;