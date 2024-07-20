import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const Header: React.FC = () => (
    <Box component={'div'} className="form-header">
        <Grid container spacing={30} width={'100%'}>
            <Grid item md={3}>
                <Typography variant="h3" component="p" className="link">
                    Forms
                </Typography>
            </Grid>
            <Grid item md={3} className="flex items-center navs">
                <Typography variant="h5" component="p" className="link">
                    Questions
                </Typography>
                <Typography variant="h5" component="p" className="link">
                    QuestionForum
                </Typography>
            </Grid>
        </Grid>
    </Box>
);

export default Header;
