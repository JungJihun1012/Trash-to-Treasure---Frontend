import styled from "styled-components"
import ThreeScene from "../components/ThreeScene/ThreeScene";
import React from "react";

interface childrenProps {
    children: string;
}

export const ThreePage: React.FC<childrenProps> = ({children}) => {
    return(
        <Container>
            <ThreeScene>
                {children}
            </ThreeScene>
        </Container>
    )
}

export const Container = styled.div``;