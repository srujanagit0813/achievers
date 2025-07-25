import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  useMediaQuery,
  Button,
} from '@mui/material';
import { Star, StarHalf, StarBorder, ArrowForward, Feedback } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const feedbacks = [
  { course: 'JavaScript', enrolled: 1100, rating: 4.5 },
  { course: 'PHP', enrolled: 700, rating: 4 },
  { course: 'HTML', enrolled: 1350, rating: 5 },
  { course: 'Graphic Design', enrolled: 1266, rating: 4 },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <Box display="flex" alignItems="center">
      {[...Array(fullStars)].map((_, index) => (
        <Star key={index} sx={{ color: '#FFD700' }} fontSize="small" />
      ))}
      {hasHalfStar && <StarHalf sx={{ color: '#FFD700' }} fontSize="small" />}
      {[...Array(5 - Math.ceil(rating))].map((_, index) => (
        <StarBorder key={index} sx={{ color: '#FFD700' }} fontSize="small" />
      ))}
    </Box>
  );
};

const StudentTotalFeedbacks = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper
      elevation={4}
      sx={{
        borderRadius: 4,
        p: { xs: 2, sm: 3 },
        mx: 'auto',
        width: '95%',
        mt: 4,
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        bgcolor: '#fff',
      }}
    >
      {/* Header */}
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        mb={3}
        p={2}
        sx={{
          borderRadius: 2,
          background: 'linear-gradient(to right, #6A0DAD, #8E2DE2)',
          color: 'white',
          gap: { xs: 2, sm: 0 },
        }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <Feedback sx={{ fontSize: { xs: 24, sm: 28 } }} />
          <Typography variant="h6" fontWeight="bold" letterSpacing={0.5}>
            Total Feedbacks
          </Typography>
        </Box>

        <Button
          variant="contained"
          size="small"
          endIcon={<ArrowForward />}
          sx={{
            textTransform: 'none',
            backgroundColor: 'white',
            color: '#6A0DAD',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            '&:hover': { backgroundColor: '#f3e5f5', transform: 'scale(1.05)' },
            mt: { xs: 1, sm: 0 },
          }}
        >
          See More
        </Button>
      </Box>

      {/* Table */}
      <Box sx={{ overflowX: 'auto' }}>
        <Table size={isMobile ? 'small' : 'medium'}>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#EFEFEF' }}>
              <TableCell
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '14px', sm: '16px' },
                  color: '#333',
                  paddingY: { xs: 1, sm: 2 },
                }}
              >
                Course Name
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '14px', sm: '16px' },
                  color: '#333',
                  paddingY: { xs: 1, sm: 2 },
                }}
              >
                Total Enrolled
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '14px', sm: '16px' },
                  color: '#333',
                  paddingY: { xs: 1, sm: 2 },
                }}
              >
                Ratings
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {feedbacks.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: index % 2 === 0 ? '#fff' : '#f9f9f9',
                  '&:hover': { backgroundColor: '#f0f0f0', cursor: 'pointer' },
                  transition: 'background-color 0.3s ease',
                }}
              >
                <TableCell
                  sx={{
                    py: { xs: 1, sm: 2 },
                    fontWeight: 600,
                    color: '#222',
                    fontSize: { xs: '14px', sm: '16px' },
                    fontFamily: 'Arial, sans-serif',
                  }}
                >
                  {row.course}
                </TableCell>
                <TableCell
                  sx={{
                    py: { xs: 1, sm: 2 },
                    fontWeight: 700,
                    color: '#6A0DAD',
                    fontSize: { xs: '14px', sm: '15px' },
                  }}
                >
                  {row.enrolled.toLocaleString()}
                </TableCell>
                <TableCell sx={{ py: { xs: 1, sm: 2 } }}>{renderStars(row.rating)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Paper>
  );
};

export default StudentTotalFeedbacks;