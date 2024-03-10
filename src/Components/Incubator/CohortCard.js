import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const CohortCard = ({ title, paragraph, link }) => {
  // Function to handle card click
  const handleCardClick = () => {
    window.location.href = link; // Redirects to the given link
  };

  return (
    <Grid item xs={12} md={6}>
      <Card 
        sx={{ 
          backgroundColor: '#EEE', 
          mb: 2, 
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)', // Slightly enlarges the card on hover
          },
        }}
        onClick={handleCardClick} // Adding click handler
      >
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {paragraph}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CohortCard;
