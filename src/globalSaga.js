import { all } from 'redux-saga/effects';
import handleSaga from './components/counterApp/saga';

export default function* rootSaga() {
  yield all([handleSaga()]);
}
