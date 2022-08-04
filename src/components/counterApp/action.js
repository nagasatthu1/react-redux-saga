import { ADD_COUNT, SUBTRACT_COUNT, RESET_COUNT } from './constants';

export function addCount() {
  // console.log('action');
  return {
    type: ADD_COUNT,
  };
}

export function subtractCount() {
  return {
    type: SUBTRACT_COUNT,
  };
}

export function resetCount() {
  return {
    type: RESET_COUNT,
  };
}
