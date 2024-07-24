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
      color: '#ECC290', // Light color for better contrast on dark background
    },
    h2: {
      fontFamily: 'Cinzel Decorative, serif',
      color: '#ECC290', // Light color for better contrast on dark background
    },
    h3: {
      fontFamily: 'Cinzel Decorative, serif',
      fontSize: '2rem',
      fontWeight: 700,
      color: '#ECC290', // Light color for better contrast on dark background
      letterSpacing: '0.05em',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
    },
    h4: {
      fontFamily: 'Cinzel Decorative, serif',
      fontSize: '1.75rem',
      fontWeight: 700,
      color: '#ECC290', // Light color for better contrast on dark background
      letterSpacing: '0.05em',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
    },
    h5: {
      fontFamily: 'Cinzel Decorative, serif',
      color: '#ECC290', // Light color for better contrast on dark background
    },
    h6: {
      fontFamily: 'Cinzel Decorative, serif',
      fontSize: '10px',
      fontWeight: 500,
      color: '#ECC290', // Light color for better contrast on dark background
      letterSpacing: '0.25em',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
    },
    body1: {
      fontFamily: 'Roboto, sans-serif',
      color: '#ECC290', // Light color for better contrast on dark background
    },
    body2: {
      fontFamily: 'Roboto, sans-serif',
      color: '#ECC290', // Light color for better contrast on dark background
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
            color: '#ECC290', // Light color for better contrast on dark background
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#ECC290', // Light color for better contrast on dark background
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#ECC290', // Light color for better contrast on dark background
            },
            '&:hover fieldset': {
              borderColor: '#ECC290', // Light color for better contrast on dark background
            },
            '&.Mui-focused fieldset': {
              borderColor: '#ECC290', // Light color for better contrast on dark background
            },
            '& input': {
              color: '#ECC290', // Light color for better contrast on dark background
            },
          },
        },
      },
    },
    MuiStepper: {
      styleOverrides: {
        root: {
          // Add your styles here
          backgroundColor: 'transparent', // Example: Make the background transparent
        },
        // Styles for the StepIcon component within Stepper
        stepIcon: {
          color: '#EEF432', // Default color for icons
          '&.Mui-active': {
            color: '#143326', // Color when step is active
          },
          '&.Mui-completed': {
            color: '#ECC296', // Color when step is completed
          },
        },
        // Styles for StepLabel component within Stepper
        stepLabel: {
          color: '#ECC296', // Default color for labels
          '&.Mui-active': {
            color: '#143326', // Color when step is active
          },
        },
      },
    },
  },
});

export default theme;
