import React from 'react';
import { Box, Grid, Container } from '@mui/material';

const ContentItemVideo = ({ links }) => {
  // Adjusting the style to ensure the iframes are not cut off.
  const iframeContainerStyle = {
    width: "100%",
    height: "100vh", // Adjust this value as needed to prevent cutoff
    position: "relative",
    overflow: "hidden", // Ensures that the content does not overflow its box
  };

  const iframeStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: 0
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Grid container spacing={2}>
            {links.map((link, index) => (
            <Grid item xs={12} md={4} key={index}>
              <div style={iframeContainerStyle}>
                <iframe
                  title = {link}
                  src= {link}
                  style={iframeStyle}
                  allowFullScreen
                  scrolling="no"
                  allow="encrypted-media;"
                ></iframe>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ContentItemVideo;
