import React from 'react'
import {Box, 
        Grid,
        Container, Paper} 
from '@mui/material'

import { styled } from '@mui/system';
// import {useTheme} from '@mui/material/styles'
import SubheadingS from '../SubheadingS'
import { keyframes } from '@mui/system';
import Tilt from 'react-parallax-tilt';

const QuarterBreakS = ({icon, title, subtitle }) => {

    const float = keyframes`
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 15px); }
    100%   { transform: translate(0, -0px); }
        `;


    const FloatingBox = styled(Box)({
        animation: `${float} 3s infinite ease-in-out`,
    })


    return (
        <Box to = "google.com">
            <Container>
            <Grid container spacing = {8} >
                <Grid item md = {2}/>
                <Grid item md = {2}>

                <Tilt scale = {1.1}  tiltReverse={true} tiltAngleYInitial={30}>
                <FloatingBox>
                <Paper elevation= {0} sx = {{ display: {xs: 'none', md: 'flex'}, backgroundColor: "#FFF", justifyContent: 'center', borderStyle: 'solid', borderColor: '#FFF', borderWidth: 3, borderRadius: '20px'}}>
                    
                {icon}                    
                    
                </Paper>
                </FloatingBox>
                </Tilt>
                </Grid>
                
                <Grid item md = {6}>
                    <Box sx={{ display: {xs: 'none', md: 'flex'}, p: 2}}></Box>

                    <SubheadingS
                        align = 'left'
                        title = {title}
                        subtitle = {subtitle}
                    />
                </Grid>

                <Grid item md = {2}/>
             
           
             </Grid>


            <Box sx={{  display: {xs: 'none', md: 'flex'}, p: 6 }}></Box>
         

            </Container>
        </Box>
    )


}

export default QuarterBreakS