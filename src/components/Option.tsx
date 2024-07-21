import { Box, Checkbox, SvgIcon, TextField, Typography } from '@mui/material';
import React, { ChangeEventHandler } from 'react';
import { Option } from '../interfaces';

type ElementType = {
    option: Option;
    index: number;
    isRSVP: boolean;
    handleDeleteOption: (optionId: string) => void;
    handleChange: ChangeEventHandler<
        HTMLTextAreaElement | HTMLInputElement
    >;
};

const OptionElement: React.FC<ElementType> = ({
    index,
    option,
    isRSVP,
    handleDeleteOption,
    handleChange,
}) => (
    <Box className="option-container" component={'div'}>
        <Checkbox />
        {isRSVP ? (
            <Typography style={{ marginLeft: '10px', width: '20%' }}>
                {option.value}
            </Typography>
        ) : (
            <TextField
                style={{ marginLeft: '10px' }}
                label={`Option ${index + 1}`}
                id={option.id}
                variant="standard"
                defaultValue={option.value}
                onChange={handleChange}
            />
        )}
        <SvgIcon
            className="action-button"
            onClick={() => handleDeleteOption(option.id)}
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
    </Box>
);

export default OptionElement;
