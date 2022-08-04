import { put, takeEvery } from 'redux-saga/effects';
import { ADD_COUNT, SUBTRACT_COUNT, RESET_COUNT } from './constants';

function* addValue() {
  console.log('Saga');
  yield put({
    type: ADD_COUNT,
  });
}

function* subtractValue() {
  yield put({
    type: SUBTRACT_COUNT,
  });
}

function* resetValue() {
  yield put({
    type: RESET_COUNT,
  });
}

function* handleSaga() {
  yield takeEvery('ADD_COUNT_SUCCESS', addValue),
    yield takeEvery('SUBTRACT_COUNT_SUCCESS', subtractValue),
    yield takeEvery('RESET_COUNT_SUCCESS', resetValue);
}

export default handleSaga;
