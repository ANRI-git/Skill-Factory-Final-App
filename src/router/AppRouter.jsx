import { Navigate, Route, Routes } from 'react-router-dom';
import { AgentInfoPage } from '../agents/pages/AgentInfoPage';
import { AgentsPage } from '../agents/pages/AgentsPage';
import { FavoritesPage } from '../agents/pages/FavoritesPage';
import { CheckingAuth, LoginPage, RegisterPage } from '../auth';
import { useCheckAuth } from '../hooks';

export const AppRouter = () => {
  const { status } = useCheckAuth();
  
  if (status === 'checking') return <CheckingAuth />;
  return (
    <Routes>
      {status === 'authenticated' ? (
        <>
          <Route path='/:name' element={<AgentInfoPage />} />
          <Route path='/fav' element={<FavoritesPage />} />
          <Route path='/' element={<AgentsPage />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </>
      ) : (
        <>
          <Route path='/auth/login' element={<LoginPage />} />
          <Route path='/auth/register' element={<RegisterPage />} />
          <Route path='/*' element={<Navigate to='/auth/login' />} />
        </>
      )}

      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  );
};
