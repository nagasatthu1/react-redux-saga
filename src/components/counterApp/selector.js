import { createSelector } from 'reselect';
import initialState from './reducer';

const selectHome = (state) => state.counter || initialState;

const makeSelectCount = () =>
  createSelector(selectHome, (homeCount) => homeCount.count);

export { selectHome, makeSelectCount };
