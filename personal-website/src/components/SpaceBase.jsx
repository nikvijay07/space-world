import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { Text3D } from '@react-three/drei'
import TextList from './TextList';


const SpaceBase = (props) => {

const fbx = useLoader(FBXLoader, '/SpaceBase.fbx')

const skillList = ["React, AWS", "Postman", "MongoDB", "Three.js"]

return (
    <>
    <Text3D onClick={props.displaySpaceBase} scale={[0.5, 0.5, 0.5]} position={[-5, -.6, 26]} rotation={[-0.0, Math.PI/2, 0]} font="./roboto_black.json">
        Learn More...
        <meshBasicMaterial color={"#8D8D8D"}/>
    </Text3D>
    <Text3D scale={[0.9, 0.9, 0.9]} position={[-38, 10, 12]} rotation={[-0.0, Math.PI/2, 0]} font="./roboto_black.json">
        Skills
        <meshBasicMaterial color={"#FFFFFF"}/>
    </Text3D>
    <TextList list = {skillList} />
    <mesh position={[-46, 0, 5]} scale={[0.09, 0.09, 0.09]} rotation={[-Math.PI/2, 0, 0]}>
        <primitive object={fbx} />
    </mesh>
    </>
  );
};

export default SpaceBase;
