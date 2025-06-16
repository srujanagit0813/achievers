import React, { useEffect, useState } from 'react';
import {
  Box, Grid, useTheme, useMediaQuery, Typography, Breadcrumbs, Card, CardContent,
  Chip, Link, Button
} from '@mui/material';
import {
  AccessTime as AccessTimeIcon,
  InsertDriveFile as InsertDriveFileIcon,
  Assignment as AssignmentIcon,
  Description as DescriptionIcon,
  TaskAlt as TaskAltIcon,
  Upload as UploadIcon
} from '@mui/icons-material';
import CourseLessonPanel from '../components/CourseLessonPanel';
import courseData from '../data/coursedata';
import { NavLink, useParams } from 'react-router-dom';
import Aos from 'aos';

const getStatusColor = (status) => {
  switch (status?.toLowerCase()) {
    case 'pending': return 'warning';
    case 'submitted': return 'success';
    case 'graded': return 'secondary';
    default: return 'default';
  }
};

const AssignmentPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { id } = useParams();

  const [selectedAssignments, setSelectedAssignments] = useState([]);

  const handlePreview = (url) => {
    console.log("Preview clicked:", url);
  };

  const handleLessonSelect = (lessonId) => {
    const lesson = courseData.find((l) => l.id === lessonId);
    if (lesson) {
      const assignments = lesson.contents.filter(c => c.type === 'assignment');
      setSelectedAssignments(assignments);
    }
  };

  const filteredCourseData = courseData;

  return (
    <Box sx={{ mt: 1, p: 0 }}>
      {/* Header */}
      <Box sx={{ py: 6, overflow: 'hidden', width: "100%" }}>
        <Typography variant="h3" fontWeight="bold" sx={{ mb: 1, textAlign: "center", mt: 3 }} data-aos="fade-up">
          Assignments
        </Typography>
        <Breadcrumbs separator="›" sx={{ display: 'flex', justifyContent: 'center' }} data-aos="fade-up">
          <NavLink to="/">
            <Typography color="text.primary">Home</Typography>
          </NavLink>
          <Typography color="text.primary">Assignment</Typography>
        </Breadcrumbs>
      </Box>

      {/* Content */}
      <Grid container spacing={2} ml={isMobile ? 0 : 10} mt={isMobile ? 0 : 0} data-aos="fade-up">
        {/* Left Panel - Lessons */}
        <Grid item md={6} sx={{ width: isMobile ? "100%" : "30%" }}>
          <CourseLessonPanel
            courseData={filteredCourseData}
            selectedVideo={null}
            onPreview={handlePreview}
            onLessonSelect={handleLessonSelect}
          />
        </Grid>

        {/* Right Panel - Assignments */}
      <Grid
  item
  md={5}
  sx={{
    width: isMobile ? "100%" : "50%",
    mt: isMobile ? 2 : 10,
    ml: isMobile ? 0 : 4,
  }}
>
  <Box
    sx={{
      p: 3,
      background: "#fff",
      borderRadius: 3,
      boxShadow: 3,
      border: '1px solid #e0e0e0',
    }}
  >
    <Box
      sx={{
        mb: 3,
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        background: 'linear-gradient(90deg, #1976d2, #42a5f5)',
        p: 1.5,
        borderRadius: 2,
      }}
    >
      <AssignmentIcon sx={{ color: 'white' }} />
      <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
        Lesson Assignments
      </Typography>
    </Box>

    {selectedAssignments.length > 0 ? (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {selectedAssignments.map((assignment, idx) => (
          <Card
            key={idx}
            sx={{
              p: 2,
              borderRadius: 3,
              backgroundColor: '#fdfdfd',
              border: '1px solid #e0e0e0',
              transition: '0.3s',
              '&:hover': {
                boxShadow: 6,
                backgroundColor: '#f5faff',
              },
            }}
          >
            
            <CardContent>
                
              <Box display="flex" alignItems="center" gap={1} mb={1}>
                <AssignmentIcon color="primary" />
                <Typography variant="subtitle1" fontWeight={600}>
                  {assignment.title || assignment.label}
                </Typography>
                
              </Box>

             

              <Box display="flex" alignItems="center" gap={1} mb={1}>
              

                <DescriptionIcon fontSize="small" color="action" />
                <Typography variant="body2" >
                  {assignment.instructions || 'No instructions provided.'}
                </Typography>
              </Box>

              {assignment.dueDate && (
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                  <AccessTimeIcon fontSize="small" color="action" />
                  <Typography variant="body2">
                    Due: {new Date(assignment.dueDate).toLocaleString()}
                  </Typography>
                </Box>
              )}

              {assignment.fileLink && (
                <Box display="flex" alignItems="center" gap={1} mb={2}>
                  <InsertDriveFileIcon fontSize="small" color="action" />
                  <Link
                    href={assignment.fileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{
                      color: '#1976d2',
                      fontWeight: 500,
                      '&:hover': {
                        color: '#0d47a1',
                      },
                    }}
                  >
                    Download File
                  </Link>
                </Box>
              )}

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={2}
              >
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<UploadIcon />}
                  sx={{
                    textTransform: 'none',
                    backgroundColor: '#4caf50',
                    '&:hover': {
                      backgroundColor: '#388e3c',
                    },
                  }}
                  onClick={() => console.log("Submit clicked")}
                >
                  Submit
                </Button>

                <Chip
                  label={assignment.submissionStatus || 'Not Submitted'}
                  color={
                    assignment.submissionStatus === 'Submitted' ||
                    assignment.submissionStatus === 'Graded'
                      ? 'success'
                      : 'default'
                  }
                  icon={<TaskAltIcon />}
                  size="small"
                />
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    ) : (
      <Typography variant="body2" color="text.secondary">
        Select a lesson from the left to view its assignments.
      </Typography>
    )}
  </Box>
</Grid>

      </Grid>
    </Box>
  );
};

export default AssignmentPage;
