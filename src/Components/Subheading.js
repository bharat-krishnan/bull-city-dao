import React from 'react'
import {Box, 
        Typography,
        Button,} 
from '@mui/material'

import {styled} from '@mui/system';
import {useTheme} from '@mui/material/styles'


const Subheading = ({align, title, section, subtitle}) => {

    const theme = useTheme()

    const Section = styled(Button)({
        textAlign: 'center',
        padding: 10,
        borderRadius: 25,
        color: theme.palette.secondary.main,
        fontWeight: 800,
        fontSize: 15,
        backgroundColor: theme.palette.primary.main,
        borderWidth: 3,
        borderStyle: 'solid',
        textTransform: 'none',
    })

    const Title = styled(Typography) ( {
        textAlign: align,
        fontSize: 38,
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
        <Section>
            {section}
        </Section>
        </Box>
    
        <Box sx={{ p: 1 }}></Box>

        <Box sx = {{display: 'flex' , justifyContent: align}}>
        <Title>
            {title}
        </Title>
        </Box>

        <Box sx={{ p: 2 }}></Box>

        <Box sx = {{display: 'flex' , justifyContent: align}}>
        <Subtitle>
            {subtitle}
        </Subtitle>
        </Box>
      
        </Box>
    )

}

export default Subheading