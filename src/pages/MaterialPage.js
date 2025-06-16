import React, { useEffect } from 'react'
import { Box, Grid, useTheme, useMediaQuery, Typography, Breadcrumbs } from '@mui/material';
import CourseLessonPanel from '../components/CourseLessonPanel';
import courseData from '../data/coursedata'
import {  NavLink } from 'react-router-dom';
import Aos from 'aos';
import MaterialsSection from './MaterialsSection';

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
               Course Materials
              </Typography>
              <Breadcrumbs
                separator="›"
                sx={{ display: 'flex', justifyContent: 'center' }} data-aos="fade-up"
              >
                <NavLink to="/">
                <Typography color="text.primary">Home</Typography>
                </NavLink>
                <Typography color="text.primary">Course Materials</Typography>
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


              <Grid item md={5} sx={{width:isMobile?"100%":"70%",mt:isMobile?2:-5}}>
       <MaterialsSection/>
        
    
        </Grid>
           </Grid>
  
    </Box>
  )
}

export default QuizPage
