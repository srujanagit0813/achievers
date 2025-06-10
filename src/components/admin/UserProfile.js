import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  useTheme,
  useMediaQuery,
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
} from "@mui/icons-material";

const profileDetails = {
  registrationDate: "20, January 2024 9:00 PM",
  firstName: "Michle",
  lastName: "Obema",
  username: "obema007",
  email: "obema@example.com",
  phone: "+55 669 4456 25987",
  expert: "Graphics Design",
  biography:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores veniam, delectus accusamus nesciunt laborum repellat laboriosam, deserunt possimus itaque iusto perferendis voluptatum quaerat cupiditate vitae. Esse aut illum perferendis nulla, corporis impedit quasi alias est!",
};

const menuItems = [
  { icon: <Dashboard />, label: "Dashboard" },
  { icon: <Person />, label: "My Profile", active: true },
  { icon: <Message />, label: "Message", badge: 12 },
  { icon: <School />, label: "Courses" },
  { icon: <Star />, label: "Reviews" },
  { icon: <Quiz />, label: "Quiz Attempts" },
];

const UserProfilePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ p: isMobile ? 2 : 4, background: "#f9f9f9", minHeight: "100vh" }}>
      {/* Header */}
      <Box
        sx={{
          background: "#6f3ce7",
          color: "#fff",
          p: 2,
          borderRadius: 3,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: isMobile ? "column" : "row",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            src="https://randomuser.me/api/portraits/men/32.jpg"
            sx={{ width: 64, height: 64, border: "3px solid #fff" }}
          />
          <Box>
            <Typography variant="body1">Hello</Typography>
            <Typography variant="h6" fontWeight="bold">
              Michle Obema
            </Typography>
          </Box>
        </Box>
        <Box textAlign="center">
          <Typography sx={{ fontSize: "20px" }}>
            ⭐⭐⭐⭐☆
          </Typography>
          <Typography fontSize={14}>4.0 (120 Reviews)</Typography>
        </Box>
        <Button variant="contained" sx={{ bgcolor: "#fff", color: "#6f3ce7", alignSelf: "center" }}>
          Create a New Course →
        </Button>
      </Box>

      <Grid container spacing={3} mt={2}>
        {/* Sidebar */}
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2, borderRadius: 3 }}>
            <Typography variant="subtitle2" gutterBottom>
              WELCOME, MICLE OBEMA
            </Typography>
            <List>
              {menuItems.map((item, idx) => (
                <ListItem
                  key={idx}
                  button
                  selected={item.active}
                  sx={{
                    color: item.active ? "#6f3ce7" : "inherit",
                    fontWeight: item.active ? "bold" : "normal",
                  }}
                >
                  <ListItemIcon
                    sx={{ color: item.active ? "#6f3ce7" : "inherit" }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                  {item.badge && (
                    <Box
                      sx={{
                        background: "#6f3ce7",
                        borderRadius: "50%",
                        color: "#fff",
                        px: 1,
                        fontSize: 12,
                      }}
                    >
                      {item.badge}
                    </Box>
                  )}
                </ListItem>
              ))}
            </List>

            <Divider sx={{ my: 2 }} />
            <Typography variant="subtitle2" mb={1}>
              USER
            </Typography>
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

        {/* Profile Details */}
        <Grid item xs={12} md={9}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              My Profile
            </Typography>
            <Grid container spacing={2}>
              {Object.entries(profileDetails).map(([label, value], idx) => (
                <React.Fragment key={idx}>
                  <Grid item xs={12} md={3}>
                    <Typography fontWeight="bold" color="textSecondary">
                      {label
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Typography>{value}</Typography>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserProfilePage;
