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
  IconButton
} from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';  // Import Link from next/link
import NavBar from '../src/components/NavBar';
import BasicInfoStep from '@/components/register/BasicInfoStep';
import MoreInfoStep from '@/components/register/MoreInfoStep';
import PartnerPreferenceStep from '@/components/register/PartnerPreferenceStep';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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

  const getButtonAlignment = () => {
    if (activeStep === 0) {
      return 'flex-end';
    }
    return 'space-between';
  };

  // Determine maxWidth based on the number of sections
  const determineMaxWidth = () => {
    if (activeStep === 0) {
      return '500px';
    }
    return '1200px';
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
          margin={isSmallScreen && '16px'}
          sx={{
            bgcolor: "#ECC290",
            borderRadius: '12px',
            boxShadow: '10px 10px 12px 12px rgba(0, 0, 0, 0.2)',
            maxWidth: determineMaxWidth(), // Dynamically adjust the width
            width: '100%',
            textAlign: 'center',
          }}
        >
          {activeStep === 0 && (
            <Typography
              variant="body2"
              style={{ alignSelf: 'flex-end', marginBottom: '16px' }}
            >
              Already registered? <Link href="/login">Login here</Link>
            </Typography>
          )}
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
          <Box mt={2} display="flex" justifyContent={getButtonAlignment()} width="100%">
            {activeStep > 0 && (
              <IconButton
                onClick={handleBack}
                style={{
                  color: "#143326",
                  marginRight: '8px',
                }}
              >
                <ArrowBackIcon />
              </IconButton>
            )}
            {activeStep < steps.length - 1 ? (
              <IconButton
                variant="contained"
                onClick={handleNext}
                style={{
                  backgroundColor: "#143326",
                  color: "#ECC290",
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            ) : (
              activeStep === steps.length - 1 && (
                <IconButton
                  variant="contained"
                  onClick={handleRegister}
                  style={{
                    backgroundColor: "#143326",
                    color: "#ECC290",
                  }}
                >
                  <ArrowForwardIcon />
                </IconButton>
              )
            )}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Register;
