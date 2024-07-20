import { Box, Typography } from '@mui/material';
import React from 'react';
import { RootState } from '../store';
import { useSelector } from 'react-redux';

const FormView: React.FC = () => {
    const formState = useSelector((state: RootState) => state.form);

    const { title, subtitle, description } = formState;

    return (
        <Box className="form form-view" component={'div'}>
            <Box className="form-user" component={'div'}>
                <img
                    src="https://static.vecteezy.com/system/resources/previews/027/718/473/non_2x/wedding-couple-in-love-in-flower-arch-generative-ai-photo.jpg"
                    style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '30px',
                    }}
                />
                <Typography component={'p'} className="user-name">
                    Leslie Alexander
                </Typography>
            </Box>
            <Typography component={'p'} className="form-title">
                {title.trim().length > 0
                    ? title
                    : 'Leslie Bridal Shower'}
            </Typography>
            <Typography component={'p'} className="form-subtitle">
                {subtitle.trim().length > 0
                    ? subtitle
                    : 'My Bridal Shower Questionnaire'}
            </Typography>
            <Typography component={'p'} className="form-description">
                {description.trim().length > 0
                    ? description
                    : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliquadolor
                sit amet, consectetur adipiscing elit, sed do`}
            </Typography>
        </Box>
    );
};

export default FormView;
