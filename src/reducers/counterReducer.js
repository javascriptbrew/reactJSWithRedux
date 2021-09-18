import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const counterReducer = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.count = state.count + action.payload;
    },
    decrement: (state, action) => {
      state.count = state.count - action.payload;
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
