import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

function StartQuizPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const { examTitle, date } = location.state || {};

  if (!examTitle) {
    return <Typography color="error" variant="h6" align="center" sx={{ mt: 4 }}>Invalid Quiz</Typography>;
  }
  
  return (
    <Box sx={{ p: 4, display:'flex', flexDirection:'column', alignItems:'center' }}>
      <Paper 
        elevation={6} 
        sx={{ p: 4, maxWidth:'500px', width:'100%', textAlign:'center', borderRadius:'20px', boxShadow:'0 4px 30px #0003' }}
      >
        <Typography variant="h4" color="primary" mb={2}>
          {examTitle} Quiz
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={1}>
          Date: {date}
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={3}>
          Prepare yourself. There are 20 questions and you have 30 minutes to complete it.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate('/quiz-questions', { state: { examTitle, date }}) }
        >
          Start Quiz Now
        </Button>
      </Paper>
    </Box>
  )
}

export default StartQuizPage;