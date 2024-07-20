import { Box } from '@mui/material';
import React from 'react';

const FormWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Box component={'div'} className="image-container">
        <img
            src="https://static.vecteezy.com/system/resources/previews/027/718/473/non_2x/wedding-couple-in-love-in-flower-arch-generative-ai-photo.jpg"
            style={{ minWidth: '90%', height: '550px' }}
        />

        {children}
    </Box>
);

export default FormWrapper;
