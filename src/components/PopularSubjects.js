import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";

// data/subjects.js
export const subjects = [
  {
    title: "Business Studies",
    desc: "Business is succes",
    icon: "📈",
  },
  {
    title: "Programming Tech",
    desc: "update your skill",
    icon: "💻",
  },
  {
    title: "Artist & Design",
    desc: "show creativity",
    icon: "💡",
  },
  {
    title: "Machine Learning",
    desc: "Science is power",
    icon: "📘",
  },
  {
    title: "Health & Fitness",
    desc: "health is wealth",
    icon: "⌚",
  },
 
  {
    title: "Marketing Analysis",
    desc: "Science is power",
    icon: "🎯",
  },
    {
    title: "Business Studies",
    desc: "Business is succes",
    icon: "📈",
  },
  {
    title: "Programming Tech",
    desc: "update your skill",
    icon: "💻",
  },
  {
    title: "Artist & Design",
    desc: "show creativity",
    icon: "💡",
  },
  {
    title: "Machine Learning",
    desc: "Science is power",
    icon: "📘",
  },
  {
    title: "Health & Fitness",
    desc: "health is wealth",
    icon: "⌚",
  },
 
  {
    title: "Marketing Analysis",
    desc: "Science is power",
    icon: "🎯",
  },
 
];

const PopularSubjects = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ px: 7, py: 4, background: "linear-gradient(to bottom, #f9f5fd, #eee5ff)" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          mb: 4,
          position: "relative",
          display: "inline-block",
          color: "#000",
        }}
      >
        Populer Subjects
      
      </Typography>

      <Grid container spacing={5} >
        {subjects.map((subject, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                textAlign: "center",
                borderRadius: 3,
                minHeight: 160,
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Box fontSize={40} mb={1}>
                {subject.icon}
              </Box>
              <Typography fontWeight="bold" gutterBottom>
                {subject.title}
              </Typography>
              <Typography color="text.secondary">{subject.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PopularSubjects;
