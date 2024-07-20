import Box from '@mui/material/Box';
import React from 'react';
import FormWrapper from '../components/FormWrapper';
import QuestionsWrapper from '../components/QuestionsWrapper';
import { setTitle, setSubtitle, setDescription } from '../store/formSlice';
import Form from '../components/Form';

const QuestionsPage: React.FC = () => (
    <Box component={'div'} className="w-full home-body">
        <FormWrapper>
            <Form />
        </FormWrapper>
        <QuestionsWrapper />
    </Box>
);

export default QuestionsPage;
