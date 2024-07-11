import * as THREE from 'three';
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';


const Stars = (props) =>  {


    const { boxRadius } = props;

    const ref = useRef();

    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const numPoints = 1100; // Adjust for desired number of stars

    for (let i = 0; i < numPoints; i++) {
        let accepted = false;
        while (!accepted) {
        const x = Math.random() * 2 - 1;
        const y = Math.random() * 2 - 1;
        const z = Math.random() * 2 - 1;

        const distanceSquared = x * x + y * y + z * z; // squared distance from origin

        if (distanceSquared <= 1.4) { // Check if point is within sphere
            vertices.push(x * boxRadius, y * boxRadius, z * boxRadius); // Scale by radius (10) and add to vertices
            accepted = true;
        }
        }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3)); // Use 'position' attribute

    const starSprite = new THREE.TextureLoader().load('./star.png');
    const starMtl = new THREE.PointsMaterial({
        opacity: 0.2,
        size: 1,
        map: starSprite,
        alphaTest: 0.05
    }
    );


    return (
        <>
        {/* <OrbitControls></OrbitControls> */}
        <points ref={ref} geometry={geometry} material={starMtl}></points>
        </>
    )

}

export default Stars;
