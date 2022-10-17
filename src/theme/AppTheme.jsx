import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './darkTheme';

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
