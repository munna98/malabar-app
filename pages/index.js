// Home.js
import React, { useState } from 'react';
import NavBar from '../src/components/NavBar';




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
