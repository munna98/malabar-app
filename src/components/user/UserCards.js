
import React, { useState } from 'react';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import UserCard from './UserCard';

const UserCards = ({ isUserRegistered }) => {
  const [expandedCardId, setExpandedCardId] = useState(null);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const handleExpandClick = (cardId) => {
    setExpandedCardId(expandedCardId === cardId ? null : cardId);
  };

  const sampleUsers = [
    { profileId: '1', date: '12/07/2024', role: 'Bride', country: 'USA', mobile: '+1 234 567 890', name: 'John Doe', spirit: 'Optimistic', firstMarriage: 'Yes', age: 30, education: 'BSc', madrasaEducation: 'Yes', job: 'Engineer', skinColor: 'Fair', height: "176", bodyType: 'Athletic', district: 'New York', place: 'Manhattan', partnerDistrict: 'New Jersey', partnerAgeFrom: 25, partnerAgeTo: 35, additionalInfo1: 'Info1', additionalInfo2: 'Info2', additionalInfo3: 'Info3' },
    { profileId: '2', date: '28/05/2024', role: 'Groom', country: 'USA', mobile: '+1 345 678 901', name: 'Jane Smith', spirit: 'Creative', firstMarriage: 'No', age: 28, education: 'MFA', madrasaEducation: 'No', job: 'Designer', skinColor: 'Wheatish', height: "165", bodyType: 'Slim', district: 'California', place: 'Los Angeles', partnerDistrict: 'Nevada', partnerAgeFrom: 30, partnerAgeTo: 40, additionalInfo1: 'Info1', additionalInfo2: 'Info2', additionalInfo3: 'Info3' },
    { profileId: '3', date: '26/06/2024', role: 'Bride', country: 'USA', mobile: '+1 456 789 012', name: 'Michael Brown', spirit: 'Analytical', firstMarriage: 'Yes', age: 32, education: 'BSc', madrasaEducation: 'No', job: 'Developer', skinColor: 'Dark', height: "157", bodyType: 'Athletic', district: 'Texas', place: 'Houston', partnerDistrict: 'California', partnerAgeFrom: 27, partnerAgeTo: 33, additionalInfo1: 'Info1', additionalInfo2: 'Info2', additionalInfo3: 'Info3' },
    { profileId: '4', date: '28/04/2024', role: 'Groom', country: 'USA', mobile: '+1 567 890 123', name: 'Emily Davis', spirit: 'Spiritual', firstMarriage: 'No', age: 26, education: 'BA', madrasaEducation: 'Yes', job: 'Teacher', skinColor: 'Fair', height: "177", bodyType: 'Slim', district: 'Florida', place: 'Miami', partnerDistrict: 'Texas', partnerAgeFrom: 30, partnerAgeTo: 40, additionalInfo1: 'Info1', additionalInfo2: 'Info2', additionalInfo3: 'Info3' },
    { profileId: '5', date: '24/05/2024', role: 'Bride', country: 'USA', mobile: '+1 678 901 234', name: 'David Wilson', spirit: 'Calm', firstMarriage: 'Yes', age: 29, education: 'MA', madrasaEducation: 'No', job: 'Artist', skinColor: 'Wheatish', height: "172", bodyType: 'Average', district: 'Illinois', place: 'Chicago', partnerDistrict: 'Florida', partnerAgeFrom: 28, partnerAgeTo: 38, additionalInfo1: 'Info1', additionalInfo2: 'Info2', additionalInfo3: 'Info3' },
    { profileId: '6', date: '15/04/2024', role: 'Groom', country: 'USA', mobile: '+1 789 012 345', name: 'Sophia Martinez', spirit: 'Enthusiastic', firstMarriage: 'No', age: 27, education: 'BSc', madrasaEducation: 'Yes', job: 'Nurse', skinColor: 'Dark', height: "165", bodyType: 'Fit', district: 'Ohio', place: 'Cleveland', partnerDistrict: 'Illinois', partnerAgeFrom: 27, partnerAgeTo: 37, additionalInfo1: 'Info1', additionalInfo2: 'Info2', additionalInfo3: 'Info3' },
    { profileId: '7', date: '28/03/2024', role: 'Bride', country: 'USA', mobile: '+1 890 123 456', name: 'James Anderson', spirit: 'Positive', firstMarriage: 'Yes', age: 31, education: 'MBA', madrasaEducation: 'No', job: 'Manager', skinColor: 'Fair', height: "159", bodyType: 'Athletic', district: 'Michigan', place: 'Detroit', partnerDistrict: 'Ohio', partnerAgeFrom: 28, partnerAgeTo: 36, additionalInfo1: 'Info1', additionalInfo2: 'Info2', additionalInfo3: 'Info3' },
    { profileId: '8', date: '03/05/2024', role: 'Groom', country: 'USA', mobile: '+1 901 234 567', name: 'Olivia Garcia', spirit: 'Optimistic', firstMarriage: 'No', age: 25, education: 'BA', madrasaEducation: 'Yes', job: 'Writer', skinColor: 'Wheatish', height: "173", bodyType: 'Slim', district: 'Georgia', place: 'Atlanta', partnerDistrict: 'Michigan', partnerAgeFrom: 26, partnerAgeTo: 34, additionalInfo1: 'Info1', additionalInfo2: 'Info2', additionalInfo3: 'Info3' },
    { profileId: '9', date: '18/02/2024', role: 'Bride', country: 'USA', mobile: '+1 012 345 678', name: 'Henry Moore', spirit: 'Adventurous', firstMarriage: 'Yes', age: 33, education: 'PhD', madrasaEducation: 'No', job: 'Scientist', skinColor: 'Fair', height: "175", bodyType: 'Average', district: 'North Carolina', place: 'Charlotte', partnerDistrict: 'Georgia', partnerAgeFrom: 25, partnerAgeTo: 35, additionalInfo1: 'Info1', additionalInfo2: 'Info2', additionalInfo3: 'Info3' },
    { profileId: '10', date: '08/04/2024', role: 'Groom', country: 'USA', mobile: '+1 123 456 789', name: 'Isabella Lewis', spirit: 'Creative', firstMarriage: 'No', age: 29, education: 'MA', madrasaEducation: 'Yes', job: 'Designer', skinColor: 'Dark', height: "153", bodyType: 'Fit', district: 'South Carolina', place: 'Charleston', partnerDistrict: 'North Carolina', partnerAgeFrom: 28, partnerAgeTo: 36, additionalInfo1: 'Info1', additionalInfo2: 'Info2', additionalInfo3: 'Info3' },
  ];

  return (
    <Grid container spacing={2} padding={2}>
      {sampleUsers.map((user) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={user.profileId}>
          <UserCard
            user={user}
            isExpanded={expandedCardId === user.profileId}
            onExpand={() => handleExpandClick(user.profileId)}
            isRegistered={isUserRegistered}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default UserCards;
