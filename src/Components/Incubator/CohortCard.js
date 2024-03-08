import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

const CohortCard = ({ image, title, paragraph }) => {
  return (
    <Grid item xs={12} md={6}>
      <Card sx={{ backgroundColor: '#EEE', mb: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
          <Box sx={{ width: 100, height: 100, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Maintaining the image aspect ratio while ensuring it's contained within a fixed size box */}
            <img src={image} alt={title} style={{ width: '100%', height: 'auto' }} />
          </Box>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {paragraph}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
};

export default CohortCard;
