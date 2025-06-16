import React, { useEffect } from 'react'
import { Box, Grid, useTheme, useMediaQuery, Typography, Breadcrumbs,Paper } from '@mui/material';
import CourseLessonPanel from '../components/CourseLessonPanel';
import courseData from '../data/coursedata'
import {  NavLink } from 'react-router-dom';
import Aos from 'aos';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TrendingExams from '../components/TrendingExams';
const QuizPage = () => {
    useEffect(() => {
          Aos.init({ duration: 1000, once: true });
        }, []);
   const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const selectedVideo = null;
  
    const handlePreview = (url) => {
      console.log("Preview clicked:", url);
    };
  return (
    <Box sx={{ mt: 10, p:0 }}>


          <Box
              sx={{
              
                backgroundColor: '#f7f7fb',
                py: 6,
               height:"300px"
        ,        overflow: 'hidden',
                width:"100%"
              }}
            >
               <Typography variant="h2" fontWeight="bold" sx={{ mb: 1,textAlign:"center",mt:13 }} data-aos="fade-up">
                Lesson Quiz
              </Typography>
              <Breadcrumbs
                separator="›"
                sx={{ display: 'flex', justifyContent: 'center' }} data-aos="fade-up"
              >
                <NavLink to="/">
                <Typography color="text.primary">Home</Typography>
                </NavLink>
                <Typography color="text.primary">Lesson Quiz</Typography>
              </Breadcrumbs>
            </Box>


           <Grid container spacing={2} ml={isMobile ? 0 : 10} mt={isMobile ? 0 : 5} data-aos="fade-up">
            <Grid item md={6} sx={{width:isMobile?"100%":"25%"}}>
              <CourseLessonPanel
        courseData={courseData}  // ✅ Must be an array
        selectedVideo={selectedVideo}
        onPreview={handlePreview}
      />
            </Grid>


          <Grid item md={6} sx={{ width: isMobile ? '100%' : '50%', mt: isMobile ? 2 : -5, mx: 'auto' }}>
      {/* <NavLink to="/class-page" style={{ textDecoration: 'none' }}>
        <Paper
          elevation={4}
          sx={{
            p: 4,
            borderRadius: 3,
            bgcolor: '#e8f5e9',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: 6,
              bgcolor: '#c8e6c9',
              transform: 'translateY(-4px)',
            },
          }}
        >
          <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
            <Typography variant="h5" fontWeight="bold" color="primary">
              Go to Quiz Page
            </Typography>
            <ArrowForwardIcon color="primary" />
          </Box>
          <Typography variant="body2" mt={1} color="text.secondary">
            Explore daily updated quizzes and test series to boost your preparation.
          </Typography>
        </Paper>
      </NavLink> */}
      <TrendingExams/>
    </Grid>
           </Grid>
  
    </Box>
  )
}

export default QuizPage
