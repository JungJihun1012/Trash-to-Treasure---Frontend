import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, extend, useThree } from '@react-three/fiber';
import { Group, Box3, MeshStandardMaterial } from 'three';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

extend({ Canvas });

interface ThreeSceneProps {
  children: React.ReactNode;
  desiredWidth: number;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ children, desiredWidth }) => {
  const controlsRef = useRef<Group | null>(null);
  const isMoving = useRef(false);

  const { scene } = useGLTF('/Side_Table.glb') as any;
  const { camera } = useThree();

  useEffect(() => {
    scene.position.set(0, 0, 0);
    scene.scale.set(1, 1, 1);

    const box = new Box3().setFromObject(scene);
    const originalWidth = box.max.x - box.min.x;
    const scaleFactor = desiredWidth / originalWidth;
    scene.scale.set(scaleFactor, scaleFactor, scaleFactor);

    const material = new MeshStandardMaterial({ color: 'red', roughness: 0.5, metalness: 0.5 });
    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.material = material;
      };
    });
  }, [scene, desiredWidth]);

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

  useEffect(() => {
    camera.position.set(0, 0, 5);
  }, [camera]);

  return (
    <div>
      <Canvas>
        <Suspense fallback={null}>
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <group ref={controlsRef as React.RefObject<THREE.Group>}>
            <primitive object={scene} />
            {children}
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;

useGLTF.preload('/Side_Table.glb');