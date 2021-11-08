/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export interface stateProps {
  selecteds: string[];
}

const localStoragedItems = localStorage.getItem('@challenge-app/checked-items')
  ? JSON.parse(localStorage.getItem('@challenge-app/checked-items') as string)
  : [];

const initialState = {
  selecteds: localStoragedItems,
} as stateProps;

export const TreeSlice = createSlice({
  name: 'tree',
  initialState,
  reducers: {
    setSelecteds: (state, { payload: selecteds }: { payload: string[] }) => {
      state.selecteds = !selecteds ? initialState.selecteds : selecteds;
      localStorage.setItem(
        '@challenge-app/checked-items',
        JSON.stringify(state.selecteds),
      );
    },
  },
});

export const { setSelecteds } = TreeSlice.actions;
export default TreeSlice.reducer;
