import { v4 as uuidv4 } from 'uuid';
import { AppDispatch } from './';
import { addQuestion, updateQuestion, deleteQuestion } from './formSlice';
import { Question } from '../interfaces';

export const createQuestion = (questionData: Omit<Question, 'id'>): any => (dispatch: AppDispatch) => {
  const newQuestion = { ...questionData, id: uuidv4() };
  dispatch(addQuestion(newQuestion));
};

export const modifyQuestion = (questionData: Question): any => (dispatch: AppDispatch) => {
  dispatch(updateQuestion(questionData));
};

export const removeQuestion = (questionId: string): any => (dispatch: AppDispatch) => {
  dispatch(deleteQuestion(questionId));
};
