// pages/index.js
import React from 'react';
import NavBar from '../src/components/NavBar';
import UserCard from '../src/components/UserCard';
import { Container } from '@mui/material';

const Home = () => {
  const sampleUsers = [
    {
      id: '1',
      name: 'John Doe',
      age: 30,
      district: 'New York',
      job: 'Engineer',
      education: 'BSc',
      spirit: 'Optimistic',
      mobile: '+1 234 567 890',
    },
    {
      id: '2',
      name: 'Jane Smith',
      age: 28,
      district: 'California',
      job: 'Designer',
      education: 'BA',
      spirit: 'Creative',
      mobile: '+1 345 678 901',
    },
    {
      id: '3',
      name: 'Alice Johnson',
      age: 32,
      district: 'Texas',
      job: 'Doctor',
      education: 'MD',
      spirit: 'Caring',
      mobile: '+1 456 789 012',
    },
    {
      id: '4',
      name: 'Bob Brown',
      age: 35,
      district: 'Florida',
      job: 'Teacher',
      education: 'MA',
      spirit: 'Patient',
      mobile: '+1 567 890 123',
    },
    {
      id: '5',
      name: 'Charlie Davis',
      age: 29,
      district: 'Nevada',
      job: 'Chef',
      education: 'Diploma',
      spirit: 'Adventurous',
      mobile: '+1 678 901 234',
    },
    {
      id: '6',
      name: 'Diana Evans',
      age: 27,
      district: 'Arizona',
      job: 'Artist',
      education: 'BFA',
      spirit: 'Imaginative',
      mobile: '+1 789 012 345',
    },
    {
      id: '7',
      name: 'Eve Foster',
      age: 31,
      district: 'Colorado',
      job: 'Writer',
      education: 'MFA',
      spirit: 'Thoughtful',
      mobile: '+1 890 123 456',
    },
    {
      id: '8',
      name: 'Frank Green',
      age: 33,
      district: 'Illinois',
      job: 'Architect',
      education: 'BArch',
      spirit: 'Meticulous',
      mobile: '+1 901 234 567',
    },
    {
      id: '9',
      name: 'Grace Harris',
      age: 26,
      district: 'Georgia',
      job: 'Lawyer',
      education: 'JD',
      spirit: 'Determined',
      mobile: '+1 012 345 678',
    },
    {
      id: '10',
      name: 'Henry Lee',
      age: 34,
      district: 'Washington',
      job: 'Pilot',
      education: 'BSc',
      spirit: 'Brave',
      mobile: '+1 123 456 789',
    },
  ];

  return (
    <div>
      <NavBar />
      <Container style={{ padding: '16px' }}> {/* Added padding to the container */}
        {sampleUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </Container>
    </div>
  );
};

export default Home;
