import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MenuBar } from '../MenuBar/MenuBar';
import { ThreeText } from './ThreeText';

export const ThreeBackground: React.FC = () => {
    return (
        <MotionContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <MenuBar />
            <ThreeText />
        </MotionContainer>
    );
};

const MotionContainer = motion(styled.div`
    background-color: #333;
    height: 100vh;
`);
