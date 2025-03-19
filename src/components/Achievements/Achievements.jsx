import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  Avatar,
  useTheme,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { GraduationCap, Star } from "lucide-react";

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const Achievements = () => {
  const [graduatesCount, setGraduatesCount] = useState(0);
  const [startCount, setStartCount] = useState(false); // Control the count animation
  const theme = useTheme();

  // Animate the graduates count from 1 to 1000+ when in view
  useEffect(() => {
    let interval;
    if (startCount) {
      interval = setInterval(() => {
        setGraduatesCount((prev) => (prev < 1000 ? prev + 10 : 1000));
      }, 20);
    }
    return () => clearInterval(interval);
  }, [startCount]);

  return (
    <Box
      sx={{
        py: 10,
        background: "#fafffc",
      }}
    >
      <Container maxWidth="xl">
        {/* Title Section */}
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 800,
              mx: "auto",
            }}
          >
            Recognized by{" "}
            <span className="text-amber-600">Kavi Kulguru Kalidas Sanskrit University</span>, Over 1,000 graduates since
            inception. State-of-the-art facilities for students.
          </Typography>
        </Box>

        {/* Responsive Card with Divider */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onViewportEnter={() => setStartCount(true)} // Start counting when visible
        >
          <Card
            sx={{
              p: 4,
              borderRadius: 4,
              background: theme.palette.background.paper,
              boxShadow: theme.shadows[4],
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: { xs: "column", md: "row" }, // Responsive layout
            }}
          >
            {/* Graduates Section */}
            <Box sx={{ flex: 1, textAlign: "center", px: 4, mb: { xs: 4, md: 0 } }}>
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  mx: "auto",
                  mb: 3,
                  backgroundColor: theme.palette.primary.main,
                }}
              >
                <GraduationCap size={40} color="#fff" />
              </Avatar>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  mb: 2,
                }}
              >
                {graduatesCount}+
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: theme.palette.text.secondary }}
              >
                Graduates
              </Typography>
            </Box>

            {/* Vertical Divider - Hidden on Small Screens */}
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                height: "240px",
                mx: 4,
                backgroundColor: theme.palette.divider,
                display: { xs: "none", md: "block" }, // Responsive visibility
              }}
            />

            {/* Facilities Section */}
            <Box sx={{ flex: 1, textAlign: "center", px: 4 }}>
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  mx: "auto",
                  mb: 3,
                  backgroundColor: theme.palette.success.main,
                }}
              >
                <Star size={40} color="#fff" />
              </Avatar>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  mb: 2,
                }}
              >
                State-of-the-Art Facilities
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: theme.palette.text.secondary }}
              >
                Modern infrastructure for students
              </Typography>
            </Box>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Achievements;
