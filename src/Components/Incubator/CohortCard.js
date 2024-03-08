import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const CohortCard = ({ image, title, paragraph }) => {
  return (
    <Grid item xs={12} md={6}>
      <Card sx={{ backgroundColor: '#EEE', mb: 2 }}> {/* Background color applied here */}
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
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
