import { Favorite, LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';

export const Navbar = () => {
  const dispatch = useDispatch();

  const handleOnLogout = () => {
    dispatch(startLogout());
  };

  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Box justifyContent='space-between'>
            <Button href={'/'}>
              <img
                src='../../../public/images/Valorant_logo.png'
                alt='Valorant logo'
                style={{ width: '200px', height: '100' }}
              />
            </Button>
            <IconButton color='secondary' href={'/fav'}>
              <Favorite />
              Favorites
            </IconButton>
          </Box>
          <IconButton color='error' onClick={handleOnLogout}>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
