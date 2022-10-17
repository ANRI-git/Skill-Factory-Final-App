import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  startDeleteFavorite,
  startSavingFavorite,
} from '../../store/agent/thunks';

export const AgentCard = ({ agent }) => {
  const dispatch = useDispatch();
  const { favorites, isSaving } = useSelector((state) => state.agent);

  const onAddFavorite = () => {
    if (favorites.map((fav) => fav.name).includes(agent.name)) {
      dispatch(startDeleteFavorite(agent));
    } else {
      dispatch(startSavingFavorite(agent));
    }
  };
  return (
    <>
      <Card sx={{ maxWidth: 345, backgroundColor: 'secondary.main' }}>
        <CardMedia
          component='img'
          height='140'
          image={agent.portrait}
          alt={agent.name}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {agent.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {agent.description}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label='add to favorites' onClick={onAddFavorite}>
            <FavoriteIcon
              sx={{
                color: favorites.map((fav) => fav.name).includes(agent.name)
                  ? '#fff'
                  : 'inherit',
              }}
            />
          </IconButton>
          <Button size='small' href={`/${agent.name}`}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
