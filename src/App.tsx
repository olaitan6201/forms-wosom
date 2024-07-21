import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';

import Header from './components/Header';
import QuestionsPage from './pages/QuestionsPage';
import QuestionForumPage from './pages/QuestionForumPage';

const FormComponent: React.FC = () => (
    <Box component={'div'} className="w-full">
        <Header />

        <Routes>
            <Route path="/" element={<QuestionsPage />} />
            <Route path="/questions" element={<QuestionsPage />} />
            <Route path="/questions-preview" element={<QuestionForumPage />} />
        </Routes>
    </Box>
);

export default FormComponent;
