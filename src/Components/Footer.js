
import React from 'react'

import {Box,  Container,} 
from '@mui/material'


const  Footer = () => {
   
  return (
    
    <Box sx = {{textAlign: 'center', backgroundColor: '#EEE', color: '#1E1E24', fontWeight: '100', padding: 2}}>
        <Container>
            Copyright @ BullCityDAO; All rights reserved.
        </Container> 
    </Box>

  );
}

export default Footer