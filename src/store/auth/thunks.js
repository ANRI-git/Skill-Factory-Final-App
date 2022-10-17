import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmail,
  signInWithGoogle,
} from '../../firebase/providers';
import { onLogoutAgents } from '../agent/agentSlice';
import { onChecking, login, logout } from './authSlice';

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(onChecking());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(onChecking());
    const result = await signInWithGoogle();

    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  };
};

export const startCreatingUserWithEmail = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(onChecking());

    const result = await registerUserWithEmail({
      email,
      password,
      displayName,
    });

    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(onChecking());
    const result = await loginWithEmailPassword({ email, password });

    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();

    dispatch(onLogoutAgents());
    dispatch(logout());
  };
};
