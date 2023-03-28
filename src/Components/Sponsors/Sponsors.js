
import React, {useState, useEffect} from 'react'

import {Box,  Container,} 
from '@mui/material'

import sponsor from '../../Images/sponsor.webp'

import SponsorBar from './SponsorBar'
import Subheading from '../Subheading'

const  Sponsors = () => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const show = width > 900 ? 4: (width > 600 ? 3: 1)

  const sponsors = 
  [sponsor, sponsor, sponsor, sponsor, sponsor,
   sponsor, sponsor, sponsor, sponsor, sponsor,
   sponsor, sponsor, sponsor, sponsor, sponsor]
  

   
  return (
    
    <Box>
    <Container>

      <Subheading 
        align = 'center'
        section = 'Our Sponsors'
        title = 'The wonderful people who support us.'
        subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et orci at dolor elementum accumsan. Cras at sodales arcu, vitae varius erat. Nam molestie vitae magna ac molestie. Ut sapien metus, ullamcorper at efficitur et, volutpat et nisi. Nulla accumsan elementum lorem in placerat.'
      />
 
      <Box sx={{ p: 2 }}></Box>
        <SponsorBar numItems = {show} Logos = {sponsors}/>
        <Box sx={{ p: 2 }}></Box>
        <SponsorBar numItems = {show}  Logos = {sponsors}/>
        <Box sx={{ p: 2 }}></Box>
        <SponsorBar numItems = {show}  Logos = {sponsors}/>
        <Box sx={{ p: 2 }}></Box>
        </Container>
    </Box>

  );
}

export default Sponsors