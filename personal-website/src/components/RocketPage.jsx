import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Rocket from '../../public/Rocket.jsx'
import './RocketPage.css'



const RocketPage = () => {


  return (
    <Canvas>
      <ambientLight />
      {/* <OrbitControls ></OrbitControls> */}
      <perspectiveCamera position={[10, -10, 2]} /> 
     <Rocket />
    </Canvas>
  );
};

export default RocketPage;
