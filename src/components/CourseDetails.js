import React from "react";
import { useParams } from "react-router-dom";
import { Box, Grid, Typography, Button, Paper, Divider, Chip } from "@mui/material";
import { courses } from "./PerfectCourseSection";
import ReactPlayer from "react-player";

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses[parseInt(id)];

  if (!course) return <Typography>Course not found</Typography>;
  const InfoLine = ({ label, value }) => (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography variant="body2" color="textSecondary">
        {label}
      </Typography>
      <Typography variant="body2" fontWeight="bold">
        {value}
      </Typography>
    </Box>
  );
  

  return (
    <Box sx={{ backgroundColor: "#f5f7fa", py: 6 ,mt:10}}>
    <Box sx={{  py: 4, maxWidth: "1400px", mx: "auto",ml:15 }}>
      <Grid container spacing={6}>
        {/* Left Content */}
        <Grid item xs={12} md={8}>
          <Box>
            <img
              src={course.image}
              alt={course.title}
              style={{ width: "100%", borderRadius: "12px" }}
            />

            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              {/* <Chip label="Featured" color="primary" />
              <Chip label={course.category} color="secondary" /> */}
              <Typography sx={{ ml: "auto", fontSize: 14 }}>
              Last Update: {course.lastUpdated}
              </Typography>
            </Box>

            <Typography variant="h4" sx={{ mt: 2 }}>
              {course.title}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography variant="h6" color="primary">
                ${course.price}
              </Typography>
              <Typography
                sx={{ textDecoration: "line-through", ml: 2, color: "#999" }}
              >
                ${course.oldPrice}
              </Typography>
              <Typography sx={{ ml: 2 }}>
                {course.lessons} Lessons ⭐ {course.rating} (44)
              </Typography>
            </Box>

            <Typography sx={{ mt: 2,textAlign:"start" }}>
            {course.description}
            </Typography>

            {/* Course Details Grid */}
          

          </Box>
        </Grid>

        {/* Right Side Panel */}
        
        <Grid item xs={12} md={4}>
  <Paper elevation={4} sx={{ borderRadius: 3, overflow: "hidden" }}>
    <Box>
      {/* <img
        src={course.image}
        alt={course.title}
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      /> */}
  

<ReactPlayer
  url={course.video}
  controls={true}
  width="100%"
  height="auto"
  style={{ borderRadius: "12px", overflow: "hidden" }}
/>

    </Box>

    <Box sx={{ p: 3 }}>
      <Typography variant="h5" color="primary">
        ${course.price}{" "}
        <Typography
          component="span"
          sx={{ ml: 1, textDecoration: "line-through", color: "gray" }}
        >
          ${course.oldPrice}
        </Typography>
        <Chip
          label="68% OFF"
          color="error"
          size="small"
          sx={{ ml: 2, fontWeight: "bold" }}
        />
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Button fullWidth variant="contained" color="primary" size="large">
          Add To Cart
        </Button>
        <Button
          fullWidth
          variant="outlined"
          color="secondary"
          size="large"
          sx={{ mt: 1 }}
        >
          Buy Now
        </Button>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <InfoLine label="Instructor" value="D. William" />
        <InfoLine label="Start Date" value="05 Dec 2024" />
        <InfoLine label="Total Duration" value="08 Hrs 32 Min" />
        <InfoLine label="Enrolled" value="100" />
        <InfoLine label="Lectures" value="30" />
        <InfoLine label="Skill Level" value="Basic" />
        <InfoLine label="Language" value="Spanish" />
        <InfoLine label="Quiz" value="Yes" />
        <InfoLine label="Certificate" value="Yes" />
      </Box>

      <Button
        fullWidth
        variant="outlined"
        color="info"
        sx={{ mt: 3 }}
        startIcon={"📞"}
      >
        +47 333 78 901
      </Button>
    </Box>
  </Paper>
            </Grid>

      </Grid>
    </Box>
    </Box>
  );
};

export default CourseDetails;
