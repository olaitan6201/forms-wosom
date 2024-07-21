import Box from '@mui/material/Box';
import React from 'react';
import FormWrapper from '../components/FormWrapper';
import FormView from '../components/FormView';
import QuestionsWrapper from '../components/QuestionsWrapper';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import QuestionViewCard from '../components/QuestionViewCard';

const QuestionForumPage: React.FC = () => {
    const formState = useSelector((state: RootState) => state.form);

    return (
        <Box component={'div'} className="w-full home-body">
            <FormWrapper>
                <FormView />
            </FormWrapper>
            <QuestionsWrapper maxWidth='sm'>
                {formState.questions.map((question, i) => (
                    <QuestionViewCard
                        key={question.id}
                        question={question}
                        index={i}
                    />
                ))}
            </QuestionsWrapper>
        </Box>
    );
};

export default QuestionForumPage;
