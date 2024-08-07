import React from 'react';
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Typography,
  useMediaQuery,
  useTheme,
  TextField
} from '@mui/material';

const districts = [
  "Kasaragod",
  "Kannur",
  "Wayanad",
  "Kozhikode",
  "Malappuram",
  "Thrissur",
  "Palakkad",
  "Ernakulam",
  "Kottayam",
  "Alappuzha",
  "Pathanamthitta",
  "Kollam",
  "Thiruvananthapuram",
  "Idukki"
];

const PartnerPreferenceStep = ({ formik }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDistrictChange = (event) => {
    const { value } = event.target;
    const { setFieldValue } = formik;

    if (value.includes("All")) {
      const isAllSelected = formik.values.partnerDistrict.length === districts.length;
      if (isAllSelected) {
        setFieldValue('partnerDistrict', []);
      } else {
        setFieldValue('partnerDistrict', districts);
      }
    } else {
      setFieldValue('partnerDistrict', value);
    }
  };

  const isAllSelected = (formik.values.partnerDistrict || []).length === districts.length;

  const handleAgeRangeChange = (event, newValue) => {
    formik.setFieldValue('partnerAgeRange', newValue);
  };

  const handleAgeFromChange = (event) => {
    const newValue = [parseInt(event.target.value, 10), formik.values.partnerAgeRange[1]];
    formik.setFieldValue('partnerAgeRange', newValue);
  };

  const handleAgeToChange = (event) => {
    const newValue = [formik.values.partnerAgeRange[0], parseInt(event.target.value, 10)];
    formik.setFieldValue('partnerAgeRange', newValue);
  };

  return (
    <Box
      display="flex"
      flexDirection={isSmallScreen ? "column" : "row"}
      justifyContent="space-between"
      width="100%"
      gap="16px"
      flexWrap="wrap"
    >
      <Box flex="1" minWidth="280px">
        <FormControl fullWidth margin="normal">
          <InputLabel>Partner&apos;s District</InputLabel>
          <Select
            label="Partner&apos;s District"
            name="partnerDistrict"
            multiple
            value={formik.values.partnerDistrict || []}
            onChange={handleDistrictChange}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((district) => (
                  <Chip key={district} label={district} />
                ))}
              </Box>
            )}
            MenuProps={{
              PaperProps: {
                sx: {
                  maxHeight: 224,
                  width: 250,
                },
              },
            }}
          >
            <MenuItem key="all" value="All">
              {isAllSelected ? 'Deselect All' : 'Select All'}
            </MenuItem>
            {districts.map((district) => (
              <MenuItem
                key={district}
                value={district}
                disabled={isAllSelected && formik.values.partnerDistrict.includes(district)}
              >
                {district}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        
        <Box margin="normal">
          <Typography variant="subtitle1" align="left" gutterBottom>
            Partner&apos;s Age Range
          </Typography>
          <Slider
            value={formik.values.partnerAgeRange || [18, 30]}
            onChange={handleAgeRangeChange}
            valueLabelDisplay="auto"
            min={18}
            max={80}
            step={1}
            getAriaLabel={() => 'Age range'}
            aria-labelledby="range-slider"
          />
          <Box display="flex" justifyContent="space-between">
            <TextField
              label="From"
              type="number"
              value={formik.values.partnerAgeRange ? formik.values.partnerAgeRange[0] : 18}
              onChange={handleAgeFromChange}
              inputProps={{ min: 18, max: 80 }}
            />
            <TextField
              label="To"
              type="number"
              value={formik.values.partnerAgeRange ? formik.values.partnerAgeRange[1] : 30}
              onChange={handleAgeToChange}
              inputProps={{ min: 18, max: 80 }}
            />
          </Box>
        </Box>

        <TextField
          label="Additional Info 1"
          variant="outlined"
          margin="normal"
          fullWidth
          name="additionalInfo1"
          value={formik.values.additionalInfo1}
          onChange={formik.handleChange}
          inputProps={{ style: { textAlign: 'left' } }}
        />
        <TextField
          label="Additional Info 2"
          variant="outlined"
          margin="normal"
          fullWidth
          name="additionalInfo2"
          value={formik.values.additionalInfo2}
          onChange={formik.handleChange}
          inputProps={{ style: { textAlign: 'left' } }}
        />
        <TextField
          label="Additional Info 3"
          variant="outlined"
          margin="normal"
          fullWidth
          name="additionalInfo3"
          value={formik.values.additionalInfo3}
          onChange={formik.handleChange}
          inputProps={{ style: { textAlign: 'left' } }}
        />
      </Box>
    </Box>
  );
};

export default PartnerPreferenceStep;
