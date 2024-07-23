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
      fontSize: '2rem', // Adjust font size as needed
      fontWeight: 700, // Bold weight to make it stand out
      color: '#E56290', // Set the color to match the design
      letterSpacing: '0.05em', // Slight spacing to enhance readability
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', // Adds a subtle shadow for depth
    },
    h4: {
      fontFamily: 'Cinzel Decorative, serif',
      fontSize: '1.75rem', // Slightly smaller than h3
      fontWeight: 700, // Bold weight
      color: '#143326', // Primary color to differentiate from h3
      letterSpacing: '0.05em', // Slight spacing
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', // Subtle shadow for depth
    },
    h5: {
      fontFamily: 'Cinzel Decorative, serif',
    },
    h6: {
      fontFamily: 'Cinzel Decorative, serif',
      fontSize: '10px', // Adjust font size as needed
      fontWeight: 500, // Bold weight to make it stand out
      color: '#ECC290', // Set the color to match the design
      letterSpacing: '0.25em', // Slight spacing to enhance readability
      // textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', // Adds a subtle shadow for depth
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#143326',
          color: '#ECC290',
          borderRadius: '8px',
          padding: '12px 24px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s, transform 0.3s',
          '&:hover': {
            backgroundColor: '#0f2b22',
            transform: 'scale(1.01)',
          },
          '&:active': {
            backgroundColor: '#0d261d',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          },
        },
      },
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
