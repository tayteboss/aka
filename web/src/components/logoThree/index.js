import React, { useRef } from 'react';
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function LogoThree() {
  const group = useRef();
  const { nodes } = useLoader(GLTFLoader, '/gitf-box.glb');
  return (
    <group ref={group}>
        <mesh visible geometry={nodes.Default.geometry}>
          <meshStandardMaterial
            attach='material'
            color='white'
            roughness={0.3}
            metalness={0.3}
          />
        </mesh>
    </group>
  );
}

export default LogoThree;
