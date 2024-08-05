import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextField, Container, Typography, Box } from "@mui/material";
import { useRouter } from "next/router";
import { useScreenSize } from "@/context/ScreenSizeContext";
import Image from "next/image";

const LoginForm = () => {
  const { isSmallScreen } = useScreenSize(); // Use the context
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      userId: "",
      password: "",
    },
    validationSchema: Yup.object({
      userId: Yup.string()
        .required("User ID is required"),
      password: Yup.string()
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("User ID:", values.userId);
      console.log("Password:", values.password);
      // Navigate to dynamic profile page
      router.push(`/profile/${values.userId}`);
    },
  });

  const handleRegister = () => {
    router.push("/register"); // Assuming you have a register page at /register
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
            paddingTop: isSmallScreen ? "24px" : "32px", // Adjust padding-top for small screens
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
              marginTop: isSmallScreen ? "8px" : "16px", // Adjust margin-top for small screens
            }}
          >
            Welcome back mate
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
          >
            <Typography
              variant="h4"
              gutterBottom
              style={{
                color: "#143326",
                fontSize: isSmallScreen ? "1.25rem" : "1.75rem",
              }}
            >
              Login
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                label="User ID"
                variant="outlined"
                margin="normal"
                fullWidth
                name="userId"
                value={formik.values.userId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.userId && Boolean(formik.errors.userId)}
                helperText={formik.touched.userId && formik.errors.userId}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button
                variant="contained"
                fullWidth
                type="submit"
                style={{ marginTop: "16px" }}
              >
                Login
              </Button>
            </form>
            <Typography
              variant="body2"
              style={{
                marginTop: "16px",
                color: "#143326",
                cursor: "pointer",
                textDecoration: "underline",
                fontSize: isSmallScreen ? "0.75rem" : "1rem", // Adjust font size for small screens
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
