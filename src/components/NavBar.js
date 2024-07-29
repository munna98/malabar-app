// src/components/NavBar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Button, useMediaQuery, Typography, Box, Select, FormControl } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import Image from 'next/image';

const NavBar = ({ isLoggedIn, username }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [language, setLanguage] = useState('en');
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

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
      MenuProps={{
        style: {
          width: '200px', // Adjust width as needed
        },
      }}
    >
      <MenuItem onClick={() => router.push('/')}>Home</MenuItem>
      {isLoggedIn ? (
        <>
          <MenuItem onClick={() => router.push('/profile/[id]')}>My Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </>
      ) : (
        <MenuItem onClick={() => router.push('/login')}>Login</MenuItem>
      )}
      <MenuItem onClick={() => router.push('/register')}>Register</MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      open={Boolean(mobileMoreAnchorEl)}
      onClose={handleMenuClose}
      MenuProps={{
        style: {
          width: '200px', // Adjust width as needed
        },
      }}
    >
      <MenuItem onClick={() => router.push('/')}>Home</MenuItem>
      {isLoggedIn ? (
        <>
          <MenuItem onClick={() => router.push('/profile/[id]')}>My Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </>
      ) : (
        <MenuItem onClick={() => router.push('/login')}>Login</MenuItem>
      )}
      <MenuItem onClick={() => router.push('/register')}>Register</MenuItem>
    </Menu>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" alignItems="center" onClick={() => router.push('/')}>
          <Image src="/logo.png" alt="Logo" width={100} height={50} /> {/* Replace with your logo */}
        </Box>
        <div style={{ flexGrow: 1 }} />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Select
            labelId="language-select-label"
            value={language}
            onChange={handleLanguageChange}
            style={{ color: 'white' }}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="ml">മലയാളം</MenuItem>
          </Select>
        </FormControl>
        {isMobile ? (
          <IconButton edge="end" color="inherit" onClick={handleMobileMenuClick}>
            <MenuIcon />
          </IconButton>
        ) : (
          <IconButton edge="end" color="inherit" onClick={handleMenuClick}>
            <PersonIcon /> {/* Person icon for profile and logout */}
          </IconButton>
        )}
      </Toolbar>
      {renderMenu}
      {renderMobileMenu}
    </AppBar>
  );
};

export default NavBar;
