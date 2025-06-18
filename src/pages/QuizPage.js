import React, { useEffect, useRef, useState } from 'react';
import {
  Box, Grid, useTheme, useMediaQuery, Typography, Breadcrumbs, Paper,
  Button, Divider, IconButton
} from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import CourseLessonPanel from '../components/CourseLessonPanel';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import courseData from '../data/coursedata';
import { courses } from '../components/PerfectCourseSection';

const QuizPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { id } = useParams();
  const navigate = useNavigate();

  const matchingClass = courses.find((item) => item.id === parseInt(id));
  const [selectedLessonId, setSelectedLessonId] = useState(null);

  const scrollRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const handleLessonSelect = (lessonId) => {
    setSelectedLessonId(lessonId);
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const selectedLesson = courseData.find((lesson) => lesson.id === selectedLessonId);
  const quizzes = selectedLesson
    ? selectedLesson.contents
        .filter((content) => content.type === 'quiz')
        .map((quiz) => ({
          lessonTitle: selectedLesson.title,
          label: quiz.label,
          questions: quiz.questions,
        }))
    : [];

  return (
    <Box sx={{ mt: 5, p: 0 }}>
      {/* Header Section */}
      <Box sx={{ overflow: 'hidden', width: '100%' }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ mb: 1, textAlign: 'center', mt: 3 }}
          data-aos="fade-up"
        >
          Lesson Quiz
        </Typography>
        <Breadcrumbs separator="›" sx={{ display: 'flex', justifyContent: 'center' }} data-aos="fade-up">
          <NavLink to="/"><Typography color="text.primary">Home</Typography></NavLink>
          <Typography color="text.primary">Lesson Quiz</Typography>
        </Breadcrumbs>
      </Box>

      {/* Main Content */}
      <Grid container spacing={2} ml={isMobile ? 0 : 10} mt={isMobile ? 2 : 4} data-aos="fade-up">
        {/* Left: Lesson List */}
        <Grid item xs={12} md={4} sx={{width:isMobile?"100%":"30%"}}>
          <CourseLessonPanel courseData={courseData} onLessonSelect={handleLessonSelect} />
        </Grid>

        {/* Right: Quiz Cards */}
        <Grid item xs={12} md={8} ml={isMobile? 0:25}>
          <Box sx={{ position: 'relative', px: isMobile ? 2 : 5, py: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
              <Typography variant="h4" fontWeight="bold">📝 Quizzes</Typography>
              {/* {quizzes.length > 0 && (
                <Button variant="contained" color="success" size="small">Free</Button>
              )} */}
            </Box>

            <Typography variant="h6" sx={{ textAlign: 'center', mb: 3 }}>
              {quizzes.length > 0 ? "Practice the quizzes for your selected lesson" : "Select a lesson to view its quizzes"}
            </Typography>

            {/* Arrows */}
            {quizzes.length > 0 && (
              <>
                <IconButton
                  onClick={scrollLeft}
                  sx={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'green',
                    color: 'white',
                    zIndex: 10,
                    display: { xs: 'none', md: 'flex' }
                  }}
                >
                  <ArrowBackIos />
                </IconButton>

                <IconButton
                  onClick={scrollRight}
                  sx={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'green',
                    color: 'white',
                    zIndex: 10,
                    display: { xs: 'none', md: 'flex' }
                  }}
                >
                  <ArrowForwardIos />
                </IconButton>
              </>
            )}

            {/* Scrollable Quiz Cards */}
            <Box
              ref={scrollRef}
              sx={{
                display: 'flex',
                justifyContent:"center",
                gap: 3,
                overflowX: quizzes.length > 0 ? 'auto' : 'hidden',
                pb: 1,
                scrollBehavior: 'smooth',
              }}
            >
              {quizzes.map((quiz, index) => (
                <Paper
                  key={index}
                  elevation={3}
                  sx={{
                    minWidth: '280px',
                    p: 3,
                    borderRadius: 3,
                    transition: '0.3s',
                    '&:hover': { transform: 'translateY(-5px)' },
                  }}
                >
                  <Typography variant="h6" color="primary" mb={2}>
                    {quiz.lessonTitle}
                  </Typography>

                  <Box sx={{ textAlign: 'left', mb: 2 }}>
                    <Typography>Quiz: {quiz.label}</Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography>Questions: {quiz.questions}</Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography>Duration: 30 min</Typography>
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    color="primary"
                    onClick={() =>
                      navigate('/start-quiz', {
                        
                            state: {
        examTitle: quiz.label,   // or quiz.lessonTitle if you prefer
        date: new Date().toLocaleDateString(),
                        }
                      })
                    }
                  >
                    Start Quiz
                  </Button>
                </Paper>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuizPage;
