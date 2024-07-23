import React, { useState } from 'react';
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  InputLabel,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/router';
import NavBar from '../src/components/NavBar';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

const Register = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({
    role: '',
    country: '',
    mobile: '',
    name: '',
    spirit: '',
    firstMarriage: '',
    age: '',
    education: '',
    madrasaEducation: '',
    job: '',
    skinColor: '',
    height: '',
    bodyType: '',
    district: '',
    place: '',
    partnerDistrict: '',
    partnerAgeFrom: '',
    partnerAgeTo: '',
    additionalInfo1: '',
    additionalInfo2: '',
    additionalInfo3: '',
  });
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormValues({ ...formValues, mobile: value });
  };

  const handleRegister = () => {
    console.log(formValues);

    // Add your registration logic here

    // Navigate to login page after successful registration
    router.push('/login');
  };

  const steps = ['Basic Info', 'More Info', 'Partner Preference'];

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%">
            <TextField
              label="Name"
              variant="outlined"
              margin="normal"
              fullWidth
              name="name"
              value={formValues.name}
              onChange={handleChange}
              inputProps={{ style: { textAlign: 'left' } }}
            />
            <FormControl component="fieldset" fullWidth margin="normal" style={{ textAlign: 'left' }}>
              <FormLabel component="legend">Bride or Groom</FormLabel>
              <RadioGroup name="role" value={formValues.role} onChange={handleChange} row>
                <FormControlLabel value="bride" control={<Radio />} label="Bride" />
                <FormControlLabel value="groom" control={<Radio />} label="Groom" />
              </RadioGroup>
            </FormControl>
            <PhoneInput
              country={'us'}
              value={formValues.mobile}
              onChange={handlePhoneChange}
              inputStyle={{ width: '100%', textAlign: 'left' }}
              containerStyle={{ width: '100%' }}
            />
          </Box>
        );
      case 1:
        return (
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%">
            <TextField
              label="Spirit"
              variant="outlined"
              margin="normal"
              fullWidth
              name="spirit"
              value={formValues.spirit}
              onChange={handleChange}
              inputProps={{ style: { textAlign: 'left' } }}
            />
            <FormControl component="fieldset" fullWidth margin="normal" style={{ textAlign: 'left' }}>
              <FormLabel component="legend">First Marriage?</FormLabel>
              <RadioGroup name="firstMarriage" value={formValues.firstMarriage} onChange={handleChange} row>
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            <TextField
              label="Age"
              variant="outlined"
              margin="normal"
              fullWidth
              name="age"
              type="number"
              value={formValues.age}
              onChange={handleChange}
              inputProps={{ style: { textAlign: 'left' } }}
            />
            <TextField
              label="Education"
              variant="outlined"
              margin="normal"
              fullWidth
              name="education"
              value={formValues.education}
              onChange={handleChange}
              inputProps={{ style: { textAlign: 'left' } }}
            />
            <TextField
              label="Madrasa Education"
              variant="outlined"
              margin="normal"
              fullWidth
              name="madrasaEducation"
              value={formValues.madrasaEducation}
              onChange={handleChange}
              inputProps={{ style: { textAlign: 'left' } }}
            />
            <TextField
              label="Job"
              variant="outlined"
              margin="normal"
              fullWidth
              name="job"
              value={formValues.job}
              onChange={handleChange}
              inputProps={{ style: { textAlign: 'left' } }}
            />
            <TextField
              label="Skin Color"
              variant="outlined"
              margin="normal"
              fullWidth
              name="skinColor"
              value={formValues.skinColor}
              onChange={handleChange}
              inputProps={{ style: { textAlign: 'left' } }}
            />
            <TextField
              label="Height"
              variant="outlined"
              margin="normal"
              fullWidth
              name="height"
              type="number"
              value={formValues.height}
              onChange={handleChange}
              inputProps={{ style: { textAlign: 'left' } }}
            />
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>Body Type</InputLabel>
              <Select
                label="Body Type"
                name="bodyType"
                value={formValues.bodyType}
                onChange={handleChange}
              >
                <MenuItem value="slim">Slim</MenuItem>
                <MenuItem value="average">Average</MenuItem>
                <MenuItem value="athletic">Athletic</MenuItem>
                <MenuItem value="heavy">Heavy</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="District"
              variant="outlined"
              margin="normal"
              fullWidth
              name="district"
              value={formValues.district}
              onChange={handleChange}
              inputProps={{ style: { textAlign: 'left' } }}
            />
            <TextField
              label="Place"
              variant="outlined"
              margin="normal"
              fullWidth
              name="place"
              value={formValues.place}
              onChange={handleChange}
              inputProps={{ style: { textAlign: 'left' } }}
            />
          </Box>
        );
      case 2:
        return (
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%">
            <TextField
              label="Partner's District"
              variant="outlined"
              margin="normal"
              fullWidth
              name="partnerDistrict"
              value={formValues.partnerDistrict}
              onChange={handleChange}
              inputProps={{ style: { textAlign: 'left' } }}
            />
            <TextField
              label="Partner's Age From"
              variant="outlined"
              margin="normal"
              fullWidth
              name="partnerAgeFrom"
              type="number"
              value={formValues.partnerAgeFrom}
              onChange={handleChange}
              inputProps={{ style: { textAlign: 'left' } }}
            />
            <TextField
              label="Partner's Age To"
              variant="outlined"
              margin="normal"
              fullWidth
              name="partnerAgeTo"
              type="number"
              value={formValues.partnerAgeTo}
              onChange={handleChange}
              inputProps={{ style: { textAlign: 'left' } }}
            />
            <TextField
              label="Additional Info 1"
              variant="outlined"
              margin="normal"
              fullWidth
              name="additionalInfo1"
              value={formValues.additionalInfo1}
              onChange={handleChange}
              inputProps={{ style: { textAlign: 'left' } }}
            />
            <TextField
              label="Additional Info 2"
              variant="outlined"
              margin="normal"
              fullWidth
              name="additionalInfo2"
              value={formValues.additionalInfo2}
              onChange={handleChange}
              inputProps={{ style: { textAlign: 'left' } }}
            />
            <TextField
              label="Additional Info 3"
              variant="outlined"
              margin="normal"
              fullWidth
              name="additionalInfo3"
              value={formValues.additionalInfo3}
              onChange={handleChange}
              inputProps={{ style: { textAlign: 'left' } }}
            />
          </Box>
        );
      default:
        return 'Unknown step';
    }
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
          overflow="auto" // Add scroll if necessary
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding="32px"
            sx={{
              bgcolor: "#ECC290",
              width: isSmallScreen ? '100%' : '500px',
              textAlign: 'center',
              height: '100%',
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              width="100%"
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
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              {getStepContent(activeStep)}
              <Box mt={2} display="flex" justifyContent="flex-end" width="100%">
                {activeStep > 0 && (
                  <Button
                    onClick={handleBack}
                    style={{
                      marginRight: '8px',
                      color: "#143326",
                    }}
                  >
                    Back
                  </Button>
                )}
                {activeStep === steps.length - 1 ? (
                  <Button
                    variant="contained"
                    onClick={handleRegister}
                    style={{
                      backgroundColor: "#143326",
                      color: "#ECC290",
                    }}
                  >
                    Register
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    style={{
                      backgroundColor: "#143326",
                      color: "#ECC290",
                    }}
                  >
                    Next
                  </Button>
                )}
              </Box>
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
