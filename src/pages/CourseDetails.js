import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  Button,
  Paper,
  Divider,
  Chip,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ReactPlayer from "react-player";
import { courses } from "../components/PerfectCourseSection";

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses[parseInt(id)];
  const [tab, setTab] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (!course) return <Typography>Course not found</Typography>;

  const InfoLine = ({ label, value }) => (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography variant="body2" color="textSecondary">
        {label}
      </Typography>
      <Typography variant="body2" fontWeight="bold">
        {value}
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ backgroundColor: "#f5f7fa", py: 6, px: { xs: 2, md: 6 }, mt: 10 }}>
      <Grid container spacing={4}>
        {/* Left Section */}
        <Grid item xs={12} md={8} ml={20}>
          <Box>
            <img
              src={course.image}
              alt={course.title}
              style={{
                width: "100%",
                height: isMobile ? "200px" : "250px",
                objectFit: "cover",
                borderRadius: "12px",
                border:"2px solid #e0e0e0"
              }}
            />

            <Typography sx={{ fontSize: 14, mt: 1 }}>
              Last Update: {course.lastUpdated}
            </Typography>

            <Typography variant="h5" sx={{ mt: 2 }}>
              {course.title}
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", mt: 1, gap: 2 }}>
              <Typography variant="h6" color="primary">
                ${course.price}
              </Typography>
              <Typography
                sx={{ textDecoration: "line-through", color: "#999" }}
              >
                ${course.oldPrice}
              </Typography>
              <Typography>
                {course.lessons} Lessons ⭐ {course.rating} (44)
              </Typography>
            </Box>

            <Typography sx={{ textAlign: "justify", mt: 2 }}>
              {course.description}
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Tabs
                value={tab}
                onChange={(e, newValue) => setTab(newValue)}
                variant="scrollable"
                scrollButtons="auto"
                indicatorColor="primary"
                textColor="primary"
                sx={{ mb: 2 }}
              >
                <Tab label="Curriculum" />
                <Tab label="Description" />
                <Tab label="Reviews" />
                <Tab label="Instructor" />
              </Tabs>

              {/* Tabs Content */}
              {tab === 0 && (
                <Box>
                  {course.curriculum?.map((section, index) => (
                    <Accordion
                      key={index}
                      defaultExpanded={index === 0}
                      sx={{
                        mb: 2,
                        borderRadius: 2,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                        "&:before": { display: "none" },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{ bgcolor: "#f9f9f9", borderRadius: "8px" }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <Typography fontWeight={600}>{section.section}</Typography>
                          <Chip
                            label={section.duration}
                            size="small"
                            color="default"
                            variant="outlined"
                          />
                        </Box>
                      </AccordionSummary>

                      <AccordionDetails>
                        <List disablePadding>
                          {section.items?.map((item, idx) => (
                            <ListItem
                              key={idx}
                              sx={{
                                pl: 2,
                                py: 1.5,
                                borderBottom: "1px solid #f0f0f0",
                                display: "flex",
                                alignItems: "center",
                                flexWrap: "wrap",
                              }}
                            >
                              <ListItemIcon sx={{ minWidth: "32px" }}>
                                {item.type === "video" && <PlayCircleIcon color="primary" />}
                              </ListItemIcon>

                              <ListItemText
                                primary={
                                  <Typography fontSize={14} fontWeight={500}>
                                    {item.title}
                                  </Typography>
                                }
                              />

                              {item.duration && (
                                <Typography
                                  variant="caption"
                                  sx={{ mr: 2, color: "gray" }}
                                >
                                  ⏱ {item.duration}
                                </Typography>
                              )}

                              {item.preview && (
                                <Button
                                  size="small"
                                  variant="outlined"
                                  color="success"
                                  sx={{ mr: 1 }}
                                  startIcon={<VisibilityIcon />}
                                >
                                  Preview
                                </Button>
                              )}

                              {item.locked && <LockIcon sx={{ color: "#999", ml: 1 }} />}
                              {item.questions && (
                                <Typography
                                  variant="caption"
                                  sx={{ ml: 2, color: "gray" }}
                                >
                                  📝 {item.questions} Ques
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
                <Typography sx={{ textAlign: "justify", mt: 2 }}>
                  {course.description}
                </Typography>
              )}

              {tab === 2 && (
                <Box sx={{ mt: 2 }}>
                  {course.reviews?.map((review, idx) => (
                    <Box key={idx} sx={{ mb: 2 }}>
                      <Typography variant="subtitle2">{review.user}</Typography>
                      <Typography variant="body2" sx={{ color: "gray" }}>
                        {review.comment}
                      </Typography>
                      <Divider sx={{ my: 1 }} />
                    </Box>
                  ))}
                </Box>
              )}

              {tab === 3 && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h6">{course.instructor?.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.instructor?.bio}
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>


        </Grid>

        {/* Right Panel */}
        <Grid item xs={12} md={4}>
          <Paper elevation={4} sx={{ borderRadius: 3, overflow: "hidden" }}>
            <Box sx={{ position: "relative", paddingTop: "56.25%" }}>
              <ReactPlayer
                url={course.video}
                controls
                width="100%"
                height="100%"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  
                   
                }}
              />
            </Box>

            <Box sx={{ p: 3 }}>
              <Typography variant="h5" color="primary">
                ${course.price}
                <Typography
                  component="span"
                  sx={{ ml: 1, textDecoration: "line-through", color: "gray" }}
                >
                  ${course.oldPrice}
                </Typography>
                <Chip
                  label="68% OFF"
                  color="error"
                  size="small"
                  sx={{ ml: 2, fontWeight: "bold" }}
                />
              </Typography>

              <Box sx={{ mt: 3 }}>
                <Button fullWidth variant="contained" color="primary">
                  Add To Cart
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  sx={{ mt: 1 }}
                >
                  Buy Now
                </Button>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <InfoLine label="Instructor" value="D. William" />
                <InfoLine label="Start Date" value="05 Dec 2024" />
                <InfoLine label="Total Duration" value="08 Hrs 32 Min" />
                <InfoLine label="Enrolled" value="100" />
                <InfoLine label="Lectures" value="30" />
                <InfoLine label="Skill Level" value="Basic" />
                <InfoLine label="Language" value="Spanish" />
                <InfoLine label="Quiz" value="Yes" />
                <InfoLine label="Certificate" value="Yes" />
              </Box>

              <Button
                fullWidth
                variant="outlined"
                color="info"
                sx={{ mt: 3 }}
                startIcon={"📞"}
              >
                +47 333 78 901
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CourseDetails;
