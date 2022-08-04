import { ADD_COUNT, SUBTRACT_COUNT, RESET_COUNT } from './constants';

const initialState = {
  count: 0,
  hide: false,
};

function counterReducer(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    case ADD_COUNT:
      console.log(state);
      return {
        ...state,
        count: state.count + 1,
      };
    case SUBTRACT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET_COUNT:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
}

export default counterReducer;
