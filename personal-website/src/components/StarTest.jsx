import { OrbitControls } from "@react-three/drei";
import Stars from "./Stars";
import { Canvas } from "@react-three/fiber";

const StarTest = () => {

    // const stars = THREE.geometry;
  
  
  
    return (
        <Canvas>
          <perspectiveCamera position={[0, 10, 10]}></perspectiveCamera>
          <OrbitControls></OrbitControls>
          <Stars></Stars>
        </Canvas>
    );
  };
  
  export default StarTest;