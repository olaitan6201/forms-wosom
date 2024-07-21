import {
    Button,
    ButtonGroup,
    ClickAwayListener,
    Grow,
    MenuItem,
    MenuList,
    Paper,
    Popper,
    SvgIcon,
} from '@mui/material';
import React from 'react';
import { OptionType, Question, QuestionType } from '../interfaces';

const options: OptionType[] = [
    {
        svg: (
            <svg
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="RadioButtonCheckedIcon"
            >
                <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path>
            </svg>
        ),
        text: 'Multiple Choice',
        value: 'multiple_choice',
    },
    {
        svg: (
            <svg
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="CheckBoxIcon"
            >
                <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
            </svg>
        ),
        text: 'Checkbox',
        value: 'checkbox',
    },
    {
        svg: (
            <svg
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="TextFieldsIcon"
            >
                <path d="M2.5 4v3h5v12h3V7h5V4zm19 5h-9v3h3v7h3v-7h3z"></path>
            </svg>
        ),
        text: 'Short Answer Checkbox',
        value: 'short_answer',
    },
    {
        svg: (
            <svg
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="CleanHandsIcon"
            >
                <path d="m16.99 5 .63 1.37 1.37.63-1.37.63L16.99 9l-.63-1.37L14.99 7l1.37-.63zM11 6.13V4h2c.57 0 1.1.17 1.55.45l1.43-1.43C15.15 2.39 14.13 2 13 2H7.5v2H9v2.14C7.23 6.51 5.81 7.8 5.26 9.5h3.98L15 11.65v-.62c0-2.42-1.72-4.44-4-4.9M1 22h4V11H1zm19-5h-7l-2.09-.73.33-.94L13 16h2.82c.65 0 1.18-.53 1.18-1.18 0-.49-.31-.93-.77-1.11L8.97 11H7v9.02L14 22l8-3c-.01-1.1-.89-2-2-2m0-3c1.1 0 2-.9 2-2s-2-4-2-4-2 2.9-2 4 .9 2 2 2"></path>
            </svg>
        ),
        text: 'RSVP',
        value: 'rsvp',
    },
];

const QuestionOption: React.FC<{
    question: Question;
    handleChange: (val: QuestionType) => any;
}> = ({ question, handleChange }) => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(
        options.findIndex((opt) => opt.value === question.descriptive) ?? 2,
    );

    const handleClick = () => {};

    const handleMenuItemClick = (index: number) => {
        setSelectedIndex(index);
        const option: OptionType | undefined = options.find(
            (_, i) => i === index,
        );
        handleChange(option?.value ?? 'short_answer');
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    return (
        <React.Fragment>
            <ButtonGroup
                variant="contained"
                ref={anchorRef}
                aria-label="Button group with a nested menu"
            >
                <Button onClick={handleClick}>Descriptive</Button>
                <Button
                    size="small"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                >
                    <SvgIcon>
                        <svg
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="KeyboardArrowDownIcon"
                        >
                            <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"></path>
                        </svg>
                    </SvgIcon>
                </Button>
            </ButtonGroup>
            <Popper
                sx={{
                    zIndex: 1,
                }}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom'
                                    ? 'center top'
                                    : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu" autoFocusItem>
                                    {options.map(
                                        (
                                            { svg: SVG, text: option, value },
                                            index,
                                        ) => (
                                            <MenuItem
                                                key={value}
                                                disabled={
                                                    index === selectedIndex
                                                }
                                                selected={
                                                    index === selectedIndex
                                                }
                                                className="option"
                                                onClick={() =>
                                                    handleMenuItemClick(index)
                                                }
                                            >
                                                <SvgIcon
                                                    style={{
                                                        width: '1em',
                                                        height: '1em',
                                                        fontSize: '18px',
                                                        color: 'rgba(0, 0, 0, 0.6)',
                                                        marginRight: '12px',
                                                    }}
                                                >
                                                    {SVG}
                                                </SvgIcon>
                                                <span>{option}</span>
                                            </MenuItem>
                                        ),
                                    )}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </React.Fragment>
    );
};

export default QuestionOption;
