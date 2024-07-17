import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Edges } from '@react-three/drei';
import { TextureLoader, Mesh, BoxGeometry, MeshStandardMaterial } from 'three';

const ColoredEdgesBox: React.FC = () => {
  const innerRef = useRef<Mesh>(null!);

  // 텍스처 로드
  const texture = useLoader(TextureLoader, '/UpcyclingShoes.jpg');

  useFrame(() => {
    if (innerRef.current) {
      // 회전 애니메이션
      innerRef.current.rotation.x += 0.01;
      innerRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <primitive
        object={new Mesh(new BoxGeometry(3, 3, 3), new MeshStandardMaterial({ map: texture }))}
        ref={innerRef}
      />
      <Edges color={0xff0000} />
    </>
  );
};

export default ColoredEdgesBox;
