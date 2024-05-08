import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Rocket(props) {
  const { nodes, materials } = useGLTF('/rocket.gltf')

  const rocketRef = useRef();
  let isSpacePressed = false;
  let stepSize = 0.1; // Adjust as needed

  const animate = () => {
    if (isSpacePressed) {
      // Update rocket position based on stepSize
      rocketRef.current.position.z += stepSize;
    }
    // Schedule the next animation frame
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === ' ') {
        isSpacePressed = true;
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === ' ') {
        isSpacePressed = false;
      }
    };

    // Add event listeners on mount
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Start animation loop on mount
    requestAnimationFrame(animate);

    // Remove event listeners and stop animation on unmount (cleanup)
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      // Cancel any pending animation frames (optional)
      window.cancelAnimationFrame(animate);
    };
  }, []);

  return (
    <group {...props} dispose={null} scale={10} ref={rocketRef}>
      <group position={[0, 0, 3]} rotation={[Math.PI, 0, -Math.PI/2 ]} scale={0.001}>
          <mesh geometry={nodes['Box_-_baked'].geometry} material={materials.Milton} position={[47.234, -47.364, 42.333]} rotation={[0.211, 0.124, 0.524]} scale={1.011} />
        <mesh geometry={nodes['Box_-_baked_1'].geometry} material={materials.Milton} position={[42.691, 46.718, 42.333]} rotation={[-0.214, 0.118, 2.644]} scale={1.011} />
        <mesh geometry={nodes['Box_-_baked_2'].geometry} material={materials.Milton} position={[-36.515, -4.258, 42.333]} rotation={[0.003, -0.244, -1.557]} scale={1.011} />
        <mesh geometry={nodes.Torus.geometry} material={materials.Saturn} position={[74.789, -1.691, 115.903]} rotation={[0.164, 1.276, -0.204]} scale={0.918} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials.Alley} position={[17.999, -1.635, 38.371]} rotation={[-Math.PI, 0.003, -Math.PI]} scale={0.669} />
        <mesh geometry={nodes.Cone.geometry} material={materials.Retro} position={[17.803, -1.635, 144.924]} scale={1.208} />
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Urban Charm']} position={[17.803, -1.635, 15.95]} scale={1.11} />
      </group>
    </group>
  )
}

useGLTF.preload('/rocket.gltf')
