import React, { useState } from "react";
import styled from "styled-components";
import { LoginBtn } from "./LoginBtn";
import { RegisterBtn } from "./RegisterBtn";
import { Logo } from "./Logo";
import { Fontawesome } from "./Fontawesome";

export const MenuBar: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <Container>
            <Logo />
            <Content>
                <Fontawesome onClick={toggleDropdown} children={undefined} />
                {dropdownOpen && (
                    <Dropdown>
                        <User>
                            <LoginBtn />
                            <RegisterBtn />
                        </User>
                    </Dropdown>
                )}
            </Content>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
    position: relative;
`;

const Dropdown = styled.div`
    position: absolute;
    top: 40px;
    right: 0;
    background-color: white;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    overflow: hidden;
    z-index: 1;
`;

const User = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: white;
    border-radius: 8px;
`;
