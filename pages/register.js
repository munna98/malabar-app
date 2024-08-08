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
  FormControlLabel,
  FormLabel,
  ToggleButton,
  ToggleButtonGroup,
  Typography
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
        <FormControl component="fieldset" fullWidth margin="normal">
          <FormLabel component="legend" sx={{ textAlign: 'left' }}>
            First Marriage
          </FormLabel>
          <ToggleButtonGroup
            name="firstMarriage"
            value={formik.values.firstMarriage ? 'yes' : 'no'}
            exclusive
            onChange={(event, newValue) => {
              if (newValue !== null) {
                const isFirstMarriage = newValue === 'yes';
                formik.setFieldValue('firstMarriage', isFirstMarriage);
                if (!isFirstMarriage) {
                  formik.setFieldValue('previousMarriageDetails', '');
                }
              }
            }}
            fullWidth
          >
            <ToggleButton value="yes" fullWidth>
              Yes
            </ToggleButton>
            <ToggleButton value="no" fullWidth>
              No
            </ToggleButton>
          </ToggleButtonGroup>
          {formik.touched.firstMarriage && formik.errors.firstMarriage && (
            <Typography color="error" variant="body2" align="left">
              {formik.errors.firstMarriage}
            </Typography>
          )}
        </FormControl>
        {!formik.values.firstMarriage && (
          <TextField
            label="Note if any"
            variant="outlined"
            fullWidth
            name="previousMarriageDetails"
            value={formik.values.previousMarriageDetails}
            onChange={formik.handleChange}
            inputProps={{ style: { textAlign: 'left' } }}
          />
        )}
      </Box>
    </Box>
  );
};

export default MoreInfoStep;
