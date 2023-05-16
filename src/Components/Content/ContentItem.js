import React from 'react'
import {Box, 
        Grid,
        Container} 
from '@mui/material'

// import { styled } from '@mui/system';
// import {useTheme} from '@mui/material/styles'

import ContentText from './ContentText'

const ContentItem = ({title, author, about, to }) => {

    return (
        <Box sx = {{}}>
            <Container >
            <Grid container spacing = {8} >
                <Grid item md = {2}/>
                
                <Grid sx = {{marginBottom: {xs: 'none', md: '7%'}, backgroundColor: '#EEE', padding: '50px', borderRadius: '50px'}} item md = {9}>
                    <ContentText
                        to = {to}
                        align = 'left'
                        author = {author}
                        title = {title}
                        about = {about}
                    />
                </Grid>

                <Grid item md = {1}/>
             
           
             </Grid>
                

            </Container>
        </Box>
    )


}

export default ContentItem