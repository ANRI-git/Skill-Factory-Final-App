import { Grid } from '@mui/material';
import { AgentCard } from './AgentCard';

export const AgentsList = ({ agents }) => {
  return (
    <>
      <Grid container spacing={2}>
        {agents.map((agent) => (
          <Grid item xs={3} key={agent.name}>
            <AgentCard agent={agent} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
