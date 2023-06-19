import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  name: string;
  completed: boolean;
  id: number;
}

const initialState: Todo = {
  name: '',
  completed: false,
  id: 0,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      const name = action.payload.name;
      state.name = name;
    },
    changeId: (state, action: PayloadAction<number>) => {
      const id = action.payload.id;
      state.id = id;
    },
  },
});

export const { changeName, changeId } = todoSlice.actions;
export default todoSlice.reducer;
