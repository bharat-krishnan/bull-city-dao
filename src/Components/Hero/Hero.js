import React from 'react'
import {Box, 
        Grid,
        Container,} 
from '@mui/material'
import Lottie from 'react-lottie'
import animationData from '../../Images/hero'
import HeroTitle from './HeroTitle'

import { styled } from '@mui/system';
import {useTheme} from '@mui/material/styles'

const Hero = () => {

    const theme = useTheme()

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      }
    
    const HeroTextBox = styled(Grid)({
        [theme.breakpoints.up('xs')]: {
            display: 'grid'
        },
        [theme.breakpoints.up('md')]: {
            display: 'block'
        },
    })

    const HeroImageBox = styled(Grid)({
        [theme.breakpoints.up('xs')]: {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            display: 'inline-block'
        },
    })

    const HeroImageBoxXS = styled(Grid)({
        [theme.breakpoints.up('xs')]: {
            display: 'inline-block'
        },
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
        transform: 'translate(-1%, 0vw)'
    })

    return (
        <Box >   
        <Container maxWidth = 'lg'>
            <Grid container>

            <HeroTextBox xs = {12} md = {6}>
                <HeroTitle/>
            </HeroTextBox>

            <HeroImageBox xs = {6}>
                <Box sx={{ p: 1 }}></Box>
                <Lottie 
                    options={defaultOptions}
                    height={600}
                    width={600}
                />
            </HeroImageBox>

            <HeroImageBoxXS xs = {12}>
                <Box sx={{ p: 2 }}></Box>
                <Lottie 
                    options={defaultOptions}
                    height={350}
                    width={350}
                />
            </HeroImageBoxXS>
           
            </Grid>
        </Container>
        </Box>
    )

}


export default Hero