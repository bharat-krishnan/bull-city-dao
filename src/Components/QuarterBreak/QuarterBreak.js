import React from 'react'
import {Box, 
        Grid,
        Container, Paper} 
from '@mui/material'

import { styled } from '@mui/system';
// import {useTheme} from '@mui/material/styles'
import Logo from '../../Images/logo.svg'

import Subheading from '../Subheading'
import { keyframes } from '@mui/system';
import Tilt from 'react-parallax-tilt';

const QuarterBreak = () => {

    const float = keyframes`
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 15px); }
    100%   { transform: translate(0, -0px); }
        `;


    const FloatingBox = styled(Box)({
        animation: `${float} 3s infinite ease-in-out`,
    })


    return (
        <Box>
            <Container>
            <Grid container spacing = {8} >
                <Grid item md = {5}>

                <Tilt scale = {1.1} tiltAxis = 'y' tiltReverse={true} tiltAngleYInitial={30}>
                <FloatingBox>
                <Paper elevation= {0} sx = {{ display: {xs: 'none', md: 'flex'}, backgroundColor: "#EEE", justifyContent: 'center', borderStyle: 'solid', borderColor: '#EEE', borderWidth: 3, borderRadius: '50px'}}>
                    
                    <img alt = "big logo" src={Logo} width="350" height="350" />

                    
                    
                </Paper>
                </FloatingBox>
                </Tilt>
                </Grid>
                
                <Grid item md = {7}>
                    <Box sx={{ display: {xs: 'none', md: 'flex'}, p: 2}}></Box>

                    <Subheading 
                        align = 'left'
                        section = 'Our Mission'
                        title = 'What are we doing this for?'
                        subtitle = 'Duke University was the genesis of some of the greatest blockchain companies such as Coinbase, Paradigm, FEI Protocol, Phantom, and many others. We believe that the number of Duke student blockchain innovators will continue to grow, and we want to support these critical thinkers. The BullCityDAO will create a startup incubator, continuously fund research initiatives, grow a team of blockchain engineers, and seed a cryptocurrency fund to support the growing community.'
                    />
                </Grid>

             
           
             </Grid>
                
             <Grid container  >
                <Grid item>
                <Tilt tiltReverse={true}>
                <FloatingBox>

                <Paper xs = {12} sx = {{ display: {xs: 'flex', md: 'none'}, backgroundColor: "#EEE", justifyContent: 'center',  marginTop: '50px', borderStyle: 'solid', borderColor: '#EEE', borderWidth: 3,borderRadius: '50px'}}>
                    
                    <img alt = 'mobile logo' src={Logo} width="350vw" height="200" />
                </Paper>

                </FloatingBox>
                </Tilt>
                </Grid>
                
            </Grid>


            </Container>
        </Box>
    )


}

export default QuarterBreak