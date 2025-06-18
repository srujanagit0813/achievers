import React, { useState, useEffect } from "react";
import { Box, Paper, Button, Typography, Radio, RadioGroup, FormControlLabel, LinearProgress, Stack } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

// Mock questions
const questions = [
  { id: 1, question: "Who invented Javascript?", options: ["Brendan Eich", "Mark Zuckerberg", "Bill Gates", "Steve Jobs"], answer: "Brendan Eich" },
  { id: 2, question: "What does React use for UI?", options: ["JSX", "TSX", "HTML", "XML"], answer: "JSX" },
  { id: 3, question: "Who develops React?", options: ["Google", "Amazon", "Meta (formerly Facebook)", "Microsoft"], answer: "Meta (formerly Facebook)" },
  { id: 4, question: "What hook lets you manage state in functional components?", options: ["useEffect", "useState", "useReducer", "useCallback"], answer: "useState" },
  { id: 5, question: "What does DOM stand for?", options: ["Document Object Model", "Data Object Model", "Dynamic Object Model", "Document Oriented Model"], answer: "Document Object Model" },
  { id: 6, question: "How do you create a React component?", options: ["function MyComp()", "class MyComp extends React.Component", "Both A and B", "None"], answer: "Both A and B" },
  { id: 7, question: "What is a prop in React?", options: ["A method", "A component's internal state", "A way to pass data from parent to child", "A side effects handler"], answer: "A way to pass data from parent to child" },
  { id: 8, question: "How to handle side effects in React?", options: ["useState", "useCallback", "useEffect", "useMemo"], answer: "useEffect" },
  { id: 9, question: "What is JSX?", options: ["JavaScript Standard XML", "JavaScript and HTML hybrid", "JSON scripting format", "Java Servlet eXtension"], answer: "JavaScript and HTML hybrid" },
  { id: 10, question: "How do you lift state up in React?", options: ["Using useEffect", "Using context API", "Moving state to a parent component", "Using ref"], answer: "Moving state to a parent component" },
  { id: 11, question: "What is a key in React?", options: ["A unique identifier for list items", "A password for components", "A literal keyword in JSX", "A way to destroy components"], answer: "A unique identifier for list items" },
  { id: 12, question: "How to perform conditional rendering in React?", options: ["Using if-else or ternary operator", "Using for loop", "Using API call", "Using context"], answer: "Using if-else or ternary operator" },
  { id: 13, question: "What is a custom hook?", options: ["A special state variable", "A reuseable function that starts with use", "A wrapper for components", "A directory structure"], answer: "A reuseable function that starts with use" },
  { id: 14, question: "How to optimize performance in React?", options: ["Using useMemo and useCallback", "Using for loop", "Using setState frequently", "Using API calls directly"], answer: "Using useMemo and useCallback" },
  { id: 15, question: "What does React Router do?", options: ["Manages state", "Handles routing in a single page application", "Compiles code faster", "Provides styling"], answer: "Handles routing in a single page application" },
  { id: 16, question: "How to apply styling in React?", options: ["Using CSS files", "Using styled-components", "Using Material-UI", "All of the above"], answer: "All of the above" },
  { id: 17, question: "What is a Pure Component?", options: ["A component without state", "A component with shallow comparison for performance", "A wrapper for API calls", "A directory"], answer: "A component with shallow comparison for performance" },
  { id: 18, question: "How to handle form submission in React?", options: ["Using onClick", "Using onSubmit event on form tag", "Using setState directly", "Using ref"], answer: "Using onSubmit event on form tag" },
  { id: 19, question: "What is a Higher-Order Component (HOC)?", options: ["A component that renders another component", "A custom hook", "A directory structure", "A state"], answer: "A component that renders another component" },


  { id: 20, question: "How to debug React components?", options: ["Using console.log", "Using React Developer Tools", "Using break points in code", "All of the above"], answer: "All of the above" }
];

function QuizQuestions() {
  const location = useLocation();
  const navigate = useNavigate();

  const { examTitle, date } = location.state || {};

  const [responses, setResponses] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q) => {
      if (responses[q.id] === q.answer) score++;
    });

    navigate('/quiz-result', { state: { responses, score, total: questions.length, examTitle } });
  };
  
  const handleChange = (questionId, answer) => {
    setResponses((prev) => ({
      ...prev,
      [questionId]: answer,
    }))
  }
  
  const handleNext = () => setCurrentIndex((prev) => Math.min(prev + 1, questions.length - 1));  
  const handlePrevious = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));  

  const progress = ((currentIndex + 1) / questions.length) * 100;

  if (!examTitle) {
    return <Typography color="error" variant="h6" align="center" sx={{ mt: 4 }}>Invalid Quiz</Typography>;
  }
  
  return (
    <Box sx={{ p: 4, maxWidth:'600px', margin:'auto' }}>
      <Typography variant="h4" color="primary" mb={2}>
        {examTitle} Quiz
      </Typography>

      <Typography variant="body1" color="text.secondary">
        Question {currentIndex + 1} of {questions.length}
      </Typography>

      <LinearProgress variant="determinate" value={progress} sx={{ mt: 1, mb: 2, height:'10px', borderRadius:'5px'}} />

      <Paper elevations={6} sx={{ p: 4, borderRadius:'20px', boxShadow:'0 4px 30px #0003' }}>
        <Typography variant="h6" mb={2}>
          {questions[currentIndex].question}
        </Typography>

        <RadioGroup
          name={`question-${currentIndex}`}
          onChange={(e) => handleChange(questions[currentIndex].id, e.target.value)}
          value={responses[questions[currentIndex].id]}
        >
          {questions[currentIndex].options?.map((opt, idx) => (
            <FormControlLabel key={idx} control={<Radio color="primary" />} label={opt} value={opt} />
          ))}
        </RadioGroup>

        <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
          <Button variant="outlined" color="primary" onClick={handlePrevious} disabled={currentIndex <= 0}>
            Previous
          </Button>

          {currentIndex < questions.length - 1 ? (
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button variant="contained" color="success" onClick={handleSubmit}>
              Submit Quiz
            </Button>
          )}

        </Stack>

        <Typography variant="body2" color="error" sx={{ mt: 3 }}>
          Time left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2,'0')}
        </Typography>
      </Paper>
    </Box>
  )
}

export default QuizQuestions;