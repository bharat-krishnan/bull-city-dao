import React from 'react'
import Fade from 'react-reveal/Fade';
import Subheading from '../Components/Subheading'

const ComingSoon = () => {

    return(
        <div>
            <Fade>
            <Subheading 
                align = 'center'
                section = '...'
                title = 'This part of the website is still being built'
                subtitle = 'Come back soon for updates!'
            /> 
        
        </Fade>
        </div>
    )
}

export default ComingSoon