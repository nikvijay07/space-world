import { Text3D } from "@react-three/drei";



const ExperienceText = () => {


    const cfa_url = "/cfa.png"
    const cfa_map = useLoader(THREE.TextureLoader, cfa_url)





return (
    <>
    <Text3D scale={[6, 6, 5]} position={[5,56,178]} rotation={[1.1, 0, 0]} font="./roboto_black.json" >
            Experience {"\n\n"}
            <meshBasicMaterial color={"black"}/>
    </Text3D>
    <Text3D scale={[5, 5, 5]} position={[-13,45,160]} rotation={[1.1, 0, 0]} font="./roboto_black.json" >
             Chick-fil-a {"\n\n"} 
            <meshBasicMaterial color={"black"}/>
    </Text3D>
    </>
    )

}

export default ExperienceText;