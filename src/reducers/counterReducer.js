import { createSlice } from "@reduxjs/toolkit";

const counterReducer = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.count = state.count + 1;
    },
    decrement: (state, action) => {
      state.count = state.count - 1;
    },
    resetCount: (state, action) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, resetCount } =
  counterReducer.actions;
export default counterReducer.reducer;
