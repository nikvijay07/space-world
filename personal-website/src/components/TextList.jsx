import { Text3D } from '@react-three/drei'
import { useState } from 'react';

const TextList = ({list, right, label, displaySpaceBase, location}) => {

    const shift = right ? 15 : 0;
    const [returnHover, setReturnHover] = useState(false)


    return (
        <>
         <Text3D scale={[0.8, 0.8, 0.8]} position={[30, 4.5, 30 - shift]} rotation={[-0.0, -Math.PI/2, 0]} font="./roboto_black.json">
            {label}
            <meshBasicMaterial color={"#FFFFFF"}/>
        </Text3D>
          {list.map((value, index) => (
            <Text3D
              key={index}
              scale={[0.4, 0.4, 0.4]}
              position={[30, 3 - index, 30 - shift]} // Adjusting the Y position for each line
              rotation={[0, -Math.PI / 2, 0]}
              font="./roboto_black.json"
            >
              • {value}
              <meshBasicMaterial color={"#FFFFFF"} />
            </Text3D>
          ))}
          <Text3D onPointerEnter={() => setReturnHover(true)} onPointerLeave={() => setReturnHover(false)} onClick={displaySpaceBase} scale={[0.8, 0.8, 0.8]} position={[30, -8.5, 21]} rotation={[0.0, -Math.PI/2, 0]} font="./roboto_black.json">
            return to ship
            <meshPhysicalMaterial color={returnHover ? "#636d89" : "#FFFFFF"}/>
        </Text3D>
        </>
      );
    };

export default TextList;