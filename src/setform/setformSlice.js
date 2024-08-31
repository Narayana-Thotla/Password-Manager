// /src/features/valueSlice.js
import { createSlice } from "@reduxjs/toolkit";

const setformSlice = createSlice({
  name: "form",
  initialState: {
    value: "", // Initial state of the value
  },
  reducers: {
    setformValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setformValue, removeElement } = setformSlice.actions;
export default setformSlice.reducer;
