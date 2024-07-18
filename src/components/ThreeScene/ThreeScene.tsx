import React, { useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Group, Box3, MeshStandardMaterial } from 'three';
import * as THREE from 'three';

interface ThreeSceneProps {
  children: React.ReactNode;
  desiredWidth: number;
}

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>Please try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

// THREE 네임스페이스에 Group 객체를 추가합니다.
extend({ Group });

const ThreeScene: React.FC<ThreeSceneProps> = ({ children, desiredWidth }) => {
  const controlsRef = useRef<Group | null>(null);
  const isMoving = useRef(false);

  const { scene } = useGLTF('/Side_Table.glb') as any;

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
      }
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

  useFrame(() => {
    if (!controlsRef.current) return;
    if (isMoving.current) {
      controlsRef.current.rotation.y += 0.01;
    }
  });

  return (
      <ErrorBoundary>
        <Canvas>
          <Suspense fallback={null}>
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <perspectiveCamera position={[0, 0, 5]} />
            <group ref={controlsRef as React.RefObject<THREE.Group>}>
              <primitive object={scene} />
              {children}
            </group>
          </Suspense>
        </Canvas>
      </ErrorBoundary>
  );
};

export default ThreeScene;

useGLTF.preload('/Side_Table.glb');