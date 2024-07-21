import { Box, SvgIcon, Switch, TextField, Typography } from '@mui/material';
import React, { ChangeEventHandler, Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import QuestionOption from './QuestionOption';
import { Option, Question, QuestionType } from '../interfaces';
import { modifyQuestion, removeQuestion } from '../store/actions';
import OptionElement from './Option';
import { v4 as uuidv4 } from 'uuid';

type QuestionCardType = {
    question: Question;
    index: number;
    hasError: boolean;
    setValidatedId: Dispatch<SetStateAction<string>>;
};

const QuestionCard: React.FC<QuestionCardType> = ({
    question,
    index,
    hasError,
    setValidatedId,
}) => {
    const dispatch = useDispatch();

    const handleChange: ChangeEventHandler<
        HTMLTextAreaElement | HTMLInputElement
    > = (e) => {
        const { id: key, value } = e.target;
        if (key === 'text' && hasError) {
            setValidatedId('');
        }
        dispatch(modifyQuestion({ ...question, [key]: value }));
    };

    const toggleRequired = () => {
        dispatch(
            modifyQuestion({ ...question, is_required: question.is_required }),
        );
    };

    const handleQuestionDelete = () => {
        dispatch(removeQuestion(question.id));
    };

    const handleChangeOption = (option: QuestionType = 'short_answer') => {
        let tempQuestion: Question = { ...question };
        tempQuestion.descriptive = option;
        switch (option) {
            case 'short_answer':
                tempQuestion.options = [];
                tempQuestion.answer = '';
                break;

            case 'multiple_choice':
            case 'checkbox':
                tempQuestion.options = [
                    {
                        id: uuidv4(),
                        value: '',
                    },
                ];
                tempQuestion.answer = '';
                break;

            case 'rsvp':
                tempQuestion.options = ['Yes', 'No', 'Maybe'].map(
                    (opt: string) => ({ id: uuidv4(), value: opt }),
                );
                tempQuestion.answer = '';
                break;

            default:
                break;
        }
        dispatch(modifyQuestion(tempQuestion));
    };

    const addOption = () => {
        let tempQuestion: Question = { ...question };
        tempQuestion.options = [
            ...tempQuestion.options,
            {
                id: uuidv4(),
                value: '',
            },
        ];
        dispatch(modifyQuestion(tempQuestion));
    };

    const deleteOption = (optionId: string) => {
        let tempQuestion: Question = { ...question };
        tempQuestion.options = tempQuestion.options.filter(
            (opt) => opt.id !== optionId,
        );
        dispatch(modifyQuestion(tempQuestion));
    };

    const handleOptionInput: ChangeEventHandler<
        HTMLTextAreaElement | HTMLInputElement
    > = (e) => {
        let tempQuestion: Question = { ...question };
        let options = tempQuestion.options;
        const { id: key, value } = e.target;
        const index = options.findIndex((opt) => opt.id === key);
        if (index !== -1) {
            options[index].value = value;
        }
        tempQuestion.options = options;
        dispatch(modifyQuestion(tempQuestion));
    };

    return (
        <Box component={'div'} className="question-card">
            <Box className="question-text">
                <Typography component={'p'} className="numbering">
                    {index + 1}.
                </Typography>

                {hasError ? (
                    <TextField
                        error
                        className="w-full"
                        label="Enter question text"
                        id="text"
                        variant="standard"
                        defaultValue={question.text}
                        onChange={handleChange}
                        helperText="Question title is required."
                    />
                ) : (
                    <TextField
                        className="w-full"
                        label="Enter question text"
                        id="text"
                        variant="standard"
                        defaultValue={question.text}
                        onChange={handleChange}
                    />
                )}
            </Box>

            <Box
                style={{
                    display: 'flex',
                    flexWrap: 'wrap-reverse',
                    width: '100%',
                    alignItems: 'start',
                }}
            >
                {question.descriptive === 'short_answer' && (
                    <TextField
                        className="text-box"
                        label="Enter answer here"
                        multiline
                        id="answer"
                        rows={4}
                        defaultValue={question.answer}
                        onChange={handleChange}
                    />
                )}
                {question.descriptive !== 'short_answer' && (
                    <Box
                        component={'div'}
                        className="option-wrapper"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                        }}
                    >
                        {question.options.map((opt: Option, i: number) => (
                            <OptionElement
                                isRSVP={question.descriptive === 'rsvp'}
                                option={opt}
                                key={opt.id}
                                index={i}
                                handleDeleteOption={deleteOption}
                                handleChange={handleOptionInput}
                            />
                        ))}
                    </Box>
                )}

                <Box
                    className="form-type"
                    style={{
                        marginBottom: '0.5rem',
                    }}
                >
                    <QuestionOption
                        question={question}
                        handleChange={handleChangeOption}
                    />
                </Box>
            </Box>

            <Box
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: `${['short_answer', 'rsvp'].includes(question.descriptive) ? 'flex-end' : 'space-between'}`,
                    flexWrap: 'wrap',
                }}
            >
                {!['short_answer', 'rsvp'].includes(question.descriptive) && (
                    <Box
                        component="div"
                        className="add-option"
                        onClick={addOption}
                    >
                        Add Option +
                    </Box>
                )}

                <Box
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '16px',
                        flexWrap: 'wrap',
                    }}
                >
                    <SvgIcon className="form-icon">
                        <svg
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="FileCopyIcon"
                        >
                            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2zm-1 7h5.5L14 6.5z"></path>
                        </svg>
                    </SvgIcon>
                    <SvgIcon
                        className="form-icon active"
                        onClick={handleQuestionDelete}
                    >
                        <svg
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="DeleteIcon"
                        >
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"></path>
                        </svg>
                    </SvgIcon>
                    <Switch onClick={toggleRequired}></Switch>
                    <Typography component={'p'}>Required</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default QuestionCard;
