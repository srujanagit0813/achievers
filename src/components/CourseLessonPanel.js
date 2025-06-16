// CourseLessonPanel.js
import React from 'react';
import {
  Accordion, AccordionSummary, AccordionDetails,
  Typography, List, ListItem, ListItemIcon,
  ListItemText, Button, Paper
} from '@mui/material';
import { ExpandMore, Visibility, OndemandVideo, Description, Quiz, Assignment } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';

const iconMap = {
  video: <OndemandVideo color="primary" />,
  material: <Description color="info" />,
  quiz: <Quiz color="secondary" />,
  assignment: <Assignment color="warning" />,
};


const CourseLessonPanel = ({ courseData, selectedVideo, onPreview }) => {
     const navigate = useNavigate();
  const { id } = useParams();
    const handleNavigate = (type) => {
    if (type === 'material') navigate(`/course/${id}/material`);
    else if (type === 'quiz') navigate(`/course/${id}/quiz`);
    else if (type === 'assignment') navigate(`/course/${id}/assignment`);
  };
  return (
    <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        📚 Course Lessons
      </Typography>
      
      {courseData.map((lesson, index) => (
        <Accordion key={lesson.id} defaultExpanded={index === 0} sx={{ border: '1px solid gray', mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography fontWeight={600}>{lesson.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {lesson.contents.map((content, idx) => (
                <ListItem
                  key={idx}
                  sx={{
                    backgroundColor: content.url === selectedVideo ? '#e3f2fd' : 'transparent',
                    borderRadius: 1,
                    mb: 1,
                  }}
                  onClick={() => {
                   if (content.type === 'video') {
      onPreview(content.url); // play video
    } else {
      handleNavigate(content.type); // navigate for material, quiz, etc.
    }
                  }}
                >
                  <ListItemIcon>{iconMap[content.type]}</ListItemIcon>
                  
                  <ListItemText
                    primary={content.label}
                    secondary={content.duration ? `${content.duration} mins` : ''}
                  />
               
                </ListItem>
              ))}
              {lesson.contents.length === 0 && (
                <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
                  No content available.
                </Typography>
              )}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Paper>
  );
};

export default CourseLessonPanel;
