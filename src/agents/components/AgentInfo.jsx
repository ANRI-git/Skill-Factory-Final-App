import {
  Box,
  Button,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { InfoLayout } from '../layout/InfoLayout';

export const AgentInfo = ({ agent }) => {
  return (
    <InfoLayout bg={agent.background}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          <b>Agent information</b>
        </Typography>
        <Typography variant='h5' component='div'>
          <b>{agent.name}</b>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          <b>{agent.role}</b>
        </Typography>
        <Typography variant='body2'>
          <b>{agent.description}</b>
        </Typography>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant='h6' component='div'>
            <b>Abilities</b>
          </Typography>
          <ul>
            {agent.abilities.map((ability) => (
              <li key={ability}>
                <b>{ability}</b>
              </li>
            ))}
          </ul>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size='small' href={`/`}>
          <b>Close info</b>
        </Button>
      </CardActions>
    </InfoLayout>
  );
};
