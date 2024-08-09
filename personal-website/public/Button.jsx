import React, { useCallback, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import TWEEN from '@tweenjs/tween.js'
import { useFrame } from '@react-three/fiber'
import STARTING_Z from './constants'

export default function Button(props) {
  const { nodes, materials } = useGLTF('/Button.gltf')

  const [buttonScale, setButtonScale] = useState([1, 1, 1.9])
  const newButtonScale = [1, 1, 1.2]
  const oldButtonScale = [1, 1, 1.9]

  const resumePosition = STARTING_Z - 25;

  const buttonDown = new TWEEN.Tween(buttonScale)
      .to(newButtonScale, 500)
      .easing(TWEEN.Easing.Sinusoidal.Out)
      .onUpdate(() => {
        setButtonScale([...buttonScale])
      })

  useFrame(() => {
    TWEEN.update()
  })

  const handleButtonPress = () => {
    buttonDown.start()

    const buttonUp = new TWEEN.Tween(buttonScale)
      .to(oldButtonScale, 500)
      .easing(TWEEN.Easing.Sinusoidal.In)
      .onUpdate(() => {
        setButtonScale([...buttonScale])
      })
    buttonDown.chain(buttonUp)
  }

  const downloadResume = () => {
    console.log("Downloading resume...")

    window.open("https://nikhil-vijayvergiya-resume-2024.s3.us-east-2.amazonaws.com/Nikhil+Resume.pdf")
  }

  const onHover = () => {
    handleButtonPress()
  }

  const onButtonClick = () => {
      buttonDown.onComplete(() => {
        downloadResume()
      })
      buttonDown.start();
  }

  return (
    <group {...props} dispose={null} position={[-4.5, 3, resumePosition + 1.6]} rotation={[-Math.PI / 2, 0, -0.9]}>
      <group onPointerEnter={onHover} onClick={onButtonClick} rotation={[Math.PI*6/11, -Math.PI, 0]} scale={[0.025, 0.025, 0.02]}>
        <group scale={buttonScale}>
          <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Cosmopolitan 1']} />
          <mesh
            geometry={nodes['3D_Text_-_R'].geometry}
            material={materials['Garden Glory']}
            position={[-20.914, -3.1, 23.781]}
            rotation={[-1.595, 0, 0]}
            scale={0.24}
          />
          <mesh
            geometry={nodes['3D_Text_-_e'].geometry}
            material={materials['Garden Glory']}
            position={[-14.241, -3.1, 23.781]}
            rotation={[-1.595, 0, 0]}
            scale={0.24}
          />
          <mesh
            geometry={nodes['3D_Text_-_e_1'].geometry}
            material={materials['Garden Glory']}
            position={[13.634, -3.1, 23.781]}
            rotation={[-1.595, 0, 0]}
            scale={0.24}
          />
          <mesh
            geometry={nodes['3D_Text_-_s'].geometry}
            material={materials['Garden Glory']}
            position={[-8.184, -3.1, 23.781]}
            rotation={[-1.595, 0, 0]}
            scale={0.24}
          />
          <mesh
            geometry={nodes['3D_Text_-_u'].geometry}
            material={materials['Garden Glory']}
            position={[-3.034, -3.1, 23.781]}
            rotation={[-1.595, 0, 0]}
            scale={0.24}
          />
          <mesh
            geometry={nodes['3D_Text_-_m'].geometry}
            material={materials['Garden Glory']}
            position={[3.592, -3.1, 23.781]}
            rotation={[-1.595, 0, 0]}
            scale={0.24}
          />
        </group>
        <mesh geometry={nodes.Cylinder.geometry} material={materials.Cosmopolitan} />
      </group>
    </group>
  )
}

useGLTF.preload('/Button.gltf')
