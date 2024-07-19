import { Text3D } from '@react-three/drei'

const TextList = ({list, right, label, displaySpaceBase}) => {

    const shift = right ? 13 : 0;


    return (
        <>
         <Text3D scale={[0.8, 0.8, 0.8]} position={[-38, 11, 12 - shift]} rotation={[-0.0, Math.PI/2, 0]} font="./roboto_black.json">
            {label}
            <meshBasicMaterial color={"#FFFFFF"}/>
        </Text3D>
          {list.map((value, index) => (
            <Text3D
              key={index}
              scale={[0.4, 0.4, 0.4]}
              position={[-38, 9.5 - index, 12 - shift]} // Adjusting the Y position for each line
              rotation={[0, Math.PI / 2, 0]}
              font="./roboto_black.json"
            >
              • {value}
              <meshBasicMaterial color={"#FFFFFF"} />
            </Text3D>
          ))}
          <Text3D onClick={displaySpaceBase} scale={[0.8, 0.8, 0.8]} position={[-38, 1, 7.1]} rotation={[-0.0, Math.PI/2, 0]} font="./roboto_black.json">
            return to ship
            <meshPhysicalMaterial color={"AAAAAA"}/>
        </Text3D>
        </>
      );
    };

export default TextList;