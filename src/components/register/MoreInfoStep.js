import React from "react";
import {
  Box,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";

const MoreInfoStep = ({ formValues, handleChange }) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    width="100%"
  >
    <FormControl fullWidth variant="outlined" margin="normal">
      <InputLabel>Spirit</InputLabel>
      <Select
        label="Spirit"
        name="spirit"
        value={formValues.spirit}
        onChange={handleChange}
      >
        <MenuItem value="Sunni">Sunni</MenuItem>
        <MenuItem value="Salafi">Salafi</MenuItem>
        <MenuItem value="Tablig">Tablig</MenuItem>
        <MenuItem value="Jama&rsquo;t">Jama&rsquo;t</MenuItem>
      </Select>
    </FormControl>
    <FormControl
      component="fieldset"
      fullWidth
      margin="normal"
      style={{ textAlign: "left" }}
    >
      <FormLabel component="legend">First Marriage?</FormLabel>
      <RadioGroup
        name="firstMarriage"
        value={formValues.firstMarriage}
        onChange={handleChange}
        row
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
    <TextField
      label="Age"
      variant="outlined"
      margin="normal"
      fullWidth
      name="age"
      type="number"
      value={formValues.age}
      onChange={handleChange}
      inputProps={{ style: { textAlign: "left" } }}
    />
    <TextField
      label="Education"
      variant="outlined"
      margin="normal"
      fullWidth
      name="education"
      value={formValues.education}
      onChange={handleChange}
      inputProps={{ style: { textAlign: "left" } }}
    />
    <TextField
      label="Madrasa Education"
      variant="outlined"
      margin="normal"
      fullWidth
      name="madrasaEducation"
      value={formValues.madrasaEducation}
      onChange={handleChange}
      inputProps={{ style: { textAlign: "left" } }}
    />
    <TextField
      label="Job"
      variant="outlined"
      margin="normal"
      fullWidth
      name="job"
      value={formValues.job}
      onChange={handleChange}
      inputProps={{ style: { textAlign: "left" } }}
    />
    <TextField
      label="Skin Color"
      variant="outlined"
      margin="normal"
      fullWidth
      name="skinColor"
      value={formValues.skinColor}
      onChange={handleChange}
      inputProps={{ style: { textAlign: "left" } }}
    />
    <TextField
      label="Height"
      variant="outlined"
      margin="normal"
      fullWidth
      name="height"
      type="number"
      value={formValues.height}
      onChange={handleChange}
      inputProps={{ style: { textAlign: "left" } }}
    />
    <FormControl fullWidth variant="outlined" margin="normal">
      <InputLabel>Body Type</InputLabel>
      <Select
        label="Body Type"
        name="bodyType"
        value={formValues.bodyType}
        onChange={handleChange}
      >
        <MenuItem value="slim">Slim</MenuItem>
        <MenuItem value="average">Average</MenuItem>
        <MenuItem value="athletic">Athletic</MenuItem>
        <MenuItem value="heavy">Heavy</MenuItem>
      </Select>
    </FormControl>
    <TextField
      label="District"
      variant="outlined"
      margin="normal"
      fullWidth
      name="district"
      value={formValues.district}
      onChange={handleChange}
      inputProps={{ style: { textAlign: "left" } }}
    />
    <TextField
      label="Place"
      variant="outlined"
      margin="normal"
      fullWidth
      name="place"
      value={formValues.place}
      onChange={handleChange}
      inputProps={{ style: { textAlign: "left" } }}
    />
  </Box>
);

export default MoreInfoStep;