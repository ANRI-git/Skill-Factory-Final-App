import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { AuthLayout } from '../layout/AuthLayout';
import { Google } from '@mui/icons-material';
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from '../../store/auth/thunks';

const initialForm = {
  email: '',
  password: '',
};

export const LoginPage = () => {
  const { status } = useSelector((state) => state.auth);
  const isChecking = useMemo(() => status === 'checking', [status]);

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm(initialForm);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title='Login'>
      <form
        onSubmit={handleOnSubmit}
        className='animate__animated animate__fadeIn'
      >
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label='Email'
            type='email'
            placeholder='correo@mail.com'
            fullWidth
            name='email'
            value={email}
            onChange={onInputChange}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label='Password'
            type='password'
            placeholder='**********'
            fullWidth
            name='password'
            value={password}
            onChange={onInputChange}
          />
        </Grid>
        <Grid container spacing={1} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Button
              variant='contained'
              fullWidth
              type='submit'
              disabled={isChecking}
            >
              <Typography sx={{ ml: 1 }}> Login</Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Button
              variant='contained'
              fullWidth
              onClick={onGoogleSignIn}
              disabled={isChecking}
            >
              <Google />
              <Typography sx={{ ml: 1 }}> Google</Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid container direction='row' justifyContent='end'>
          <Link component={RouterLink} color='inherit' to='/auth/register'>
            Crear una cuenta
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
