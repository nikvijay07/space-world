import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Box, useGLTF, RoundedBox, Decal} from '@react-three/drei';
import { useTexture, Text } from '@react-three/drei';
import SpaceFont from "../../public/AntonSC-Regular.ttf"
import computerFont from "../../public/Monospace.ttf"
import {  useEffect, useRef, useState } from 'react'
import * as THREE from 'three';
import { extend } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { GridHelper } from 'three/src/Three.js';
import { DecalGeometry } from 'three/examples/jsm/geometries/DecalGeometry';



const Links = () => {
 
    const [githubHovered, setGithubHovered] = useState(false);
    const [linkedinHovered, setLinkedinHovered] = useState(false);

    const [spring, api] = useSpring(() => ({ position: [0, 0, 0], config: { friction: 40 } }), []);
    const [spring2, api2] = useSpring(() => ({ position: [0, 0, 0], config: { friction: 40 } }), []);

    const shake = (hovered) => {
        api.start({
        position: [
          hovered ? 0 : 1,
          0,
          0
        ],
      });
    }

    const shake2 = (hovered) => {
        api2.start({
        position: [
          hovered ? 0 : 1,
          0,
          0
        ],
      });
    }

    const transport = (e, url) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }        
        window.open(url, '__blank');
    };
    const githubURL = "/github.png"
    const gitHubMap = useLoader(THREE.TextureLoader, githubURL)


    const linkedinURL = "/linkedin2.png"
    const linkedinMap = useLoader(THREE.TextureLoader, linkedinURL)

    return (
        <>
        <group>
            <animated.mesh onClick={(e) => {transport(e, "https://github.com/nikvijay07")}} onPointerLeave={() => { setGithubHovered(false); shake(githubHovered);}} onPointerEnter={() => {setGithubHovered(true); shake(githubHovered);}} {...spring}>
            {/* {githubRef.current && <Decal ref={githubRef} scale={[2, 2, 2]} position = {[-13, 9, -41]} texture={gitHubMap} /> } */}
                <RoundedBox args={[1, 2.5, 6]} radius={0.4} smoothness={9} position={[-13, 6, -41]}>
                    <meshPhysicalMaterial color={"#6727bd"} />
                </RoundedBox>
                <mesh position={[-12, 6, -40.5]} rotation={[0, Math.PI/2, 0]}>
                {/* <RoundedBox args={[2, 2, 8]} radius={0.4} smoothness={9} position={[-13, 0, -41]}>
                    <MeshReflectorMaterial color={"#ae4a4d"} />
                </RoundedBox> */}
                    <planeGeometry  args={[5.3, 2]} />
                    <meshBasicMaterial transparent map={gitHubMap} />
                </mesh>
            </animated.mesh>
            <animated.mesh onClick={(e) => {transport(e, "https://linkedin.com/in/nikhil-vijayvergiya1")}} onPointerLeave={() => { setLinkedinHovered(false); shake2(linkedinHovered);}} onPointerEnter={() => {setLinkedinHovered(true); shake2(linkedinHovered);}} {...spring2}>
                <RoundedBox rotation={[0, 0, 0]}args={[1, 2.5, 6]} radius={0.4} smoothness={2} position={[-13, 3, -41]}>
                    <meshPhysicalMaterial color={"#CCCCCC"} />
                </RoundedBox>
                <mesh position={[-12.4, 3, -41]} rotation={[0, Math.PI/2, 0]}>
                {/* <RoundedBox args={[2, 2, 8]} radius={0.4} smoothness={9} position={[-13, 0, -41]}>
                    <MeshReflectorMaterial color={"#ae4a4d"} />
                </RoundedBox> */}
                    <planeGeometry  args={[4.2, 1.6]} />
                    <meshBasicMaterial transparent map={linkedinMap} />
                </mesh>
            </animated.mesh>
        </group>
        </>
    );
};

export default Links;
