// /src/features/valueSlice.js
import { createSlice } from "@reduxjs/toolkit";

const valueSlice = createSlice({
  name: "value",
  initialState: {
    value: '', // Initial state of the value
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    removeElement: (state, action) => {
      const index = action.payload;
      state.value = state.value.filter((_, i) => i !== index);
      console.log(state.value);

      const getitems = JSON.parse(localStorage.getItem("passwords"));
      console.log(getitems)
      console.log(getitems,state.value)
      // {
      //         Array.from(state.value)[0] = [] ?
      //            state.value = '':
                 localStorage.setItem("passwords", JSON.stringify(state.value));
      //           }
                console.log(state.value)
      
    },
  },
});

export const { setValue, removeElement } = valueSlice.actions;
export default valueSlice.reducer;
