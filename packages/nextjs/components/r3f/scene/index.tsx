"use client";

import Experience from "../Experience";
import s from "./scene.module.scss";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ACESFilmicToneMapping } from "three";

const Scene = () => {
  return (
    <>
      <div id={s.webgl}>
        <Canvas gl={{ antialias: true, toneMapping: ACESFilmicToneMapping }} camera={{ position: [0, 10, 10] }}>
          <Experience />
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
};

export default Scene;
