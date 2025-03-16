import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Our Mission",
    image: "https://images.unsplash.com/photo-1561049501-e1f96bdd98fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    icon: "https://ik.imagekit.io/julyhwpbw/Icons/goal_15256291.png",
    text: "To provide high-quality education in Yoga, Naturopathy, and Panchakarma, empowering students to lead healthy and fulfilling lives.",
  },
  {
    title: "Our Vision",
    image: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    icon: "https://ik.imagekit.io/julyhwpbw/Icons/innovation_2564796.png",
    text: "To become a globally recognized institution for holistic health education and research.",
  },
  {
    title: "Achievements",
    image: "https://images.unsplash.com/photo-1551892589-865f69869476?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    icon: "https://ik.imagekit.io/julyhwpbw/Icons/Screenshot_2025-03-16_171828-removebg-preview.png",
    text: "Recognized by Kavi Kulguru Kalidas Sanskrit University. Over 1,000 graduates since inception. State-of-the-art facilities for students.",
  },
  {
    title: "Our Location",
    image: "https://www.incredibleindia.gov.in/content/dam/incredible-india/images/trips/maharashtra/nagpur/unveiling-nagpurs-beauty-via-its-cultural-and-spiritual-richness/deekshabhoomi-nagpur-1-tri-iter-day1.jpg",
    icon: "https://ik.imagekit.io/julyhwpbw/Icons/ww.png",
    text: "28, Central Railway Colony, Onkar Nagar Road, Nagpur-440027",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutUs = () => {
  return (
    <Box  sx={{
      py: 8,
      backgroundImage: `url('https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      overflow: "hidden",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        zIndex: 1,
      },
    }}>
      <Container maxWidth="lg">
        <motion.div initial="hidden" animate="visible">
          <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
            About Us
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 6 }}>
            Discover the story behind Chakrapani Panchakarma Yoga Nisargopchar Mahavidyalaya
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {sections.map((section, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div variants={fadeInUp}>
                <Card
                  sx={{
                    height: "100%",
                    minHeight: 280,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    borderRadius: 3,
                    boxShadow: 4,
                    p: 3,
                    backgroundImage: `url(${section.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    
                  }}
                >
                  <Box sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    borderRadius: 3,
                  }} />
                  <CardContent sx={{ position: "relative", zIndex: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        justifyContent: "center",
                      }}
                    >
                      <Avatar src={section.icon} sx={{ width: 60, height: 60 }} />
                      <Typography variant="h5" sx={{ fontWeight: "bold", color: "white" }}>
                        {section.title}
                      </Typography>
                    </Box>
                    <Divider sx={{ my: 2, backgroundColor: "rgba(255, 255, 255, 0.6)", height: 2, width: "50%", mx: "auto" }} />
                    <Typography variant="body1" sx={{ color: "rgba(255, 255, 255, 0.9)" }}>
                      {section.text}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
