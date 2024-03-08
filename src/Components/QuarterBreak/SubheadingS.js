import React from 'react';
import { Typography, Box } from '@mui/material';

const SubheadingS = ({ title, subtitle }) => {
  return (
    <Box textAlign="left" p={2}>
      {/* Title styling */}
      <Typography variant="h4" component="h2" gutterBottom>
        {title}
      </Typography>
      {/* Subtitle styling */}
      <Typography variant="subtitle1" gutterBottom>
        {subtitle}
      </Typography>
    </Box>
  );
}

export default SubheadingS;
