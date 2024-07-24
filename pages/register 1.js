import React, { useState } from 'react';
import {
  Button,
  Container,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/router';
import NavBar from '../src/components/NavBar';
import BasicInfoStep from '@/components/register/BasicInfoStep';
import MoreInfoStep from '@/components/register/MoreInfoStep';
import PartnerPreferenceStep from '@/components/register/PartnerPreferenceStep';

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

  const steps = ['Basic Info', 'More Info', 'Partner Preference'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormValues({ ...formValues, mobile: value });
  };

  const handleRegister = () => {
    console.log(formValues);
    // Add your registration logic here
    router.push('/login');
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <BasicInfoStep formValues={formValues} handleChange={handleChange} handlePhoneChange={handlePhoneChange} isSmallScreen={isSmallScreen} />;
      case 1:
        return <MoreInfoStep formValues={formValues} handleChange={handleChange} />;
      case 2:
        return <PartnerPreferenceStep formValues={formValues} handleChange={handleChange} />;
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
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          padding={isSmallScreen ? '16px' : '32px'}
          sx={{
            bgcolor: "#FFFFFF",
            borderRadius: '12px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '500px',
            width: '100%',
            textAlign: 'center',
          }}
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
          <Stepper activeStep={activeStep} alternativeLabel style={{ width: '100%', marginBottom: '24px' }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {getStepContent(activeStep)}
          <Box mt={2} display="flex" justifyContent="space-between" width="100%">
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
      </Container>
    </>
  );
};

export default Register;
