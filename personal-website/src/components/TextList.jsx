import { Text3D } from '@react-three/drei'

const TextList = ({list}) => {

return (
    <>
    {
        list.map((value, index) =>
        {
            <Text3D 
            key = {index}
            scale={[0.4, 0.4, 0.4]} 
            position={[-38, 8.5 - index, 12]} 
            rotation={[-0.0, Math.PI/2, 0]} 
            font="./roboto_black.json">
            • {value}
            <meshBasicMaterial color={"#FFFFFF"}/>
        </Text3D>
        })
    }
</>
);
}

export default TextList;