import styled from "styled-components";
import React from "react";
import UpcyclingBag from "./UpcyclingBag";
import UpcyclingShoes from "./UpcyclingShoes";
import UpcyclingGuitar from "./UpcyclingGiutar";
import UpcyclingTenis from "./UpcyclingTenis";
import UpcyclingBagText from "./Text/UpcyclingBagText";
import UpcyclingTenisText from "./Text/UpcyclingTenis";
import UpcyclingShoesText from "./Text/UpcyclingShoesText";
import UpcyclingGiutarText from "./Text/UpcyclingGiutarText";

const ExampleBox: React.FC = () => {
    return(
        <Container>
            <Box>
                <UpcyclingBag />
                <UpcyclingBagText />
            </Box>
            <Box>
                <UpcyclingShoes />
                <UpcyclingShoesText />
            </Box>
            <Box>
                <UpcyclingGuitar />
                <UpcyclingGiutarText />
            </Box>
            <Box>
                <UpcyclingTenis />
                <UpcyclingTenisText />
            </Box>
        </Container>
    )
}

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 50px;
`;
export const Box = styled.div`
    width: 300px;
    height: 400px;
    border-radius: 20px;
    background-color: #676363;
`;
export default ExampleBox;