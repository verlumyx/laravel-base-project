import {createSlice} from '@reduxjs/toolkit';

export const TYPE_CHECKING = "checking"
export const TYPE_AUTHENTICATED = "authenticated"
export const TYPE_NOT_AUTHENTICATED = "not-authenticated"

const userInitialState = {
  id: 0,
  name: '',
  email: '',
}

const authInitialState = {
  status: TYPE_CHECKING,
  user: userInitialState,
  errorMessage: null,
  successMessage: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    onChecking: (state) => {
      state.status = TYPE_CHECKING;
      state.user = userInitialState;
      state.errorMessage = null;
      state.successMessage = null;
    },
    onLogin: (state, {payload}) => {
      state.status = TYPE_AUTHENTICATED;
      state.user = payload;
      state.successMessage = 'login successful';
      state.errorMessage = null;
    },
    onLogout: (state, {payload}) => {
      state.status = TYPE_NOT_AUTHENTICATED;
      state.user = userInitialState;
      state.errorMessage = payload;
      state.successMessage = null;
    },
    onClearMessage: (state) => {
      state.errorMessage = null;
      state.successMessage = null;
    },
    onSuccessMessage: (state, {payload}) => {
      state.successMessage = payload;
    },
  }
})

export const {onChecking, onLogin, onLogout, onClearMessage, onSuccessMessage} = authSlice.actions;
