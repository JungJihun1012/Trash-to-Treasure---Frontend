import styled from "styled-components"
import { motion } from "framer-motion"

export const ThreeText = () => {
    return (
        <Container>
            <SpanText>
                {Array.from("UPCYC").map((char, index) => (
                    <motion.i
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {char}
                    </motion.i>
                ))}
                <motion.i
                    key={5}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    L
                </motion.i>
                <motion.i
                    key={6}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    I
                </motion.i>
                <motion.i
                    key={7}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    N
                </motion.i>
                <motion.i
                    key={8}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    G
                </motion.i>
            </SpanText>
            <br />
            <SpanText>
                {Array.from("PRODUCTS").map((char, index) => (
                    <motion.i
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {char}
                    </motion.i>
                ))}
            </SpanText>
        </Container>
    )
}

export const Container = styled.div`
    padding: 10%;
`;
export const SpanText = styled.span`
    line-height: 1em;
    font-size: 100px;
    font-family: "Archivo Black", Arial, sans-serif;
    font-weight: 400;
    font-style: normal;
    letter-spacing: -0.09ex;
    text-transform: uppercase;
    color: #fff;
`;
