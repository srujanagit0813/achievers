// File: UserProfilePage.tsx
import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';
import {
  Dashboard,
  AccountCircle,
  Message,
  School,
  Reviews,
  Quiz,
  Settings,
  Logout,
} from '@mui/icons-material';

const UserProfilePage = () => {
  const [tab, setTab] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Box sx={{ bgcolor: '#f7f8fa', minHeight: '100vh' }}>
      {/* Header */}
      <Box sx={{ bgcolor: '#6C2BD9', p: 2, color: 'white' }}>
        <Container maxWidth="xl" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              src="https://randomuser.me/api/portraits/men/32.jpg"
              sx={{ width: 64, height: 64, mr: 2 }}
            />
            <Box>
              <Typography variant="h6">Hello</Typography>
              <Typography variant="h5" fontWeight="bold">
                Michle Obema
              </Typography>
            </Box>
          </Box>
          <Box textAlign="center">
            <Typography>⭐⭐⭐⭐☆</Typography>
            <Typography variant="body2">4.0 (120 Reviews)</Typography>
          </Box>
          <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>
            Create a New Course →
          </Button>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {/* Sidebar */}
          <Grid item xs={12} md={3}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                WELCOME, MICLE OBEMA
              </Typography>
              <List>
                <ListItem button>
                  <ListItemIcon><Dashboard /></ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon><AccountCircle /></ListItemIcon>
                  <ListItemText primary="My Profile" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon><Message /></ListItemIcon>
                  <ListItemText primary="Message" />
                  <Box sx={{ ml: 1, bgcolor: '#6C2BD9', px: 1.5, borderRadius: 2, color: 'white', fontSize: 12 }}>
                    12
                  </Box>
                </ListItem>
                <ListItem button>
                  <ListItemIcon><School /></ListItemIcon>
                  <ListItemText primary="Courses" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon><Reviews /></ListItemIcon>
                  <ListItemText primary="Reviews" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon><Quiz /></ListItemIcon>
                  <ListItemText primary="Quiz Attempts" />
                </ListItem>
              </List>

              <Divider sx={{ my: 2 }} />
              <Typography variant="subtitle2" gutterBottom>
                USER
              </Typography>
              <List>
                <ListItem button>
                  <ListItemIcon><Settings /></ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon><Logout /></ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItem>
              </List>
            </Paper>
          </Grid>

          {/* Profile Content */}
          <Grid item xs={12} md={9}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                My Profile
              </Typography>
              <Tabs value={tab} onChange={handleTabChange} sx={{ mb: 3 }}>
                <Tab label="PROFILE" />
                <Tab label="PASSWORD" />
                <Tab label="SOCIAL ICON" />
              </Tabs>

              {tab === 0 && (
                <Box component="form" noValidate autoComplete="off">
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="First Name" defaultValue="John" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Last Name" defaultValue="Due" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="User Name" defaultValue="Ntaden Mic" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Phone Number" defaultValue="+1-202-555-0174" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Skill/Occupation" defaultValue="Full Stack Developer" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Display Name Publicly As" defaultValue="John" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        minRows={4}
                        label="Bio"
                        defaultValue="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" color="primary">
                        Update Info
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default UserProfilePage;
