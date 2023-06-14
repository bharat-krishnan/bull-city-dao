import React from 'react'
import {Box, 
        Grid,
        Container} 
from '@mui/material'

// import { styled } from '@mui/system';
// import {useTheme} from '@mui/material/styles'

import { TikTok } from "react-tiktok";

const ContentItemVideo = ({link1, link2, link3 }) => {
    
    return(
    <Box sx={{}}>

        <Container>
            <Grid container spacing={0}>

                <Grid item xs={12} md={4}>
                    <TikTok url={link1} />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TikTok url= {link2} />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TikTok url= {link3}/>
                </Grid>

            </Grid>


        </Container>
    </Box>
)}

export default ContentItemVideo