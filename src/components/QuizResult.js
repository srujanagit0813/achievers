import React from "react";
import { Box, Paper, Button, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

function QuizResult() {
  const location = useLocation();
  const navigate = useNavigate();

  const { score, total, examTitle, responses } = location.state || {};

  if (score === undefined) {
    return <Typography color="error" variant="h6" align="center" sx={{ mt: 4 }}>Invalid submission</Typography>;
  }
  
  return (
    <Box sx={{ p: 4, display:'flex', flexDirection:'column', alignItems:'center' }}>
      <Paper elevations={6} sx={{ p: 4, maxWidth:'500px', width:'100%', textAlign:'center', borderRadius:'20px', boxShadow:'0 4px 30px #0003' }}>
        <Typography variant="h4" color="primary" mb={2}>
          {examTitle} Quiz Summary
        </Typography>

        <Typography variant="body1" mb={2}>
          Score: {score} / {total }
        </Typography>

        <Box mt={2}>
          {Object.entries(responses).map(([questionId, answer]) => (
            <Typography key={questionId}>
              Q{questionId}: Your Answer - {answer}
            </Typography>
          ))}
        </Box>

        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </Paper>
    </Box>
  )
}

export default QuizResult;