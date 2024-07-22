// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0F444B',
    },
    secondary: {
      main: '#ECC290',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Cinzel Decorative, serif',
    },
    h2: {
      fontFamily: 'Cinzel Decorative, serif',
    },
    h3: {
      fontFamily: 'Cinzel Decorative, serif',
    },
    h4: {
      fontFamily: 'Cinzel Decorative, serif',
    },
    h5: {
      fontFamily: 'Cinzel Decorative, serif',
    },
    h6: {
      fontFamily: 'Cinzel Decorative, serif',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#ECC290',
          color: '#0F444B',
          '&:hover': {
            backgroundColor: '#d4a16e', // A slightly darker shade for hover effect
          },
        },
      },
    },
  },
});

export default theme;
