import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FirebaseAuth } from '../firebase/config';
import {
  startLoadingAgents,
  startLoadingFavorites,
} from '../store/agent/thunks';
import { login, logout } from '../store/auth/authSlice';

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  dispatch(startLoadingAgents());

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());

      const { uid, email, displayName, photoURL } = user;

      dispatch(login({ uid, email, displayName, photoURL }));

      dispatch(startLoadingFavorites());
    });
  }, []);

  return {
    status,
  };
};
