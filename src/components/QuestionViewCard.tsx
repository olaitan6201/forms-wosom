import {
    Box,
    Checkbox,
    FormControlLabel,
    FormControlLabelProps,
    FormGroup,
    Radio,
    RadioGroup,
    styled,
    TextField,
    Typography,
    useRadioGroup,
} from '@mui/material';
import React from 'react';
import { Option, Question } from '../interfaces';

type QuestionViewCardType = {
    question: Question;
    index: number;
};

const QuestionViewCard: React.FC<QuestionViewCardType> = ({
    question,
    index,
}) => (
    <Box component={'div'} className="question-card view">
        <Box className="question-text">
            <Box
                style={{
                    backgroundColor: 'rgb(216, 219, 230)',
                    width: '100%',
                }}
            >
                <Typography className="question-view" component={'p'}>
                    <span
                        style={{
                            fontSize: '16px',
                            fontWeight: 800,
                            padding: '5px',
                            marginRight: '10px',
                        }}
                    >
                        {index + 1}.
                    </span>
                    {question.text}?
                </Typography>
            </Box>
        </Box>
        {question.is_required && (
            <Box className="required">
                <Typography className="text">Required*</Typography>
            </Box>
        )}

        <Box
            style={{
                width: '100%',
                marginTop: '16px',
                marginBottom: '8px',
            }}
        >
            {question.descriptive === 'short_answer' && (
                <TextField
                    className="text-box view"
                    label="Enter answer here"
                    multiline
                    id="answer"
                    rows={4}
                    defaultValue={question.answer}
                />
            )}
            {question.descriptive !== 'short_answer' &&
            question.descriptive === 'checkbox' ? (
                <FormGroup>
                    {question.options.map((opt: Option) => (
                        <FormControlLabel
                            key={`option-${opt.id}`}
                            control={<Checkbox value={opt.id} />}
                            label={opt.value}
                        />
                    ))}
                </FormGroup>
            ) : (
                <RadioGroup
                    name="use-radio-group"
                >
                    {question.options.map((opt: Option) => (
                        <RadioControlLabel
                            value={opt.id}
                            label={opt.value}
                            control={<Radio />}
                        />
                    ))}
                </RadioGroup>
            )}
        </Box>

        <Box
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                flexWrap: 'wrap',
            }}
        >
            <Box
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '16px',
                    flexWrap: 'wrap',
                }}
                className="required"
            >
                <Typography component={'p'} className="text">
                    Clear response*
                </Typography>
            </Box>
        </Box>
    </Box>
);

interface StyledFormControlLabelProps extends FormControlLabelProps {
    checked: boolean;
}

const RadioControlLabel = (props: FormControlLabelProps) => {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
        checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
    <FormControlLabel {...props} />
))(({ theme, checked }) => ({
    '.MuiFormControlLabel-label': checked && {
        color: theme.palette.primary.main,
    },
}));

export default QuestionViewCard;
