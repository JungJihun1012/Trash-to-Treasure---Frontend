import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ColoredEdgesBox from './ColoredEdgesBox';
import ThreeScene from './ThreeScene';

const BoxScene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10] }} style={{ background: 'black', height: '90vh'}}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <ThreeScene>
        <ColoredEdgesBox />
      </ThreeScene>
      <OrbitControls />
    </Canvas>
  );
};

export default BoxScene;
