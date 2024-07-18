import React from 'react';
import { Canvas } from '@react-three/fiber';

import { OrbitControls } from '@react-three/drei';

import ThreeScene from './ThreeScene';
// P를 개별적으로 가져옴
// import PComponent from 'some-library/dist/PComponent';
// extend({ PComponent });

const BoxScene: React.FC = () => {

  return (

    <div style={{ width: '100%', height: '89.9vh', background: 'black' }}>
      <Canvas camera={{ position: [0, 0, 10] }}>

        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <ThreeScene children={undefined} desiredWidth={0}>

        </ThreeScene>
        <OrbitControls />
      </Canvas>
    </div>

  );
};

export default BoxScene;