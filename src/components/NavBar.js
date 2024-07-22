// src/components/NavBar.js
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import { useRouter } from 'next/router';
import Image from 'next/image';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Handle logout logic here (e.g., clearing cookies, redirecting to login page)
    router.push('/'); // Redirect to login page
    handleMenuClose();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Image src="/logo.png" alt="Logo" width={100} height={50} /> {/* Replace with your logo */}
        <div style={{ flexGrow: 1 }} />
        <IconButton edge="end" color="inherit" onClick={handleMenuClick}>
          <PersonIcon /> {/* Person icon */}
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            style: {
              width: '200px', // Adjust width as needed
            },
          }}
        >
          <MenuItem onClick={() => router.push('/profile/[id]')}>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
