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
        py: 6,
        background: "#fafffc",
      }}
    >
      <Container maxWidth={false} disableGutters>
        {/* Title Section */}
        <Box textAlign="center" mb={7}>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 800,
              mx: "auto",
            }}
          >
            Recognized by{" "}
            <span className="text-amber-600">
              Kavi Kulguru Kalidas Sanskrit University
            </span>
            , Over 1,000 graduates since inception. State-of-the-art facilities
            for students.
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
              boxShadow: theme.shadows[4],
              display: "flex",
              backgroundColor: "#a5a5a5",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              maxWidth: "none",
              flexDirection: { xs: "column", md: "row" },

              // Background SVG with opacity
              backgroundImage: `url('https://ik.imagekit.io/julyhwpbw/undraw_graduation_u7uc.svg?updatedAt=1742497182857')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.9)", // White layer with 40% opacity
                zIndex: 1,
              },
              "& > *": {
                zIndex: 2, // Ensure content is above the background
              },
            }}
          >
            {/* Graduates Section */}
            <Box
              sx={{ flex: 1, textAlign: "center", px: 4, mb: { xs: 4, md: 0 } }}
            >
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
