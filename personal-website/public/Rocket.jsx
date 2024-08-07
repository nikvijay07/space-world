import React, { useRef, useEffect, forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';
import { useRocket } from '../src/hooks/useRocket';



const Rocket = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/rocket.gltf')
  const { rocketPosition } = useRocket();


  let isArrowUp = false;
  let stepSize = 0.08; // Adjust as needed
  let isArrowDown = false;

  const animate = () => {
    if (isArrowUp && ref.current.position.z > -60) {
      ref.current.position.z -= stepSize;
    }
    if (isArrowDown && ref.current.position.z < 63) {
      ref.current.position.z += stepSize
    }

    // console.log(ref.current)


    requestAnimationFrame(animate);
  };

  useEffect(() => {
    // console.log(rocketPosition)

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowUp' || event.key == 'ArrowRight') {
        isArrowUp = true;
      } else if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
        isArrowDown = true;
      }
    };

    const handleTouchStart = (event) => {
      if (event.touches) {
        isArrowUp = true
      }
    }


    const handleKeyUp = (event) => {
      if (event.key === 'ArrowUp' || event.key == 'ArrowRight') {
        isArrowUp = false;
      } else if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
        isArrowDown = false;
      }

    };

    const handleTouchEnd = (event) => {
      isArrowUp = false;
    }

    // Add event listeners on mount
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd)

    // Start animation loop on mount
    requestAnimationFrame(animate);

    // Remove event listeners and stop animation on unmount (cleanup)
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)

      // Cancel any pending animation frames (optional)
      window.cancelAnimationFrame(animate);
    };
  }, []);

  useEffect(() => {
    ref.current.position.z = rocketPosition[2];
  }, [rocketPosition]);



  return (
    <group {...props} position={rocketPosition} dispose={null} scale={10} ref={ref}>
      <group  rotation={[Math.PI, 0, -Math.PI/2.4 ]} scale={0.001}>
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
// useGLTF.preload('/rocket.gltf')
);

export default Rocket