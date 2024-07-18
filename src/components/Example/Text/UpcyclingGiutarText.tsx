import styled from "styled-components";

const UpcyclingGiutarText = () => {
    return(
        <Container>
            <HeadText>
                업사이클링 기타
            </HeadText>
            <BodyText>
                기타를 분해해 책장 서랍으로 사용한다.
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
export default UpcyclingGiutarText;