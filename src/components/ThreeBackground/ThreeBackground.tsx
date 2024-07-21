import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MenuBar } from '../MenuBar/MenuBar';
import { ThreeText } from './ThreeText';
import ImageMotion from './ImageMotion';

export const ThreeBackground: React.FC = () => {
    return (
        <MotionContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <MenuBar />
            <ImageContainer>
                <ThreeText />
                <ImageMotion />
            </ImageContainer>
        </MotionContainer>
    );
};

const MotionContainer = motion(styled.div`
    background-color: #333;
    height: 100vh;
    overflow: hidden;
`);
const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: flex-end; */
    margin: 0 auto;
    width: 100%;
`;