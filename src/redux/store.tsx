import { configureStore } from '@reduxjs/toolkit';
import todolistReducer from './reducers/todoListSlice';
import todoReducer from './reducers/todoSlice';

const store = configureStore({
  reducer: {
    todos: todolistReducer,
    todo: todoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
