// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
//   reducer: {

//   },
// })

import { configureStore } from '@reduxjs/toolkit';
import valueReducer from '../value/valueSlice';
import formReducer from '../setform/setformSlice'

export const store = configureStore({
  reducer: {
    value: valueReducer,
    form:formReducer,
  },
});

export default store;
