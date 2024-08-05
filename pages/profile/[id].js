// pages/profile/[id].js
import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { 
  Container, 
  Card, 
  CardContent, 
  Grid, 
  Box, 
  Typography, 
  useMediaQuery, 
  IconButton,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeightIcon from '@mui/icons-material/Height';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CakeIcon from '@mui/icons-material/Cake';
import HomeIcon from '@mui/icons-material/Home';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AttachFileIcon from '@mui/icons-material/AttachFile';

import NavBar from '../../src/components/NavBar';
import theme from '../../src/theme';
import { generateAvatar } from '../../src/utils/avatar';

const Profile = () => {
  const router = useRouter();
  const { id } = router.query;
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  // Sample user data
  const userData = {
    profileid: id || 'N/A',
    role: 'bride',
    country: 'India',
    mobile: '+91 82899-54228',
    name: 'Sainaba',
    spirit: 'Tabligh',
    firstMarriage: 'No',
    age: '30',
    education: 'MCom',
    madrasaEducation: '8',
    job: 'Software Developer',
    skinColor: 'Light',
    height: '162 cm',
    bodyType: 'Athletic',
    district: 'Kasargod',
    place: 'Trikkaripur',
    partnerDistrict: 'Kasargod',
    partnerAgeFrom: '34',
    partnerAgeTo: '38',
    additionalInfo1: 'Loves hiking and outdoor activities.',
    additionalInfo2: 'Enjoys reading science fiction.',
    additionalInfo3: 'Active in local community service.',
  };

  const InfoItem = ({ icon, label, value, index }) => (
    <Box 
      display="flex" 
      alignItems="center" 
      mb={1} 
      style={{ 
        backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#ffffff',
        borderRadius: '8px', 
        padding: '8px', 
        transition: 'background-color 0.3s ease-in-out' 
      }}
    >
      <IconButton size="small" style={{ marginRight: '12px', color: theme.palette.primary.main }}>
        {icon}
      </IconButton>
      <Typography variant="body1" style={{ fontWeight: 500 }}>
        <strong>{label}:</strong> {value}
      </Typography>
    </Box>
  );

  const personalInfoItems = [
    { icon: <LocationOnIcon />, label: 'Country', value: userData.country },
    { icon: <PhoneIcon />, label: 'Mobile', value: userData.mobile },
    { icon: <FavoriteIcon />, label: 'Spirit', value: userData.spirit },
    { icon: <SchoolIcon />, label: 'Education', value: userData.education },
    { icon: <WorkIcon />, label: 'Job', value: userData.job },
    { icon: <CakeIcon />, label: 'Age', value: userData.age },
    { icon: <ColorLensIcon />, label: 'Skin Color', value: userData.skinColor },
    { icon: <HeightIcon />, label: 'Height', value: userData.height },
    { icon: <AccessibilityIcon />, label: 'Body Type', value: userData.bodyType },
    { icon: <HomeIcon />, label: 'District', value: userData.district },
    { icon: <MenuBookIcon />, label: 'Madrasa Education', value: userData.madrasaEducation },
  ];

  const partnerInfoItems = [
    { icon: <LocationOnIcon />, label: 'Partner District', value: userData.partnerDistrict },
    { icon: <FavoriteIcon />, label: 'Partner Age', value: `${userData.partnerAgeFrom} - ${userData.partnerAgeTo}` },
  ];

  const additionalInfoItems = [
    userData.additionalInfo1,
    userData.additionalInfo2,
    userData.additionalInfo3,
  ];

  return (
    <>
      <Head>
        <title>{userData.name}&#39;s Profile | Your App Name</title>
        <meta name="description" content={`Profile page for ${userData.name}`} />
      </Head>
      <NavBar />
      <Container maxWidth="lg">
        <Box my={4} display="flex" justifyContent="center" alignItems="center">
          <Card style={{ width: '100%', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            <Grid container>
              <Grid item xs={12} md={4} style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.secondary.main, padding: isSmallScreen ? '24px' : '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                {/* Use the generateAvatar function to generate the avatar */}
                {generateAvatar(userData.name, 120)}
                <Typography variant="h3" style={{ marginBottom: '8px', fontWeight: 700 }}>{userData.name}</Typography>
                <Typography variant="h6" style={{ textTransform: 'capitalize', marginBottom: '8px', fontWeight: 500 }}>{userData.role}</Typography>
                <Typography variant="body1" style={{ fontWeight: 500 }}><strong>Profile ID:</strong> {userData.profileid}</Typography>
              </Grid>
              <Grid item xs={12} md={8}>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Card style={{ padding: '16px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                        <Typography variant="h5" style={{ marginBottom: '16px', fontWeight: 600 }}>Personal Information</Typography>
                        {personalInfoItems.map((item, index) => (
                          <InfoItem key={item.label} icon={item.icon} label={item.label} value={item.value} index={index} />
                        ))}
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Card style={{ padding: '16px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                        <Typography variant="h5" style={{ marginBottom: '16px', fontWeight: 600 }}>Partner Preference</Typography>
                        {partnerInfoItems.map((item, index) => (
                          <InfoItem key={item.label} icon={item.icon} label={item.label} value={item.value} index={index} />
                        ))}
                      </Card>
                      <Card style={{ padding: '16px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', marginTop: '22px' }}>
                        <Typography variant="h5" style={{ marginBottom: '16px', fontWeight: 600 }}>Additional Information</Typography>
                        {additionalInfoItems.map((info, index) => (
                          <Box 
                            key={index} 
                            display="flex" 
                            alignItems="center" 
                            mb={1} 
                            style={{ 
                              backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#ffffff', 
                              borderRadius: '8px',
                              padding: '8px', 
                              transition: 'background-color 0.3s ease-in-out' 
                            }}
                          >
                            <AttachFileIcon style={{ marginRight: '12px', color: theme.palette.primary.main }} />
                            <Typography variant="body1">{info}</Typography>
                          </Box>
                        ))}
                      </Card>
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default Profile;
