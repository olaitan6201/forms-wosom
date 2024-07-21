export type QuestionType = 'multiple_choice' | 'checkbox' | 'short_answer' | 'rsvp';

export interface Question {
    id: string;
    text: string;
    descriptive: QuestionType;
    options: Option[];
    answer: string;
    is_required: boolean;
}

export interface FormState {
    title: string;
    subtitle: string;
    description: string;
    questions: Question[];
}

export interface OptionType {
    svg: any;
    text: string;
    value: QuestionType;
}

export interface Option{
    id: string;
    value: string;
}