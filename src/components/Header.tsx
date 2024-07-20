import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
    <Box component={'div'} className="form-header">
        <Grid container spacing={30} width={'100%'}>
            <Grid item md={3}>
                <Link to={'/'}>
                    <Typography variant="h3" component="p" className="link">
                        Forms
                    </Typography>
                </Link>
            </Grid>
            <Grid item md={3} className="flex items-center navs">
                <Link to={'/questions'}>
                    <Typography variant="h5" component="p" className="link">
                        Questions
                    </Typography>
                </Link>

                <Link to={'/questions-preview'}>
                    <Typography variant="h5" component="p" className="link">
                        QuestionForum
                    </Typography>
                </Link>
            </Grid>
        </Grid>
    </Box>
);

export default Header;
