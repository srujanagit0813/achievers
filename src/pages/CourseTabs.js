import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Divider,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  TextField,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const courseSections = [
  {
    title: "Intro Course content",
    duration: "02hr 35min",
    content: [
      { type: "video", title: "Video :Lorem ipsum dolor sit amet.", duration: "22 minutes", preview: true },
      { type: "video", title: "Video :Lorem ipsum dolor sit amet.", duration: "22 minutes", preview: true },
      { type: "video", title: "Video :Lorem ipsum dolor sit amet.", locked: true },
      { type: "video", title: "Video :Lorem ipsum dolor sit amet.", locked: true },
      { type: "exam", title: "Lesson 03 Exam", questions: 20 },
    ],
  },
  {
    title: "Course Fundamentals",
    duration: "1hr 35min",
    content: [],
  },
  {
    title: "Course Core Concept",
    duration: "3hr 10min",
    content: [],
  },
  {
    title: "Course Key Features",
    duration: "2hr 10min",
    content: [],
  },
  {
    title: "Course Conclusion",
    duration: "2hr 10min",
    content: [],
  },
];

const CourseTabs = () => {
  const [tab, setTab] = useState(0);

  return (
    <Grid container spacing={4} sx={{ mt: 4 }}>
      <Grid item xs={12} md={8}>
        {/* Tabs */}
        <Tabs
          value={tab}
          onChange={(e, newValue) => setTab(newValue)}
          indicatorColor="primary"
          textColor="primary"
          sx={{ mb: 2 }}
        >
          <Tab label="Curriculum" />
          <Tab label="Description" />
          <Tab label="Reviews" />
          <Tab label="Instructor" />
        </Tabs>

        {/* Tab Panels */}
        {tab === 0 && (
          <Box>
            {courseSections.map((section, index) => (
              <Accordion key={index} defaultExpanded={index === 0}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight="bold">
                    {section.title}{" "}
                    <Chip
                      label={section.duration}
                      size="small"
                      sx={{ ml: 2 }}
                      color="default"
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List disablePadding>
                    {section.content.map((item, idx) => (
                      <ListItem key={idx} sx={{ pl: 2 }}>
                        <ListItemIcon>
                          {item.type === "video" ? <PlayCircleIcon /> : <></>}
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                        {item.duration && (
                          <Typography variant="body2" sx={{ mr: 2 }}>
                            ⏱ {item.duration}
                          </Typography>
                        )}
                        {item.preview && (
                          <Button
                            variant="contained"
                            size="small"
                            startIcon={<VisibilityIcon />}
                          >
                            Preview
                          </Button>
                        )}
                        {item.locked && <LockIcon sx={{ color: "#999" }} />}
                        {item.questions && (
                          <Typography variant="body2" color="text.secondary">
                            🔐 {item.questions} Ques
                          </Typography>
                        )}
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        )}

        {tab === 1 && (
          <Typography sx={{ mt: 2 }}>
            This course provides foundational and advanced concepts...
          </Typography>
        )}
        {tab === 2 && <Typography sx={{ mt: 2 }}>⭐ 4.7 based on 154 reviews.</Typography>}
        {tab === 3 && <Typography sx={{ mt: 2 }}>Instructor: John Doe, 10+ years experience.</Typography>}
      </Grid>

      {/* Sidebar */}
      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            📌 Popular Courses
          </Typography>
          {["Making Music with Other People", "Design Basics", "Photography 101"].map(
            (title, idx) => (
              <Box key={idx} sx={{ mb: 2 }}>
                <Typography color="primary" fontWeight="bold">
                  $32,000
                </Typography>
                <Typography>{title}</Typography>
                <Divider sx={{ my: 1 }} />
              </Box>
            )
          )}
        </Paper>

        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            📩 Get in Touch
          </Typography>
          <TextField label="Enter Name" fullWidth size="small" sx={{ mb: 2 }} />
          <TextField label="Enter your mail" fullWidth size="small" sx={{ mb: 2 }} />
          <TextField label="Message" fullWidth multiline rows={3} size="small" sx={{ mb: 2 }} />
          <Button fullWidth variant="contained" color="primary">
            SEND MESSAGE
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CourseTabs;
