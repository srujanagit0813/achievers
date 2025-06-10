import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Link,
  Divider,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
} from '@mui/icons-material';

const recentPosts = [
  {
    img: 'https://via.placeholder.com/50',
    date: '02 Apr 2024',
    title: 'Best Your Business',
  },
  {
    img: 'https://via.placeholder.com/50',
    date: '02 Apr 2024',
    title: 'Keep Your Business',
  },
  {
    img: 'https://via.placeholder.com/50',
    date: '02 Apr 2024',
    title: 'Nice Your Business',
  },
];

const EdurockFooter = () => {
  return (
    <Box sx={{ backgroundColor: '#0f0e29', color: 'white', mt: 5, pt: 6 }}>
      {/* Newsletter Subscription */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          alignItems: 'center',
          px: 4,
          pb: 4,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Edu<span style={{ color: '#a259ff' }}>rock</span>
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mt: { xs: 2, md: 0 } }}>
          <TextField
            variant="outlined"
            placeholder="Enter your email here"
            size="small"
            sx={{
              backgroundColor: 'white',
              borderRadius: 1,
              input: { padding: '10px' },
              width: { xs: '200px', sm: '250px', md: '300px' },
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#a259ff',
              color: 'white',
              textTransform: 'none',
              px: 3,
              '&:hover': { backgroundColor: '#922fff' },
            }}
          >
            Subscribe Now
          </Button>
        </Box>
      </Box>

      <Divider sx={{ borderColor: '#282850', mx: 4 }} />

      {/* Footer Content */}
      <Box sx={{ px: 4, py: 4 }}>
        <Grid container spacing={4}>
          {/* About Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              About us
            </Typography>
            <Typography variant="body2" color="gray">
              Corporate clients and leisure travelers have been relying on
              Groundlink for dependable, safe, and professional chauffeured car
              end service in major cities across World.
            </Typography>
            <Box mt={2} display="flex" gap={1}>
              {[Facebook, Twitter, GitHub, LinkedIn].map((Icon, i) => (
                <IconButton
                  key={i}
                  sx={{
                    backgroundColor: '#1e1e3f',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#2e2e50' },
                  }}
                  size="small"
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Useful Links */}
          <Grid item xs={6} sm={6} md={2}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Usefull Links
            </Typography>
            {['About Us', 'Teachers', 'Partner', 'Room-Details', 'Gallery'].map((link, i) => (
              <Typography key={i} variant="body2" color="gray">
                <Link href="#" color="inherit" underline="hover">
                  {link}
                </Link>
              </Typography>
            ))}
          </Grid>

          {/* Course */}
          <Grid item xs={6} sm={6} md={3}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Course
            </Typography>
            {[
              'Ui Ux Design',
              'Web Development',
              'Business Strategy',
              'Software Development',
              'Business English',
            ].map((course, i) => (
              <Typography key={i} variant="body2" color="gray">
                <Link href="#" color="inherit" underline="hover">
                  {course}
                </Link>
              </Typography>
            ))}
          </Grid>

          {/* Recent Post */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Recent Post
            </Typography>
            {recentPosts.map((post, index) => (
              <Box key={index} display="flex" alignItems="center" mb={2}>
                <Box
                  component="img"
                  src={post.img}
                  alt={post.title}
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: 1,
                    mr: 2,
                    objectFit: 'cover',
                  }}
                />
                <Box>
                  <Typography variant="caption" color="gray">
                    {post.date}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    {post.title}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ borderColor: '#282850', mx: 4 }} />

      {/* Footer Bottom */}
      <Box
        sx={{
          px: 4,
          py: 2,
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          fontSize: 13,
          color: 'gray',
        }}
      >
        <Typography>© 2024 Powered by Edurock. All Rights Reserved.</Typography>
        <Box display="flex" gap={2}>
          <Link href="#" color="inherit" underline="hover">
            Terms of Use
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Privacy Policy
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default EdurockFooter;
