import styled from "styled-components";
import React from "react";
import ExampleImage from "./ExampleImage";
import ExampleText from "./ExampleText";

const ExampleBox: React.FC = () => {
    return(
        <Container>
            <Box>
                <ExampleImage />
                <ExampleText />
            </Box>
            <Box>
                <ExampleImage />
                <ExampleText />
            </Box>
            <Box>
                <ExampleImage />
                <ExampleText />
            </Box>
            <Box>
                <ExampleImage />
                <ExampleText />
            </Box>
        </Container>
    )
}

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 50px;
`;
export const Box = styled.div`
    width: 300px;
    height: 400px;
    border-radius: 20px;
    background-color: #676363;
`;
export default ExampleBox;