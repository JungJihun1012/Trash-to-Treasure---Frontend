import styled from "styled-components"

export const LoginBtn = () => {
    return (
        <Container>
            <Loginbtn>
                Login/ Sign Up
            </Loginbtn>
        </Container>
    )
}

export const Container = styled.div`
`;
export const Loginbtn = styled.button`
    background: #d30000;
    padding: 10px 10px;
    border: 1px solid #d30000;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`;
