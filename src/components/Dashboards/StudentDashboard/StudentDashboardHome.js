import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { EmojiEvents, MenuBook, Groups, Public } from "@mui/icons-material";
import StudentTotalFeedbacks from "./StudentTotalFeedbacks";
import Footer from "../../Footer";

const metrics = [
  { icon: <EmojiEvents sx={{ color: "#ff7043", fontSize: 40 }} />, label: "Enrolled Courses", value: "900+" },
  { icon: <MenuBook sx={{ color: "#42a5f5", fontSize: 40 }} />, label: "Active Courses", value: "500+" },
  { icon: <Groups sx={{ color: "#66bb6a", fontSize: 40 }} />, label: "Complete Courses", value: "30k" },
  { icon: <Public sx={{ color: "#ab47bc", fontSize: 40 }} />, label: "Total Courses", value: "1,500+" },
  // { icon: <Groups sx={{ color: "#ffca28", fontSize: 40 }} />, label: "Total Students", value: "30k" },
  // { icon: <Public sx={{ color: "#26c6da", fontSize: 40 }} />, label: "Over The World", value: "90,000k+" },
];

const StudentDashboardHome = () => {
  return (
    <>
      {/* Main Content Section */}
      <Box sx={{ px: 3, py: 4, bgcolor: "#f5f7fa", minHeight: "100vh" ,mt:2}}>
        <Typography variant="h4" fontWeight="bold" mb={5}>
          Dashboard Metrics
        </Typography>

        <Grid container spacing={4}>
          {metrics.map((metric, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  borderRadius: 4,
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 200,
                  width:200,
                  bgcolor: "#ffffff",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Box sx={{ bgcolor: "#f0f0f0", borderRadius: "50%", p: 2, mb: 2 }}>
                  {metric.icon}
                </Box>
                <Typography variant="h4" fontWeight="bold" mb={1}>
                  {metric.value}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {metric.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <StudentTotalFeedbacks />
      </Box>

      {/* Full Width Footer */}
      <Box sx={{ width: "1800px",mt:0,ml:-38}}>
        <Footer />
      </Box>
    </>
  );
};

export default StudentDashboardHome;