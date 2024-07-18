import styled from "styled-components"
import React from "react";
import BoxScene from "../components/ThreeScene/BoxScene";
import { MenuBar } from "../components/MenuBar/MenuBar";
import ErrorBoundary from "../components/ThreeScene/ErrorBoundary";


const ThreePage: React.FC= () => {
    return(
        <Container>
            <ErrorBoundary>
                <MenuBar />
                <BoxScene />
            </ErrorBoundary>
        </Container>
    )
}

export const Container = styled.div``;
export default ThreePage;