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
    width: 1535px;
    height: 625px;
    background-color: black;
`;
export default Example;