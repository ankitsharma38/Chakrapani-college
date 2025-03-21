import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  Avatar,
  Button,
  useMediaQuery,
} from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { sections } from "./aboutData";

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// Hero Section Animations
const titleVariants = {
  hidden: { opacity: 0, scale: 0.8, y: -50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
  },
};

// Bubble Animation Variants
const bubbleVariants = {
  animate: {
    y: [0, -20, 0], // Auto up-and-down loop
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const AboutUs = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { scrollY } = useScroll();
  const bubbleY = useTransform(scrollY, [0, 500], [0, -100]); // Scroll-triggered movement

  return (
    <Box sx={{ minHeight: "100vh", overflow: "hidden" }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          bgcolor: "#1A1F2A",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544367567-0f2fcb009655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          "&:before": {
            content: '""',
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(26, 31, 42, 0.7)",
          },
        }}
      >
        <Container sx={{ position: "relative", zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={titleVariants}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "3rem", md: "5rem" },
                  color: "#FF6F61",
                  mb: 2,
                  letterSpacing: "-0.03em",
                }}
              >
                Who We Are
              </Typography>
            </motion.div>
            <motion.div variants={subtitleVariants}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 300,
                  color: "#FFFFFF",
                  maxWidth: 700,
                  mx: "auto",
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                }}
              >
                Chakrapani Panchakarma Yoga Nisargopchar Mahavidyalaya - A legacy of wellness and wisdom
              </Typography>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* Content Sections with Animated Bubbles */}
      <Box sx={{ bgcolor: "#f0fdf4", py: { xs: 6, md: 10 }, position: "relative" }}>
        <motion.svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            y: bubbleY, // Scroll-triggered movement
          }}
          animate="animate" // Auto up-and-down animation
          variants={bubbleVariants}
          preserveAspectRatio="none"
        >
          <rect width="100%" height="100%" fill="url(#bubblePattern)" opacity={0.2} />
          <defs>
            <pattern id="bubblePattern" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="15" fill="#FF6F61" opacity="0.3" />
              <circle cx="80" cy="50" r="10" fill="#9B59B6" opacity="0.2" />
              <circle cx="150" cy="80" r="20" fill="#3498DB" opacity="0.25" />
              <circle cx="40" cy="120" r="12" fill="#E74C3C" opacity="0.3" />
              <circle cx="100" cy="150" r="18" fill="#F1C40F" opacity="0.2" />
              <circle cx="170" cy="170" r="14" fill="#2ECC71" opacity="0.25" />
            </pattern>
          </defs>
        </motion.svg>
        <Container sx={{ position: "relative", zIndex: 1 }}>
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              style={{ marginBottom: isMobile ? 40 : 60 }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : index % 2 === 0 ? "row" : "row-reverse",
                  alignItems: "center",
                  bgcolor: "transparent",
                  boxShadow: "none",
                  borderRadius: 0,
                  gap: 4,
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    height: { xs: 200, md: 300 },
                    backgroundImage: `url(${section.image || 'https://images.unsplash.com/photo-1545205597-3d9c2396e6f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 3,
                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  }}
                />
                <Box sx={{ flex: 1, p: 2 }}>
                  <Avatar
                    src={section.icon}
                    sx={{
                      width: 60,
                      height: 60,
                      bgcolor: "#FF6F61",
                      mb: 2,
                      boxShadow: "0 4px 12px rgba(255, 111, 97, 0.3)",
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: "#1A1F2A",
                      mb: 1,
                      fontSize: { xs: "1.5rem", md: "2rem" },
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#4A4A4A",
                      lineHeight: 1.7,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                    }}
                  >
                    {section.text}
                  </Typography>
                </Box>
              </Card>
            </motion.div>
          ))}
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 8,
          bgcolor: "#FF6F61",
          textAlign: "center",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505455184862-554165e5f6ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          "&:before": {
            content: '""',
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(255, 111, 97, 0.8)",
          },
        }}
      >
        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, color: "#FFFFFF", mb: 2 }}
          >
            Join Our Journey
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#FFF", maxWidth: 600, mx: "auto", mb: 4, fontSize: "1.1rem" }}
          >
            Explore the heart of our mission and become part of our story.
          </Typography>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#1A1F2A",
                color: "#FF6F61",
                px: 4,
                py: 1.5,
                borderRadius: 3,
                fontWeight: 600,
                fontSize: "1rem",
                "&:hover": { bgcolor: "#2A3342" },
              }}
            >
              Discover More
            </Button>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUs;