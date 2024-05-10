import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Welcome(props) {
  const { nodes, materials } = useGLTF('/welcome.gltf')
  return (
    <group {...props} dispose={null} scale={20} rotation={[-Math.PI / 4, Math.PI / 10, 0]} position={[-6, 4, 19]}>
      <group position={[0.161, 0.002, 0.025]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
        <mesh geometry={nodes.Body.geometry} material={materials['Plastic 3']} position={[29.779, -2.186, 42.953]} scale={18.771} />
        <mesh geometry={nodes.Accessories.geometry} material={materials['Metal 3']} position={[28.803, -3.345, 31.804]} scale={18.771} />
        <mesh geometry={nodes.Lights.geometry} material={materials['Glass 3']} position={[26.493, -10.59, 51.891]} scale={18.771} />
        <mesh geometry={nodes.Hands_and_Legs.geometry} material={materials['Metal 3']} position={[28.571, -6.885, 3.44]} scale={18.771} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
        <mesh geometry={nodes['3D_Text_-_m'].geometry} material={materials.Ballon} position={[-156.55, 0, 0]} />
        <mesh geometry={nodes['3D_Text_-_m_1'].geometry} material={materials.Ballon} position={[0.15, 0, 50.422]} />
        <mesh geometry={nodes['3D_Text_-_y'].geometry} material={materials.Ballon} position={[-116.05, 0, 0]} />
        <mesh geometry={nodes['3D_Text_-_u'].geometry} material={materials.Ballon} position={[-67.45, 0, 0]} />
        <mesh geometry={nodes['3D_Text_-_n'].geometry} material={materials.Ballon} position={[-35.95, 0, 0]} />
        <mesh geometry={nodes['3D_Text_-_i'].geometry} material={materials.Ballon} position={[-4.45, 0, 0]} />
        <mesh geometry={nodes['3D_Text_-_v'].geometry} material={materials.Ballon} position={[7.25, 0, 0]} />
        <mesh geometry={nodes['3D_Text_-_e'].geometry} material={materials.Ballon} position={[37.85, 0, 0]} />
        <mesh geometry={nodes['3D_Text_-_e_1'].geometry} material={materials.Ballon} position={[121.55, 0, 0]} />
        <mesh geometry={nodes['3D_Text_-_e_2'].geometry} material={materials.Ballon} position={[-104.25, 0, 50.422]} />
        <mesh geometry={nodes['3D_Text_-_e_3'].geometry} material={materials.Ballon} position={[40.65, 0, 50.422]} />
        <mesh geometry={nodes['3D_Text_-_r'].geometry} material={materials.Ballon} position={[69.35, 0, 0]} />
        <mesh geometry={nodes['3D_Text_-_s'].geometry} material={materials.Ballon} position={[90.05, 0, 0]} />
        <mesh geometry={nodes['3D_Text_-_w'].geometry} material={materials.Ballon} position={[-143.85, 0, 50.422]} />
        <mesh geometry={nodes['3D_Text_-_l'].geometry} material={materials.Ballon} position={[-72.75, 0, 50.422]} />
        <mesh geometry={nodes['3D_Text_-_c'].geometry} material={materials.Ballon} position={[-61.05, 0, 50.422]} />
        <mesh geometry={nodes['3D_Text_-_o'].geometry} material={materials.Ballon} position={[-31.35, 0, 50.422]} />
        <mesh geometry={nodes['3D_Text_-_o_1'].geometry} material={materials.Ballon} position={[110.85, 0, 50.422]} />
        <mesh geometry={nodes['3D_Text_-_t'].geometry} material={materials.Ballon} position={[90.15, 0, 50.422]} />
      </group>
    </group>
  )
}

useGLTF.preload('/welcome.gltf')
