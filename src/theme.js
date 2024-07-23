// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#143326',
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
      fontSize: '2rem',
      fontWeight: 700,
      color: '#E56290',
      letterSpacing: '0.05em',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
    },
    h4: {
      fontFamily: 'Cinzel Decorative, serif',
      fontSize: '1.75rem',
      fontWeight: 700,
      color: '#143326',
      letterSpacing: '0.05em',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
    },
    h5: {
      fontFamily: 'Cinzel Decorative, serif',
    },
    h6: {
      fontFamily: 'Cinzel Decorative, serif',
      fontSize: '10px',
      fontWeight: 500,
      color: '#ECC290',
      letterSpacing: '0.25em',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'back' },
          style: {
            backgroundColor: '#f5f5f5',
            color: '#143326',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '12px 24px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s, transform 0.3s',
            '&:hover': {
              backgroundColor: '#e0e0e0',
              transform: 'scale(1.01)',
            },
            '&:active': {
              backgroundColor: '#c0c0c0',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            },
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: '#143326',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#143326',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#143326',
            },
            '&:hover fieldset': {
              borderColor: '#143326',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#143326',
            },
            '& input': {
              color: '#143326',
            },
          },
        },
      },
    },
  },
});

export default theme;
