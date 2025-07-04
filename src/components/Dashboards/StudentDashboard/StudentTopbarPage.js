import React from "react";
import { Box, Button, Typography, Avatar } from "@mui/material";
import { Add } from "@mui/icons-material";

function StudentTopbarPage() {
  return (
    <Box sx={{ bgcolor: "#f4f4f9", minHeight:'100vh', p: 4 }}>
      {/* Header Section */}
      <Box
        sx={{ 
          bgcolor: "#6a1b9a",
          borderRadius: 3,
          p: 3,
          display:'flex',
          alignItems:'center',
          justifyContent:'space-between',
          flexWrap:'wrap',
          color:'white',
          height:"auto"
        }}
      >
        {/* User Section */}
        <Box display="flex" alignItems="center">
          <Avatar src="https://i.pravatar.cc/300" sx={{ width: 64, height: 64, mr: 2 }}/>
          <Box>
            <Typography variant="body1">Hello</Typography>
            <Typography variant="h6" fontWeight="bold">
              Michle Obema
            </Typography>
             <Box display="flex" gap={2} mt={1}>
              <Typography variant="body2">📘 9 Courses Enrolled</Typography>
              <Typography variant="body2">📜 8 Certificates</Typography>
            </Box>
          </Box>
        </Box>



        {/* Button Section */}
        <Button
          variant="contained"
          startIcon={<Add />}
          sx={{ 
            bgcolor:'white',
            color:'#6a1b9a',
            '&:hover': { bgcolor:'#f3e5f5' },
            mt:{ xs: 2, sm: 0 }
          }}
        >
          Create a New Course
        </Button>
      </Box>

      {/* Main Content Section (you can put whatever you want here) */}
      <Box sx={{ mt: 4 }}>
        {/* <Typography variant="h5" color="#6a1b9a">
          Dashboard Content
        </Typography> */}
        {/* Add your content here */}
      </Box>
    </Box>
  )
}

export default StudentTopbarPage;