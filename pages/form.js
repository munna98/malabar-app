import React from 'react';
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
import { Formik, Form } from 'formik';
import NavBar from '../src/components/NavBar';
import BasicInfoStep from '@/components/form/BasicInfoStep';
import MoreInfoStep from '@/components/form/MoreInfoStep';
import PartnerPreferenceStep from '@/components/form/PartnerPreferenceStep';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ValidationSchema from '@/components/schema/ValidationSchema';

const FormComponent = () => {
  const [activeStep, setActiveStep] = React.useState(0);
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

  const handleSubmitForm = (values) => {
    console.log(values);
    // Add your form submit logic here
    router.push('/login');
  };

  const getStepContent = (stepIndex, formik) => {
    switch (stepIndex) {
      case 0:
        return <BasicInfoStep formik={formik} isSmallScreen={isSmallScreen} />;
      case 1:
        return <MoreInfoStep formik={formik} />;
      case 2:
        return <PartnerPreferenceStep formik={formik} />;
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

  return (
    <>
      <NavBar />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          minHeight: 'calc(100vh - 64px)', // Adjust height to account for the NavBar height
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0',
          margin: '0',
          overflowY: 'auto', // Add vertical scroll to the page
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
            maxWidth: '1100px', // Ensure the card fits well within the page
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
            Form
          </Typography>
          <Formik
            initialValues={{
              age: '',
              height: '',
              skinColor: '',
              bodyType: '',
              education: '',
              madrasaEducation: '',
              job: '',
              district: '',
              place: '',
              firstMarriage: true,
              previousMarriageDetails: '',
              additionalInfo1: '',
              additionalInfo2: '',
              additionalInfo3: '',
              partnerDistrict: [],
              partnerAgeRange: [18, 30]
            }}
            validationSchema={ValidationSchema}
            onSubmit={handleSubmitForm}
          >
            {formik => (
              <Form style={{ width: '100%', maxWidth: '600px' }}> {/* Set fixed width */}
                <Stepper activeStep={activeStep} alternativeLabel style={{ width: '100%', marginBottom: '24px' }}>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                {getStepContent(activeStep, formik)}
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
                      onClick={handleNext}
                      style={{
                        backgroundColor: "#143326",
                        color: "#ECC290",
                      }}
                    >
                      <ArrowForwardIcon />
                    </IconButton>
                  ) : (
                    <Button
                      variant="contained"
                      type="submit"
                      style={{
                        backgroundColor: "#143326",
                        color: "#ECC290",
                      }}
                    >
                      Submit
                    </Button>
                  )}
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </>
  );
};

export default FormComponent;
