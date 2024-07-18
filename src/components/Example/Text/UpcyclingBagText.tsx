import styled from "styled-components";

const UpcyclingBagText = () => {
    return(
        <Container>
            <HeadText>
                프라이탁
            </HeadText>
            <BodyText>
                못 쓰는 트럭용 방수 천과 자동차 안전벨트를 이용해서 만들어졌다.
            </BodyText>
        </Container>
    );
};

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
export default UpcyclingBagText;