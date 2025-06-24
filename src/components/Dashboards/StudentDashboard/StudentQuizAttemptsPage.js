import React from "react";
import {
  Box,
  Paper,
  Grid,
  IconButton,
  Typography
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const quizData = [
  { status: "Running", color: "#4caf50" },
  { status: "Time Over", color: "#9c27b0" },
  { status: "Coming", color: "#2196f3" },
  { status: "Cancel", color: "#f44336" },
  { status: "Running", color: "#4caf50" },
  { status: "Time Over", color: "#9c27b0" },
];

function StudentQuizAttemptsPage() {
  return (
    <Box sx={{ p: 4, minHeight: "100vh", bgcolor: "#f0f4f8",mt:2 }}>
      {/* Title */}
      <Typography variant="h4" mb={4} fontWeight="bold">
        My Quiz Attempts
      </Typography>

      {/* Quiz Grid */}
      <Grid container spacing={4}>
        {quizData.map((quiz, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 3,
                bgcolor: "#ffffff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                },
              }}
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

              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mt={2}
              >
                <Typography
                  sx={{
                    bgcolor: quiz.color,
                    color: "#fff",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 2,
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
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
    </Box>
  );
}

export default StudentQuizAttemptsPage;