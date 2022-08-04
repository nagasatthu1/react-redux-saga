import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './globalReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './globalSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

// const store = createStore(rootReducer);

export default store;
