import React from 'react'
import {Box, 
        Grid,
        Container, Paper} 
from '@mui/material'

import { styled } from '@mui/system';
import {useTheme} from '@mui/material/styles'
import Logo from '../../Images/logo.svg'

import Subheading from '../Subheading'
import { keyframes } from '@mui/system';

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
                <Box  sx = {{ display: {xs: 'none', md: 'flex'}, backgroundColor: "#EEE", justifyContent: 'center', borderStyle: 'solid', borderColor: '#EEE', borderWidth: 3, borderRadius: '50px'}}>
                    <FloatingBox>
                    <img src={Logo} width="350" height="350" />

                    </FloatingBox>
                    
                </Box>
                </Grid>
                
                <Grid item md = {7}>
                    <Box sx={{ display: {xs: 'none', md: 'flex'}, p: 2}}></Box>

                    <Subheading 
                        align = 'left'
                        section = 'Our Mission'
                        title = 'What are we doing this for?'
                        subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et orci at dolor elementum accumsan. Cras at sodales arcu, vitae varius erat. Nam molestie vitae magna ac molestie. Ut sapien metus, ullamcorper at efficitur et, volutpat et nisi. Nulla accumsan elementum lorem in placerat.'
                    />
                </Grid>

             
           
             </Grid>
                
             <Grid container  >
                <Grid item>
                <Paper xs = {12} sx = {{ display: {xs: 'flex', md: 'none'}, justifyContent: 'center',  marginTop: '50px', borderStyle: 'solid', borderColor: '#EEE', borderWidth: 3,borderRadius: '50px'}}>
                    
                    <img src={Logo} width="350vw" height="200" />
                </Paper>
                </Grid>
            </Grid>


            </Container>
        </Box>
    )


}

export default QuarterBreak