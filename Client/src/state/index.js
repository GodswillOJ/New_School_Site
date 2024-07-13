import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
  user: {
    isLoggedIn: !!localStorage.getItem('access_token'),
    userID: localStorage.getItem('userID') || null,
  },
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setLoginStatus: (state, action) => {
      state.user.isLoggedIn = action.payload.isLoggedIn;
      state.user.userID = action.payload.userID;
    },
    logout: (state) => {
      state.user.isLoggedIn = false;
      state.user.userID = null;
      localStorage.removeItem('access_token');
      localStorage.removeItem('userID');
    },
  },
});

export const { setMode, setLoginStatus, logout } = globalSlice.actions;

export default globalSlice.reducer;
