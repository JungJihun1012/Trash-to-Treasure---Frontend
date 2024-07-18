import styled from "styled-components";

const UpcyclingShoesText = () => {
    return(
        <Container>
            <HeadText>
                업사이클링 신발
            </HeadText>
            <BodyText>
                남은 가죽으로 새로운 신발은 만든 것이다.
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
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: #fff;
`;
export default UpcyclingShoesText;