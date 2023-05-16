import React from 'react'
import {Box, 
        Grid,
        Container} 
from '@mui/material'

// import { styled } from '@mui/system';
// import {useTheme} from '@mui/material/styles'

import { TikTok } from "react-tiktok";

const ContentItemVideo = ({title, author, about, to }) => {
    
    return(
    <Box sx={{}}>

        <Container>
            <Grid container spacing={0}>

                <Grid item xs={12} md={4}>
                    <TikTok url="https://www.tiktok.com/@bitcoinbasic/video/7190025346824097030" />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TikTok url="https://www.tiktok.com/@blockbarnews/video/7164072671603445038?lang=en" />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TikTok url="https://www.tiktok.com/@blockchain.future/video/7229088682857221381?lang=en" />
                </Grid>

            </Grid>


        </Container>
    </Box>
)}

export default ContentItemVideo