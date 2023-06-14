import React from 'react'
import Fade from 'react-reveal/Fade';
import Footer from '../Components/Footer'
import QuarterBreakS from '../Components/QuarterBreak/QuarterBreakS'
import ContentItem from '../Components/Content/ContentItem'
import ContentItemVideo from '../Components/Content/ContentItemVideo'
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
                    to = "https://drive.google.com/file/d/1ZagvTA92aV_aHX_5PvGlxNyRvk_6U4gq/view?usp=sharing" 
                    title = "#1 Duke's Blockchain Wizard"
                    author = "Karam Bambawale"
                    about = "A conversation with Duke's own prodigious blockchain engineer Giovanni Vignone, and those who have worked with him in the past."
                />

    
   
                </div>
                }

                videos = {
                    <div>

                        <QuarterBreakS 
                        title = "Our Videos"
                        subtitle = "Tik Toks and Youtube videos from the Bull City DAO. Here are a few, but click on the Video Icon to the left to watch more! "
                        icon = {<SmartDisplayIcon onClick={() => window.open('https://www.tiktok.com/@webthreefundamentals?_t=8cX9HPBVfwc&_r=1')} color = 'secondary' sx={{ fontSize: "200px" }}/>}                
                    />

                    <ContentItemVideo
                        link1 = "https://www.tiktok.com/t/ZTREFT3jT/?t=1"
                        link2 = "https://www.tiktok.com/t/ZTREYLbbw/?t=1"
                        link3 = "https://www.tiktok.com/t/ZTREYYgDj/?t=1"
                    />
        
                    <ContentItemVideo
                        link1 = "https://www.tiktok.com/@webthreefundamentals/video/7219113537468108075?_r=1&_t=8cX9HPBVfwc"
                        link2 = "https://www.tiktok.com/@webthreefundamentals/video/7220952863269244203?_r=1&_t=8cX9HPBVfwc"
                        link3 = "https://www.tiktok.com/@webthreefundamentals/video/7221672852645465390?is_from_webapp=1&sender_device=pc&web_id=7063634872653071877"
                    />

                    <ContentItemVideo
                        link1 = "https://www.tiktok.com/@webthreefundamentals/video/7222484725531741482?is_from_webapp=1&sender_device=pc&web_id=7063634872653071877"
                        link2 = "https://www.tiktok.com/@webthreefundamentals/video/7223547790834634026?is_from_webapp=1&sender_device=pc&web_id=7063634872653071877"
                        link3 = "https://www.tiktok.com/@webthreefundamentals/video/7225023226156535083?is_from_webapp=1&sender_device=pc&web_id=7063634872653071877"
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