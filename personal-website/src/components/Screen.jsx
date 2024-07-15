import React, { useRef, useState } from 'react';
import { Html, useGLTF} from '@react-three/drei';
import "../components/Screen.css"
const Screen = () => {

  const [toggle, setToggle] = useState(true)

  const window = useGLTF('window.glb')

  // Handle click event
  const handleClick = () => {
    console.log('Screen clicked!');
    // Add more actions here, like opening a modal or changing content
  };

    return (
        <>
        <mesh onClick={handleClick}>
          <primitive  position = {[-5, 3 , 19]} scale = {[20, 20, 20]} rotation = {[0, Math.PI/3, 0]} object={window.scene} />
        </mesh>
        </>
    );
};

export default Screen;


// <div className='glass-card'>
//               <div style={{ paddingTop: "10px", paddingLeft: "10px", width: '790px', height: '50px', backgroundColor: 'black',  pointerEvents: 'all', borderRadius: "3px 3px 0 0"}} /> 
//               {/* <div style={{ width: '800px', height: '600px', backgroundImage: 'linear-gradient(to right, #000088, #6495ED)',  pointerEvents: 'all', borderRadius: "10px"}}> */}
//               {/* <div style={{ paddingTop: "10px", paddingLeft: "10px", width: '790px', height: '30px', backgroundColor: 'grey',  pointerEvents: 'all', borderRadius: "3px 3px 0 0", display: "flex", flexDirection: "row"}} > 
//                   <div style={{ width: '20px', height: '20px', backgroundColor: 'rgb(146, 84, 91)',  pointerEvents: 'all', borderRadius: "10px"}} ></div>
//                   <div style={{ width: '20px', marginLeft: "5px", marginRight: "5px", height: '20px', backgroundColor: 'rgb(183, 157, 97)',  pointerEvents: 'all', borderRadius: "10px"}}> </div>
//                   <div style={{ width: '20px', height: '20px', backgroundColor: 'rgb(99, 157, 192)',  pointerEvents: 'all', borderRadius: "10px"}}></div>

//               </div> */}
//               <h1 style={{marginLeft: "8%", paddingTop: "5%", fontFamily: "inter", color: "lightblue", fontSize: "40px"}}> {toggle ? "Skills" : "Experience"}</h1>
            
            

//               <div style={{ paddingTop: "10px", paddingLeft: "10px", width: '790px', height: '50px', backgroundColor: 'black',  pointerEvents: 'all', borderRadius: "3px 3px 0 0"}} /> 
//             </div>