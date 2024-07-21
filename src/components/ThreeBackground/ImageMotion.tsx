import { motion } from "framer-motion";
import styled from "styled-components";

const ImageMotion = () => {
    return(
        <ImageMotionContainer
            initial={{ opacity: 0, x: "100%"}}
            animate={{ opacity: 1, x: 0}}
            transition={{ duration: 1}}
        >
            <Image />
        </ImageMotionContainer>
    )
}

const ImageMotionContainer = motion(styled.div`
`);

export const Image = styled.div`
    background-image: url("/Images/Guitar.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 20px;
    width: 500px;
    height: 340px;
`;
export default ImageMotion;