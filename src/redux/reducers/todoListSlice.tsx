import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../reducers/todoSlice.js';

export interface TodoState {
  todos: Todo[];
  filter: boolean;
}

const initialState: TodoState = {
  todos: [],
  filter: false,
};

const todoListSlise = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      const id = action.payload.id;
      state.todos = state.todos.filter((item) => item.id !== id);
    },
    updateTodo: (state, action: PayloadAction<{ id: number; name: string }>) => {
      const { id, name } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.name = name;
      }
    },
    changeFilter: (state) => {
      state.filter = !state.filter;
    },
    changeComplete: (state, action: PayloadAction<{ id: number }>) => {
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
