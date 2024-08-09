import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  FormControl,
  FormLabel,
  ToggleButtonGroup,
  ToggleButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useRouter } from "next/router";
import { useScreenSize } from "@/context/ScreenSizeContext";
import MuiPhoneNumber from "mui-phone-number";
import Image from "next/image";

const RegisterForm = () => {
  const { isSmallScreen } = useScreenSize(); // Use the context
  const router = useRouter();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [userId, setUserId] = useState("");

  const formik = useFormik({
    initialValues: {
      lookingfor: "",
      name: "",
      mobile: "",
    },
    validationSchema: Yup.object({
      lookingfor: Yup.string().required("Selection is required"),
      name: Yup.string().required("Name is required"),
      mobile: Yup.string().required("Mobile number is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Values:", values);
      setUserId("exampleUserId"); // Example user ID
      setIsDialogOpen(true);
    },
  });

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    router.push("/login"); // Redirect to login page
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
            position: "relative",
            paddingTop: isSmallScreen ? "24px" : "32px",
          }}
        >
          <Box mt={isSmallScreen ? 2 : 4}>
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={75}
              priority
            />
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
            Create a new account
          </Typography>
          <Typography
            variant="h3"
            gutterBottom
            style={{
              color: "#ECC290",
              fontSize: isSmallScreen ? "0.8rem" : "2rem",
              position: "absolute",
              bottom: "32px",
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
            width={isSmallScreen ? "100%" : "500px"}
            height={isSmallScreen ? "50%" : "100%"}
            p={2}
            sx={{
              maxWidth: "500px",
              mx: isSmallScreen ? "0" : "auto",
            }}
          >
            <form onSubmit={formik.handleSubmit}>
              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend" sx={{ textAlign: "left" }}>
                  I'm Looking for a
                </FormLabel>
                <ToggleButtonGroup
                  value={formik.values.lookingfor}
                  exclusive
                  onChange={(event, newValue) => {
                    if (newValue !== null) {
                      formik.setFieldValue("lookingfor", newValue);
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
                {formik.touched.lookingfor && formik.errors.lookingfor && (
                  <Typography
                    color="error"
                    variant="body2"
                    sx={{ textAlign: "left", mt: 1 }}
                  >
                    {formik.errors.lookingfor}
                  </Typography>
                )}
              </FormControl>

              <TextField
                label="Name"
                variant="outlined"
                margin="normal"
                fullWidth
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                inputProps={{ style: { textAlign: "left" } }}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={
                  formik.touched.name ? (
                    <Typography variant="body2" color="error" sx={{ textAlign: "left" }}>
                      {formik.errors.name}
                    </Typography>
                  ) : null
                }
              />

              <FormControl fullWidth margin="normal">
                <FormLabel sx={{ textAlign: "left" }}>Mobile</FormLabel>
                <MuiPhoneNumber
                  defaultCountry={"in"}
                  value={formik.values.mobile}
                  onChange={(value) => formik.setFieldValue("mobile", value)}
                  variant="outlined"
                  fullWidth
                  inputProps={{ style: { textAlign: "left" } }}
                />
                {formik.touched.mobile && formik.errors.mobile && (
                  <Typography
                    color="error"
                    variant="body2"
                    sx={{ textAlign: "left", mt: 1 }}
                  >
                    {formik.errors.mobile}
                  </Typography>
                )}
              </FormControl>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                type="submit"
              >
                Register Free
              </Button>
            </form>

            <Typography
              variant="body2"
              style={{
                marginTop: "16px",
                color: "#143326",
                cursor: "pointer",
                textDecoration: "underline",
                fontSize: isSmallScreen ? "0.75rem" : "1rem",
              }}
              onClick={() => router.push("/login")}
            >
              Already registered? Login here
            </Typography>
          </Box>
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
  );
};

export default RegisterForm;
