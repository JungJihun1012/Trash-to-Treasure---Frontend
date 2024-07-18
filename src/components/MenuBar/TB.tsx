import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components"

export const TB = () => {
    const location = useLocation();
    
    return (
        <Container>
            <Content>
                <Link to={"/"}>
                    <NavBtn $isSelected={location.pathname === "/main"}>
                        Home
                    </NavBtn>
                </Link>
                <Link to={"/preview"}>
                <NavBtn $isSelected={location.pathname === "/preview" }>
                    Preview
                </NavBtn>
                </Link>
                <Link to={"/three"}>
                <NavBtn $isSelected={location.pathname === "/three"}>
                    3D View
                </NavBtn>
                </Link>
            </Content>
        </Container>
    )
}

export const Container = styled.div``;
export const Content = styled.div`
    width: 200px;
    display: flex;
    gap: 20px;
    color: #fff;
`;
export const NavBtn = styled.div<{$isSelected?: boolean}>`
    cursor: pointer;
`;