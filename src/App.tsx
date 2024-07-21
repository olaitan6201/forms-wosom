import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { RootState } from './store';
import Box from '@mui/material/Box';

import {
    createQuestion,
    modifyQuestion,
    removeQuestion,
} from './store/actions';
import Header from './components/Header';
import QuestionsPage from './pages/QuestionsPage';
import QuestionForumPage from './pages/QuestionForumPage';

const FormComponent: React.FC = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: RootState) => state.form);
    return (
        <Box component={'div'} className="w-full">
            <Header />

            <Routes>
                <Route path="/" element={<QuestionsPage />} />
                <Route path="/questions" element={<QuestionsPage />} />
                <Route
                    path="/questions-preview"
                    element={<QuestionForumPage />}
                />
            </Routes>
        </Box>
    );
};

export default FormComponent;
