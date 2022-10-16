import { Navigate, Route, Routes } from 'react-router-dom';
import { AgentsPage } from '../agents/pages/AgentsPage';
import { CheckingAuth, LoginPage, RegisterPage } from '../auth';
import { useCheckAuth } from '../hooks';

export const AppRouter = () => {
  const { status } = useCheckAuth();
  // console.log(status);
  if (status === 'checking') return <CheckingAuth />;
  return (
    <Routes>
      {status === 'authenticated' ? (
        <>
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
