import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: {},
  token: null,
  isLoading: true,
  isLoading2: true,
  signUpComplete: null,

  error: {},
  signinResponse: {},
  signUpResponse: {},
  logoutResponse: {},
  stateResponse: {},
  cityResponse: {},
  getCountryResponse: {},
  getLanguageResponse: [],
  otpResponse: {},
  otpReSentResponse: {},
  setProfileTypeResponse: {},
  selfFocusCategoriesResponse: {},
  setSelfFocusCategoriesResponse: {},
  setGoalResponse: {},
  meResponse: null,
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,

  reducers: {},
});

export const {} = AuthSlice.actions;

export default AuthSlice.reducer;
