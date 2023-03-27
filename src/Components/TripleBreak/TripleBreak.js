import React from 'react'
import {Box, 
        Grid,
        Container,} 
from '@mui/material'

import { styled } from '@mui/system';
import {useTheme} from '@mui/material/styles'
import Logo from '../../Images/logo.svg'

import Subheading from '../Subheading'
import ThirdBox from './ThirdBox'

const TripleBreak = () => {

    return (
        <Box>
        <Container sx = {{justifyContent: 'center'}}>

            <Subheading 
                        align = 'center'
                        section = 'Our Goals'
                        title = 'How are we accomplishing our purpose?'
                        subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et orci at dolor elementum accumsan. Cras at sodales arcu, vitae varius erat. Nam molestie vitae magna ac molestie. Ut sapien metus, ullamcorper at efficitur et, volutpat et nisi. Nulla accumsan elementum lorem in placerat.'
            />

            <Box sx={{ p: 4 }}></Box>

            <Grid container spacing = {4} >

                <Grid item xs = {12} md = {4}>
                    <ThirdBox/>
                </Grid>

                <Grid item  xs = {12} md = {4}>
                    <ThirdBox/>
                </Grid>

                <Grid item  xs = {12} md = {4}>
                    <ThirdBox/>
                </Grid>

            </Grid>

        </Container>
        </Box>
    )


}

export default TripleBreak