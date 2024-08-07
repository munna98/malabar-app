import React from 'react';
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const districts = [
  'Kasaragod',
  'Kannur',
  'Wayanad',
  'Kozhikode',
  'Malappuram',
  'Thrissur',
  'Palakkad',
  'Ernakulam',
  'Kottayam',
  'Alappuzha',
  'Pathanamthitta',
  'Kollam',
  'Thiruvananthapuram',
  'Idukki',
];

const MoreInfoStep = ({ formik }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      display="flex"
      flexDirection={isSmallScreen ? 'column' : 'row'}
      justifyContent="space-between"
      width="100%"
      maxWidth="1200px"
      mx="auto"
      gap={2}
      p={2}
    >
      <Box flex={1} display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Education"
          variant="outlined"
          fullWidth
          name="education"
          value={formik.values.education}
          onChange={formik.handleChange}
          inputProps={{ style: { textAlign: 'left' } }}
        />
        <TextField
          label="Madrasa Education"
          variant="outlined"
          fullWidth
          name="madrasaEducation"
          value={formik.values.madrasaEducation}
          onChange={formik.handleChange}
          inputProps={{ style: { textAlign: 'left' } }}
        />
        <TextField
          label="Job"
          variant="outlined"
          fullWidth
          name="job"
          value={formik.values.job}
          onChange={formik.handleChange}
          inputProps={{ style: { textAlign: 'left' } }}
        />
        <FormControl fullWidth>
          <InputLabel>District</InputLabel>
          <Select
            value={formik.values.district}
            onChange={formik.handleChange}
            name="district"
            label="District"
          >
            {districts.map((district, index) => (
              <MenuItem key={index} value={district}>
                {district}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Place"
          variant="outlined"
          fullWidth
          name="place"
          value={formik.values.place}
          onChange={formik.handleChange}
          inputProps={{ style: { textAlign: 'left' } }}
        />
      </Box>
    </Box>
  );
};

export default MoreInfoStep;
