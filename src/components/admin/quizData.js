import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  Grid,
  Paper,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Badge,
} from "@mui/material";
import {
  Dashboard,
  Person,
  Message,
  School,
  Star,
  Quiz,
  Settings,
  Logout,
  Edit,
  Delete,
} from "@mui/icons-material";

const quizData = [
  { status: "Running", color: "#2ecc71" },
  { status: "Time Over", color: "#9b59b6" },
  { status: "Coming", color: "#3498db" },
  { status: "Cancel", color: "#e74c3c" },
];

const QuizAttemptsPage = () => {
  return (
    <Box p={2} sx={{ bgcolor: "#f9f9f9" }}>
      {/* Top Header */}
      <Box
        sx={{ bgcolor: "#6c3ce9", color: "white", borderRadius: 2, p: 2 }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar src="/avatar.png" sx={{ width: 64, height: 64 }} />
          <Box>
            <Typography variant="h6">Hello</Typography>
            <Typography variant="h5" fontWeight="bold">
              Michle Obema
            </Typography>
          </Box>
        </Box>
        <Box textAlign="center">
          <Typography>
            <Star sx={{ color: "gold" }} /> 4.0 (120 Reviews)
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{ bgcolor: "white", color: "#6c3ce9", borderRadius: 2 }}
        >
          Create a New Course
        </Button>
      </Box>

      {/* Main Content */}
      <Grid container spacing={2} mt={2}>
        {/* Sidebar */}
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle2" gutterBottom>
              WELCOME, MICLE OBEMA
            </Typography>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="My Profile" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Badge badgeContent={12} color="primary">
                    <Message />
                  </Badge>
                </ListItemIcon>
                <ListItemText primary="Message" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <School />
                </ListItemIcon>
                <ListItemText primary="Courses" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Star />
                </ListItemIcon>
                <ListItemText primary="Reviews" />
              </ListItem>
              <ListItem button selected>
                <ListItemIcon>
                  <Quiz />
                </ListItemIcon>
                <ListItemText primary="Quiz Attempts" />
              </ListItem>
            </List>
            <Divider sx={{ my: 2 }} />
            <Typography variant="subtitle2">USER</Typography>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Quiz Attempt Section */}
        <Grid item xs={12} md={9}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" mb={2}>
              My Quiz Attempts
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} md={4}>
                <FormControl fullWidth>
                  <InputLabel>Short By</InputLabel>
                  <Select defaultValue="default" label="Short By">
                    <MenuItem value="default">Default</MenuItem>
                    <MenuItem value="latest">Latest</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} md={4}>
                <FormControl fullWidth>
                  <InputLabel>Offer</InputLabel>
                  <Select defaultValue="free" label="Offer">
                    <MenuItem value="free">Free</MenuItem>
                    <MenuItem value="paid">Paid</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            {quizData.map((quiz, index) => (
              <Paper
                key={index}
                sx={{
                  mt: 3,
                  p: 2,
                  bgcolor: index % 2 === 1 ? "#f4f4f4" : "white",
                }}
              >
                <Typography variant="body2" color="textSecondary">
                  December 26, 2024
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold">
                  Write a on yourself using the 5
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Student: Mice Jerry
                </Typography>
                <Grid container spacing={2} alignItems="center" mt={1}>
                  <Grid item xs={3}>
                    <Typography>Qus: 4</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography>TM: 8</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography>CA: 4</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography
                        sx={{
                          bgcolor: quiz.color,
                          color: "white",
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 2,
                          fontSize: 12,
                        }}
                      >
                        {quiz.status}
                      </Typography>
                      <IconButton color="primary">
                        <Edit fontSize="small" />
                      </IconButton>
                      <IconButton color="error">
                        <Delete fontSize="small" />
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuizAttemptsPage;