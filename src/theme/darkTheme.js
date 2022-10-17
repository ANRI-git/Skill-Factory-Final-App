import { createTheme } from '@mui/material';
import { blueGrey, red } from '@mui/material/colors';

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: blueGrey[900],
    },
    secondary: {
      main: red[500],
    },
    error: {
      main: red.A400,
    },
  },
});
