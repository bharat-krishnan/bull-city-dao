import React, {useState} from 'react'
import {Box, 
        Grid,
        Container, Paper} 
from '@mui/material'

import { styled } from '@mui/system';
import {useTheme} from '@mui/material/styles'
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

    const [scale, setScale] = useState(1.1);

    return (
        <Box>
            <Container>
            <Grid container spacing = {8} >
                <Grid item md = {5}>

                <Tilt scale = {scale} tiltAxis = 'y' tiltReverse={true} tiltAngleYInitial={30}>
                <FloatingBox>
                <Paper elevation= {0} sx = {{ display: {xs: 'none', md: 'flex'}, backgroundColor: "#EEE", justifyContent: 'center', borderStyle: 'solid', borderColor: '#EEE', borderWidth: 3, borderRadius: '50px'}}>
                    
                    <img src={Logo} width="350" height="350" />

                    
                    
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
                        subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et orci at dolor elementum accumsan. Cras at sodales arcu, vitae varius erat. Nam molestie vitae magna ac molestie. Ut sapien metus, ullamcorper at efficitur et, volutpat et nisi. Nulla accumsan elementum lorem in placerat.'
                    />
                </Grid>

             
           
             </Grid>
                
             <Grid container  >
                <Grid item>
                <Tilt tiltReverse={true}>
                <FloatingBox>

                <Paper xs = {12} sx = {{ display: {xs: 'flex', md: 'none'}, backgroundColor: "#EEE", justifyContent: 'center',  marginTop: '50px', borderStyle: 'solid', borderColor: '#EEE', borderWidth: 3,borderRadius: '50px'}}>
                    
                    <img src={Logo} width="350vw" height="200" />
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