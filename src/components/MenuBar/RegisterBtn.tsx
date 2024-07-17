import styled from "styled-components"

export const RegisterBtn = () => {
    return(
        <Container>
            <Registerbtn>
                회원가입
            </Registerbtn>
        </Container>
    )
}

export const Container = styled.div``;
export const Registerbtn = styled.button`
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