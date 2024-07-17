import styled from "styled-components"
import React from "react";
import BoxScene from "../components/ThreeScene/BoxScene";


const ThreePage: React.FC= () => {
    return(
        <Container>
            <BoxScene />
        </Container>
    )
}

export default ThreePage;
export const Container = styled.div``;