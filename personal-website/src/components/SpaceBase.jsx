import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { Text3D } from '@react-three/drei'
import TextList from './TextList';


const SpaceBase = (props) => {

const fbx = useLoader(FBXLoader, '/SpaceBase.fbx')

const skillList = ["React", "Node", "AWS", "Postman", "MongoDB", "Three.js"]
const languageList = ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C", "HTML"]
return (
    <>
    <Text3D onClick={props.displaySpaceBase} scale={[0.5, 0.5, 0.5]} position={[-5, -.6, 26]} rotation={[-0.0, Math.PI/2, 0]} font="./roboto_black.json">
        Learn More...
        <meshBasicMaterial color={"#8D8D8D"}/>
    </Text3D>
    <TextList label = {"Skills"} list = {skillList} right = {false} />
    <TextList displaySpaceBase = {props.displaySpaceBase} label = {"Languages"} list = {languageList} right = {true} />
    <mesh position={[-46, 0, 5]} scale={[0.09, 0.09, 0.09]} rotation={[-Math.PI/2, 0, 0]}>
        <primitive object={fbx} />
    </mesh>
    </>
  );
};

export default SpaceBase;
