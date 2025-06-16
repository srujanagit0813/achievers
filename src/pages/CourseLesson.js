import React, { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {
  Box, Typography, Accordion, AccordionSummary, AccordionDetails,
  Button, List, ListItem, ListItemIcon, ListItemText, Paper,
  useTheme, useMediaQuery, Divider,
  Grid,
} from '@mui/material';
import {
  ExpandMore, Visibility, OndemandVideo,
  Description, Quiz, Assignment
} from '@mui/icons-material';
import ReactPlayer from 'react-player';
import { courses } from '../components/PerfectCourseSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CourseLessonPanel from '../components/CourseLessonPanel';
import coursedata from '../data/coursedata';
// const iconMap = {
//   video: <OndemandVideo color="primary" />,
//   material: <Description color="info" />,
//   quiz: <Quiz color="secondary" />,
//   assignment: <Assignment color="warning" />,
// };

// const courseData = [
//   {
//     id: 1,
//     title: 'Lesson #01',
//     contents: [
//       {
//         type: 'video',
//         label: 'Course Intro',
//         duration: '3:27',
//         url: 'https://youtu.be/05rY_WXB4QI?list=PLzdWZT-ZJD0-6DSpuCxshZr82fLGPWrgO',
//       },
//       {
//         type: 'video',
//         label: 'Course Outline',
//         duration: '5:00',
//         url: 'https://youtu.be/DboHMBXz_rE?list=PLzdWZT-ZJD0-6DSpuCxshZr82fLGPWrgO',
//       },
//       {
//         type: 'material',
//         label: 'Course Materials',
//       },
//       {
//         type: 'quiz',
//         label: 'Summer Quiz',
//       },
//       {
//         type: 'assignment',
//         label: 'Assignment',
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: 'Lesson #02',
//     contents: [
//          {
//         type: 'video',
//         label: 'Course Intro',
//         duration: '3:27',
//         url: 'https://youtu.be/DboHMBXz_rE?list=PLzdWZT-ZJD0-6DSpuCxshZr82fLGPWrgO',
//       },
//       {
//         type: 'video',
//         label: 'Course Outline',
//         duration: '5:00',
//         url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
//       },
//       {
//         type: 'material',
//         label: 'Course Materials',
//       },
//       {
//         type: 'quiz',
//         label: 'Summer Quiz',
//       },
//       {
//         type: 'assignment',
//         label: 'Assignment',
//       },
//     ],
//   },
// ];

const CourseLesson = () => {
     useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const { id } = useParams();
  const course = courses[parseInt(id)];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const [selectedVideo, setSelectedVideo] = useState(course?.video || '');

  const handlePreview = (url) => {
    setSelectedVideo(url);
  };

  if (!course) return <Typography sx={{ mt: 10 }}>Course not found</Typography>;



  return (
    <Box sx={{ mt: 15, p: { xs: 2, md: 4 }, background: '#f9f9f9', minHeight: '100vh' }}  data-aos="fade-up">
      <Typography variant="h4" fontWeight={600} sx={{ mb: 4, textAlign: 'center' }}>
        🎬 {course.title} - Lessons
      </Typography>

      <Grid container spacing={10} ml={isMobile ? 0 : 15} data-aos="fade-up">
        <Grid item md={6} sx={{width:isMobile?"100%":"25%"}}>
        {/* Lessons List Panel */}
        <CourseLessonPanel
         courseData={coursedata}
    selectedVideo={selectedVideo}
    onPreview={handlePreview}
        />
       
             </Grid>

        {/* Video Preview Panel */}
        <Grid item md={5} sx={{width:isMobile?"100%":"60%",mt:isMobile?2:1}}>
        <Paper
          elevation={4}
          sx={{
            flex: 1,
            borderRadius: 3,
            overflow: 'hidden',
            minHeight: 400,
            background: '#000',
            position: 'relative',
            
          }}
        >
          <Box sx={{ p: 2, background: '#673ab7' }}>
            <Typography variant="h6" color="white">
              🎥 Video Preview
            </Typography>
          </Box>
          <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url={selectedVideo}
              controls
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          </Box>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Typography variant="body2" color="white">
              Now Playing: {selectedVideo ? selectedVideo.split('v=')[1] : 'N/A'}
            </Typography>
          </Box>
        </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CourseLesson;
