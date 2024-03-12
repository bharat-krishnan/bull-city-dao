import React from 'react';
import Fade from 'react-reveal/Fade';
import QuarterBreakS from '../Components/QuarterBreak/QuarterBreakS';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CohortInfo from '../Components/Incubator/CohortInfo';
import CohortCard from '../Components/Incubator/CohortCard';
import Grid from '@mui/material/Grid';
import imageSrc from '../Images/Octalne.png';
import Octalne from '../Images/Octalne.png'
import AnonID from '../Images/AnonID.png'
import { useTheme, useMediaQuery } from '@mui/material';

const ComingSoon = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div>
      <Fade>
        <QuarterBreakS
          title="Our Incubator"
          subtitle="Every semester, we fund and guide the best Duke founders pursuing blockchain-related startups."
          icon={<LightbulbIcon color='secondary' sx={{ fontSize: '200px' }} />}
        />
        <CohortInfo 
          header="Cohort #1"
          
        />
        <Grid container spacing={2} sx={{ 
          px: matchesMD ? '250px' : '16px', // Adjust this based on `CohortInfo` padding
          width: '100%', 
          margin: '0 auto' 
        }}>
          {/* Example usage of CohortCard */}
          <CohortCard 
            image={Octalne}
            title="Octane Security"
            paragraph="Octane is a developer-first platform to battle-test smart contracts with cutting-edge AI. Our suite of tools helps customers find vulnerabilities quickly, without complicated setup and dev onboarding."
            link="https://www.octane.security/" // Replace with the actual URL
            />
            <CohortCard 
            image={AnonID}
            title="AnonID"
            paragraph="Anon ID empowers businesses to securely reduce onboarding friction and risk with an AI and Blockchain network that delivers verifiable proofs of user identity and ownership without private personal information."
            link="https://www.anonid.io/" // Replace with the actual URL
            />
          {/* Add more CohortCard components as needed */}
        </Grid>
      </Fade>
    </div>
  );
}

export default ComingSoon;
