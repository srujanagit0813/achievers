import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  TextField,
  IconButton,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CallIcon from '@mui/icons-material/Call';
import ChatIcon from '@mui/icons-material/Chat';
import StarIcon from '@mui/icons-material/Star';

const messages = [
  { name: 'Rex Allen', text: 'Hey, How are you?', time: '12 min' },
  { name: 'Julia Jhones', text: 'Hey, How are you?', time: '12 min' },
  { name: 'Anderson', text: 'Hey, How are you?', time: '12 min' },
];

const chatHistory = [
  { name: 'Bradshaw', msg: 'Dolor sit amet consectetur', time: '5:03 PM', position: 'left' },
  { name: 'Julia Jhones', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing sed.', time: '4:40 PM', position: 'right' },
  { name: 'Julia Jhones', msg: 'Dolor sit amet consectetur', time: '4:42 PM', position: 'right' },
  { name: 'Bradshaw', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing sed.', time: '4:32 PM', position: 'left' },
  { name: 'Bradshaw', msg: 'Dolor sit amet consectetur', time: '4:30 PM', position: 'left' },
];

export default function ChatDashboard() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: '#f3f2fc', minHeight: '100vh' }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#6a0dad', color: '#fff', p: 3, borderRadius: '0 0 16px 16px' }}>
        <Box display="flex" alignItems="center">
          <Avatar src="https://i.pravatar.cc/300" sx={{ width: 56, height: 56, mr: 2 }} />
          <Box>
            <Typography variant="h6">Hello</Typography>
            <Typography variant="h5" fontWeight="bold">Michle Obema</Typography>
          </Box>
        </Box>
        <Box textAlign="center">
          {[...Array(4)].map((_, i) => (
            <StarIcon key={i} sx={{ color: '#facc15' }} />
          ))}<StarIcon sx={{ color: '#cbd5e1' }} />
          <Typography variant="body2">4.0 (120 Reviews)</Typography>
        </Box>
        <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fff' }}>
          Create a New Course
        </Button>
      </Box>

      {/* Main Content */}
      <Grid container spacing={2} p={2}>
        {/* Sidebar */}
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2 }}>
            <Typography fontWeight="bold">WELCOME, MICLE OBEMA</Typography>
            <List>
              {["Dashboard", "My Profile", "Message", "Courses", "Reviews", "Quiz Attempts"].map((text, index) => (
                <ListItem key={index} button selected={text === 'Message'}>
                  <ListItemText primary={text} />
                  {text === 'Message' && <Typography variant="caption" sx={{ bgcolor: '#6a0dad', color: '#fff', px: 1, borderRadius: 1 }}>12</Typography>}
                </ListItem>
              ))}
              <Divider />
              <Typography fontWeight="bold" variant="caption" sx={{ mt: 2, mb: 1 }}>USER</Typography>
              <ListItem button><ListItemText primary="Settings" /></ListItem>
              <ListItem button><ListItemText primary="Logout" /></ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Message List */}
        <Grid item xs={12} md={3}>
          <Paper sx={{ height: '100%', p: 2 }}>
            <Typography variant="h6" fontWeight="bold">Messages</Typography>
            <List>
              {messages.map((msg, idx) => (
                <ListItem key={idx} button>
                  <ListItemAvatar>
                    <Avatar src={`https://i.pravatar.cc/15${idx}`} />
                  </ListItemAvatar>
                  <ListItemText primary={msg.name} secondary={msg.text} />
                  <Typography variant="caption">{msg.time}</Typography>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Chat Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ p: 2, borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
              <Avatar src="https://i.pravatar.cc/302" sx={{ mr: 2 }} />
              <Box flexGrow={1}>
                <Typography fontWeight="bold">Bradshaw</Typography>
                <Typography variant="body2" color="text.secondary">Stay at home, Stay safe</Typography>
              </Box>
              <IconButton><VideoCallIcon /></IconButton>
              <IconButton><CallIcon /></IconButton>
              <IconButton><ChatIcon /></IconButton>
            </Box>
            <Box sx={{ flex: 1, p: 2, overflowY: 'auto' }}>
              {chatHistory.map((chat, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: 'flex',
                    justifyContent: chat.position === 'right' ? 'flex-end' : 'flex-start',
                    mb: 1,
                  }}
                >
                  <Box sx={{ maxWidth: '70%', bgcolor: '#f3f4f6', p: 1.5, borderRadius: 2 }}>
                    <Typography>{chat.msg}</Typography>
                    <Typography variant="caption" color="text.secondary">{chat.time}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
            <Box sx={{ display: 'flex', p: 2, borderTop: '1px solid #e5e7eb' }}>
              <TextField fullWidth placeholder="Type something" variant="outlined" size="small" />
              <IconButton color="primary" sx={{ ml: 1 }}>
                <SendIcon />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
