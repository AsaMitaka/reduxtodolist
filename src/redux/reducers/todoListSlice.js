import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  filter: false,
};

const todoListSlise = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      const id = action.payload.id;
      state.todos = state.todos.filter((item) => item.id !== id);
    },
    updateTodo: (state, action) => {
      const { id, name } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.name = name;
      }
    },
    changeFilter: (state) => {
      state.filter = !state.filter;
    },
    changeComplete: (state, action) => {
      const id = action.payload.id;
      const todoToComplete = state.todos.find((todo) => todo.id === id);
      if (todoToComplete) {
        todoToComplete.complete = !todoToComplete.complete;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo, changeFilter, changeComplete } =
  todoListSlise.actions;
export default todoListSlise.reducer;
