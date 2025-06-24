import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Tabs,
  Tab,
  Paper,
  LinearProgress,
  Button,
  Stack,
  Avatar,
  Chip,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";



// ✅ Course Data
const coursesData = [
  {
    category: "Completed",
    subject: "Data & Tech",
    lessons: 23,
    duration: "1 hr 30 min",
    title: "Foundation course to understand about software",
    price: "$32.00 / $67.00 Free",
    instructor: "Micle John",
    rating: 44,
    progress: 100,
    image: "https://media.istockphoto.com/id/578291882/photo/indian-kids-studying-on-study-table.jpg?s=2048x2048&w=is&k=20&c=aMczL6lLJJuMhfQ4_dNGIqXyZ0VSgoGxivaZN6aJEBI=",
  },
  {
    category: "Completed",
    subject: "Mechanical",
    lessons: 29,
    duration: "2 hr 10 min",
    title: "Nidnies course to understand about software",
    price: "$32.00 / $67.00 Free",
    instructor: "Rinis Jhon",
    rating: 44,
    progress: 100,
    image: "https://media.istockphoto.com/id/1029717906/photo/girl-doing-homework-at-home-stock-image.jpg?s=2048x2048&w=is&k=20&c=cayjVg70FNXXxZOZ2VfWunnDKJCyQst8X2GrKkpqbgo=",
  },
  {
    category: "Completed",
    subject: "Development",
    lessons: 25,
    duration: "1 hr 40 min",
    title: "Minws course to understand about solution",
    price: "$40.00 / $67.00 Free",
    instructor: "Micle John",
    rating: 44,
    progress: 100,
    image: "https://media.istockphoto.com/id/1029717906/photo/girl-doing-homework-at-home-stock-image.jpg?s=1024x1024&w=is&k=20&c=BYuUss39-aeNHrmqL_jNOIz1b11zm3EJZ0cC726gtGM=",
  },
  {
    category: "Active",
    subject: "Data & Tech",
    lessons: 23,
    duration: "1 hr 30 min",
    title: "Foundation course to understand about software",
    price: "$32.00 / $67.00 Free",
    instructor: "Micle John",
    rating: 44,
    progress: 80,
    image: "https://media.istockphoto.com/id/1029717906/photo/girl-doing-homework-at-home-stock-image.jpg?s=1024x1024&w=is&k=20&c=BYuUss39-aeNHrmqL_jNOIz1b11zm3EJZ0cC726gtGM=",
  },
  {
    category: "Active",
    subject: "Mechanical",
    lessons: 29,
    duration: "2 hr 10 min",
    title: "Nidnies course to understand about software",
    price: "$32.00 / $67.00 Free",
    instructor: "Rinis Jhon",
    rating: 44,
    progress: 70,
    image: "https://media.istockphoto.com/id/1029717906/photo/girl-doing-homework-at-home-stock-image.jpg?s=1024x1024&w=is&k=20&c=BYuUss39-aeNHrmqL_jNOIz1b11zm3EJZ0cC726gtGM=",
  },
];

const categories = ["Enrolled Courses", "Active Courses", "Completed Courses"];

const StudentEnrolledCourses = () => {
  const [selectedTab, setSelectedTab] = useState(0); // Default to "Enrolled Courses"

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const filteredCourses =
    selectedTab === 0
      ? coursesData
      : coursesData.filter(
          (course) =>
            course.category ===
            categories[selectedTab].replace(" Courses", "")
        );

  return (
    <Box p={5}>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        {categories[selectedTab]}
      </Typography>

      <Tabs
        value={selectedTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 3 }}
      >
        {categories.map((cat, idx) => (
          <Tab key={idx} label={cat} />
        ))}
      </Tabs>

      <Grid container spacing={2}>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper sx={{ p: 2, borderRadius: 2,width:"350px", }} elevation={4}>
                {/* ✅ Image with subject chip overlay */}
                <Box
                  sx={{
                    position: "relative",
                    width: "90%",
                    height: 180,
                    mx: "auto",
                    mb: 1,
                    borderRadius: 1,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={course.image}
                    alt={course.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  {/* Overlay Chip */}
                  <Chip
                    label={course.subject}
                    sx={{
                      position: "absolute",
                      top: 8,
                      left: 8,
                      bgcolor: "purple",
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "0.75rem",
                    }}
                  />
                </Box>
<Stack spacing={2}>
  {/* Top row: Lessons and Duration in a horizontal row */}
  <Stack direction="row" justifyContent="center" alignItems="center" spacing={20}>
    <Typography variant="subtitle1" sx={{ml:8}}>
      {course.lessons} Lessons
    </Typography>
    <Typography variant="subtitle1">• {course.duration}</Typography>
  </Stack>

  {/* Course Title */}
  <Typography variant="h5" fontWeight="bold"  >
    {course.title}
  </Typography>

  {/* Price */}
<Stack direction="row" justifyContent="start" spacing={2} >
  <Typography
  sx={{
    color: "#2e7d32",        // Custom green color (you can use any HEX or theme color)
    fontSize: "1.1rem",      // Increase font size
    fontWeight: "bold",      // Optional: make it bolder
    textAlign: "center",     // Optional: center the text
  }}
>
  {course.price}
</Typography>

</Stack>

  {/* Instructor Info */}
  <Stack direction="row" alignItems="center" spacing={2}>
    <Avatar>{course.instructor[0]}</Avatar>
    <Typography>
      {course.instructor} ({course.rating})
    </Typography>
  </Stack>

  {/* Progress Bar */}
 
<Box sx={{ position: "relative", width: "100%", mt: 1 }}>
  <LinearProgress
    variant="determinate"
    value={course.progress}
    sx={{
      height: 30,
      width:350,
      borderRadius: 2,
      backgroundColor: "#e0e0e0", // light gray background
      "& .MuiLinearProgress-bar": {
        backgroundColor: "#1976d2", // ✅ custom blue
      },
    }}
  />

  <Typography
    variant="caption"
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "#fff",
      fontWeight: "bold",
      fontSize: "0.75rem",
    }}
  >
    {course.progress}% Complete
  </Typography>
</Box>

{course.progress === 100 && (
  <Button
    variant="outlined"
    size="small"
    startIcon={<DownloadIcon />}
    sx={{
      mt: 1,
      backgroundColor: "#f8bbd0", // light pink
      color: "#880e4f",            // deep pink text
      borderColor: "#f48fb1",      // pink border
      "&:hover": {
        backgroundColor: "#f48fb1", // slightly darker on hover
        borderColor: "#f06292",
      },
    }}
  >
    Download Certificate
  </Button>
)}


 
</Stack>

                
              </Paper>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" sx={{ mt: 4 }}>
            No courses found.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default StudentEnrolledCourses;