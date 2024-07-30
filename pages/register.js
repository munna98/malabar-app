import React, { useState } from "react";
import {
  Button,
  Container,
  Typography,
  TextField,
  Image,
  Box,
  FormControl,
  FormLabel,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useRouter } from "next/router";
import NavBar from "../src/components/NavBar";
import MuiPhoneNumber from "mui-phone-number";

const Register = () => {
  const [formValues, setFormValues] = useState({
    lookingfor: "",
    mobile: "",
    name: "",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [userId, setUserId] = useState(""); // Example user ID
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormValues({ ...formValues, mobile: value });
  };

  const handleRegister = () => {
    // Simulate registration process
    console.log(formValues);
    // Example registration logic
    setUserId("123456"); // Set the user ID (this should come from your registration logic)
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    router.push("/login");
  };

  return (
    <>
      <NavBar />
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
              height: isSmallScreen ? "50%" : "100%",
              textAlign: "center",
              paddingTop: isSmallScreen ? "24px" : "32px",
            }}
          >
            <Box mt={isSmallScreen ? 2 : 4}>
              <img src="/logo.png" alt="Logo" style={{ maxWidth: "150px" }} />
            </Box>
            <Typography
              variant="h6"
              gutterBottom
              style={{
                color: "#ECC290",
                fontSize: isSmallScreen ? "0.65rem" : "1.25rem",
                marginTop: isSmallScreen ? "8px" : "16px",
              }}
            >
              Welcome to the most trusted exclusive Muslim matrimony in Kerala
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width={isSmallScreen ? "100%" : "50%"}
            height={isSmallScreen ? "50%" : "100%"}
            p={2}
            sx={{
              maxWidth: "500px",
              mx: isSmallScreen ? "0" : "auto",
            }}
          >
            <FormControl component="fieldset" fullWidth margin="normal">
              <FormLabel component="legend" sx={{ textAlign: "left" }}>
                I am Looking for a
              </FormLabel>
              <ToggleButtonGroup
                value={formValues.lookingfor}
                exclusive
                onChange={(event, newValue) => {
                  if (newValue !== null) {
                    handleChange({
                      target: { name: "lookingfor", value: newValue },
                    });
                  }
                }}
                fullWidth
              >
                <ToggleButton value="bride" fullWidth>
                  Bride
                </ToggleButton>
                <ToggleButton value="groom" fullWidth>
                  Groom
                </ToggleButton>
              </ToggleButtonGroup>
            </FormControl>

            <TextField
              label="Name"
              variant="outlined"
              margin="normal"
              fullWidth
              name="name"
              value={formValues.name}
              onChange={handleChange}
              inputProps={{ style: { textAlign: "left" } }}
            />

            <FormControl fullWidth margin="normal">
              <FormLabel sx={{ textAlign: "left" }}>Mobile</FormLabel>
              <MuiPhoneNumber
                defaultCountry={"in"}
                value={formValues.mobile}
                onChange={handlePhoneChange}
                variant="outlined"
                fullWidth
                inputProps={{ style: { textAlign: "left" } }}
              />
            </FormControl>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
              onClick={handleRegister}
            >
              Register Free
            </Button>
          </Box>
        </Box>

        <Dialog
          open={isDialogOpen}
          onClose={handleCloseDialog}
          aria-labelledby="registration-success-dialog"
        >
          <DialogTitle id="registration-success-dialog">
            Registration Successful
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Your registration is successful! Your user ID and password have been sent to your registered mobile number.
            </DialogContentText>
            <Typography variant="body1" gutterBottom>
              User ID: {userId}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary" variant="contained">
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
};

export default Register;
