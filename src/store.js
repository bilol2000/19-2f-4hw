import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reduxSlice';

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default store;