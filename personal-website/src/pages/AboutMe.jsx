import { Suspense } from 'react'
import { Canvas, render, useFrame } from '@react-three/fiber';
import Welcome from '../../public/Welcome.jsx';
import MainComponents from '../components/MainComponents.jsx';
import InstructionText from '../../public/InstructionText.jsx';
import Astronaut from '../../public/Astronaut.jsx';
import AboutMeText from '../../public/AboutMeText.jsx';
import ProjectCube from '../components/ProjectCube.jsx';
import './Home.css'



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
                <ProjectCube />
            </Canvas>
        </Suspense>
    </section>
    )

}

export default AboutMe;