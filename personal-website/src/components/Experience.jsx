import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { RoundedBox, Text3D, TorusKnot } from '@react-three/drei'
import TextList from './TextList';
import { useState } from 'react';


const Experience = (props) => {

const fbx = useLoader(FBXLoader, '/Notebook.fbx')

const notebookPosition = [25, 0, 40]
const [learnMoreHover, setLearnMoreHover] = useState(false)


return (
    <>
    {/* <TorusKnot args={[0.8, 0.3]} position={[-5, 4, 19]} rotation={[1, 1, 2]}>
        <meshPhysicalMaterial color={"#ff6fa9"}/>
    </TorusKnot> */}
    <RoundedBox onClick={props.displaySpaceBase} radius={0.2} args={[1, 2, 3]} position={[-5, 1.5, 19]} rotation={[0, -0.4, 0.1]} onPointerEnter={() => setLearnMoreHover(true)} onPointerLeave={() => setLearnMoreHover(false)}>
        <Text3D scale={[0.3, 0.3, 0.3]} position={[1,-0.1,1.1]} rotation={[0, Math.PI/2, 0]} font="./roboto_black.json" >
            Experience
            <meshToonMaterial color={learnMoreHover ? "#022e4e" : "#ffffff"} />
        </Text3D>
    <meshBasicMaterial color={"#636d89"}/>
    </RoundedBox>
    <mesh position={notebookPosition} scale={[0.04, 0.03, 0.04]} rotation={[-Math.PI/2, 0, 4]}>
        <primitive object={fbx} />
    </mesh>
    </>
  );
};

export default Experience;
