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
                    3D Preview
                </NavBtn>
                </Link>
                <Link to={"https://veluga.app/channel/669860355b1c601f77d12bab"}>
                <NavBtn $isSelected={location.pathname === "/https://veluga.app/channel/669860355b1c601f77d12bab"}>
                    Help
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
    font-family: "Archivo Black", Arial, sans-serif;
    font-size: 13px;
    /* font-weight: 400; */
    font-style: normal;
    color: #fff;
`;