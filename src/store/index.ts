import { configureStore } from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux';

import treeComponentReducer from './treeComponent.store';

export const store = configureStore({
  reducer: {
    treeComponent: treeComponentReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
