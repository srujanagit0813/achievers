// components/PerfectCourseSection.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Tabs,
  Tab,
  Paper,
} from "@mui/material";
import CourseCard from "./CourseCard";

export const courseCategories = [
  "All",
  "Computer Science",
  "Data science",
  "Engineering",
  "Web Development",
  "Architecture",
];

export const courses = [
  {
    category: "Art & Design",
    title: "Foundation course to understand about software",
    lessons: 23,
    duration: "1 hr 30 min",
    price: 32,
    oldPrice: 67,
    free: true,
    author: "Micle Jhon",
    rating: 4.5,
    image: "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrid_1.13280665.png&w=750&q=75",
  },
  {
    category: "Development",
    title: "Nidnies course to under stand about software",
    lessons: 29,
    duration: "2 hr 10 min",
    price: 32,
    oldPrice: 67,
    free: true,
    author: "Rinis Jhon",
    rating: 4.5,
    image: "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrid_2.b4b9a2fc.png&w=750&q=75",
  },
  {
    category: "Lifestyle",
    title: "Minws course to under stand about solution",
    lessons: 25,
    duration: "1 hr 40 min",
    price: 40,
    oldPrice: 67,
    free: true,
    author: "Jane Austen",
    rating: 4.2,
    image: "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrid_3.34a6552d.png&w=750&q=75",
  },
  {
    category: "Art$Design",
    title: "big data to under stand about solution and software",
    lessons: 30,
    duration: "3 hr 40 min",
    price: 40,
    oldPrice: 67,
    free: true,
    author: " Ge.orwell",
    rating: 4.2,
    image: "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrid_6.1149718f.png&w=750&q=75",
  },
  {
    category: "Lifestyle",
    title: "Minws course to under stand about solution",
    lessons: 25,
    duration: "1 hr 40 min",
    price: 40,
    oldPrice: 67,
    free: true,
    author: "Jane Austen",
    rating: 4.2,
    image: "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrid_5.1cca53ab.png&w=750&q=75",
  },
  {
    category: "Lifestyle",
    title: "Minws course to under stand about solution",
    lessons: 25,
    duration: "1 hr 40 min",
    price: 40,
    oldPrice: 67,
    free: true,
    author: "Jane Austen",
    rating: 4.2,
    image: "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrid_4.1f298d26.png&w=750&q=75",
  },
];


const PerfectCourseSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  return (
     <Box sx={{ 
      width: "100%", 
      background: "linear-gradient(to bottom, #f7f0ff, #ede7f6)", 
      py: 6 
    }}>
    <Box sx={{  px: 4,
    py: 6,
    maxWidth: "1400px",
    mx: "auto",  }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 1 }}
      >
        Perfect Online <span style={{ color: "#e91e63" }}>Course</span>
      </Typography>
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 4 }}
      >
        Your Carrer
      </Typography>

      <Paper
        elevation={3}
        sx={{ display: "flex", justifyContent: "center", mb: 4 }}
      >
        <Tabs
          value={selectedCategory}
          onChange={(e, newValue) => setSelectedCategory(newValue)}
          textColor="secondary"
          indicatorColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
        >
          {courseCategories.map((cat) => (
            <Tab key={cat} label={cat} value={cat} />
          ))}
        </Tabs>
      </Paper>

   <Grid container spacing={4} justifyContent="center">
  {filteredCourses.map((course, i) => (
    <Grid item xs={12} sm={6} md={3} key={i}>
      <CourseCard course={course} index={i}/>
    </Grid>
  ))}
</Grid>

    </Box>
    </Box>
  );
};

export default PerfectCourseSection;
