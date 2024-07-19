import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Vector3, Group } from 'three';

interface ThreeSceneProps {
  children: React.ReactNode;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ children }) => {
  const controlsRef = useRef<Group>(new Group());
  const isMoving = useRef(false);
  const velocity = useRef(new Vector3(0, 0, -1)); // Moving forward by default

  useEffect(() => {
    const onMouseDown = (event: MouseEvent) => {
      if (event.button === 0) {
        isMoving.current = true;
      }
    };

    const onMouseUp = (event: MouseEvent) => {
      if (event.button === 0) {
        isMoving.current = false;
      }
    };

    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  useFrame(() => {
    if (controlsRef.current && isMoving.current) {
      controlsRef.current.translateX(velocity.current.x * 0.02);
      controlsRef.current.translateZ(velocity.current.z * 0.02);
    }
  });

  return (
    <mesh>
      <group ref={controlsRef}>
        {children}
      </group>
    </mesh>
  ) 
  ;
};

export default ThreeScene;
