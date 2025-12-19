import { Suspense } from 'react'
// import './App.css'
import { Canvas } from '@react-three/fiber';
import Welcome from '../../public/Welcome.jsx';
import MainComponents from '../components/MainComponents.jsx';
import Astronaut from '../../public/Astronaut.jsx';
import ProjectCube from '../components/ProjectCube.jsx';
import Button from '../../public/Button.jsx';
import InstructionalText from '../components/InstructionalText.jsx';
import Links from '../components/Links.jsx';
import './Home.css'
import { TextBox } from '../../public/TextBox.jsx';


const ContactLinks = () => {

return (
    <section className='start'>
        <Suspense fallback={null}>
            <Canvas style={{ width: '100%', height: '100vh' }}>
                <MainComponents />
                <Welcome />
                <InstructionalText />
                <Astronaut />
                <TextBox/>
                <Button />
                <ProjectCube />
                <Links />
            </Canvas>
        </Suspense>
    </section>
    )

}

export default ContactLinks;