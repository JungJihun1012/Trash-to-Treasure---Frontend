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
    background: linear-gradient(135deg, #666666 0%, #999999 100%);
    height: 100vh;
`);
