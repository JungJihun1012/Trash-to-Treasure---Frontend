import styled from "styled-components"
import React from "react";
import BoxScene from "../components/ThreeScene/BoxScene";
import { MenuBar } from "../components/MenuBar/MenuBar";


const ThreePage: React.FC= () => {
    return(
        <Container>
                <MenuBar />
                <BoxScene />
        </Container>
    )
}

export const Container = styled.div``;
export default ThreePage;