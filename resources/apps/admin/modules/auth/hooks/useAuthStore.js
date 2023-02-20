import {useDispatch, useSelector} from "react-redux";
import {getAxioApi, postAxioApi} from "../../shared/api/axioApi";

import {
  onLogin,
  onLogout,
  onClearMessage,
  onSuccessMessage,
  TYPE_AUTHENTICATED,
  TYPE_CHECKING,
  TYPE_NOT_AUTHENTICATED
} from "../../../store";

export const useAuthStore = () => {

  const dispatch = useDispatch();
  const {status, user, errorMessage, successMessage} = useSelector(state => state.auth);

  const checkingAuth = async () => {
    const token = localStorage.getItem('x-token');
    if (!token) {
      return dispatch(onLogout(null))
    }

    try {
      const {data} = await getAxioApi('/api/auth/refresh');
      const {authorisation, user} = data.content;

      localStorage.setItem('x-token', authorisation.token);
      dispatch(onLogin(user));
    } catch (error) {
      console.log(error);
      localStorage.clear();
      dispatch(onLogout(null));
    }
  }

  const startLogin = async ({email, password}) => {
    dispatch(onClearMessage());

    try {
      const {data} = await postAxioApi('/api/auth/login', {email, password});
      const {authorisation, user} = data.content;

      localStorage.setItem('x-token', authorisation.token);
      dispatch(onLogin(user));
      return true
    } catch (error) {
      localStorage.clear();
      let message = error.response.data.error[0]

      if (message === 'Unauthorized'){
        message = "El correo o la contraseña no coinciden"
      }

      dispatch(onLogout(message));
      return false
    }
  }

  const startLogout = async () => {
    try {
      await postAxioApi('/api/auth/logout', {});
      localStorage.clear();
      dispatch(onLogout(null));
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout(null));
    }
  }

  const startForgotPassword = async ({email}) => {
    dispatch(onClearMessage());

    try {
      const {data} =  await postAxioApi('/api/auth/forgot-password', {email});
      const {message} = data

      dispatch(onSuccessMessage(message));
    } catch (error) {
      let message = error.response.data.message

      localStorage.clear();
      dispatch(onLogout(message));
    }
  }

  const startResetPassword = async ({email, token, password, password_confirmation}) => {
    dispatch(onClearMessage());

    try {
      const {data} =  await postAxioApi('/api/auth/reset-password', {email, token, password, password_confirmation});
      const {message} = data

      dispatch(onSuccessMessage(message));
    } catch (error) {
      let message = error.response.data.message

      localStorage.clear();
      dispatch(onLogout(message));
    }
  }

  return {
    user,
    status,
    errorMessage,
    successMessage,

    startLogin,
    startLogout,
    checkingAuth,
    startResetPassword,
    startForgotPassword,

    TYPE_AUTHENTICATED,
    TYPE_CHECKING,
    TYPE_NOT_AUTHENTICATED
  }
}