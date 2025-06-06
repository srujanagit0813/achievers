// App.jsx or NoticeBoardAndNotifications.jsx
import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Divider,
  Avatar,
  IconButton,
  useTheme,
  Collapse,
  Pagination,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { motion } from "framer-motion";

const noticeData = Array.from({ length: 15 }).map((_, i) => ({
  img: `https://source.unsplash.com/60x60/?study,${i}`,
  text: `Notice ${i + 1}: A long established fact that a reader will be distracted...`,
}));

const notifications = Array.from({ length: 15 }).map((_, i) => ({
  icon: "https://cdn-icons-png.flaticon.com/512/1077/1077063.png",
  message: `Notification ${i + 1}: latest resume has been updated!`,
  time: `${i + 1} min ago`,
}));

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const NoticeItem = ({ img, text, index }) => (
  <motion.div
    custom={index}
    variants={fadeInVariant}
    initial="hidden"
    animate="visible"
  >
    <Box display="flex" alignItems="center" py={1} sx={{ '&:hover': { backgroundColor: "action.hover", cursor: "pointer", borderRadius: 2, px: 1 } }}>
      <img src={img} alt="notice" style={{ width: 80, height: 60, borderRadius: 6, marginRight: 16 }} />
      <Typography fontSize="0.95rem">{text}</Typography>
    </Box>
  </motion.div>
);

const NotificationItem = ({ icon, message, time, index }) => (
  <motion.div
    custom={index}
    variants={fadeInVariant}
    initial="hidden"
    animate="visible"
  >
    <Box display="flex" alignItems="center" py={1} sx={{ '&:hover': { backgroundColor: "action.hover", cursor: "pointer", borderRadius: 2, px: 1 } }}>
      <Avatar src={icon} sx={{ width: 36, height: 36, mr: 2 }} />
      <Box>
        <Typography fontSize="0.95rem" fontWeight="bold">{message}</Typography>
        <Typography fontSize="0.8rem" color="text.secondary">{time}</Typography>
      </Box>
    </Box>
  </motion.div>
);

const ITEMS_PER_PAGE = 5;

const PaginatedSection = ({ title, data, renderItem, page, setPage, show, toggleShow }) => {
  const count = Math.ceil(data.length / ITEMS_PER_PAGE);
  const paginatedItems = data.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontWeight="bold">{title}</Typography>
        <Box display="flex" alignItems="center">
          <Typography color="primary" fontSize="0.9rem" sx={{ mr: 1 }}>See More...</Typography>
          <IconButton size="small" onClick={toggleShow}>
            {show ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Box>
      </Box>
      <Divider sx={{ my: 1 }} />
      <Collapse in={show}>
        {paginatedItems.map((item, idx) => (
          <React.Fragment key={idx}>
            {renderItem(item, idx)}
            {idx < paginatedItems.length - 1 && <Divider />}
          </React.Fragment>
        ))}
        <Box display="flex" justifyContent="center" mt={2}>
          <Pagination count={count} page={page} onChange={(e, val) => setPage(val)} color="primary" />
        </Box>
      </Collapse>
    </Paper>
  );
};

const NoticeBoardAndNotifications = () => {
  const [noticePage, setNoticePage] = useState(1);
  const [notifPage, setNotifPage] = useState(1);
  const [showNotices, setShowNotices] = useState(true);
  const [showNotifications, setShowNotifications] = useState(true);

  return (
    <Box p={2}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <PaginatedSection
            title="Notice Board"
            data={noticeData}
            page={noticePage}
            setPage={setNoticePage}
            show={showNotices}
            toggleShow={() => setShowNotices(!showNotices)}
            renderItem={(item, idx) => <NoticeItem {...item} index={idx} key={idx} />}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <PaginatedSection
            title="Notifications"
            data={notifications}
            page={notifPage}
            setPage={setNotifPage}
            show={showNotifications}
            toggleShow={() => setShowNotifications(!showNotifications)}
            renderItem={(item, idx) => <NotificationItem {...item} index={idx} key={idx} />}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default NoticeBoardAndNotifications;
