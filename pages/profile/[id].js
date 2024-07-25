// pages/profile/[id].js
import React from 'react';
import { useRouter } from 'next/router';
import NavBar from '../../src/components/NavBar';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Profile = () => {
  const router = useRouter();
  const { id } = router.query;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  // Sample user data
  const userData = {
    profileid: id || 'N/A', // Display 'N/A' if id is not available
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
    avatar: '/images/avatar.jpg', // Replace with actual path to avatar
  };

  return (
    <div>
      <NavBar />
      <Container>
        <Box m={isSmallScreen ? 1 : 2} ml={isSmallScreen ? 0 : 2} mr={isSmallScreen ? 0 : 2} display="flex" justifyContent="center" alignItems="center">
          <Card style={{ width: '100%', maxWidth: '1100px', borderRadius: '16px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <Grid container spacing={isSmallScreen ? 1 : 2}>
              <Grid item xs={12} md={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center" style={{ backgroundColor: '#143326', color: '#F2E8CF', textAlign: 'center', padding: isSmallScreen ? '16px' : '24px', borderRadius: '16px 0 0 16px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <Box p={isSmallScreen ? 1 : 2} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                  <Avatar src={userData.avatar} alt={userData.name} style={{ width: '80px', height: '80px', marginBottom: '16px', border: '3px solid #F2E8CF', borderRadius: '50%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }} />
                  <Typography variant="h5" style={{ marginBottom: '8px' }}>{userData.name}</Typography>
                  <Typography variant="body2" style={{ textTransform: 'capitalize', marginBottom: '4px' }}>{userData.role}</Typography>
                  <Typography variant="body2"><strong>Profile ID:</strong> {userData.profileid}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={8} style={{ backgroundColor: '#F2E8CF', color: '#143326', padding: isSmallScreen ? '16px' : '32px', borderRadius: '0 16px 16px 0', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <CardContent>
                  <Grid container spacing={isSmallScreen ? 1 : 2}>
                    <Grid item xs={12} md={6}>
                      <Card style={{ padding: isSmallScreen ? '12px' : '16px', borderRadius: '12px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', marginBottom: isSmallScreen ? '8px' : '16px' }}>
                        <Typography variant="h6" style={{ marginBottom: '16px', color: '#143326' }}>More Info</Typography>
                        <Grid container spacing={isSmallScreen ? 1 : 2}>
                          <Grid item xs={12}>
                            <Typography variant="body1"><strong>Country:</strong> {userData.country}</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body1"><strong>Mobile:</strong> {userData.mobile}</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body1"><strong>Spirit:</strong> {userData.spirit}</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body1"><strong>First Marriage:</strong> {userData.firstMarriage}</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body1"><strong>Age:</strong> {userData.age}</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body1"><strong>Education:</strong> {userData.education}</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body1"><strong>Madrasa Education:</strong> {userData.madrasaEducation}</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body1"><strong>Job:</strong> {userData.job}</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body1"><strong>Skin Color:</strong> {userData.skinColor}</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body1"><strong>Height:</strong> {userData.height}</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body1"><strong>Body Type:</strong> {userData.bodyType}</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body1"><strong>District:</strong> {userData.district}</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body1"><strong>Place:</strong> {userData.place}</Typography>
                          </Grid>
                        </Grid>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Card style={{ padding: isSmallScreen ? '12px' : '16px', borderRadius: '12px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', marginBottom: isSmallScreen ? '8px' : '16px' }}>
                        <Typography variant="h6" style={{ marginBottom: '16px', color: '#143326' }}>Partner Preference</Typography>
                        <Grid container spacing={isSmallScreen ? 1 : 2}>
                          <Grid item xs={12}>
                            <Typography variant="body1"><strong>Partner District:</strong> {userData.partnerDistrict}</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body1"><strong>Partner Age:</strong> {userData.partnerAgeFrom} - {userData.partnerAgeTo}</Typography>
                          </Grid>
                        </Grid>
                      </Card>
                      <Card style={{ padding: isSmallScreen ? '12px' : '16px', borderRadius: '12px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
                        <Typography variant="h6" style={{ marginBottom: '16px', color: '#143326' }}>Demands</Typography>
                        <Typography variant="body1">{userData.additionalInfo1}</Typography>
                        <Typography variant="body1">{userData.additionalInfo2}</Typography>
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
    </div>
  );
};

export default Profile;
