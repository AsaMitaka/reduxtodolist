import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  id: Date.now(),
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload.name;
    },
  },
});

export const { changeName } = todoSlice.actions;
export default todoSlice.reducer;
