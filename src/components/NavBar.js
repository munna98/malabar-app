// src/components/NavBar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Button, useMediaQuery, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import Image from 'next/image';

const NavBar = ({ isLoggedIn, username }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClick = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMobileMoreAnchorEl(null);
  };

  const handleLogout = () => {
    // Handle logout logic here (e.g., clearing cookies, redirecting to login page)
    router.push('/'); // Redirect to home page
    handleMenuClose();
  };

  const renderMenu = (
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
      <MenuItem onClick={() => router.push('/profile/[id]')}>My Profile</MenuItem>
      <MenuItem onClick={() => router.push('/register')}>Register</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      open={Boolean(mobileMoreAnchorEl)}
      onClose={handleMenuClose}
      PaperProps={{
        style: {
          width: '200px', // Adjust width as needed
        },
      }}
    >
      <MenuItem onClick={() => router.push('/profile/[id]')}>My Profile</MenuItem>
      <MenuItem onClick={() => router.push('/register')}>Register</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" alignItems="center">
          <Image src="/logo.png" alt="Logo" width={100} height={50} /> {/* Replace with your logo */}
        </Box>
        <div style={{ flexGrow: 1 }} />
        {isLoggedIn ? (
          <Typography variant="h6" color="inherit">
            Hi, {username}
          </Typography>
        ) : (
          <Button color="inherit" onClick={() => router.push('/login')}>
            Login
          </Button>
        )}
        {isMobile ? (
          <IconButton edge="end" color="inherit" onClick={handleMobileMenuClick}>
            <MenuIcon />
          </IconButton>
        ) : (
          <Button color="inherit" onClick={handleMenuClick}>
            Menu
          </Button>
        )}
      </Toolbar>
      {renderMenu}
      {renderMobileMenu}
    </AppBar>
  );
};

export default NavBar;
