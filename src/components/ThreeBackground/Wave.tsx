// src/components/Wave.tsx

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, BufferGeometry, Material } from "three";

const Wave: React.FC = () => {
  const meshRef = useRef<Mesh<BufferGeometry, Material | Material[]>>(null!);
  const clock = useRef(0);

  useFrame(() => {
    clock.current += 0.01;
    if (meshRef.current) {
      const positions = meshRef.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        positions[i + 2] = Math.sin(x * 0.5 + clock.current) * Math.cos(y * 0.5 + clock.current);
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <primitive object={meshRef.current}>
      <planeBufferGeometry args={[10, 10, 50, 50]} />
      <meshBasicMaterial color="#0066ff" wireframe />
    </primitive>
  );
};

export default Wave;
