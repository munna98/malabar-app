import React from "react";
import {
  Box,
  TextField,
  FormControl,
  FormLabel,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import MuiPhoneNumber from "mui-phone-number";

const BasicInfoStep = ({
  formValues,
  handleChange,
  handlePhoneChange,
  isSmallScreen,
}) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    width={isSmallScreen ? "100%" : "500px"}
  >
    <FormControl component="fieldset" fullWidth margin="normal">
      <Box
      >
        <ToggleButtonGroup
          value={formValues.role}
          exclusive
          onChange={(event, newValue) => {
            if (newValue !== null) {
              handleChange({
                target: { name: "role", value: newValue },
              });
            }
          }}
          fullWidth
        >
          <ToggleButton value="bride" fullWidth>
            Bride
          </ToggleButton>
          <ToggleButton value="groom" fullWidth>
            Groom
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </FormControl>
    <TextField
      label="Name"
      variant="outlined"
      margin="normal"
      fullWidth
      name="name"
      value={formValues.name}
      onChange={handleChange}
      inputProps={{ style: { textAlign: "left" } }}
    />
    <MuiPhoneNumber
      defaultCountry={"us"}
      value={formValues.mobile}
      onChange={handlePhoneChange}
      variant="outlined"
      fullWidth
      margin="normal"
      inputProps={{ style: { textAlign: "left" } }}
    />
  </Box>
);

export default BasicInfoStep;
