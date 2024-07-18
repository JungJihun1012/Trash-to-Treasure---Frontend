import { Link } from "react-router-dom";
import styled from "styled-components";

const UpcyclingGuitar = () => {
    return (
        <Container>
            <GuitarImage>
                <Button to="/three">View in 3D</Button>
            </GuitarImage>
        </Container>
    )
}

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
`;
export const Button = styled(Link)`
    position: absolute;
    bottom: -5px; /* 초기 위치를 이미지 하단에 설정 */
    left: 26%;
    transform: translateX(0);
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
`;
export const GuitarImage = styled.div`
    width: 252px;
    height: 200px;
    background: url("/Images/UpcyclingGiutar.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative; /* 자식 요소의 위치를 설정할 수 있도록 position을 relative로 설정 */
    overflow: hidden; /* 버튼이 이미지 밖으로 나가지 않도록 설정 */
    
    &:hover ${Button} {
        opacity: 1;
        transform: translateY(-20px); /* 버튼이 위로 이동하도록 설정 */
    }
`;
export default UpcyclingGuitar;
