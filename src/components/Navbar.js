import React from 'react';
import {
  AppBar,
  Box,
  Button,
  InputBase,
  Toolbar,
  Typography,
  IconButton,
  Stack,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import achievers from '../assets/logos/achievers.png'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <NavLink to='/Landingpage'>
          <Box component="img" src={achievers} alt="Logo" sx={{ height: 60 }} />
          </NavLink>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#f1f1f1',
              borderRadius: 50,
              px: 2,
              py: 0.5,
              width: 300,
            }}
          >
            <InputBase placeholder="Search Courses" fullWidth />
            <SearchIcon />
          </Box>
        </Box>

    
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography
    variant="body1"
    sx={{
      cursor: 'pointer',
      color: 'text.primary',
      '&:hover': { color: 'primary.main' },
    }}
  >
    About Us
  </Typography>

  <Typography
    variant="body1"
    sx={{
      cursor: 'pointer',
      color: 'text.primary',
      '&:hover': { color: 'primary.main' },
    }}
  >
    Contact Us
  </Typography>
        
          <Button variant="contained" size="small" color="success">
            Sign In
          </Button>
         
            <Stack direction='row'>
            <WhatsAppIcon color="success" />
            <Box>
              <Typography variant="body2">8886221222</Typography>
              <Typography variant="caption">(8:00 AM - 8:00 PM)</Typography>
            </Box>
            </Stack>
          </Box>
        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
