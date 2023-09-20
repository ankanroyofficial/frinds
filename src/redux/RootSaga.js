import {all} from 'redux-saga/effects';
import AuthSaga from './saga/AuthSaga';
const combinedSaga = [...AuthSaga];

export default function* RootSaga() {
  yield all(combinedSaga);
}
