import React from 'react';
import { Box, TextField } from '@mui/material';

const PartnerPreferenceStep = ({ formValues, handleChange }) => (
  <Box
    display="flex"
    flexDirection="row"
    justifyContent="space-between"
    width="100%"
    gap="16px" // Add gap between the two columns
    flexWrap="wrap" // Ensure that content wraps on smaller screens
  >
    <Box
      flex="1"
      minWidth="280px" // Ensure columns don’t get too narrow
    >
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
    </Box>
    <Box
      flex="1"
      minWidth="280px" // Ensure columns don’t get too narrow
    >
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
  </Box>
);

export default PartnerPreferenceStep;
