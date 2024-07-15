import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Box, useGLTF, RoundedBox, Decal} from '@react-three/drei';
import { useTexture, Text } from '@react-three/drei';
import emailFont from "../../public/MonaSans-Black.ttf"
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
    const [emailHovered, setEmailHovered] = useState(false);

    const [spring, api] = useSpring(() => ({ position: [0, 0, 0], config: { friction: 40 } }), []);
    const [spring2, api2] = useSpring(() => ({ position: [0, 0, 0], config: { friction: 40 } }), []);
    const [spring3, api3] = useSpring(() => ({ position: [0, 0, 0], config: { friction: 40 } }), []);

    const linksX = -13;
    const linksY = 6;
    const linksZ = -49
    
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

    const shake3 = (hovered) => {
        api3.start({
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

    const emailURL = "/email.webp"
    const emailMap = useLoader(THREE.TextureLoader, emailURL)

    return (
        <>
        <group>
            <animated.mesh onClick={(e) => {transport(e, "https://github.com/nikvijay07")}} onPointerLeave={() => { setGithubHovered(false); shake(githubHovered);}} onPointerEnter={() => {setGithubHovered(true); shake(githubHovered);}} {...spring}>
            {/* {githubRef.current && <Decal ref={githubRef} scale={[2, 2, 2]} position = {[-13, 9, -41]} texture={gitHubMap} /> } */}
                <RoundedBox args={[1, 2.5, 6]} radius={0.4} smoothness={9} position={[linksX, linksY, linksZ]}>
                    <meshPhysicalMaterial color={"#FFFFFF"} />
                </RoundedBox>
                <mesh position={[linksX + 1, linksY, linksZ + 0.5]} rotation={[0, Math.PI/2, 0]}>
                {/* <RoundedBox args={[2, 2, 8]} radius={0.4} smoothness={9} position={[-13, 0, -41]}>
                    <MeshReflectorMaterial color={"#ae4a4d"} />
                </RoundedBox> */}
                    <planeGeometry  args={[5.3, 2]} />
                    <meshBasicMaterial transparent map={gitHubMap} />
                </mesh>
            </animated.mesh>
            <animated.mesh onClick={(e) => {transport(e, "https://linkedin.com/in/nikhil-vijayvergiya1")}} onPointerLeave={() => { setLinkedinHovered(false); shake2(linkedinHovered);}} onPointerEnter={() => {setLinkedinHovered(true); shake2(linkedinHovered);}} {...spring2}>
                <RoundedBox rotation={[0, 0, 0]}args={[1, 2.5, 6]} radius={0.4} smoothness={2} position={[linksX, linksY - 3, linksZ]}>
                    <meshPhysicalMaterial color={"#FFFFFF"} />
                </RoundedBox>
                <mesh position={[linksX + 0.6, linksY - 3, linksZ]} rotation={[0, Math.PI/2, 0]}>
                {/* <RoundedBox args={[2, 2, 8]} radius={0.4} smoothness={9} position={[-13, 0, -41]}>
                    <MeshReflectorMaterial color={"#ae4a4d"} />
                </RoundedBox> */}
                    <planeGeometry  args={[4.2, 1.6]} />
                    <meshBasicMaterial transparent map={linkedinMap} />
                </mesh>
            </animated.mesh>
            <animated.mesh onClick={(e) => {transport(e, "mailto:nikvijay07@gmail.com")}} onPointerLeave={() => { setEmailHovered(false); shake3(emailHovered);}} onPointerEnter={() => {setEmailHovered(true); shake3(emailHovered);}} {...spring3}>
                <RoundedBox rotation={[0, 0, 0]}args={[1, 2.5, 6]} radius={0.4} smoothness={2} position={[linksX, linksY - 6, linksZ]}>
                    <meshPhysicalMaterial color={"#FFFFFF"} />
                </RoundedBox>
                <mesh position={[linksX + 0.6, linksY - 5.9, linksZ + 1.6]} rotation={[0, Math.PI/2, 0]}>
                    <planeGeometry  args={[1.5, 1.3 ]} />
                    <meshBasicMaterial transparent map={emailMap} />
                    <Text color={"#E15342"} fontSize = {0.7} font={emailFont} position = {[2, 0.1, 0.3]}> Email </Text>
                </mesh>
            </animated.mesh>
        </group>
        </>
    );
};

export default Links;
