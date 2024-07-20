import { Box, SvgIcon, Switch, TextField, Typography } from '@mui/material';
import React from 'react';
import QuestionOption from './QuestionOption';

const QuestionCard: React.FC = () => (
    <Box component={'div'} className="question-card">
        <Box className="question-text">
            <Typography component={'p'} className="numbering">
                1.
            </Typography>
            <TextField
                className="w-full"
                label="Enter question text"
                multiline
                maxRows={4}
                variant="standard"
            />
        </Box>

        <Box style={{ display: 'flex', width: '100%', alignItems: 'start' }}>
            <TextField
                className="text-box"
                label="Enter answer here"
                multiline
                rows={4}
            />
            <Box className="form-type">
                <QuestionOption />
            </Box>
        </Box>

        <Box
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
            }}
        >
            <Box
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '16px',
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
                <SvgIcon className="form-icon active">
                    <svg
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="DeleteIcon"
                    >
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"></path>
                    </svg>
                </SvgIcon>
                <Switch></Switch>
                <Typography component={'p'}>Required</Typography>
            </Box>
        </Box>
    </Box>
);

export default QuestionCard;
