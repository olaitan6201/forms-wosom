import Box from '@mui/material/Box';
import React from 'react';
import FormWrapper from '../components/FormWrapper';
import FormView from '../components/FormView';

const QuestionForumPage: React.FC = () => (
    <Box component={'div'} className="w-full home-body">
        <FormWrapper>
            <FormView />
        </FormWrapper>
    </Box>
);

export default QuestionForumPage;
