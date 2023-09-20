import {call, put, select, takeLatest} from 'redux-saga/effects';


let getItem = state => state.AuthReducer;

// export function* getStateSaga(action) {
//     let items = yield select(getItem);

//     let header = {
//       Accept: 'application/json',
//       contenttype: 'application/json',
//       // authorization: items.token,
//     };

//     try {
//       const response = yield call(
//         postApi,
//         'api/state-list',

//         action.payload,

//         header,
//       );

//       if (response.data.status == true) {
//         // console.log('response', response.data);

//         yield put(stateSuccess(response.data));

//         // response?.data?.message == '' ? null : Toast(response?.data?.message);
//       } else {
//         console.log('getStateSaga', response.data);
//         yield put(stateFailure(response.data));
//         Toast(response?.data?.message);
//       }
//     } catch (error) {
//       console.log('getStateSaga', error);
//     }
//   }

// export function* getCountrySaga(action) {
//   let items = yield select(getItem);

//   let header = {
//     Accept: 'application/json',
//     contenttype: 'application/json',
//     // authorization: items.token,
//   };

//   try {
//     const response = yield call(getApi, 'api/country-list', header);

//     if (response.data.status == true) {
//       // console.log('response', response.data);

//       yield put(getCountrySuccess(response.data));
//     } else {
//       console.log('getCountrySaga', response.data);
//       yield put(getCountryFailure(response.data));
//       Toast(response?.data?.message);
//     }
//   } catch (error) {
//     console.log('getCountrySaga', error);
//   }
// }
const watchFunction = [
  //   (function* () {
  //     yield takeLatest('Auth/getTokenRequest', getTokenSaga);
  //   })()
];

export default watchFunction;
