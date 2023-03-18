import React from 'react'
import {Box, 
        ListItemText, 
        ListItemButton, 
        ListItem, 
        List, 
        Button,
        Paper,
        Grid,
        Container,
        Typography,
        Divider} 
from '@mui/material'
import Lottie from 'react-lottie'
import animationData from '../images/hero2'
import Logo from '../images/logo.svg'

const Hero = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      }


    return (
        <Box>   
            <Container maxWidth = 'lg'>
            <Grid container>
            <Grid xs = {12} md = {6}>


                <Typography
                    // align = 'left'
                    sx = {{
                        fontWeight: 800,
                        fontSize: {
                            xs: 58,
                            md: 78
                        },
                        lineHeight: 1.2,
     
                        color: '#1E1E24'
                    }}
                >
                    blockchain 
                    innovation @
                </Typography>
                <Typography
                    align = 'left'
                    sx = {{
                        margin: 'none',
                        fontWeight: 800,
                        fontSize: {
                            xs: 58,
                            md: 78
                        },
                        lineHeight: 1.2,

                        color: '#1652f0'
                    }}
                >
                Bull City DAO
                </Typography>
                
                <Box sx={{ p: 2 }}></Box>


                <Typography
                    align = 'left'
                    sx = {{
                        margin: 'none',
                        fontWeight: 500,
                        fontSize: 18,

                        color: '#1E1E24'
                    }}
                >

                Bull City DAO is a student-run DAO of 10+ 
                members exploring and advancing web3 through 
                investing in and supporting founders and doing
                innovative research

                </Typography>

                <Box sx={{ p: 2 }}></Box>


                 <Button sx = {{
                    backgroundColor: "#1E1E24",
                    fontWeight: '800',
                    fontSize: 20,
                    borderRadius: 25,
                    padding: 2,
                    paddingLeft: 10,
                    paddingRight: 10,
                    textTransform: 'none'
                 }}>
                

                    Apply Now
                 </Button>
 
       
            </Grid>
            <Grid sx=  {{
                display: { xs: 'none', md: 'inline-block' }

            }} xs = {6}>
                
            <Box sx={{ p: 1 }}></Box>
                
              <Lottie 
                    options={defaultOptions}
                    height={600}
                    width={600}
                />

              

            </Grid>
           
            </Grid>
            </Container>

        </Box>
    )

}


export default Hero