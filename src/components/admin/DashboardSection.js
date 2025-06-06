import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Paper,
  Divider,
  Stack,
  Icon,
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import RateReviewIcon from '@mui/icons-material/RateReview';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const instructors = [
  {
    name: 'Sanki Jho',
    reviews: '25,895',
    students: 692,
    courses: '15+',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Nidmjae Mollin',
    reviews: '21,895',
    students: 95,
    courses: '10+',
    image: 'https://randomuser.me/api/portraits/men/33.jpg',
  },
  {
    name: 'Nidmjae Mollin',
    reviews: '17,895',
    students: 325,
    courses: '20+',
    image: 'https://randomuser.me/api/portraits/men/34.jpg',
  },
];

const courses = [
  {
    title: 'Foundation course to understand about software',
    instructor: 'Micle Jhon',
    lessons: 23,
    time: '1 hr 30 min',
    image: 'https://source.unsplash.com/100x60/?students',
  },
  {
    title: 'Nidnies course to under stand about softwere',
    instructor: 'Rinis Jhon',
    lessons: 29,
    time: '2 hr 10 min',
    image: 'https://source.unsplash.com/100x60/?laptop,student',
  },
  {
    title: 'Minws course to under stand about solution',
    instructor: 'Jane Austen',
    lessons: 25,
    time: '1 hr 40 min',
    image: 'https://source.unsplash.com/100x60/?science,kids',
  },
];

const InstructorCard = ({ name, reviews, students, courses, image }) => (
  <Box display="flex" alignItems="center" py={2}>
    <Avatar src={image} sx={{ width: 64, height: 64, mr: 15 }} />
    <Box>
      <Typography fontWeight="bold">{name}</Typography>
      <Stack direction="row" spacing={2} mt={0.5} alignItems="center">
        <Typography variant="body2">
          <RateReviewIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
          {reviews} Reviews
        </Typography>
        <Typography variant="body2">
          <PeopleIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
          {students} Students
        </Typography>
        <Typography variant="body2">
          <MenuBookIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
          {courses} Courses
        </Typography>
      </Stack>
    </Box>
  </Box>
);

const CourseCard = ({ title, instructor, lessons, time, image }) => (
  <Box display="flex" alignItems="center" py={2}>
    <img src={image} alt={title} style={{ width: 100, height: 60, borderRadius: 8, marginRight: 16 }} />
    <Box>
      <Typography fontWeight="500" fontSize="0.95rem">{title}</Typography>
      <Stack direction="row" spacing={2} mt={0.5}>
        <Typography variant="body2">{instructor}</Typography>
        <Typography variant="body2">
          <MenuBookIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
          {lessons} Lessons
        </Typography>
        <Typography variant="body2">
          <AccessTimeIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
          {time}
        </Typography>
      </Stack>
    </Box>
  </Box>
);

const DashboardSection = () => {
  return (
    <Box p={2}>
      <Grid container spacing={3}>
        {/* Popular Instructor Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6" fontWeight="bold">Popular Instructor</Typography>
              <Typography color="primary" fontSize="0.9rem">See More...</Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            {instructors.map((inst, index) => (
              <React.Fragment key={index}>
                <InstructorCard {...inst} />
                {index < instructors.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </Paper>
        </Grid>

        {/* Recent Course Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6" fontWeight="bold">Recent Course</Typography>
              <Typography color="primary" fontSize="0.9rem">See More...</Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            {courses.map((course, index) => (
              <React.Fragment key={index}>
                <CourseCard {...course} />
                {index < courses.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardSection;
