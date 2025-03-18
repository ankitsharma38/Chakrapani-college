// BlogList.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { blogs } from "./blogsData";
import { RingLoader, PropagateLoader } from "react-spinners";

const BlogList = () => {
  const [loading, setLoading] = useState(true); // Add loading state

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 2-second loading delay
    return () => clearTimeout(timer);
  }, []);

  // Return spinner while loading
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <PropagateLoader color="#10B981" size={30} /> {/* Spinner */}
      </div>
    );
  }
  return (
    <Container sx={{ py: 9 }}>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          mb: 4,
          textAlign: "center",
          fontWeight: "bold",
          fontSize: { xs: "2rem", md: "2.5rem" },
        }}
      >
        Latest Articles
      </Typography>

      <Grid container spacing={3}>
        {blogs.map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "0.3s",
                  boxShadow: 3,
                  "&:hover": {
                    boxShadow: 6,
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Link
                  to={`/blogs/${blog.id}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    flexGrow: 1,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={blog.image}
                    alt={blog.title}
                    sx={{
                      objectFit: "cover",
                      aspectRatio: "16/9",
                    }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1.25rem",
                        minHeight: "2em",
                      }}
                    >
                      {blog.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                      sx={{
                        flexGrow: 1,
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                        mb: 2,
                      }}
                    >
                      {blog.content.substring(0, 150)}...
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: "auto",
                        opacity: 0.8,
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          fontStyle: "italic",
                          fontSize: "0.75rem",
                        }}
                      >
                        By {blog.author}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          fontSize: "0.75rem",
                        }}
                      >
                        {blog.date}
                      </Typography>
                    </Box>
                  </CardContent>
                </Link>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default BlogList;
