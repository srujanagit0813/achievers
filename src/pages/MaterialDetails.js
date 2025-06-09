import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  Divider,
  Chip,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Materials } from "../components/MaterialCoursesSection";

const MaterialDetails = () => {
  const { id } = useParams();
  const material = Materials.find((item) => item.id === parseInt(id));
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (!material) return <Typography>Material not found</Typography>;

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

  const discount =
    material.oldPrice && material.price
      ? Math.round(((material.oldPrice - material.price) / material.oldPrice) * 100)
      : 0;

  return (
    <Box sx={{ backgroundColor: "#f5f7fa", py: 6, mt: 10 }}>
      <Box sx={{ px: 2, maxWidth: "1200px", mx: "auto" }}>
        <Grid container spacing={4}>
          {/* Left Content */}
          <Grid item xs={12} md={7} >
            <Box>
              <img
                src={material.image}
                alt={material.title}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  border:"2px solid #e0e0e0"
                  
                }}
              />

              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Typography fontSize={14}>Duration: {material.duration}</Typography>
              </Box>

              <Typography variant="h4" sx={{ mt: 2 }}>
                {material.title}
              </Typography>

              <Typography variant="body1" sx={{ mt: 1 }}>
                ⭐ {material.rating} | By {material.instructor}
              </Typography>

              <Typography sx={{ mt: 2, textAlign: "justify" }}>
                {material.description}
              </Typography>

              <Divider sx={{ my: 3 }} />

              {material.content?.map((section, index) => (
                <Box key={index} sx={{ mb: 5 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 1,
                      color: "primary.main",
                      fontWeight: "bold",
                      borderLeft: "4px solid",
                      borderColor: "primary.main",
                      textAlign: "start",
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
            </Box>
          </Grid>

          {/* Right Side Panel */}
          <Grid item xs={12} md={5}>
            <Paper elevation={4} sx={{ borderRadius: 3, overflow: "hidden" }}>
              <img
                src={material.image}
                alt={material.title}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "12px 12px 0 0",
                }}
              />

              <Box sx={{ p: 3 }}>
                <Typography variant="h5" color="primary">
                  ₹{material.price}
                  {material.oldPrice && (
                    <Typography
                      component="span"
                      sx={{ ml: 1, textDecoration: "line-through", color: "gray" }}
                    >
                      ₹{material.oldPrice}
                    </Typography>
                  )}
                  {discount > 0 && (
                    <Chip
                      label={`${discount}% OFF`}
                      color="error"
                      size="small"
                      sx={{ ml: 2, fontWeight: "bold" }}
                    />
                  )}
                </Typography>

                <Box sx={{ mt: 3 }}>
                  <Button fullWidth variant="contained" color="primary" size="large">
                    Add To Cart
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    size="large"
                    sx={{ mt: 1 }}
                  >
                    Buy Now
                  </Button>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <InfoLine label="Instructor" value={material.instructor} />
                  <InfoLine label="Category" value={material.category || "General"} />
                  <InfoLine label="Level" value={material.level || "All"} />
                  <InfoLine label="Language" value={material.language || "English"} />
                  <InfoLine label="Certificate" value="Yes" />
                </Box>

                <Button
                  fullWidth
                  variant="outlined"
                  color="info"
                  sx={{ mt: 3 }}
                  startIcon={"📧"}
                >
                  Contact Support
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MaterialDetails;
