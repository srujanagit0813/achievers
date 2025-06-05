import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  Chip,
  Rating,
  Divider,
  Container
} from "@mui/material";
import { Materials } from "./MaterialCoursesSection";

const MaterialDetails = () => {
  const { id } = useParams();
  const material = Materials.find((item) => item.id === parseInt(id));

  if (!material) return <Typography>Material not found</Typography>;

  return (
    <Box sx={{ bgcolor: "#f5f7fa", minHeight: "100vh", pb: 8,mt:10 }}>
      {/* Hero Section */}
      <Box
  sx={{
    height: 550,
    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${material.image})`,
    backgroundSize: "contain",            
    backgroundRepeat: "no-repeat",         
    backgroundPosition: "center",          
    backgroundColor: "#000",              
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    px: 3,
    textAlign: "center",
  }}
>

        <Box>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            {material.title}
          </Typography>
          <Typography variant="subtitle1">
            By {material.instructor} • {material.duration}
          </Typography>
          <Box sx={{ mt: 1, display: "flex", justifyContent: "center", gap: 1 }}>
           
            <Rating value={material.rating} precision={0.1} readOnly />
          </Box>
        </Box>
      </Box>

      {/* Content Section */}
      <Container maxWidth="md">
        <Paper
          elevation={4}
          sx={{ mt: -6, p: 4, borderRadius: 3, backgroundColor: "#ffffff" }}
        >
          {/* Description */}
          <Typography variant="h6" gutterBottom>
            Course Overview
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, textAlign: "justify" }}>
            {material.description}
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Lesson Content */}
          {material.content?.map((section, index) => (
            <Box key={index} sx={{ mb: 5 }}>
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  color: "#1976d2",
                  fontWeight: "bold",
                  borderLeft: "4px solid #1976d2",
                  textAlign:"start",
                  pl: 2,
                }}
              >
                {index + 1}. {section.heading}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "justify", lineHeight: 1.8 }}>
                {section.paragraph}
              </Typography>
            </Box>
          ))}
        </Paper>
      </Container>
    </Box>
  );
};

export default MaterialDetails;
