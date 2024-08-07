import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const skinColors = [
  { value: 'fair', label: 'Fair' },
  { value: 'medium', label: 'Medium' },
  { value: 'dark', label: 'Dark' },
];

const bodyTypes = [
  { value: 'slim', label: 'Slim' },
  { value: 'average', label: 'Average' },
  { value: 'athletic', label: 'Athletic' },
  { value: 'heavy', label: 'Heavy' },
];

const BasicInfoStep = ({ formik, isSmallScreen }) => {
  return (
    <>
      <TextField
        fullWidth
        id="age"
        name="age"
        label="Age"
        value={formik.values.age}
        onChange={formik.handleChange}
        error={formik.touched.age && Boolean(formik.errors.age)}
        helperText={formik.touched.age && formik.errors.age}
        margin="normal"
      />
      <TextField
        fullWidth
        id="height"
        name="height"
        label="Height"
        value={formik.values.height}
        onChange={formik.handleChange}
        error={formik.touched.height && Boolean(formik.errors.height)}
        helperText={formik.touched.height && formik.errors.height}
        margin="normal"
      />
      <TextField
        fullWidth
        select
        id="skinColor"
        name="skinColor"
        label="Skin Color"
        value={formik.values.skinColor}
        onChange={formik.handleChange}
        error={formik.touched.skinColor && Boolean(formik.errors.skinColor)}
        helperText={formik.touched.skinColor && formik.errors.skinColor}
        margin="normal"
      >
        {skinColors.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        fullWidth
        select
        id="bodyType"
        name="bodyType"
        label="Body Type"
        value={formik.values.bodyType}
        onChange={formik.handleChange}
        error={formik.touched.bodyType && Boolean(formik.errors.bodyType)}
        helperText={formik.touched.bodyType && formik.errors.bodyType}
        margin="normal"
      >
        {bodyTypes.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default BasicInfoStep;
