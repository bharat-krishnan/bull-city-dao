import React from 'react'
import Fade from 'react-reveal/Fade';
import Footer from '../Components/Footer'

import QuarterBreakS from '../Components/QuarterBreak/QuarterBreakS'
import ContentItem from '../Components/Content/ContentItem'
import ArticleIcon from '@mui/icons-material/Article';
const Research = () => {

    return(
        <div>
            <Fade>

            <QuarterBreakS 
                title = "Our Research"
                subtitle = "Revolutionary blockchain based research that will change the world."
                icon = {<ArticleIcon color = 'secondary' sx={{ fontSize: "200px" }}/>}                
            />
               
            <ContentItem
                to = "https://docs.google.com/forms/d/e/1FAIpQLScZXqEpIjlWf8jjetVCGMkKwCh43df64zYLNutu3rz2_KCWqg/viewform" 
                title = "Smart Contract Research"
                author = "Ibrahim Yusufali"
                about = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum'
            />

            <ContentItem
                to = "https://docs.google.com/forms/d/e/1FAIpQLScZXqEpIjlWf8jjetVCGMkKwCh43df64zYLNutu3rz2_KCWqg/viewform" 
                title = "Smart Contract Research"
                author = "Ibrahim Yusufali"
                about = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum'
            />

            <ContentItem
                to = "https://docs.google.com/forms/d/e/1FAIpQLScZXqEpIjlWf8jjetVCGMkKwCh43df64zYLNutu3rz2_KCWqg/viewform" 
                title = "Smart Contract Research"
                author = "Ibrahim Yusufali"
                about = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum'
            />

            <Footer/>
            </Fade>
        </div>
    )
}

export default Research