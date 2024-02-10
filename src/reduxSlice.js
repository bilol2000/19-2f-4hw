import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  path: null,
  previousPath: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPath: (state, action) => {
      state.previousPath = state.path;
      state.path = action.payload;
    },
  },
});

export const { setPath } = appSlice.actions;
export default appSlice.reducer;