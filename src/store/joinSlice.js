import { createSlice } from '@reduxjs/toolkit';

export const joinSlice = createSlice({
  name: 'join',
  initialState: {
    id: '',
    password: '',
    name: '',
    gender: '',
    birth: 0,
  },
  reducers: {
    joinUser: (state, action) => ({
      ...action.payload,
    }),
  },
});

export const { joinUser } = joinSlice.actions;
