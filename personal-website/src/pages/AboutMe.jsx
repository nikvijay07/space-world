import { Suspense } from 'react'
import { Canvas, render, useFrame } from '@react-three/fiber';
import Welcome from '../../public/Welcome.jsx';
import MainComponents from '../components/MainComponents.jsx';
import InstructionText from '../../public/InstructionText.jsx';
import Astronaut from '../../public/Astronaut.jsx';
import AboutMeText from '../../public/AboutMeText.jsx';
import ProjectCube from '../components/ProjectCube.jsx';
import './Home.css'
import Button from '../../public/Button.jsx';



const AboutMe = () => {

return (
    <section className='start'>
        <Suspense fallback={null}>
            <Canvas>
                <MainComponents />
                <Welcome />
                <InstructionText />
                <Astronaut />
                <AboutMeText />
                <Button />
                <ProjectCube />
            </Canvas>
        </Suspense>
    </section>
    )

}

export default AboutMe;