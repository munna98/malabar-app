// src/components/UserCard.js
import React, { useState } from 'react';
import { Card, CardContent, Grid, Typography, IconButton, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { generateAvatar } from '../utils/avatar';

const UserCard = ({ user }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      style={{
        marginBottom: '16px',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        width: '100%',
      }}
    >
      <CardContent>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={3} sm={2} md={1}>
            {generateAvatar(user.name, 60)}
          </Grid>
          <Grid item xs={7} sm={8} md={9}>
            <Typography variant="h6">{user.name}</Typography>
            <Typography variant="body2">Age: {user.age}</Typography>
            <Typography variant="body2">District: {user.district}</Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={2}>
            <IconButton onClick={handleExpandClick} aria-expanded={expanded}>
              <ExpandMoreIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography variant="body2" style={{ marginTop: '8px' }}>
            Job: {user.job}
          </Typography>
          <Typography variant="body2">
            Education: {user.education}
          </Typography>
          <Typography variant="body2">
            Spirit: {user.spirit}
          </Typography>
          <Typography variant="body2">
            Mobile: {user.mobile}
          </Typography>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default UserCard;
