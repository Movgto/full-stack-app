import { createSlice } from '@reduxjs/toolkit';
import createUser from './thunk';

const initialState = {
  user: [],
  isLoading: true,
  error: false,
  errMsg: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.errMsg = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
