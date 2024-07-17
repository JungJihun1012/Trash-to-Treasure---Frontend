import styled from "styled-components"

export const LoginBtn = () => {
    return (
        <Container>
            <Loginbtn>
                로그인
            </Loginbtn>
        </Container>
    )
}

export const Container = styled.div``;
export const Loginbtn = styled.button`
    cursor: pointer;
    background: #4b6cb7;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 5px 0;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s, transform 0.3s;

    &:hover {
        background: #182848;
        transform: scale(1.05);
    }
`;
