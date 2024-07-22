// pages/profile/[id].js
import React from 'react';
import { useRouter } from 'next/router';
import NavBar from '../../src/components/NavBar';
import Container from '@mui/material/Container';

const Profile = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <NavBar />
      <Container>
      <h1>Profile Page</h1>
      <p>User ID: {id}</p>
      {/* Fetch and display user data based on `id` */}
      </Container>
    </div>
  );
};

export default Profile;
