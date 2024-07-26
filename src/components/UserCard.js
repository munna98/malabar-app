import React from 'react';
import { Card, CardContent, Grid, Typography, IconButton, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {
  School as EducationIcon,
  Face as SpiritIcon,
  Person as MarriageIcon,
  Work as JobIcon,
  Palette as SkinColorIcon,
  Height as HeightIcon,
  FitnessCenter as BodyTypeIcon,
  Place as PlaceIcon,
  Public as PartnerDistrictIcon,
  DateRange as PartnerAgeIcon,
  Phone as MobileIcon
} from '@mui/icons-material';
import { generateAvatar } from '../utils/avatar';

const UserCard = ({ user, isExpanded, onExpand }) => {
  return (
    <Card
      style={{
        marginBottom: '16px',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        width: '100%',
        overflow: 'hidden',
        position: 'relative', // Allows positioning of the expand button
      }}
    >
      <CardContent
        style={{
          backgroundColor: '#143326',
          color: '#fff',
          position: 'relative', // Ensures the profileId and date are positioned relative to this container
        }}
      >
        {/* Container for profileId and date */}
        <div style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          color: '#fff',
          textAlign: 'right',
        }}>
          <Typography variant="body2" style={{ fontSize: '0.75rem' }}>ID: {user.profileId}</Typography>
          <Typography variant="body2" style={{ fontSize: '0.75rem' }}>Date: {user.date}</Typography>
        </div>

        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={3} sm={2} md={1}>
            {generateAvatar(user.name, 60)}
          </Grid>
          <Grid item xs={7} sm={8} md={9}>
            <Typography variant="body2" style={{ fontSize: '0.75rem' }}>{user.role}</Typography>
            <Typography variant="body2" style={{ fontSize: '0.75rem' }}>Age: {user.age}</Typography>
            <Typography variant="body2" style={{ fontSize: '0.75rem' }}>District: {user.district}</Typography>
          </Grid>
        </Grid>
      </CardContent>
      
      {/* Button positioned at the bottom */}
      <div style={{
        position: 'absolute',
        bottom: '8px',
        right: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '4px', // Space between the button and the edge of the card
      }}>
        <IconButton onClick={onExpand} aria-expanded={isExpanded} style={{ color: isExpanded ? '#143326' : '#fff' }}>
          {isExpanded ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
        </IconButton>
      </div>

      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <CardContent
          style={{
            backgroundColor: '#fff',
            color: '#000',
            borderRadius: '0 0 12px 12px',
            margin: 0,
            padding: '8px 16px',
            width: '100%',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body2" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center' }}>
                <SpiritIcon fontSize="small" style={{ marginRight: '4px' }} /> Spirit: {user.spirit}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center' }}>
                <MarriageIcon fontSize="small" style={{ marginRight: '4px' }} /> First Marriage: {user.firstMarriage}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center' }}>
                <EducationIcon fontSize="small" style={{ marginRight: '4px' }} /> Education: {user.education}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center' }}>
                <EducationIcon fontSize="small" style={{ marginRight: '4px' }} /> Madrasa Education: {user.madrasaEducation}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center' }}>
                <JobIcon fontSize="small" style={{ marginRight: '4px' }} /> Job: {user.job}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center' }}>
                <SkinColorIcon fontSize="small" style={{ marginRight: '4px' }} /> Skin Color: {user.skinColor}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center' }}>
                <HeightIcon fontSize="small" style={{ marginRight: '4px' }} /> Height: {user.height}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center' }}>
                <BodyTypeIcon fontSize="small" style={{ marginRight: '4px' }} /> Body Type: {user.bodyType}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center' }}>
                <PlaceIcon fontSize="small" style={{ marginRight: '4px' }} /> Place: {user.place}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center' }}>
                <PartnerDistrictIcon fontSize="small" style={{ marginRight: '4px' }} /> Partner District: {user.partnerDistrict}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center' }}>
                <PartnerAgeIcon fontSize="small" style={{ marginRight: '4px' }} /> Partner Age: {user.partnerAgeFrom} - {user.partnerAgeTo}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center' }}>
                <MobileIcon fontSize="small" style={{ marginRight: '4px' }} /> Mobile: {user.mobile}
              </Typography>
            </Grid>
            {user.additionalInfo1 && (
              <Grid item xs={12}>
                <Typography variant="body2" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center' }}>
                  <span role="img" aria-label="info" style={{ marginRight: '4px' }}>ℹ️</span> {user.additionalInfo1}
                </Typography>
              </Grid>
            )}
            {user.additionalInfo2 && (
              <Grid item xs={12}>
                <Typography variant="body2" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center' }}>
                  <span role="img" aria-label="info" style={{ marginRight: '4px' }}>ℹ️</span> {user.additionalInfo2}
                </Typography>
              </Grid>
            )}
            {user.additionalInfo3 && (
              <Grid item xs={12}>
                <Typography variant="body2" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center' }}>
                  <span role="img" aria-label="info" style={{ marginRight: '4px' }}>ℹ️</span> {user.additionalInfo3}
                </Typography>
              </Grid>
            )}
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default UserCard;
