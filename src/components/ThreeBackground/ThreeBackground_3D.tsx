// src/components/ThreeBackground.tsx

import React from "react";
import { Canvas } from "@react-three/fiber";
import Wave from "./Wave";

const ThreeBackground_3D: React.FC = () => {
    return (
        <Canvas
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            camera={{ position: [0, 0, 5], fov: 75 }}
        >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Wave />
        </Canvas>
    );
};

export default ThreeBackground_3D;