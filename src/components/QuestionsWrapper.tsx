import { Box, Container, SvgIcon } from '@mui/material';
import React from 'react';

const QuestionsWrapper: React.FC<{ children: React.ReactNode, maxWidth: any }> = ({
    children,
    maxWidth
}) => (
    <Container maxWidth={maxWidth} className="questions-wrapper">
        {children}
    </Container>
);

export const AddNewQuestion: React.FC<{ handleClick: () => void }> = ({
    handleClick,
}) => (
    <Box className="add-question" onClick={handleClick}>
        <SvgIcon>
            <svg
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="AddIcon"
            >
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"></path>
            </svg>
        </SvgIcon>
    </Box>
);

export default QuestionsWrapper;
