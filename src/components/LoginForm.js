// src/components/LoginForm.js
import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from 'next/router';

const LoginForm = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  const handleLogin = () => {
    console.log("User ID:", userId);
    console.log("Password:", password);

    // Navigate to dynamic profile page
    router.push(`/profile/${userId}`);
  };

  const handleRegister = () => {
    router.push('/register'); // Assuming you have a register page at /register
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0",
        margin: "0",
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
            bgcolor: '#143326',
            width: isSmallScreen ? '100%' : '50%',
            textAlign: 'center',
            height: '100%',
            position: 'relative',
            paddingTop: isSmallScreen ? '24px' : '32px', // Adjust padding-top for small screens
          }}
        >
          <Box mt={isSmallScreen ? 2 : 4}>
            <img src="/logo.png" alt="Logo" style={{ maxWidth: '150px' }} /> {/* Replace with your logo */}
          </Box>
          <Typography
            variant="h6"
            gutterBottom
            style={{ 
              color: '#ECC290', 
              fontSize: isSmallScreen ? '0.5rem' : '1.25rem',
              marginTop: isSmallScreen ? '8px' : '16px', // Adjust margin-top for small screens
            }}
          >
            Welcome to the most trusted exclusive Muslim matrimony in Kerala
          </Typography>
          <Typography
            variant="h3"
            gutterBottom
            style={{ 
              color: '#ECC290', 
              fontSize: isSmallScreen ? '0.75rem' : '2rem',
              position: 'absolute', 
              bottom: '32px' 
            }}
          >
            Manavatty from Malabar
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          padding="32px"
          sx={{
            bgcolor: '#ECC290',
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
            width={isSmallScreen ? '100%' : '500px'}
          >
            <Typography
              variant="h4"
              gutterBottom
              style={{ 
                color: '#143326', 
                fontSize: isSmallScreen ? '1.25rem' : '1.75rem' 
              }}
            >
              Login
            </Typography>
            <TextField
              label="User ID"
              variant="outlined"
              margin="normal"
              fullWidth
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              fullWidth
              onClick={handleLogin}
              style={{ marginTop: '16px' }}
            >
              Login
            </Button>
            <Typography
              variant="body2"
              style={{
                marginTop: '16px',
                color: '#143326',
                cursor: 'pointer',
                textDecoration: 'underline',
                fontSize: '1rem'
                // fontSize: isSmallScreen ? '0.75rem' : '1rem'
              }}
              onClick={handleRegister}
            >
              Not registered yet? Register here
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
