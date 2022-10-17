import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthErrorAlert } from './auth';
import { AppRouter } from './router/AppRouter';
import { store } from './store/store';
import { AppTheme } from './theme/AppTheme';

export const ValorantApp = () => {
  return (
    <AppTheme>
      <Provider store={store}>
        <Router>
          <AppRouter />
          <AuthErrorAlert />
        </Router>
      </Provider>
    </AppTheme>
  );
};
