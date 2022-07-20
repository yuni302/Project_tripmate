import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: '',
    password: '',
    isLogin: null,
  },
  reducers: {
    loginUser: (state, action) => ({
      ...action.payload,
      isLogin: true,
    }),
  },
});

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
