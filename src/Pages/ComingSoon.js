import React from 'react'
import Fade from 'react-reveal/Fade';
import QuarterBreakS from '../Components/QuarterBreak/QuarterBreakS'
import LightbulbIcon from '@mui/icons-material/Lightbulb';


const ComingSoon = () => {

    return(
        <div>
            <Fade>
            <QuarterBreakS 
                title = "Our Incubator"
                subtitle = "Every semester, we fund and help guide the best Duke founders pursing blockchain related startups."
                icon = {<LightbulbIcon color = 'secondary' sx={{ fontSize: "200px" }}/>}                
            />
        </Fade>
        </div>
    )
}

export default ComingSoon