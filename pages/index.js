// Home.js
import React, { useState } from 'react';
import NavBar from '../src/components/NavBar';
// import UserCards from '@/components/user/userCards';
import UserCards from '../src/components/user/UserCards';





const Home = () => {
  const [isUserRegistered, setIsUserRegistered] = useState(false); // Assume the user is not registered by default

  return (
    <div>
      <NavBar />
      <UserCards isUserRegistered={isUserRegistered} />
    </div>
  );
};

export default Home;
