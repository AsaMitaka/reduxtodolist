import { configureStore } from '@reduxjs/toolkit';
import todolistReducer from '../redux/reducers/todoListSlice';
import todoReducer from '../redux/reducers/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todolistReducer,
    todo: todoReducer,
  },
});
