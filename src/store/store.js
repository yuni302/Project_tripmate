import { configureStore } from '@reduxjs/toolkit';
import { joinSlice } from './joinSlice';
import { userSlice } from './userSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    join: joinSlice.reducer,
  },
});

export default store;
