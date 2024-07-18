import styled from "styled-components"
import { MenuBar } from "../components/MenuBar/MenuBar";
import Example from "../components/Example/Example";

const PreviewPage = () => {
    return(
        <Container>
            <MenuBar />
            <Example />
        </Container>
    )
}

export default PreviewPage
export const Container = styled.div``;