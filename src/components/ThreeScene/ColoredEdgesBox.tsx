// import React, { useRef } from 'react';
// // import { useFrame, useLoader } from '@react-three/fiber';
// import { Edges } from '@react-three/drei';
// import { Mesh, BoxGeometry, MeshStandardMaterial } from 'three';
// import { Group } from 'three/examples/jsm/libs/tween.module.js';

// const ColoredEdgesBox: React.FC = () => {
//   const innerRef = useRef<Mesh>(null!);
//   const controlsRef = useRef<Group>(new Group());

//   return (
//     <>
//     <group ref={controlsRef}>
//     </group>
//       <primitive
//         object={new Mesh(new BoxGeometry(3, 3, 3), new MeshStandardMaterial())}
//         ref={innerRef}
//       />
//       <Edges color={0xff0000} />
//     </>
//   );
// };

// export default ColoredEdgesBox;
