// MediaContentItem.js
import React from 'react';
import { Box, Grid, Container } from '@mui/material';
import ContentText from './ContentText';

const MediaContentItem = ({ title, author, about, to }) => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}> {/* Adjust to sm if you want the two-column layout to start from small devices */}
            <Box sx={{ backgroundColor: '#EEE', padding: '10px', borderRadius: '20px', marginBottom: { xs: '20px', sm: '20px' } }}>
              <ContentText
                to={to}
                align='left'
                author={author}
                title={title}
                about={about}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MediaContentItem;
