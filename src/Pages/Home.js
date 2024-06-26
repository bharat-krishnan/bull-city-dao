import React from 'react';
import { Box } from '@mui/material';
import Fade from 'react-reveal/Fade';
import Hero from '../Components/Hero/Hero';
import Sponsors from '../Components/Sponsors/Sponsors';
import QuarterBreak from '../Components/QuarterBreak/QuarterBreak';
import TripleBreak from '../Components/TripleBreak/TripleBreak';
import Footer from '../Components/Footer';
import ContentSection from './Content'; // Import the new content section

const Home = () => {
  return (
    <div>
      <Fade>
        <Hero />
        <Box sx={{ p: 2 }}></Box>

        <QuarterBreak />
        <Box sx={{ p: 6 }}></Box>

        <TripleBreak />
        <Box sx={{ p: 6 }}></Box>

        <ContentSection />
        <Box sx={{ p: 6 }}></Box>
      </Fade>
      <Footer />
    </div>
  );
};

export default Home;
