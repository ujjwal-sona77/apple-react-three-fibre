import React from 'react'
import { Canvas } from '@react-three/fiber'
import { ScrollControls, useGLTF } from '@react-three/drei'
import { OrbitControls, Environment } from '@react-three/drei'
import MacContainer from './MacConatiner'
const LandingPage = () => {
    let model = useGLTF('./mac.glb')
    return (
        <Canvas camera={{fov: 12 , position: [0, -10, 220]}}>
            <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/billiard_hall_2k.hdr"]} />
            <ScrollControls pages={3}>
                <MacContainer />
            </ScrollControls>
        </Canvas>
    )
}

export default LandingPage