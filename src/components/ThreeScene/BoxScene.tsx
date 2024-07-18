import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ColoredEdgesBox from './ColoredEdgesBox';
import ThreeScene from './ThreeScene';

const BoxScene: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '89.9vh', background: 'black' }}>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <ThreeScene>
          <ColoredEdgesBox />
        </ThreeScene>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default BoxScene;
