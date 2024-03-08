import React from 'react';
import Fade from 'react-reveal/Fade';
import QuarterBreakS from '../Components/QuarterBreak/QuarterBreakS';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ContentItem from '../Components/Content/ContentItem'

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

         <ContentItem
                to = "https://drive.google.com/file/d/1W6eou8GDRm4Lvum1rBAxQJWDS8f4Mc9g/view?usp=sharing" 
                title = "Crypto’s Lehman Moment?"
                author = "Sujay Alluri"
                about = "In this analysis, I recount the cataclysmic fall of FTX, drawing a parallel to the financial turmoil akin to Lehman Brothers, marking a pivotal moment in cryptocurrency history. I scrutinize the underlying factors, such as the misappropriation of client funds and opaque operations that precipitated this downfall, compounded by a precipitous bank run following Binance's withdrawal. Furthermore, I explore the consequent ripples through the crypto sector, emphasizing the urgent call for regulatory clarity and the gravitation towards self-custody and decentralized mechanisms to fortify trust and security. This event, I argue, could herald a new era of stringent oversight, akin to the regulatory aftermath of the 2008 financial debacle, shaping the future trajectory of digital assets."
            />
        
      </Fade>
    </div>
  );
}

export default ComingSoon;
