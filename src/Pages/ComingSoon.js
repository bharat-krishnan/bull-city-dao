import React from 'react';
import Fade from 'react-reveal/Fade';
import QuarterBreakS from '../Components/QuarterBreak/QuarterBreakS';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CohortInfo from '../Components/Incubator/CohortInfo';
import CohortCard from '../Components/Incubator/CohortCard';
import Grid from '@mui/material/Grid'; // Import Grid here
import imageSrc from '../Images/sponsor.webp';

const ComingSoon = () => {
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
          paragraph="This is our first first first cohort. Insert more text here about the cohort, why we picked these teams, and what they are doing."
        />
        <Grid container spacing={2}>
          {/* Example usage of CohortCard */}
          <CohortCard 
            image={imageSrc}
            title="Cohort Project Title"
            paragraph="Description of the cohort project."
          />
          <CohortCard 
            image={imageSrc}
            title="Cohort Project Title"
            paragraph="Description of the cohort project."
          />
          <CohortCard 
            image={imageSrc}
            title="Cohort Project Title"
            paragraph="Description of the cohort project."
          />
          <CohortCard 
            image={imageSrc}
            title="Cohort Project Title"
            paragraph="Description of the cohort project."
          />
          {/* Add more CohortCard components as needed */}
        </Grid>
      </Fade>
    </div>
  );
}

export default ComingSoon;
