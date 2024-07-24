import React, { useState } from "react";
import {
  Box,
  TextField,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  InputLabel,
  useMediaQuery,
  useTheme,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

const MoreInfoStep = ({ formValues, handleChange }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // State to track if "No" is selected
  const [firstMarriageValue, setFirstMarriageValue] = useState(
    formValues.firstMarriage
  );

  const handleFirstMarriageChange = (event, newValue) => {
    if (newValue !== null) {
      setFirstMarriageValue(newValue);
      handleChange({
        target: { name: "firstMarriage", value: newValue },
      });
    }
  };

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
    "Idukki",
  ];

  return (
    <Box
      display="flex"
      flexDirection={isSmallScreen ? "column" : "row"}
      justifyContent="space-between"
      width="100%"
      maxWidth="1200px"
      mx="auto"
      gap={2}
      p={2}
    >
      <Box flex={1} display="flex" flexDirection="column" gap={2}>
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
            <MenuItem value="Jama't">Jama&apos;t</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <Box>
            <ToggleButtonGroup
              value={firstMarriageValue}
              exclusive
              onChange={handleFirstMarriageChange}
              fullWidth
            >
              <ToggleButton value="yes" fullWidth>
                First Marriage
              </ToggleButton>
              <ToggleButton value="no" fullWidth>
                No
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </FormControl>

        {firstMarriageValue === "no" && (
          <TextField
            label="Note, if any"
            variant="outlined"
            margin="normal"
            fullWidth
            name="note"
            value={formValues.note}
            onChange={handleChange}
            inputProps={{ style: { textAlign: "left" } }}
          />
        )}

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
      </Box>

      <Box flex={1} display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Madrasa Education"
          variant="outlined"
          margin="normal"
          fullWidth
          name="madrasaEducation"
          type="number"
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
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel>Skin Color</InputLabel>
          <Select
            label="Skin Color"
            name="skinColor"
            value={formValues.skinColor}
            onChange={handleChange}
          >
            <MenuItem value="fair">Fair</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Height (cm)"
          variant="outlined"
          margin="normal"
          fullWidth
          name="height"
          type="number"
          value={formValues.height}
          onChange={handleChange}
          inputProps={{ style: { textAlign: "left" } }}
        />
      </Box>

      <Box flex={1} display="flex" flexDirection="column" gap={2}>
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
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel>District</InputLabel>
          <Select
            label="District"
            name="district"
            value={formValues.district}
            onChange={handleChange}
          >
            {districts.map((district) => (
              <MenuItem key={district} value={district}>
                {district}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
    </Box>
  );
};

export default MoreInfoStep;
