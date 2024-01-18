import { createSlice } from '@reduxjs/toolkit';

export const responseSlice = createSlice({
  name: 'response',
  initialState: {
    statusCode: 0,
    time: 0,
    body: '',
  },
  reducers: {
    updateStatusCode: (state, action) => {
      state.statusCode = action.payload;
    },
    updateTime: (state, action) => {
      state.time = action.payload;
    },
    updateBody: (state, action) => {
      state.body = action.payload;
    },
  },
});

export const { updateStatusCode, updateTime, updateBody } =
  responseSlice.actions;

export default responseSlice.reducer;
