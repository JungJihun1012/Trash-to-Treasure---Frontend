import styled from "styled-components";

const UpcyclingTenisText = () => {
    return(
        <Container>
            <HeadText>
                테니스 공
            </HeadText>
            <BodyText>
            업사이클링 디자이너 니콜 맥래플린이 테니스공을 분해해 디자인한 모자와 장갑.
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
export default UpcyclingTenisText;