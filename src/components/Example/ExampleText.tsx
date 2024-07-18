import styled from "styled-components";

const ExampleText = () => {
    return(
        <Container>
            <HeadText>
                Example lorem
            </HeadText>
            <BodyText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus explicabo, possimus id a, totam quibusdam dolor, quis hic nulla laudantium unde nemo. Repellat magni ut harum voluptatem quas, libero facere?
            </BodyText>
        </Container>
    )
}

export const Container = styled.div``;
export const HeadText = styled.div`
    padding-top: 15px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`;
export const BodyText = styled.div`
    padding-top: 20px;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    color: #fff;
`;
export default ExampleText;