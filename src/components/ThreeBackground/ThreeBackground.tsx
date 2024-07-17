import React from "react";
import styled from "styled-components";
import ThreeBackground_3D from "./ThreeBackground_3D";
import { MenuBar } from "../MenuBar/MenuBar";


export const ThreeBackground: React.FC = () => {
    return(
        <Container>
            <ThreeBackground_3D>
                <MenuBar />
            </ThreeBackground_3D>
        </Container>
    )
}

export const Container = styled.div``;