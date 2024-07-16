import React, {  Ref, useEffect, useRef, } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group, Object3DEventMap, Vector3 } from 'three';

interface ThreeSceneProps {
  children: React.ReactNode;
  ref: Ref<Group> //  Optional ref prop
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ children, ref }) => {
  const controlsRef = ref || useRef<Group<Object3DEventMap>>();
  const moveForward = useRef(false);
  const moveBackward = useRef(false);
  const moveLeft = useRef(false);
  const moveRight = useRef(false);
  const velocity = useRef(new Vector3());
  const direction = useRef(new Vector3());

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'KeyW':
          moveForward.current = true;
          break;
        case 'KeyS':
          moveBackward.current = true;
          break;
        case 'KeyA':
          moveLeft.current = true;
          break;
        case 'KeyD':
          moveRight.current = true;
          break;
        default:
          break;
      }
    };

    const onKeyUp = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'KeyW':
          moveForward.current = false;
          break;
        case 'KeyS':
          moveBackward.current = false;
          break;
        case 'KeyA':
          moveLeft.current = false;
          break;
        case 'KeyD':
          moveRight.current = false;
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  useFrame(() => {
    if (!!controlsRef) return;

    velocity.current.x -= velocity.current.x * 10.0 * 0.02;
    velocity.current.z -= velocity.current.z * 10.0 * 0.02;

    direction.current.z = Number(moveForward.current) - Number(moveBackward.current);
    direction.current.x = Number(moveRight.current) - Number(moveLeft.current);
    direction.current.normalize();

    if (moveForward.current || moveBackward.current) velocity.current.z -= direction.current.z * 400.0 * 0.02;
    if (moveLeft.current || moveRight.current) velocity.current.x -= direction.current.x * 400.0 * 0.02;

    if (controlsRef.current) {
      controlsRef.current.translateX(velocity.current.x * 0.02);
      controlsRef.current.translateZ(velocity.current.z * 0.02);
    }
  });

  return <group ref={controlsRef.current ? controlsRef.current : null}>{children}</group>;
};

export default ThreeScene;
