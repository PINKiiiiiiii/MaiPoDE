import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

function Model(props) {
  const { scene } = useGLTF("/bmw.glb");
  return <primitive object={scene} scale={0.01} {...props} />;
}

function Brain(props) {
  return (
    <section className="App-header">
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ fov: 45 }}
        style={{ position: "absolute" }}
      >
        <color attach="background" args={["#101010"]} />
        <pointLight position={[10, 10, 10]} />
        <ambientLight />
        <PresentationControls
          speed={1.5}
          global
          zoom={0.5}
          polar={[-0.6, Math.PI / 4]}
        >
          <Stage environment={null}>
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
      {/* <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ fov: 45 }}
        style={{ position: "absolute" }}
      >
        <color attach="background" args={["#101010"]} />
        <pointLight position={[10, 10, 10]} />
        <ambientLight />
        <Model scale={0.05} />
      </Canvas>
      <Canvas
        dpr={[5, 5]}
        shadows
        camera={{ fov: 45 }}
        style={{ position: "absolute" }}
      >
        <color attach="background" args={["#101010"]} />
        <pointLight position={[10, 10, 10]} />
        <ambientLight />
        <Model scale={0.05} />
      </Canvas> */}
    </section>
  );
}

export default Brain;
