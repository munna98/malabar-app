// src/components/NavBar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

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
    router.push('/'); // Redirect to home page
    handleMenuClose();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/" passHref>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Image src="/logo.png" alt="Logo" width={100} height={50} /> {/* Replace with your logo */}
          </IconButton>
        </Link>
        <div style={{ flexGrow: 1 }} />
        <Button color="inherit" onClick={() => router.push('/login')}>
          Login
        </Button>
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
