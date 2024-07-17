import styled from "styled-components"

export const ThreeText = () => {
    return(
        <Container>
            <SpanText>
                <i>T</i>
                <i>R</i>
                <i>A</i>
                <i>S</i>
                <i>H</i>
            </SpanText>
            <br />
            <SpanText>
                <i>T</i>
                <i>R</i>
                <i>E</i>
                <i>A</i>
                <i>S</i>
                <i>U</i>
                <i>R</i>
                <i>E</i>
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
`;