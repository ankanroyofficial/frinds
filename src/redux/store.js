import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {logger} from 'redux-logger';
import RootSaga from './RootSaga';
import AuthReducer from './reducer/AuthReducer';

let SagaMiddleware = createSagaMiddleware();
// const middleware = [SagaMiddleware, logger];
const middleware = [SagaMiddleware];
export default configureStore({
  reducer: {
    AuthReducer: AuthReducer,
  },
  middleware,
});
SagaMiddleware.run(RootSaga);
