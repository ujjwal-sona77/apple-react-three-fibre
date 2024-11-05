import React from 'react'
import { ScrollControls, useGLTF, useScroll , useTexture } from '@react-three/drei'
import { Group } from 'three'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
const MacConatiner = () => {
    let model = useGLTF('./mac.glb');
    let meshes = {};
    let txt = useTexture('./red.jpg')
    model.scene.traverse((child) => {
        meshes[child.name] = child;
    });
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
    meshes.matte.material.map = txt;
    meshes.matte.material.emissiveIntensity = 0;
    meshes.matte.material.metalness = 0;
    meshes.matte.material.roughness = 1;
    let data = useScroll()

    useFrame((state , delta)=>{
        meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - (data.offset * 90))
    })
  return (
    <group position={[0, -10, 20]}>
        <primitive object={model.scene} />
    </group>
  )
}

export default MacConatiner