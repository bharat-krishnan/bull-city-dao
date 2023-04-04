
import React, {useState, useEffect} from 'react'

import {Box,  Container,} 
from '@mui/material'

import pixelvault from '../../Images/pixelvault.png'
import cess from '../../Images/cess.png'

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

  const sponsors1 = 
  [pixelvault, pixelvault, pixelvault, pixelvault, pixelvault,
    pixelvault, pixelvault, pixelvault, pixelvault, pixelvault,
    pixelvault, pixelvault, pixelvault, pixelvault, pixelvault]

  const sponsors2 = 
  [cess, cess, cess, cess, cess,
    cess, cess, cess, cess, cess,
    cess, cess, cess, cess, cess]

   
  return (
    
    <Box>
    <Container>

      <Subheading 
        align = 'center'
        section = 'Our Sponsors'
        title = 'The wonderful people who support us.'
        subtitle = ''
      />
 
      <Box sx={{ p: 2 }}></Box>
        <SponsorBar numItems = {show} Logos = {sponsors1}/>
        <Box sx={{ p: 2 }}></Box>
        <SponsorBar numItems = {show}  Logos = {sponsors2}/>
        <Box sx={{ p: 2 }}></Box>
        {/* <SponsorBar numItems = {show}  Logos = {sponsors}/>
        <Box sx={{ p: 2 }}></Box> */}
        </Container>
    </Box>

  );
}

export default Sponsors