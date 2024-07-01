import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box} from '@react-three/drei';
import Rocket from '../../public/Rocket.jsx'
import './Background.css'
import Stars from './Stars.jsx';
import { useTexture } from '@react-three/drei';
import { BackSide } from 'three';
import Welcome from '../../public/Welcome.jsx';
import { extend } from '@react-three/fiber'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'

extend({TextGeometry})


const Background = () => {

  const map = useTexture('sky-texture.jpg')
  const boxRadius = 40; // Example values for demonstration
  const widthSegments = 30;
  const heightSegments = 30;

  const textOptions = {
    font: 'Arial',
    size: 10,
    height: 10,
  }

  const textGeometry = new TextGeometry('Hold Space to go on a journey', {textOptions});

  return (
    <>
    <mesh>
      <meshBasicMaterial map={map} side={BackSide}/>
      <sphereGeometry args={[boxRadius, widthSegments, heightSegments]} />
      <Stars boxRadius={boxRadius} ></Stars>
    </mesh>
    </>
  );
};

export default Background;
