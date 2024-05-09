import { useEffect, useRef, Suspense } from 'react'
// import './App.css'
import { Canvas, render } from '@react-three/fiber';
import Background from '../components/Background.jsx';
import { Html, OrbitControls, PerspectiveCamera, PresentationControls } from '@react-three/drei';
import Rocket from '../../public/Rocket.jsx'
import Welcome from '../../public/Welcome.jsx';
import InstructionText from '../components/InstructionText.jsx';



const Home = () => {

return (
    <section className='start'>
        <Suspense fallback={null}>
         <Canvas>
            <PerspectiveCamera makeDefault fov={20} position={[38, -46, 0]} />
            <OrbitControls  />
            <ambientLight />
            <Background />
            <Rocket/>
            <Welcome />
            {/* <InstructionText /> */}
         </Canvas>
        </Suspense>
    </section>
    )

}

export default Home;