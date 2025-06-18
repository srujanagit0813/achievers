import React, { useEffect, useState } from 'react';
import {
  Box, Grid, Typography, Breadcrumbs, useMediaQuery, useTheme
} from '@mui/material';
import { NavLink, useParams } from 'react-router-dom';
import CourseLessonPanel from '../components/CourseLessonPanel';
import courseData from '../data/coursedata';
import Aos from 'aos';
import { Card, CardContent } from '@mui/material';

import { Description as DescriptionIcon, Download as DownloadIcon } from '@mui/icons-material';
const MaterialPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { id } = useParams();

  const [selectedMaterials, setSelectedMaterials] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const handlePreview = (url) => {
    console.log('Preview clicked:', url);
  };

  const handleLessonSelect = (lessonId) => {
    const lesson = courseData.find((l) => l.id === lessonId);
    if (lesson) {
      const materials = lesson.contents.filter(c => c.type === 'material');
      setSelectedMaterials(materials);
    }
  };

  return (
    <Box sx={{ mt: 10, p: 0 }}>
      {/* Top Banner */}
        <Box sx={{ overflow: 'hidden', width: '100%' }}>
              <Typography variant="h3" fontWeight="bold" sx={{ mb: 1, textAlign: 'center', mt: 3 }} data-aos="fade-up">
                Lesson Materials
              </Typography>
              <Breadcrumbs separator="›" sx={{ display: 'flex', justifyContent: 'center' }} data-aos="fade-up">
                <NavLink to="/"><Typography color="text.primary">Home</Typography></NavLink>
                <Typography color="text.primary">Lesson Materials</Typography>
              </Breadcrumbs>
            </Box>

      {/* Content */}
      <Grid container spacing={2} ml={isMobile ? 0 : 10} mt={isMobile ? 0 : 0} data-aos="fade-up">
        {/* Left Panel */}
        <Grid item md={6} sx={{ width: isMobile ? "100%" : "25%" }}>
          <CourseLessonPanel
            courseData={courseData}
            selectedVideo={null}
            onPreview={handlePreview}
            onLessonSelect={handleLessonSelect}
          />
        </Grid>

        {/* Right Panel */}
       <Grid item md={5}  sx={{ width: isMobile ? "100%" : "50%", mt: isMobile ? 2 : 10 ,ml:isMobile? 0:20}}>
  <Box sx={{ px: 4, py: 6, backgroundColor: 'white', borderRadius: 3, boxShadow: 2 }}>
    <Typography variant="h5" fontWeight="bold" mb={4} textAlign="center">
      📄 Course Materials
    </Typography>

     <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 4,
        justifyContent: "center",
        ml: isMobile ? 0 : 5,
        mt: 3,
      }}
    >
      {selectedMaterials.length > 0 ? (
        selectedMaterials.map((material, index) => (
          <Card
            key={index}
            sx={{
              width: isMobile ? "90%" : "280px",
              minWidth: "260px",
              p: 2,
              borderRadius: 4,
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
              background: "#fefefe",
              borderLeft: `5px solid ${theme.palette.primary.main}`,
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 12px 28px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <CardContent sx={{ px: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <DescriptionIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="subtitle1" fontWeight={700}>
                  {material.title}
                </Typography>
              </Box>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 2, fontSize: "0.9rem" }}
              >
                {material.description || "No description available."}
              </Typography>

              <Box
                component="a"
                href={material.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  color: "primary.main",
                  fontWeight: 500,
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <DownloadIcon fontSize="small" sx={{ mr: 0.5 }} />
                Download Material
              </Box>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="body2" color="text.secondary">
          Select a lesson to view its materials.
        </Typography>
      )}
    </Box>
  </Box>
</Grid>

      </Grid>
    </Box>
  );
};

export default MaterialPage;
