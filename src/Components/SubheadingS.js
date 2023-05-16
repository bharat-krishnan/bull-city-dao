import React from 'react'
import {Box, 
        Typography,} 
from '@mui/material'

import {styled} from '@mui/system';


const SubheadingS = ({align, title,  subtitle}) => {


    const Title = styled(Typography) ( {
        textAlign: align,
        fontSize: 35,
        fontWeight: 700,
    })

    const Subtitle = styled(Typography) ( {
        textAlign: 'justify',
        fontSize: 18,
        fontWeight: 500,
        maxWidth: 750,
    })

    return(
        <Box>

        <Box sx = {{display: 'flex' , justifyContent: align}}>
        <Title>
            {title}
        </Title>
        </Box>

        <Box sx={{ p: 1 }}></Box>

        <Box sx = {{display: 'flex' , justifyContent: align}}>
        <Subtitle>
            {subtitle}
        </Subtitle>
        </Box>
      
        </Box>
    )

}

export default SubheadingS