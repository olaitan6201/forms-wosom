import { Box, Container, SvgIcon } from '@mui/material';
import React from 'react';
import QuestionCard from './QuestionCard';

const QuestionsWrapper: React.FC = () => (
    <Container maxWidth="md" className="questions-wrapper">
        <QuestionCard />

        <AddNewQuestion />
    </Container>
);

export const AddNewQuestion: React.FC = () => (
    <Box className="add-question">
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
