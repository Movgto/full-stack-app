import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// createAsyncThunk and axios are going to be used later
// when we need to make API requests to Rails API endpoints.

const initialState = {
  counter: 0,
  data: [],
}

// API REQUEST EXAMPLE:
// --------------------
// const apiRequest = createAsyncThunk('example/fetchData', () => {
//   try {
//     const res = axios.get('API_URL');
//     return res.data;
//   } catch (err) {
//     return err.message;
//   }
// });

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    add: (state) => {
      state.counter += 1;
    },
    substract: (state) => {
      state.counter -= 1;
    }
  },
  // ASYNCRONOUS REDUCERS:
  // ------------------
  // extraReducers: (builder) => {
  //   builder
  //   .addCase(apiRequest.fulfilled, (state, { payload }) => {
  //     state.data = payload;
  //   })
  // }
});

export const { add, substract } = exampleSlice.actions;
export default exampleSlice.reducer;
// export { apiRequest };