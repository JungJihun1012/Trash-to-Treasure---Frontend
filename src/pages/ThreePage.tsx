import styled from "styled-components"
import React from "react";
import BoxScene from "../components/ThreeScene/BoxScene";


export const ThreePage: React.FC= () => {
    return(
        <Container>
            <BoxScene />
        </Container>
    )
}

export const Container = styled.div``;