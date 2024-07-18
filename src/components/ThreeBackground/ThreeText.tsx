import styled from "styled-components"

export const ThreeText = () => {
    return(
        <Container>
            <SpanText>
                <i>U</i>
                <i>P</i>
                <i>C</i>
                <i>Y</i>
                <i>C</i>
                <i>L</i>
                <i>I</i>
                <i>N</i>
                <i>G</i>
            </SpanText>
            <br />
            <SpanText>
                <i>P</i>
                <i>R</i>
                <i>O</i>
                <i>D</i>
                <i>U</i>
                <i>C</i>
                <i>T</i>
                <i>S</i>
            </SpanText>
        </Container>
    )
}

export const Container = styled.div`
    padding: 10% 0 0 50px;
`;
export const SpanText = styled.span`
    line-height: 1em;
    font-size: 100px;
    font-family: "Archivo Black",Arial,sans-serif;
    font-weight: 400;
    font-style: normal;
    letter-spacing: -0.09ex;
    text-transform: uppercase;
    color: #fff;
`;