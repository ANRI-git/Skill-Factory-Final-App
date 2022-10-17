import { Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { AgentsList } from '../components/AgentsList';
import { AgentsLayout } from '../layout/AgentsLayout';

export const FavoritesPage = () => {
  const { favorites } = useSelector((state) => state.agent);

  return (
    <AgentsLayout>
      {favorites.length === 0 ? (
        <Typography variant='body1'>
          Nothing yet! Remember to click the favorite button in the agent card
        </Typography>
      ) : (
        <>
          <Typography variant='h4' color={'secondary'}>
            Favorites:
          </Typography>
          <Typography variant='body1' color={'secondary'} gutterBottom>
            Your favorites agents on the same place.
          </Typography>
          {<AgentsList agents={favorites} />}
        </>
      )}
    </AgentsLayout>
  );
};
