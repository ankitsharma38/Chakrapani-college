import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

// Unsplash Images
const missionImage = 'https://images.unsplash.com/photo-1561049501-e1f96bdd98fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHlvZ2F8ZW58MHx8MHx8fDA%3D';
const visionImage = 'https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const achievementsImage = 'https://images.unsplash.com/photo-1551892589-865f69869476?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const locationImage = 'https://www.incredibleindia.gov.in/content/dam/incredible-india/images/trips/maharashtra/nagpur/unveiling-nagpurs-beauty-via-its-cultural-and-spiritual-richness/deekshabhoomi-nagpur-1-tri-iter-day1.jpg';

// 3D Icons (PNG)
const missionIcon = 'https://ik.imagekit.io/julyhwpbw/Icons/goal_15256291.png?updatedAt=1742125565438';
const visionIcon = 'https://ik.imagekit.io/julyhwpbw/Icons/innovation_2564796.png?updatedAt=1742125631635';
const achievementsIcon = 'https://ik.imagekit.io/julyhwpbw/Icons/Screenshot_2025-03-16_171828-removebg-preview.png?updatedAt=1742125740234';
const locationIcon = 'https://ik.imagekit.io/julyhwpbw/Icons/ww.png?updatedAt=1742125837257';

// Animation variants for Framer Motion
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 1, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AboutUs = () => {
  return (
    <Box
      sx={{
        py: 8,
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `url('https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.2)', // Dark overlay
          backdropFilter: 'blur(2px)', 
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h1"
            align="center"
            gutterBottom
            sx={{ fontWeight: 'bold', color: 'white' }}
          >
            About Us
          </Typography>
          <Typography
            variant="h6"
            component="p"
            align="center"
            sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 6 }}
          >
            Discover the story behind Chakrapani Panchakarma Yoga Nisargopchar Mahavidyalaya
          </Typography>
        </motion.div>

        {/* Grid Layout for Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {/* Mission Section */}
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeInUp}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    boxShadow: 3,
                    backgroundImage: `url(${missionImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
                      borderRadius: 3,
                    },
                  }}
                >
                  <CardContent sx={{ position: 'relative', zIndex: 2 }}>
                    <Avatar
                      src={missionIcon}
                      sx={{ width: 60, height: 60, mb: 2, bgcolor: 'rgba(255, 255, 255, 0.1)' }}
                    />
                    <Typography variant="h5" component="h2" gutterBottom>
                      Our Mission
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      To provide high-quality education in Yoga, Naturopathy, and Panchakarma, empowering students to lead healthy and fulfilling lives.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Vision Section */}
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeInUp}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    boxShadow: 3,
                    backgroundImage: `url(${visionImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
                      borderRadius: 3,
                    },
                  }}
                >
                  <CardContent sx={{ position: 'relative', zIndex: 2 }}>
                    <Avatar
                      src={visionIcon}
                      sx={{ width: 60, height: 60, mb: 2, bgcolor: 'rgba(255, 255, 255, 0.1)' }}
                    />
                    <Typography variant="h5" component="h2" gutterBottom>
                      Our Vision
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      To become a globally recognized institution for holistic health education and research.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Achievements Section */}
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeInUp}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    boxShadow: 3,
                    backgroundImage: `url(${achievementsImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
                      borderRadius: 3,
                    },
                  }}
                >
                  <CardContent sx={{ position: 'relative', zIndex: 2 }}>
                    <Avatar
                      src={achievementsIcon}
                      sx={{ width: 60, height: 60, mb: 2, bgcolor: 'rgba(255, 255, 255, 0.1)' }}
                    />
                    <Typography variant="h5" component="h2" gutterBottom>
                      Achievements
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      - Recognized by Kavi Kulguru Kalidas Sanskrit University
                      <br />
                      - Over 1,000 graduates since inception
                      <br />
                      - State-of-the-art facilities for students
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Location Section */}
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeInUp}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    boxShadow: 3,
                    backgroundImage: `url(${locationImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
                      borderRadius: 3,
                    },
                  }}
                >
                  <CardContent sx={{ position: 'relative', zIndex: 2 }}>
                    <Avatar
                      src={locationIcon}
                      sx={{ width: 60, height: 60, mb: 2, bgcolor: 'rgba(255, 255, 255, 0.1)' }}
                    />
                    <Typography variant="h5" component="h2" gutterBottom>
                      Our Location
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      28, Central Railway Colony, Onkar Nagar Road, Nagpur-440027
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutUs;