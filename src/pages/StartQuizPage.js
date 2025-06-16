import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Paper,
  Container,
} from '@mui/material';
import { AccountCircle, Email, Lock, Phone } from '@mui/icons-material';

import bg2 from '../assets/logos/bg2.jpg';
const StartQuizPage = () => {
  return (
    <Box
      sx={{ 
        height:'100vh',
        bgcolor:'aliceblue',
        backgroundSize:'cover',
        backgroundPosition:'center',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        px: 2,
        fontFamily:'Roboto, sans-serif'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{ 
            display:'flex',
            flexDirection:{ xs:'column', md:'row' },
            gap: 1,
            alignItems:'center',
            justifyContent:'center',
            marginTop:'90px'
          }}
        >           
          {/* Left side */}
          <Container sx={{ mt: 1, textAlign:'start', marginLeft:'-40px' }}>
            <Typography variant="h4" fontWeight="bold">
              Empower Your Learning Journey with 24x7 Access to Comprehensive Resources: Enhance Your Skills, Achieve Goals, and Excel in Every Endeavor.
            </Typography>

            <Box
              component="img"
              src={bg2}
              alt="Learning Illustration"
              sx={{ mt: 4, width:'100%', maxWidth:'600px', height:'auto', borderRadius: 2, boxShadow: 3, mx:'auto' }}
            />
          </Container>

          {/* Right side - Signup Form */}
          <Paper
            sx={{ 
              flex:1, p:5, bgcolor:'rgba(255, 255, 255, 0.95)', borderRadius: 3, boxShadow: 3, minHeight:'400px', minWidth:'400px', mb:'20px'
            }}
          >
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Hello!
            </Typography>
            <Typography variant="body2" gutterBottom color="text.secondary">
              Go ahead, fill up your details and start practicing!
            </Typography>

            <form autoComplete="off">
              <TextField
                fullWidth
                label="Full Name"
                margin="normal"
                InputProps={{ startAdornment:<InputAdornment position="start"><AccountCircle/></InputAdornment> }}
              />

              <TextField
                fullWidth
                label="Email address"
                type="email"
                margin="normal"
                autoComplete="new-email"
                InputProps={{ startAdornment:<InputAdornment position="start"><Email/></InputAdornment> }}
              />

              <TextField
                fullWidth
                label="Phone Number"
                type="tel"
                margin="normal"
                autoComplete="off"
                InputProps={{ startAdornment:<InputAdornment position="start"><Phone/></InputAdornment> }}
              />

              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                autoComplete="new-password"
                InputProps={{ startAdornment:<InputAdornment position="start"><Lock/></InputAdornment> }}
              />

              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                margin="normal"
                autoComplete="new-password"
                InputProps={{ startAdornment:<InputAdornment position="start"><Lock/></InputAdornment> }}
              />

              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2, bgcolor:'success.main', fontWeight:'bold' }}
              >
                Sign Up
              </Button>
            </form>

            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Already have an account? <a href="/login" style={{ color:'inherit', textDecoration:'none' }}>Log In</a>
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}

export default StartQuizPage;