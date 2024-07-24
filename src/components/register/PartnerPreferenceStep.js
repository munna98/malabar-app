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

const PartnerPreferenceStep = ({ formValues, handleChange }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDistrictChange = (event) => {
    const { value } = event.target;

    if (value.includes("All")) {
      const isAllSelected = formValues.partnerDistrict.length === districts.length;
      if (isAllSelected) {
        handleChange({ target: { name: 'partnerDistrict', value: [] } });
      } else {
        handleChange({ target: { name: 'partnerDistrict', value: districts } });
      }
    } else {
      handleChange({ target: { name: 'partnerDistrict', value } });
    }
  };

  const isAllSelected = formValues.partnerDistrict.length === districts.length;

  const handleAgeRangeChange = (event, newValue) => {
    handleChange({ target: { name: 'partnerAgeRange', value: newValue } });
  };

  const handleAgeFromChange = (event) => {
    const newValue = [parseInt(event.target.value, 10), formValues.partnerAgeRange[1]];
    handleChange({ target: { name: 'partnerAgeRange', value: newValue } });
  };

  const handleAgeToChange = (event) => {
    const newValue = [formValues.partnerAgeRange[0], parseInt(event.target.value, 10)];
    handleChange({ target: { name: 'partnerAgeRange', value: newValue } });
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
          <InputLabel>Partner's District</InputLabel>
          <Select
            label="Partner's District"
            name="partnerDistrict"
            multiple
            value={formValues.partnerDistrict || []}
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
                disabled={isAllSelected && formValues.partnerDistrict.includes(district)}
              >
                {district}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        
        <Box margin="normal">
          <Typography variant="subtitle1" align="left" gutterBottom>
            Partners&apos Age 
          </Typography>
          <Slider
            value={formValues.partnerAgeRange || [18, 30]}
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
              value={formValues.partnerAgeRange ? formValues.partnerAgeRange[0] : 18}
              onChange={handleAgeFromChange}
              inputProps={{ min: 18, max: 80 }}
            />
            <TextField
              label="To"
              type="number"
              value={formValues.partnerAgeRange ? formValues.partnerAgeRange[1] : 30}
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
};

export default PartnerPreferenceStep;
