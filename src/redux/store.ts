import { configureStore } from '@reduxjs/toolkit'
import taskReducer  from './task/taskSlice'
import { loadState, saveState } from '../utility/storage';

const persistedState = loadState();

export const store = configureStore({
  reducer: taskReducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(
    store.getState()
  );
});