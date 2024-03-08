import React from 'react';
import { Box, Grid, Container, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const CohortTitle = ({ title, about }) => {
  // Use theme for styles if necessary
  const theme = useTheme();

  // Styled components
  const Title = styled(Typography)({
    textAlign: 'left', // Aligning text to left, previously handled by align prop
    fontSize: 25,
    fontWeight: 800,
  });

  const About = styled(Typography)({
    textAlign: 'justify',
    fontSize: 15,
    fontWeight: 500,
    maxWidth: 750,
  });

  return (
    <Box sx={{}}>
      <Container>
        <Grid container spacing={4}>
          <Grid item md={2} />

          <Grid
            sx={{
              marginBottom: { xs: 'none', md: '7%' },
              backgroundColor: '#EEE',
              padding: '50px',
              borderRadius: '50px',
            }}
            item
            md={9}
          >
            {/* Content previously handled by ContentText */}
            <Box>
              <Box sx={{ p: 1, display: 'flex', justifyContent: 'left' }}>
                <Title>{title}</Title>
              </Box>
              <Box sx={{ p: 1 }}></Box>
              <Box sx={{ p: 1, display: 'flex', justifyContent: 'left' }}>
                <About>{about}</About>
              </Box>
            </Box>
          </Grid>

          <Grid item md={1} />
        </Grid>
      </Container>
    </Box>
  );
};

export default CohortTitle;
