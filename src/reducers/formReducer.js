import { createSlice } from "@reduxjs/toolkit";

const fromReducer = createSlice({
  name: "fromData",
  initialState: {
    formData: {},
  },
  reducers: {
    addData: (state, action) => {
      state.formData = action.payload;
    },
  },
});

export const { addData } = fromReducer.actions;
export default fromReducer.reducer;
