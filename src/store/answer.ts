import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnswerType } from '../types/AnswerType';

//* 초기 상태
const initialState: AnswerType = {
  first_answer: '',
  second_answer: '',
  third_answer: '',
  fourth_answer: '',
};

const answer = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    //* 첫번째 질문 변경
    setFirstAnswer(state, action: PayloadAction<string>) {
      if (action.payload === '') {
        state.first_answer = null;
      }
      state.first_answer = action.payload;
      return state;
    },
    //* 두번째 질문 변경
    setSecondAnswer(state, action: PayloadAction<string>) {
      if (action.payload === '') {
        state.second_answer = null;
      }
      state.second_answer = action.payload;
      return state;
    },

    //* 세번째 질문 변경
    setThirdAnswer(state, action: PayloadAction<string>) {
      if (action.payload === '') {
        state.third_answer = null;
      }
      state.third_answer = action.payload;
      return state;
    },

    //* 네번째 질문 변경
    setFourthAnswer(state, action: PayloadAction<string>) {
      if (action.payload === '') {
        state.fourth_answer = null;
      }
      state.fourth_answer = action.payload;
      return state;
    },
  },
});

export const answerActions = { ...answer.actions };

export default answer;
