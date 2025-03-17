// AboutUs.jsx
import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  Avatar,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { sections } from "./aboutData";

// Framer Motion Variants for Cards
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hover: {
    scale: 1.02,
    transition: { type: "spring", stiffness: 300 },
  },
};

const AboutUs = () => {
  return (
    <Box
      sx={{
        py: 9,
        background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))",
        position: "relative",
        backgroundImage: `url('https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')`,
        backgroundSize: "cover",
      }}
    >
      <Container maxWidth="xl">
        {/* Title Section */}
        <Box textAlign="center" mb={5}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              color: "black",
              fontSize: { xs: "1.8rem", md: "2.2rem" },
              mb: 2,
              textShadow: "0 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            About Our Institution
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{
              mb: 6,
              color: "black",
              textShadow: "0 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Discover the story behind Chakrapani Panchakarma Yoga Nisargopchar
            Mahavidyalaya
          </Typography>
        </Box>

        {/* Cards Grid */}
        <Grid container spacing={6}>
          {sections.map((section, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                variants={cardVariants}
                style={{ height: "100%" }}
              >
                <Card
                  sx={{
                    height: 320,
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 2,
                    boxShadow: 3,
                    backgroundImage: `url(${section.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    "&:hover": {
                      "& .contentOverlay": {
                        backdropFilter: "blur(0px)",
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                      },
                    },
                  }}
                >
                  {/* Glass Morphism Overlay */}
                  <Box
                    className="contentOverlay"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      backdropFilter: "blur(8px)",
                      transition: "all 0.3s ease-in-out",
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Avatar
                      src={section.icon}
                      sx={{
                        width: 60,
                        height: 60,
                        mb: 2,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(4px)",
                      }}
                    />

                    <Typography
                      variant="h5"
                      sx={{
                        color: "white",
                        fontWeight: 600,
                        mb: 1.5,
                        textAlign: "center",
                        fontSize: { xs: "1.2rem", md: "1.4rem" },
                        textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                      }}
                    >
                      {section.title}
                    </Typography>

                    <Divider
                      sx={{
                        width: "30%",
                        height: 2,
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                        my: 1.5,
                      }}
                    />

                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255, 255, 255, 0.9)",
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                        textAlign: "center",
                        maxWidth: 500,
                        mt: 1,
                        textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                      }}
                    >
                      {section.text}
                    </Typography>
                  </Box>
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