import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from 'next/router';

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
        flexDirection={isSmallScreen ? "column" : "row"}
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
            bgcolor: "#143326",
            width: isSmallScreen ? "100%" : "50%",
            textAlign: "center",
            height: "100%",
          }}
        >
          <Box mt={4}>
            <img src="/logo.png" alt="Logo" style={{ maxWidth: "150px"}} />{" "}
            {/* Replace with your logo */}
          </Box>
          <Typography
            variant="h6"
            gutterBottom
            style={{ color: "#ECC290", fontFamily: "Cinzel Decorative, serif" }}
          >
            Welcome to the most trusted exclusive muslim matrimony in Kerala
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          padding="32px"
          sx={{
            bgcolor: "#ECC290",
            width: isSmallScreen ? "100%" : "50%",
            textAlign: "center",
            height: "100%",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width={isSmallScreen ? "90%" : "400px"} // Adjust width here
          >
            <Typography
              variant="h4"
              gutterBottom
              style={{
                color: "#143326",
                fontFamily: "Cinzel Decorative, serif",
              }}
            >
              Login
            </Typography>
            <StyledTextField
              label="User ID"
              variant="outlined"
              margin="normal"
              fullWidth
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <StyledTextField
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
              style={{
                marginTop: "16px",
                backgroundColor: "#143326",
                color: "#ECC290",
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
