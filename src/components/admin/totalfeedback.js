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
  Link
} from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const feedbacks = [
  { course: 'Javascript', enrolled: 1100, rating: 4 },
  { course: 'PHP', enrolled: 700, rating: 4 },
  { course: 'HTML', enrolled: 1350, rating: 5 },
  { course: 'Graphic', enrolled: 1266, rating: 4 },
];

const renderStars = (rating) => {
  return (
    <>
      {[...Array(5)].map((_, index) =>
        index < rating ? (
          <Star key={index} sx={{ color: '#6A0DAD' }} fontSize="small" />
        ) : (
          <StarBorder key={index} sx={{ color: '#6A0DAD' }} fontSize="small" />
        )
      )}
    </>
  );
};

const TotalFeedbacks = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper elevation={3} sx={{ borderRadius: 4, p: 3, m: 2 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6" fontWeight="bold">
          Total Feedbacks
        </Typography>
        <Link href="#" underline="hover" fontSize={14}>
          See More...
        </Link>
      </Box>

      <Table size={isMobile ? 'small' : 'medium'}>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f2f2f7' }}>
            <TableCell sx={{ fontWeight: 'bold' }}>Course Name</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Enrolled</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {feedbacks.map((row, index) => (
            <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? '#f9f9fb' : 'white' }}>
              <TableCell>{row.course}</TableCell>
              <TableCell>{row.enrolled}</TableCell>
              <TableCell>{renderStars(row.rating)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default TotalFeedbacks;
