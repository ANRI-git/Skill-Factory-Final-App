import { useDispatch } from 'react-redux';
import { startLoadingAgents } from '../store/agent/thunks';

export const useLoadAgents = (agents) => {
  const dispatch = useDispatch();
  console.log(agents.length === 0);
  if (agents.length === 0) dispatch(startLoadingAgents());
};
