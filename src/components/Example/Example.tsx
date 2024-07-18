import styled from "styled-components";
import ExampleBox from "./ExampleBox";

const Example = () => {
    return(
        <Container>
            <ExampleBox />
        </Container>
    )
}

export const Container = styled.div`
    // width: 1535px;
    height: 92.3vh;
    background-color: black;
`;
export default Example;