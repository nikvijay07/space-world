import React, { useRef, useState } from 'react';
import { Html } from '@react-three/drei';

const Screen = () => {

    const [toggle, setToggle] = useState(true)

  // Handle click event
  const handleClick = () => {
    console.log('Screen clicked!');
    // Add more actions here, like opening a modal or changing content
  };

    return (
        <>
        <mesh position={[-5, 6, 29]} onClick={handleClick}>
        <boxGeometry args={[2, 1, 0.1]} />
        <meshStandardMaterial color="green" />
            <Html distanceFactor={10}>
            <div style={{ width: '800px', height: '600px', backgroundImage: 'linear-gradient(to right, #000080, #6495ED)',  pointerEvents: 'all', borderRadius: "10px"}}>
            <div style={{ marginTop: "10px", width: '800px', height: '30px', backgroundColor: 'grey',  pointerEvents: 'all', borderRadius: "3px 3px 0 0", display: "flex", flexDirection: "row"}} > 
                <div style={{ width: '20px', height: '20px', backgroundColor: 'rgb(146, 84, 91)',  pointerEvents: 'all', borderRadius: "10px"}} ></div>
                <div style={{ width: '20px', height: '20px', backgroundColor: 'rgb(183, 157, 97)',  pointerEvents: 'all', borderRadius: "10px"}}> </div>
                <div style={{ width: '20px', height: '20px', backgroundColor: 'rgb(99, 157, 192)',  pointerEvents: 'all', borderRadius: "10px"}}></div>

            </div>
            
            <h1 style={{marginLeft: "8%", paddingTop: "5%", fontFamily: "karla", color: "white", fontSize: "40px"}}> {toggle ? "Skills" : "Experience"}</h1>

            </div>
        </Html>
        
        </mesh>
        </>
    );
};

export default Screen;
