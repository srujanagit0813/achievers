import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextareaAutosize,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CreateCourse = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box
        sx={{
          textAlign: "center",
          py: 5,
          background: "#f5f5fc",
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Create Course
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Home &nbsp; &gt; &nbsp; Create Course
        </Typography>
      </Box>

      {/* Form & Info */}
      <Grid container spacing={4} sx={{ mt: 3 }}>
        {/* Left Form */}
        <Grid item xs={12} md={8}>
          <Box sx={{ bgcolor: "#f8f8fc", p: 3, borderRadius: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold" mb={2}>
              Course Info
            </Typography>

            <TextField label="Course Title" fullWidth margin="normal" />
            <TextField label="Course Slug" fullWidth margin="normal" />
            <TextField
              label="Free Regular Price ($)"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Discounted Price ($)"
              fullWidth
              margin="normal"
            />
            <Typography variant="caption" display="block" mb={2}>
              ℹ️ The Course Price Includes Your Author Fee.
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Courses</InputLabel>
                  <Select defaultValue="All" label="Courses">
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Tech">Tech</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Short by Offer</InputLabel>
                  <Select defaultValue="premium" label="Short by Offer">
                    <MenuItem value="free">Free</MenuItem>
                    <MenuItem value="premium">Premium</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Box mt={3}>
              <TextField
                label="About Course"
                fullWidth
                multiline
                rows={5}
                variant="outlined"
              />
            </Box>

            <Box mt={3}>
              <Button variant="contained" color="primary">
                Update Info
              </Button>
            </Box>
          </Box>

          {/* Expandable Sections */}
          <Box mt={3}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                Course Intro Video
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Upload or embed your intro video.</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                Course Builder
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Add lessons, topics, and quizzes for your course.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                Additional Information
              </AccordionSummary>
              <AccordionDetails>
                <FormControl fullWidth>
                  <InputLabel>Certificate Template</InputLabel>
                  <Select>
                    <MenuItem value="default">Default Template</MenuItem>
                  </Select>
                </FormControl>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>

        {/* Right Instructions Panel */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: 2,
              p: 3,
              backgroundColor: "#fafafa",
            }}
          >
            <Typography variant="body2" mb={1}>
              ✅ Set the Course Price option make it free.
            </Typography>
            <Typography variant="body2" mb={1}>
              ✅ Standard size for the course thumbnail.
            </Typography>
            <Typography variant="body2" mb={1}>
              ✅ Video section controls the course overview video.
            </Typography>
            <Typography variant="body2" mb={1}>
              ✅ Course Builder is where you create course.
            </Typography>
            <Typography variant="body2" mb={1}>
              ✅ Add Topics in the Course Builder section to create lessons.
            </Typography>
            <Typography variant="body2" mb={1}>
              ✅ Prerequisites refers to the fundamental courses.
            </Typography>
            <Typography variant="body2" mb={1}>
              ✅ Information from the Additional Data section.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Buttons */}
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        justifyContent="center"
        gap={2}
        mt={4}
      >
        <Button variant="contained" color="secondary" sx={{ px: 6 }}>
          Preview
        </Button>
        <Button variant="contained" color="primary" sx={{ px: 6 }}>
          Create Course
        </Button>
      </Box>
    </Box>
  );
};

export default CreateCourse;
