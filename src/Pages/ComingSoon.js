import React from 'react';
import Fade from 'react-reveal/Fade';
import QuarterBreakS from '../Components/QuarterBreak/QuarterBreakS';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CohortTitle from '../Components/Content/CohortTitle'

const ComingSoon = () => {
  return (
    <div>
      <Fade>
        <QuarterBreakS
          title="Our Incubator"
          subtitle="Every semester, we fund and help guide the best Duke founders pursuing blockchain-related startups."
          icon={<LightbulbIcon color='secondary' sx={{ fontSize: '200px' }} />}
        />
        {/* Using SubheadingS for consistent styling */}

        <CohortTitle
          title="Cohort #1: Our inagural cohort."
          about="In this cohort, we funded....insert text here"
        />
        
      </Fade>
    </div>
  );
}

export default ComingSoon;
