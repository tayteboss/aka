import React, { useRef, Suspense } from "react";
import styled from 'styled-components';
// R3F
import { Canvas, useFrame, extend, useThree } from "react-three-fiber";
import { useGLTFLoader } from "drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

const ThreeWrapper = styled.section`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: #000;
  z-index: -10;
`;

function Model({ url }) {
  const gltf = useGLTFLoader(url, true);
  return <primitive object={gltf.scene} dispose={null} />;
}

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} enableZoom={false} />;
};

const Lights = () => {
  return (
    <>
      {/* Ambient Light illuminates lights for all objects */}
      <ambientLight intensity={0.3} />
        {/* Our main source of light, also casting our shadow */}
        <directionalLight
          castShadow
          position={[0, 0.5, 0]}
          intensity={0.05}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/* A light to help illumnate the spinning boxes */}
        <pointLight position={[-10, 0, -20]} intensity={0.05} />
        <pointLight position={[0, -10, 0]} intensity={0.05} />
        <pointLight position={[10, 0, 0]} intensity={0.05} />
        <pointLight position={[10, 0, 0]} intensity={0.05} />
    </>
  );
};

const HTMLContent = ({
  modelPath,
}) => {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.01));
  return (
    <mesh ref={ref}>
      <Model url={modelPath} />
    </mesh>
  );
};

const CanvasThree = () => {
  return (
    <ThreeWrapper>
      <Canvas
        concurrent
        colorManagement
        camera={{ position: [1.6, 0, 0], fov: 70 }}
      >
        <CameraControls />
        <Lights />
        <Suspense fallback={null}>
          <HTMLContent modelPath='/gitf-box.gltf' />
        </Suspense>
      </Canvas>
    </ThreeWrapper>
  );
};

export default CanvasThree;
