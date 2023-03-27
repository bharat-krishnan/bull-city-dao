import React from 'react'

import Subheading from '../Components/Subheading'
import Fade from 'react-reveal/Fade';

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