import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormState, Question } from '../interfaces';
import { v4 as uuidv4 } from 'uuid';

const initialState: FormState = {
    title: '',
    subtitle: '',
    description: '',
    questions: [
        {
            id: uuidv4(),
            text: '',
            descriptive: 'short_answer',
            options: [],
            answer: '',
            is_required: false,
        },
    ],
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
        setSubtitle: (state, action: PayloadAction<string>) => {
            state.subtitle = action.payload;
        },
        setDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload;
        },
        addQuestion: (state, action: PayloadAction<Question>) => {
            state.questions.push(action.payload);
        },
        updateQuestion: (state, action: PayloadAction<Question>) => {
            const index = state.questions.findIndex(q => q.id === action.payload.id);
            if (index !== -1) {
                state.questions[index] = action.payload;
            }
        },
        deleteQuestion: (state, action: PayloadAction<string>) => {
            state.questions = state.questions.filter(q => q.id !== action.payload);
        },
    },
});

export const { setTitle, setSubtitle, setDescription, addQuestion, updateQuestion, deleteQuestion } = formSlice.actions;

export default formSlice.reducer;