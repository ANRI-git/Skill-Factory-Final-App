import { Box, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AgentInfo } from '../components/AgentInfo';
import { AgentsLayout } from '../layout/AgentsLayout';

export const AgentInfoPage = () => {
  const { agents } = useSelector((state) => state.agent);
  const { name } = useParams();

  const agent = agents.find((agent) => agent.name === name);

  return (
    <AgentsLayout>
      {agent === undefined || agents === [] ? (
        <></>
      ) : (
        <AgentInfo agent={agent} />
      )}
    </AgentsLayout>
  );
};
