import React from 'react'
import Fade from 'react-reveal/Fade';
import Footer from '../Components/Footer'
import QuarterBreakS from '../Components/QuarterBreak/QuarterBreakS'
import ContentItem from '../Components/Content/ContentItem'
import TabNav from '../Components/Tabs/TabNav'
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';

const Content = () => {

    return(
        <div>
            <Fade>
            <TabNav 

                podcasts = {
                <div>
                    <QuarterBreakS 
                    title = "Our Podcasts"
                    subtitle = "Revolutionary blockchain based podcasts that will change the world."
                    icon = {<HeadphonesIcon color = 'secondary' sx={{ fontSize: "200px" }}/>}                
                />
                   
                <ContentItem
                    to = "https://docs.google.com/forms/d/e/1FAIpQLScZXqEpIjlWf8jjetVCGMkKwCh43df64zYLNutu3rz2_KCWqg/viewform" 
                    title = "#3 Conversation with Sujay Alluri"
                    author = "Karam Bambawale"
                    about = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum'
                />
    
                <ContentItem
                    to = "https://docs.google.com/forms/d/e/1FAIpQLScZXqEpIjlWf8jjetVCGMkKwCh43df64zYLNutu3rz2_KCWqg/viewform" 
                    title = "#2 Conversation with Manmit Singh"
                    author = "Karam Bambawale"
                    about = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum'
                />
    
                <ContentItem
                    to = "https://docs.google.com/forms/d/e/1FAIpQLScZXqEpIjlWf8jjetVCGMkKwCh43df64zYLNutu3rz2_KCWqg/viewform" 
                    title = "#1 Conversation With Giovanni Vignone"
                    author = "Karam Bambawale"
                    about = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum'
                />

    
   
                </div>
                }

                videos = {
                    <div>
                        <QuarterBreakS 
                        title = "Our Videos"
                        subtitle = "Tik Toks and Youtube videos from the Bull City DAO. Enjoy!"
                        icon = {<SmartDisplayIcon color = 'secondary' sx={{ fontSize: "200px" }}/>}                
                    />
                       
                    <ContentItem
                        to = "https://docs.google.com/forms/d/e/1FAIpQLScZXqEpIjlWf8jjetVCGMkKwCh43df64zYLNutu3rz2_KCWqg/viewform" 
                        title = "How to deploy an NFT on OpenSea"
                        author = "Giovanni Vignone"
                        about = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum'
                    />
        
                    <ContentItem
                        to = "https://docs.google.com/forms/d/e/1FAIpQLScZXqEpIjlWf8jjetVCGMkKwCh43df64zYLNutu3rz2_KCWqg/viewform" 
                        title = "Why Ethereum is going to the moon"
                        author = "Sujay Alluri"
                        about = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum'
                    />
        
                    <ContentItem
                        to = "https://docs.google.com/forms/d/e/1FAIpQLScZXqEpIjlWf8jjetVCGMkKwCh43df64zYLNutu3rz2_KCWqg/viewform" 
                        title = "Tackling the FTX collapse"
                        author = "Dhruv Bindra"
                        about = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum'
                    />
    
        
                    
                    </div>
                    }




            />

            <Footer/>

            </Fade>
        </div>
    )
}

export default Content