// // AnimatedBackground.tsx
// import React from "react";
// import styled, { keyframes } from "styled-components";

// const move = keyframes`
//   0% { transform: translateX(0); }
//   50% { transform: translateX(20px); }
//   100% { transform: translateX(0); }
// `;

// const Background = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: url('/Images/UpcyclingShoes.jpg') no-repeat center center / cover;
//   z-index: -1;
// `;

// const MovingElement = styled.div`
//   position: absolute;
//   width: 50px;
//   height: 50px;
//   background-color: rgba(255, 255, 255, 0.8);
//   border-radius: 50%;
//   animation: ${move} 5s infinite;
// `;

// interface ChildrenProps {
//   children: React.ReactNode;
// }

// const AnimatedBackground: React.FC<ChildrenProps> = () => {
//   return (
//     <Background>
//       <MovingElement style={{ top: '20%', left: '30%' }} />
//       <MovingElement style={{ top: '40%', left: '50%' }} />
//       <MovingElement style={{ top: '60%', left: '70%' }} />
//     </Background>
//   );
// };

// export default AnimatedBackground;
