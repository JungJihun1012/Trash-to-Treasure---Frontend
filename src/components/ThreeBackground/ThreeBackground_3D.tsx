// src/components/ThreeBackground.js
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import React from 'react';

interface Three3DProps {
    children: React.ReactNode;
}

const ThreeBackground_3D: React.FC<Three3DProps> = ({children}) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Box args={[3, 3, 3]} position={[0, 0, 0]} />
      {children}
    </Canvas>
  );
};

export default ThreeBackground_3D;
