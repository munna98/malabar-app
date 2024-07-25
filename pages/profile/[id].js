// pages/profile/[id].js
import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { 
  Container, 
  Card, 
  CardContent, 
  Grid, 
  Avatar as MuiAvatar, 
  Box, 
  Typography, 
  useMediaQuery, 
  Tooltip, 
  IconButton,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeightIcon from '@mui/icons-material/Height';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CakeIcon from '@mui/icons-material/Cake';
import HomeIcon from '@mui/icons-material/Home';

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
    // Remove the avatar path since we will generate it dynamically
  };

  const InfoItem = ({ icon, label, value }) => (
    <Box display="flex" alignItems="center" mb={2}>
      <Tooltip title={label}>
        <IconButton size="small" style={{ marginRight: '12px', color: theme.palette.primary.main }}>
          {icon}
        </IconButton>
      </Tooltip>
      <Typography variant="body1"><strong>{label}:</strong> {value}</Typography>
    </Box>
  );

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
                <Typography variant="h3" style={{ marginBottom: '8px' }}>{userData.name}</Typography>
                <Typography variant="h6" style={{ textTransform: 'capitalize', marginBottom: '8px' }}>{userData.role}</Typography>
                <Typography variant="body1"><strong>Profile ID:</strong> {userData.profileid}</Typography>
              </Grid>
              <Grid item xs={12} md={8} style={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.primary.main, padding: isSmallScreen ? '24px' : '32px' }}>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Card style={{ padding: '24px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', height: '100%' }}>
                        <Typography variant="h5" style={{ marginBottom: '16px' }}>Personal Information</Typography>
                        <InfoItem icon={<LocationOnIcon />} label="Country" value={userData.country} />
                        <InfoItem icon={<PhoneIcon />} label="Mobile" value={userData.mobile} />
                        <InfoItem icon={<FavoriteIcon />} label="Spirit" value={userData.spirit} />
                        <InfoItem icon={<SchoolIcon />} label="Education" value={userData.education} />
                        <InfoItem icon={<WorkIcon />} label="Job" value={userData.job} />
                        <InfoItem icon={<CakeIcon />} label="Age" value={userData.age} />
                        <InfoItem icon={<ColorLensIcon />} label="Skin Color" value={userData.skinColor} />
                        <InfoItem icon={<HeightIcon />} label="Height" value={userData.height} />
                        <InfoItem icon={<FitnessCenterIcon />} label="Body Type" value={userData.bodyType} />
                        <InfoItem icon={<HomeIcon />} label="District" value={userData.district} />
                        <InfoItem icon={<SchoolIcon />} label="Madrasa Education" value={userData.madrasaEducation} />
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Card style={{ padding: '24px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', marginBottom: '24px' }}>
                        <Typography variant="h5" style={{ marginBottom: '16px' }}>Partner Preference</Typography>
                        <InfoItem icon={<LocationOnIcon />} label="Partner District" value={userData.partnerDistrict} />
                        <InfoItem icon={<FavoriteIcon />} label="Partner Age" value={`${userData.partnerAgeFrom} - ${userData.partnerAgeTo}`} />
                      </Card>
                      <Card style={{ padding: '24px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                        <Typography variant="h5" style={{ marginBottom: '16px' }}>Additional Information</Typography>
                        <Typography variant="body1" paragraph>{userData.additionalInfo1}</Typography>
                        <Typography variant="body1" paragraph>{userData.additionalInfo2}</Typography>
                        <Typography variant="body1">{userData.additionalInfo3}</Typography>
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
