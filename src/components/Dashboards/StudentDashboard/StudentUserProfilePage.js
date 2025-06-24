import React from "react";
import {
  Box,
  Stack,
  Typography,
  Avatar,
  Divider,
  Button,
} from "@mui/material";
import {
  Email,
  Phone,
  Person,
  CalendarMonth,
  LockReset,
  VpnKey,
  Edit,
  MenuBook,
} from "@mui/icons-material";

// Profile data
const profile = {
  registrationDate: "20, January 2024 9:00 PM",
  firstName: "Michle",
  lastName: "Obema",
  username: "obema007",
  email: "obema@example.com",
  phone: "+55 669 4456 25987",
  expert: "Graphics Design",
  biography:
    "Creative and detail-oriented graphic designer with 5+ years of experience. Passionate about delivering top-quality visual solutions for a variety of projects.",
};

function StudentUserProfilePage() {
  return (
    // <Box
    //   sx={{
    //     minHeight: "100vh",
    //     bgcolor: "#f0f4f8",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     p: 4,
    //   }}
    // >
      <Box
        sx={{
          backgroundColor: "#ffffff",
          p: 4,
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          width: "90%",
          maxWidth: 900,
          mt:2
        }}
      >
        <Stack spacing={4} alignItems="center">
          {/* Avatar */}
          <Avatar
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt={profile.firstName}
            sx={{
              width: 150,
              height: 150,
              border: "4px solid #1976d2",
              boxShadow: 4,
            }}
          />

          {/* Name & Role */}
          <Box textAlign="center">
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {profile.firstName} {profile.lastName}
            </Typography>
            
          </Box>

         

          <Divider sx={{ width: "100%" }} />

          {/* Profile Details One by One */}
          <Stack spacing={4} width="100%">
            <DetailItem
              icon={<CalendarMonth color="primary" />}
              label="Registered"
              value={profile.registrationDate}
                            valueFontSize="1.5rem"

            />
            <DetailItem
              icon={<Person color="primary" />}
              label="Username"
              value={profile.username}
                            valueFontSize="1.5rem"

            />
            <DetailItem
              icon={<Email color="primary" />}
              label="Email"
              value={profile.email}
                            valueFontSize="1.5rem"

            />
            <DetailItem
              icon={<Phone color="primary" />}
              label="Phone"
              value={profile.phone}
                            valueFontSize="1.5rem"

            />
            <DetailItem
              icon={<MenuBook color="primary" />}
              label="Biography"
              value={profile.biography}
              valueFontSize="1.5rem"
            />
             {/* Action Buttons */}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={4} sx={{justifyContent:"center",alignItems:"center"}}>
            <Button variant="contained" color="primary" startIcon={<Edit />}>
              Edit Profile
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<LockReset />}
            >
              Change Password
            </Button>
            <Button
              variant="outlined"
              color="success"
              startIcon={<VpnKey />}
            >
              Set Password
            </Button>
          </Stack>
          </Stack>
        </Stack>
      </Box>
    // </Box>
  );
}

// Reusable DetailItem component with icon alignment and font size
const DetailItem = ({ icon, label, value, valueFontSize = "1rem" }) => (
  <Box display="flex" alignItems="flex-start" gap={1}>
    <Box sx={{ mt: 0.5 }}>{icon}</Box>
    <Typography variant="body1" sx={{ fontSize: valueFontSize }}>
      <strong>{label}:</strong> {value}
    </Typography>
  </Box>
);

export default StudentUserProfilePage;