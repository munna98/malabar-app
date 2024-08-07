import React, { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  IconButton,
  Collapse,
  Button,
  useMediaQuery,
  useTheme,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  School as EducationIcon,
  Face as SpiritIcon,
  Person as MarriageIcon,
  Work as JobIcon,
  Palette as SkinColorIcon,
  Height as HeightIcon,
  AccessibilityNew as BodyTypeIcon, // Changed icon
  Place as PlaceIcon,
  Public as PartnerDistrictIcon,
  DateRange as PartnerAgeIcon,
  Phone as MobileIcon,
  MenuBook as MadrasaEducationIcon, // Changed icon
  AttachFile as AdditionalInfoIcon, // New icon for additional info
} from "@mui/icons-material";
import { generateAvatar } from "../../utils/avatar";
import { useRouter } from "next/router";
import LoginPromptDialog from "../LoginPromptDialog";
import { useScreenSize } from "@/context/ScreenSizeContext";


const UserCard = ({ user, isExpanded, onExpand, isRegistered, isLoggedIn }) => {
  const { isLargeScreen } = useScreenSize();
  const [openDialog, setOpenDialog] = useState(false);
  const router = useRouter();

  const handleRequestMobile = () => {
    if (!isLoggedIn) {
      setOpenDialog(true);
    } else {
      // Implement the logic for requesting mobile number if logged in
      console.log("Requesting mobile number for user:", user.profileId);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleLoginRedirect = () => {
    router.push("/login");
  };

  return (
    <Card
      style={{
        marginBottom: "16px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <CardContent
        style={{
          backgroundColor: "#143326",
          color: "#fff",
          position: "relative",
          padding: "16px",
        }}
      >
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={3}>
            {generateAvatar(user.name, 60)}
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" style={{ fontSize: "0.75rem" }}>
              {user.role}
            </Typography>
            <Typography variant="body2" style={{ fontSize: "0.75rem" }}>
              Age: {user.age}
            </Typography>
            <Typography variant="body2" style={{ fontSize: "0.75rem" }}>
              District: {user.district}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                height: "100%",
                justifyContent: "space-between",
              }}
            >
              <Chip
                label={`ID: ${user.profileId}`}
                size="small"
                style={{
                  fontSize: "0.75rem",
                  color: "#fff",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
              />
              <Typography variant="body2" style={{ fontSize: "0.75rem" }}>
                {user.date}
              </Typography>
              {!isLargeScreen && (
                <IconButton
                  onClick={onExpand}
                  aria-expanded={isExpanded}
                  style={{
                    color: "#fff",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    padding: "4px",
                    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }}
                >
                  <ExpandMoreIcon fontSize="small" />
                </IconButton>
              )}
            </div>
          </Grid>
        </Grid>
      </CardContent>
      <Collapse
        in={isExpanded || isLargeScreen}
        timeout="auto"
        unmountOnExit={!isLargeScreen}
      >
        <CardContent
          style={{
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "0 0 12px 12px",
            margin: 0,
            padding: "8px 16px",
            width: "100%",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <Typography
                variant="body2"
                style={{
                  fontSize: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <SpiritIcon fontSize="small" style={{ marginRight: "4px" }} />{" "}
                Spirit: {user.spirit}
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography
                variant="body2"
                style={{
                  fontSize: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MarriageIcon fontSize="small" style={{ marginRight: "4px" }} />{" "}
                First Marriage: {user.firstMarriage}
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography
                variant="body2"
                style={{
                  fontSize: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <EducationIcon
                  fontSize="small"
                  style={{ marginRight: "4px" }}
                />{" "}
                Education: {user.education}
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography
                variant="body2"
                style={{
                  fontSize: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MadrasaEducationIcon
                  fontSize="small"
                  style={{ marginRight: "4px" }}
                />{" "}
                Madrasa Education: {user.madrasaEducation}
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography
                variant="body2"
                style={{
                  fontSize: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <JobIcon fontSize="small" style={{ marginRight: "4px" }} /> Job:{" "}
                {user.job}
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography
                variant="body2"
                style={{
                  fontSize: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <SkinColorIcon
                  fontSize="small"
                  style={{ marginRight: "4px" }}
                />{" "}
                Skin Color: {user.skinColor}
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography
                variant="body2"
                style={{
                  fontSize: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <HeightIcon fontSize="small" style={{ marginRight: "4px" }} />{" "}
                Height: {user.height}
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography
                variant="body2"
                style={{
                  fontSize: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <BodyTypeIcon fontSize="small" style={{ marginRight: "4px" }} />{" "}
                Body Type: {user.bodyType}
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography
                variant="body2"
                style={{
                  fontSize: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <PlaceIcon fontSize="small" style={{ marginRight: "4px" }} />{" "}
                Place: {user.place}
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography
                variant="body2"
                style={{
                  fontSize: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <PartnerDistrictIcon
                  fontSize="small"
                  style={{ marginRight: "4px" }}
                />{" "}
                Partner District: {user.partnerDistrict}
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography
                variant="body2"
                style={{
                  fontSize: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <PartnerAgeIcon
                  fontSize="small"
                  style={{ marginRight: "4px" }}
                />{" "}
                Partner Age: {user.partnerAge}
              </Typography>
            </Grid>
            {user.additionalInfo1 && (
              <Grid item xs={12}>
                <Typography variant="body2" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center' }}>
                  <AdditionalInfoIcon
                    fontSize="small"
                    style={{ marginRight: '4px' }}
                  />{" "}
                  {user.additionalInfo1}
                </Typography>
              </Grid>
            )}
            {user.additionalInfo2 && (
              <Grid item xs={12}>
                <Typography variant="body2" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center' }}>
                  <AdditionalInfoIcon
                    fontSize="small"
                    style={{ marginRight: '4px' }}
                  />{" "}
                  {user.additionalInfo2}
                </Typography>
              </Grid>
            )}
            {user.additionalInfo3 && (
              <Grid item xs={12}>
                <Typography variant="body2" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center' }}>
                  <AdditionalInfoIcon
                    fontSize="small"
                    style={{ marginRight: '4px' }}
                  />{" "}
                  {user.additionalInfo3}
                </Typography>
              </Grid>
            )}
          </Grid>
        </CardContent>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 16px", backgroundColor: "#fff", borderTop: "1px solid #ccc" }}>
          <Button
        onClick={handleRequestMobile}
        variant="contained"
        color="primary"
        
      >
        <MobileIcon fontSize="small" style={{ marginRight: "4px" }} />
        View Mobile
      </Button>
          <IconButton
            onClick={onExpand}
            aria-expanded={isExpanded}
            style={{
              color: "#143326",
              transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s",
            }}
          >
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </Collapse>
      <LoginPromptDialog
        open={openDialog}
        onClose={handleCloseDialog}
        onLoginRedirect={handleLoginRedirect}
      />
    </Card>
  );
};

export default UserCard;
