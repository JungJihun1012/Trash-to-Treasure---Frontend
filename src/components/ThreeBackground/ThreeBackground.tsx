import React from "react";
import styled from "styled-components";
// import ThreeBackground_3D from "./ThreeBackground_3D";
import { MenuBar } from "../MenuBar/MenuBar";
import { ThreeText } from "./ThreeText";


export const ThreeBackground: React.FC = () => {
    return(
        <Container>
            <MenuBar />
            <ThreeText />
        </Container>
    )
}

export const Container = styled.div``;