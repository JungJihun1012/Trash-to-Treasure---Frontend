import React from "react";
import styled from "styled-components";
// import ThreeBackground_3D from "./ThreeBackground_3D";
import { MenuBar } from "../MenuBar/MenuBar";
import { ThreeText } from "./ThreeText";
// import AnimatedBackground from "./AnimateBackground";
// import AnimatedBackground from "./AnimateBackground";


export const ThreeBackground: React.FC = () => {
    return(
        <Container>
            {/* <AnimatedBackground /> */}
            <MenuBar />
            <ThreeText />
        </Container>
    )
}

export const Container = styled.div``;