import styled from "styled-components"
import { MenuBar } from "../components/MenuBar/MenuBar";
// import { ThreeBackground } from "../components/ThreeBackground/ThreeBackground";

export const MainPage = () => {
    return(
        <Container>
            {/* <ThreeBackground /> */}
            <MenuBar />
        </Container>
    )
}

export const Container = styled.div``;