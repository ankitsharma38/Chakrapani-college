import React from "react";
import { Box, Typography } from "@mui/material";

const SlidingText = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
     //    backgroundColor: "#f0f0f0",
        py: 2,
        mb: -6,
      }}
    >
      {/* Sliding Text Container */}
      <Box
        sx={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "slide 20s linear infinite",
          "@keyframes slide": {
            "0%": {
              transform: "translateX(100%)",
            },
            "100%": {
              transform: "translateX(-100%)",
            },
          },
        }}
      >
        {/* Text to Slide */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            color: "#333",
            pr: 30, // Add spacing between repeated text
          }}
        >
          Welcome to Chakrapani Panchakarma Yoga 
        </Typography>
        {/* Repeat the text for a seamless effect */}

        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            color: "#333",
            pr: 10, // Add spacing between repeated text
          }}
        >
          Admission Open  
        </Typography>
      </Box>
    </Box>
  );
};

export default SlidingText;