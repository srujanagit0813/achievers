import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  AccountCircle,
  Message,
  Favorite,
  RateReview,
  Quiz,
  History,
  MenuBook,
  Campaign,
  Assignment,
  Settings,
  Logout,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const activeStyle = {
    bgcolor: "#e3f2fd",
    borderRadius: 2,
    fontWeight: "bold",
    color: "#1976d2",
  };

  return (
    <Box
      sx={{
        width: 250,
        bgcolor: "#ffffff",
        boxShadow: 2,
        minHeight: "100vh",
        p: 2,
      }}
    >
      {/* GENERAL */}
      <Typography variant="subtitle2" color="textSecondary" sx={{ mb: 1, mt: 2 }}>
        GENERAL
      </Typography>
      <List>
        <ListItem
          button
          onClick={() => navigate("/dashboard")}
          sx={isActive("/dashboard") ? activeStyle : {}}
        >
          <ListItemIcon><DashboardIcon color={isActive("/dashboard") ? "primary" : "inherit"} /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
          button
          onClick={() => navigate("/dashboard/UserProfilePage")}
          sx={isActive("/dashboard/UserProfilePage") ? activeStyle : {}}
        >
          <ListItemIcon><AccountCircle color={isActive("/dashboard/UserProfilePage") ? "primary" : "inherit"} /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem
          button
          onClick={() => navigate("/dashboard/chat")}
          sx={isActive("/dashboard/chat") ? activeStyle : {}}
        >
          <ListItemIcon><Message color={isActive("/dashboard/chat") ? "primary" : "inherit"} /></ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      {/* STUDENT */}
      <Typography variant="subtitle2" color="textSecondary" sx={{ mb: 1 }}>
        STUDENT
      </Typography>
      <List>
        <ListItem button onClick={() => navigate("/dashboard/wishlist")} sx={isActive("/dashboard/wishlist") ? activeStyle : {}}>
          <ListItemIcon><Favorite color={isActive("/dashboard/wishlist") ? "primary" : "inherit"} /></ListItemIcon>
          <ListItemText primary="Wishlist" />
        </ListItem>
        <ListItem button onClick={() => navigate("/dashboard/reviews")} sx={isActive("/dashboard/reviews") ? activeStyle : {}}>
          <ListItemIcon><RateReview color={isActive("/dashboard/reviews") ? "primary" : "inherit"} /></ListItemIcon>
          <ListItemText primary="Reviews" />
        </ListItem>
        <ListItem button onClick={() => navigate("/dashboard/QuizAttemptPage")} sx={isActive("/dashboard/QuizAttemptPage") ? activeStyle : {}}>
          <ListItemIcon><Quiz color={isActive("/dashboard/QuizAttemptPage") ? "primary" : "inherit"} /></ListItemIcon>
          <ListItemText primary="My Quiz Attempts" />
        </ListItem>
        <ListItem button onClick={() => navigate("/dashboard/OrderHistoryPage")} sx={isActive("/dashboard/OrderHistoryPage") ? activeStyle : {}}>
          <ListItemIcon><History color={isActive("/dashboard/OrderHistoryPage") ? "primary" : "inherit"} /></ListItemIcon>
          <ListItemText primary="Order History" />
        </ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      {/* INSTRUCTOR */}
      <Typography variant="subtitle2" color="textSecondary" sx={{ mb: 1 }}>
        INSTRUCTOR
      </Typography>
      <List>
        <ListItem button onClick={() => navigate("/dashboard/MyCoursesPage")} sx={isActive("/dashboard/MyCoursesPage") ? activeStyle : {}}>
          <ListItemIcon><MenuBook color={isActive("/dashboard/MyCoursesPage") ? "primary" : "inherit"} /></ListItemIcon>
          <ListItemText primary="My Courses" />
        </ListItem>
        <ListItem button onClick={() => navigate("/dashboard/AnnouncementsPage")} sx={isActive("/dashboard/AnnouncementsPage") ? activeStyle : {}}>
          <ListItemIcon><Campaign color={isActive("/dashboard/AnnouncementsPage") ? "primary" : "inherit"} /></ListItemIcon>
          <ListItemText primary="Announcements" />
        </ListItem>
        <ListItem button onClick={() => navigate("/dashboard/instructor-quiz-attempts")} sx={isActive("/dashboard/instructor-quiz-attempts") ? activeStyle : {}}>
          <ListItemIcon><Quiz color={isActive("/dashboard/instructor-quiz-attempts") ? "primary" : "inherit"} /></ListItemIcon>
          <ListItemText primary="Quiz Attempts" />
        </ListItem>
        <ListItem button onClick={() => navigate("/dashboard/assignments")} sx={isActive("/dashboard/assignments") ? activeStyle : {}}>
          <ListItemIcon><Assignment color={isActive("/dashboard/assignments") ? "primary" : "inherit"} /></ListItemIcon>
          <ListItemText primary="Assignments" />
        </ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      {/* USER */}
      <Typography variant="subtitle2" color="textSecondary" sx={{ mb: 1 }}>
        USER
      </Typography>
      <List>
        <ListItem button onClick={() => navigate("/dashboard/settings")} sx={isActive("/dashboard/settings") ? activeStyle : {}}>
          <ListItemIcon><Settings color={isActive("/dashboard/settings") ? "primary" : "inherit"} /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button onClick={() => navigate("/logout")}>
          <ListItemIcon><Logout /></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;