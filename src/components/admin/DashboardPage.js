import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Badge,
} from '@mui/material';
import {
  Dashboard,
  Person,
  Message,
  School,
  Star,
  Quiz,
  Settings,
  Logout,
  Add,
  Public,
  EmojiEvents,
  MenuBook,
  Groups,
} from '@mui/icons-material';

const metrics = [
  { icon: <EmojiEvents color="error" />, label: 'Enrolled Courses', value: '900+' },
  { icon: <MenuBook color="error" />, label: 'Active Courses', value: '500+' },
  { icon: <Person color="error" />, label: 'Complete Courses', value: '300k' },
  { icon: <Public color="error" />, label: 'Total Courses', value: '1,500+' },
  { icon: <Groups color="error" />, label: 'Total Students', value: '30k' },
  { icon: <Public color="error" />, label: 'OVER THE WORLD', value: '90,000k+' },
];

const navItems = [
  { icon: <Dashboard />, text: 'Dashboard' },
  { icon: <Person />, text: 'My Profile' },
  {
    icon: <Message />,
    text: 'Message',
    badge: 12,
  },
  { icon: <School />, text: 'Courses' },
  { icon: <Star />, text: 'Reviews' },
  { icon: <Quiz />, text: 'Quiz Attempts' },
];

const userActions = [
  { icon: <Settings />, text: 'Settings' },
  { icon: <Logout />, text: 'Logout' },
];

const DashboardPage = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f4f4f9' }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: { xs: '100%', sm: 260 },
          bgcolor: 'white',
          borderRight: '1px solid #ddd',
          p: 2,
        }}
      >
        <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
          WELCOME, MICLE OBEMA
        </Typography>
        <List>
          {navItems.map((item, index) => (
            <ListItem button key={index}>
              <ListItemIcon>
                {item.badge ? (
                  <Badge badgeContent={item.badge} color="secondary">
                    {item.icon}
                  </Badge>
                ) : (
                  item.icon
                )}
              </ListItemIcon>
              <ListItemText primary={<Typography variant="body1">{item.text}</Typography>} />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 2 }} />
        <Typography variant="caption" fontWeight="bold" sx={{ pl: 2 }}>
          USER
        </Typography>
        <List>
          {userActions.map((item, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, p: 3 }}>
        {/* Header */}
        <Box
          sx={{
            bgcolor: '#6a1b9a',
            borderRadius: 3,
            p: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            color: 'white',
          }}
        >
          <Box display="flex" alignItems="center">
            <Avatar
              src="https://randomuser.me/api/portraits/men/41.jpg"
              sx={{ width: 64, height: 64, mr: 2 }}
            />
            <Box>
              <Typography variant="body1">Hello</Typography>
              <Typography variant="h6" fontWeight="bold">
                Michle Obema
              </Typography>
            </Box>
          </Box>
          <Box textAlign="center">
            <Typography variant="body2">⭐⭐⭐⭐☆</Typography>
            <Typography variant="body2">4.0 (120 Reviews)</Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<Add />}
            sx={{
              bgcolor: 'white',
              color: '#6a1b9a',
              '&:hover': {
                bgcolor: '#f3e5f5',
              },
              mt: { xs: 2, sm: 0 },
            }}
          >
            Create a New Course
          </Button>
        </Box>

        {/* Dashboard Metrics */}
        <Typography variant="h6" fontWeight="bold" mt={4} mb={2}>
          Dashboard
        </Typography>

        <Grid container spacing={3}>
          {metrics.map((metric, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Button
                fullWidth
                sx={{
                  textAlign: 'left',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  p: 10,
                  height: '100%',
                  bgcolor: '#f8f6fd',
                  borderRadius: 2,
                  color: 'black',
                  textTransform: 'none',
                  boxShadow: 1,
                  transition: '0.3s',
                  '&:hover': {
                    bgcolor: '#ede7f6',
                    boxShadow: 3,
                  },
                }}
              >
                <Box sx={{ mb: 1 }}>{metric.icon}</Box>
                <Typography variant="h6" fontWeight="bold">
                  {metric.value}
                </Typography>
                <Typography variant="body2">{metric.label}</Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardPage;
