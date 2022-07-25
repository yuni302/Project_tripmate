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
    logoutUser: (state) => ({
      isLogin: false,
    }),
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
