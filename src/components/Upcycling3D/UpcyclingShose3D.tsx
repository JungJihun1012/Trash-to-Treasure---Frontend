import { useEffect, useRef } from "react";
import styled from "styled-components";
import * as THREE from 'three';

const UpcyclingShose3D = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        if (canvasRef.current instanceof HTMLDivElement) {
            canvasRef.current.appendChild(renderer.domElement);
        }
        if(!!canvasRef.current){
            canvasRef.current.appendChild(renderer.domElement);
        }
        
        const textureLoader = new THREE.TextureLoader();
        const imageSrc = '/Images/UpcyclingShose.jpg'; // imageSrc 변수를 정의합니다.
        const texture = textureLoader.load(imageSrc);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            renderer.domElement.remove();
        };
    }, []);

    return (
        <Container>
            <div ref={canvasRef} />
        </Container>
    );
};

export const Container = styled.div``;
export default UpcyclingShose3D;