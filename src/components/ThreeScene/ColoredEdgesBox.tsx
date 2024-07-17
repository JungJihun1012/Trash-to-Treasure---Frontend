// src/components/ColoredEdgesBox.tsx

import React, { forwardRef, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Edges } from '@react-three/drei';
import { Material, Mesh, Object3D} from 'three';

interface ColoredEdgesBoxProps {
  forwardedRef?: React.Ref<Mesh<Object3D ,Material>>;
}

const ColoredEdgesBox = forwardRef<Object3D, ColoredEdgesBoxProps>(() => {
  const innerRef = useRef<Object3D>(null!);

  useFrame(() => {
    if (innerRef.current) {
      // Example rotation animation
      innerRef.current.rotation.x += 0.01;
      innerRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={innerRef as any}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={0x00ff00} />
      <Edges color={0xff0000} />
    </mesh>
  );
});

export default ColoredEdgesBox;
