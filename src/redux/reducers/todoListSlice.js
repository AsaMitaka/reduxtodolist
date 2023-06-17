import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoListSlise = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      const idx = action.payload.idx;
      state.todos = state.todos.filter((item) => item.id !== idx);
    },
    updateTodo: (state, action) => {
      const { id, name } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.name = name;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoListSlise.actions;
export default todoListSlise.reducer;
