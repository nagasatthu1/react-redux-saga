import { combineReducers } from 'redux';
import counterReducer from "./components/counterApp/reducer"

const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;
