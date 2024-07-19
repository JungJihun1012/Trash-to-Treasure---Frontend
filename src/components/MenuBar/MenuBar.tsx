import React from "react";
import styled from "styled-components";
import { LoginBtn } from "./LoginBtn";
import { Logo } from "./Logo";
import { TB } from "./TB";

export const MenuBar: React.FC = () => {

    return (
        <Container>
            <Content>
                <Logo />
                <TB />
                <User>
                    <LoginBtn />
                </User>
            </Content>
        </Container>
    );
};

export const Container = styled.div`
    background: linear-gradient(135deg, #666666 0%, #999999 100%);
    height: 70px;
`;
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 95%;
    padding-top: 15px;
`;
export const User = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

