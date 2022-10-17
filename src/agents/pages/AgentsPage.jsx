import { AddOutlined } from '@mui/icons-material';
import { CircularProgress, IconButton, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AgentsList } from '../components/AgentsList';
import { AgentsLayout } from '../layout/AgentsLayout';

export const AgentsPage = () => {
  const { agents } = useSelector((state) => state.agent);

  return (
    <AgentsLayout>
      <Typography variant='h4' color={'secondary'}>
        Agents:
      </Typography>
      <Typography variant='body1' color={'secondary'} gutterBottom>
        Welcome <b>player</b>. Here you could find all the info about the{' '}
        <b>Valorant's agents</b>.
      </Typography>
      {agents === [] ? <h1>Loading...</h1> : <AgentsList agents={agents} />}
    </AgentsLayout>
  );
};
