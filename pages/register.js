import React, { useState } from 'react';
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/router';
import NavBar from '../src/components/NavBar';

const StyledTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#143326",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#143326",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#143326",
    },
    "&:hover fieldset": {
      borderColor: "#143326",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#143326",
    },
    "& input": {
      color: "#143326",
    },
  },
});

const Register = () => {
  const [userid, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();

  const handleRegister = () => {
    console.log('UserId:', userid);
    console.log('Email:', email);
    console.log('Password:', password);

    // Add your registration logic here

    // Navigate to login page after successful registration
    router.push('/login');
  };

  return (
    <>
      <NavBar />
      <Container
        maxWidth={false}
        disableGutters
        style={{
          height: 'calc(100vh - 64px)', // Adjust height to account for the NavBar height
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0',
          margin: '0',
          overflow: 'hidden', // Prevent overflow
        }}
      >
        <Box
          display="flex"
          flexDirection={isSmallScreen ? 'column' : 'row'}
          width="100%"
          height="100%"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding="32px"
            sx={{
              bgcolor: "#ECC290",
              width: isSmallScreen ? '100%' : '50%',
              textAlign: 'center',
              height: '100%',
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              width={isSmallScreen ? '90%' : '400px'}
            >
              <Typography
                variant="h4"
                gutterBottom
                style={{
                  color: "#143326",
                  fontFamily: 'Cinzel Decorative, serif',
                }}
              >
                Register
              </Typography>
              <StyledTextField
                label="UserId"
                variant="outlined"
                margin="normal"
                fullWidth
                value={userid}
                onChange={(e) => setUserId(e.target.value)}
              />
              {/* <StyledTextField
                label="Email"
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <StyledTextField
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              /> */}
              <Button
                variant="contained"
                fullWidth
                onClick={handleRegister}
                style={{
                  marginTop: '16px',
                  backgroundColor: "#143326",
                  color: "#ECC290",
                }}
              >
                Register
              </Button>
              <Typography
                variant="body2"
                style={{
                  marginTop: '16px',
                  color: "#143326",
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
                onClick={() => router.push('/login')}
              >
                Already registered? Click here to login
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Register;
