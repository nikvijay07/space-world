import React, { useCallback, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import TWEEN from '@tweenjs/tween.js'
import { useFrame } from '@react-three/fiber'
import STARTING_Z from './constants'
import { Text3D } from '@react-three/drei'

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
    window.open("https://nik-vijay-resume-bucket.s3.us-east-2.amazonaws.com/NikVijayResumeFinal.pdf")
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
          <Text3D
              scale={[7,7,7]}
              position={[-20, 3, resumePosition - 3]}
              rotation={[0, 0, 0]}
              font="./roboto_black.json"
          >
              Download
              <meshToonMaterial color={"#d0d0d0"} />
          </Text3D>
          <Text3D
              scale={[7,7,7]}
              position={[-16, -7, resumePosition - 3]}
              rotation={[0, 0, 0]}
              font="./roboto_black.json"
          >
              Resume
              <meshToonMaterial color={"#d0d0d0"} />
          </Text3D>
        </group>
        <mesh geometry={nodes.Cylinder.geometry} material={materials.Cosmopolitan} />
      </group>
    </group>
  )
}

useGLTF.preload('/Button.gltf')
