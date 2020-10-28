import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import LogoThree from '../logoThree';

const CanvasThree = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <LogoThree position={[-1.2, 0, 0]} />
    </Canvas>
  )
}

export default CanvasThree;
