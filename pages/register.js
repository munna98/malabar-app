import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Container,
  Typography,
  TextField,
  Box,
  FormControl,
  FormLabel,
  ToggleButton,
  ToggleButtonGroup,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import { useRouter } from 'next/router';
import NavBar from '../src/components/NavBar';
import MuiPhoneNumber from 'mui-phone-number';
import { useScreenSize } from '../src/context/ScreenSizeContext';
import Image from 'next/image';

const Register = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [userId, setUserId] = React.useState('');
  const { isSmallScreen } = useScreenSize();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      lookingfor: '',
      mobile: '',
      name: '',
    },
    validationSchema: Yup.object({
      lookingfor: Yup.string().required('Please select an option.'),
      name: Yup.string().required('Name is required.'),
      mobile: Yup.string().required('Mobile number is required.'),
    }),
    onSubmit: (values) => {
      console.log(values);
      setUserId('123456'); // Simulate user ID assignment
      setIsDialogOpen(true);
    },
  });

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    router.push('/login');
  };

  return (
    <>
      <NavBar />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          margin: 0,
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
            sx={{
              bgcolor: '#143326',
              width: '100%',
              height: '100%',
              textAlign: 'center',
              padding: '32px',
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
              sx={{
                color: '#ECC290',
                fontSize: { xs: '0.65rem', sm: '1.25rem' },
                mt: { xs: 1, sm: 2 },
                textAlign: 'center',
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
            sx={{
              width: '100%',
              height: '100%',
              maxWidth: '500px',
              mx: 'auto',
              p: 2,
            }}
          >
            <form onSubmit={formik.handleSubmit}>
              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend" sx={{ textAlign: 'left' }}>
                  I am Looking for a
                </FormLabel>
                <ToggleButtonGroup
                  name="lookingfor"
                  value={formik.values.lookingfor}
                  exclusive
                  onChange={(event, newValue) => {
                    if (newValue !== null) {
                      formik.setFieldValue('lookingfor', newValue);
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
                  <Typography color="error" variant="body2" align="left">
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
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                inputProps={{ style: { textAlign: 'left' } }}
              />

              <FormControl fullWidth margin="normal">
                <FormLabel sx={{ textAlign: 'left' }}>Mobile</FormLabel>
                <MuiPhoneNumber
                  defaultCountry={'in'}
                  disableAreaCodes
                  countryCodeEditable={false}
                  name="mobile"
                  value={formik.values.mobile}
                  onChange={(value) => formik.setFieldValue('mobile', value)}
                  variant="outlined"
                  fullWidth
                  inputProps={{ style: { textAlign: 'left' } }}
                />
                {formik.touched.mobile && formik.errors.mobile && (
                  <Typography color="error" variant="body2" align="left">
                    {formik.errors.mobile}
                  </Typography>
                )}
              </FormControl>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Register Free
              </Button>
            </form>
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                color: '#143326',
                cursor: 'pointer',
                textDecoration: 'underline',
                fontSize: '1rem',
              }}
              onClick={() => router.push('/login')}
            >
              Already registered? Login here
            </Typography>
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
