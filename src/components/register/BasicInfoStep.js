import React from 'react';
import { Box, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const BasicInfoStep = ({ formValues, handleChange, handlePhoneChange, isSmallScreen }) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    width={isSmallScreen ? '100%' : '500px'}
  >
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

export default BasicInfoStep;
