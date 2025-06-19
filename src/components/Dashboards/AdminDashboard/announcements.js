import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  IconButton,
  Stack,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const announcements = [
  {
    date: "March 16, 2024",
    time: "10.00am",
    title: "Announcement Title",
    course: "Fundamentals 101",
  },
  {
    date: "March 16, 2024",
    time: "10.00am",
    title: "Announcement Title",
    course: "Fundamentals 101",
  },
  {
    date: "March 16, 2024",
    time: "10.00am",
    title: "Announcement Title",
    course: "Fundamentals 101",
  },
  {
    date: "March 16, 2024",
    time: "10.00am",
    title: "Announcement Title",
    course: "Fundamentals 101",
  },
];

function AnnouncementsPage() {
  return (
    <Box sx={{ p: 4, bgcolor: "#f5f7fa", minHeight: "100vh" }}>
      {/* Page Title and Add Button */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
        flexWrap="wrap"
        gap={2}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Announcements
          </Typography>
          <Typography color="text.secondary">
            Notify your all students.
          </Typography>
        </Box>
        <Button variant="contained" color="primary" startIcon={<AddIcon />}>
          Create Announcement
        </Button>
      </Box>

      {/* Filters */}
      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel>Courses</InputLabel>
            <Select defaultValue="all" label="Courses">
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="math">Math</MenuItem>
              <MenuItem value="cs">Computer Science</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel>Sort By</InputLabel>
            <Select defaultValue="default" label="Sort By">
              <MenuItem value="default">Default</MenuItem>
              <MenuItem value="free">Free</MenuItem>
              <MenuItem value="recent">Recent</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Announcements List */}
      <Grid container spacing={3}>
        {announcements.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 3,
                backgroundColor: "#fff",
                transition: "0.3s",
                "&:hover": {
                  boxShadow: 6,
                },
              }}
            >
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {item.date} · {item.time}
              </Typography>

              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {item.title}
              </Typography>

              <Typography variant="body2" mb={2}>
                Course: {item.course}
              </Typography>

              <Stack direction="row" spacing={1}>
                <IconButton color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton color="error">
                  <DeleteIcon />
                </IconButton>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default AnnouncementsPage;