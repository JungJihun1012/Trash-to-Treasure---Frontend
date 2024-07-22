import React, { useRef } from 'react';
import { Edges } from '@react-three/drei';
import { Mesh, BoxGeometry } from 'three';

const ColoredEdgesBox: React.FC = () => {
  const innerRef = useRef<Mesh>(null!);

  return (
    <>
      <primitive
        object={new Mesh(new BoxGeometry(3, 3, 3))}
        ref={innerRef}
      />
      <Edges color={0xff0000} />
    </>
  );
};

export default ColoredEdgesBox;
