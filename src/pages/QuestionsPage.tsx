import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormWrapper from '../components/FormWrapper';
import QuestionsWrapper, {
    AddNewQuestion,
} from '../components/QuestionsWrapper';
import Form from '../components/Form';
import QuestionCard from '../components/QuestionCard';
import { RootState } from '../store';
import { createQuestion } from '../store/actions';

const QuestionsPage: React.FC = () => {
        const dispatch = useDispatch();
        const formState = useSelector((state: RootState) => state.form);
    const [validatedId, setValidatedId] = useState<string>('');

    const handleAddQuestion = (auto: boolean = false) => {
        if (auto && formState.questions.length !== 0) {
            return;
        }

        const id = validateQuestions();

        if (id.trim() === '') {
            dispatch(
                createQuestion({
                    text: '',
                    descriptive: 'short_answer',
                    options: [],
                    answer: '',
                    is_required: false,
                }),
            );
        } else {
            setValidatedId(id);
        }
    };

    const validateQuestions = (): string => {
        return (
            formState.questions.find((q) => q.text.trim().length === 0)?.id ??
            ''
        );
    };

    // const questions: Question[] = useMemo(
    //     () => formState.questions,
    //     [formState.questions.length],
    // );

    return (
        <Box component={'div'} className="w-full home-body">
            <FormWrapper>
                <Form />
            </FormWrapper>
            <QuestionsWrapper maxWidth='md'>
                {formState.questions.map((question, i) => (
                    <QuestionCard
                        key={question.id}
                        question={question}
                        index={i}
                        hasError={validatedId === question.id}
                        setValidatedId={setValidatedId}
                    />
                ))}

                <AddNewQuestion handleClick={() => handleAddQuestion(false)} />
            </QuestionsWrapper>
        </Box>
    );
};

export default QuestionsPage;
