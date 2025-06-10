import React from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Button,
  Paper,
  Tabs,
  Tab,
  Card,
  CardMedia,
  CardContent,
  Chip,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const courses = [
  {
    title: "Nidnies course to under stand about softwere",
    category: "Development",
    lessons: 29,
    duration: "2 hr 10 min",
    price: "$32.00",
    oldPrice: "$67.00",
    author: "Rinis Jhon",
    rating: 4.5,
    image: "https://i.ibb.co/hWQG01f/dev.jpg",
  },
  {
    title: "Minws course to under stand about solution",
    category: "Lifestyle",
    lessons: 25,
    duration: "1 hr 40 min",
    price: "$40.00",
    oldPrice: "$67.00",
    author: "Jane Austen",
    rating: 4.5,
    image: "https://i.ibb.co/whmjP1g/science.jpg",
  },
  {
    title: "Design course to under stand about solution",
    category: "Web Design",
    lessons: 36,
    duration: "3 hr 40 min",
    price: "$40.00",
    oldPrice: "$67.00",
    author: "Micle Robin",
    rating: 4.5,
    image: "https://i.ibb.co/nkj6Jzp/design.jpg",
  },
];

export default function CourseDashboard() {
  return (
    <Box sx={{ p: 2, bgcolor: "#f9f9ff", minHeight: "100vh" }}>
      {/* Header */}
      <Box
        sx={{
          bgcolor: "#6a0dad",
          p: 3,
          borderRadius: 3,
          color: "white",
          mb: 2,
        }}
      >
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item display="flex" alignItems="center" gap={2}>
            <Avatar
              alt="Michle Obema"
              src="https://i.ibb.co/N9cKPjB/avatar.jpg"
              sx={{ width: 80, height: 80 }}
            />
            <Box>
              <Typography variant="body2">Hello</Typography>
              <Typography variant="h6" fontWeight={600}>
                Michle Obema
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>
              Create a New Course
            </Button>
          </Grid>
        </Grid>
        <Typography mt={2}>⭐ 4.0 (120 Reviews)</Typography>
      </Box>

      <Grid container spacing={2}>
        {/* Sidebar */}
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle2" color="gray" gutterBottom>
              WELCOME, MICLE OBEMA
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              {[
                "Dashboard",
                "My Profile",
                "Message",
                "Courses",
                "Reviews",
                "Quiz Attempts",
              ].map((text, index) => (
                <Button
                  key={index}
                  fullWidth
                  variant={text === "Courses" ? "contained" : "text"}
                  sx={{ justifyContent: "flex-start" }}
                >
                  {text}
                </Button>
              ))}
            </Box>
            <Typography variant="subtitle2" mt={2} color="gray">
              USER
            </Typography>
            <Box display="flex" flexDirection="column" gap={1} mt={1}>
              <Button fullWidth sx={{ justifyContent: "flex-start" }}>Settings</Button>
              <Button fullWidth sx={{ justifyContent: "flex-start" }}>Logout</Button>
            </Box>
          </Paper>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} md={9}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Course Status
            </Typography>
            <Tabs value={0} indicatorColor="primary" textColor="primary">
              <Tab label="PUBLISH" />
              <Tab label="PENDING" />
              <Tab label="DRAFT" />
            </Tabs>

            <Grid container spacing={2} mt={2}>
              {courses.map((course, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="140"
                      image={course.image}
                      alt={course.title}
                    />
                    <CardContent>
                      <Chip
                        label={course.category}
                        color="primary"
                        size="small"
                        sx={{ mb: 1 }}
                      />
                      <Typography variant="body2" color="textSecondary">
                        {course.lessons} Lessons • {course.duration}
                      </Typography>
                      <Typography variant="body1" fontWeight={600} gutterBottom>
                        {course.title}
                      </Typography>
                      <Typography variant="body2" color="primary">
                        {course.price}{" "}
                        <Typography
                          component="span"
                          variant="body2"
                          color="textSecondary"
                          sx={{ textDecoration: "line-through" }}
                        >
                          {course.oldPrice}
                        </Typography>{" "}
                        Free
                      </Typography>
                      <Box mt={1} display="flex" alignItems="center" gap={1}>
                        <Avatar sx={{ width: 24, height: 24 }} />
                        <Typography variant="body2">{course.author}</Typography>
                      </Box>
                    </CardContent>
                    <IconButton
                      sx={{ position: "absolute", top: 8, right: 8 }}
                      aria-label="favorite"
                    >
                      <FavoriteBorderIcon />
                    </IconButton>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
