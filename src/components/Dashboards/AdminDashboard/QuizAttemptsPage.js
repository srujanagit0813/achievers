
import React from "react";
import { Box, Paper, Button, Grid, IconButton, Typography } from "@mui/material";
import TopbarPage from "./TopbarPage";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Layout from './Layout';

const quizData = [
  { status: "Running", color: "#4caf50" },
  { status: "Time Over", color: "#9c27b0" },
  { status: "Coming", color: "#2196f3" },
  { status: "Cancel", color: "#f44336" },
  { status: "Running", color: "#4caf50" },
  { status: "Time Over", color: "#9c27b0" },
]

function QuizAttemptsPage() {
  return (
    <Layout role="Instructor">
      {/* Title */}
      <Typography variant="h5" mb={3} fontWeight="bold">
        Wishlist
      </Typography>

      {/* Quiz grid */}
      <Grid container spacing={4}>
        {quizData.map((quiz, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Paper
               elevation={3}
               sx={{ p: 2, borderRadius: 3, bgcolor: "#fff",
               boxShadow: "0 2px 8px rgba(0,0,0,0.1)", transition: "all 0.3s ease",
               "&:hover": { transform: "scale(1.03)", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" } }}
             >
               <Typography variant="body2" color="text.secondary" mb={1}>
                 December 26, 2024
               </Typography>
               <Typography variant="h6" fontWeight="bold" mb={1}>
                 Write about yourself using the 5-point structure.
               </Typography>
               <Typography variant="body2" color="text.secondary" mb={2}>
                 Student: Mice Jerry
               </Typography>

               <Grid container spacing={2} alignItems="center">
                 <Grid item xs={4}>
                   <Typography variant="body2">Qus: 4</Typography>
                 </Grid>
                 <Grid item xs={4}>
                   <Typography variant="body2">TM: 8</Typography>
                 </Grid>
                 <Grid item xs={4}>
                   <Typography variant="body2">CA: 4</Typography>
                 </Grid>
               </Grid>

               <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
                 <Typography
                   sx={{ bgcolor: quiz.color, color: "white", px: 1.5, py: 0.5, borderRadius: 2, fontSize: 12, fontWeight: "bold" }}
                 >
                   {quiz.status}
                 </Typography>
                 <Box>
                   <IconButton color="primary">
                     <EditIcon fontSize="small" />
                   </IconButton>
                   <IconButton color="error">
                     <DeleteIcon fontSize="small" />
                   </IconButton>
                 </Box>
               </Box>
             </Paper>
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

export default QuizAttemptsPage;