// src/components/BoxScene.tsx

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import ThreeScene from './ThreeScene';

const BoxScene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <ThreeScene>
        <Box args={[1, 1, 1]} position={[0, 0, 0]} />
      </ThreeScene>
    </Canvas>
  );
};

export default BoxScene;
