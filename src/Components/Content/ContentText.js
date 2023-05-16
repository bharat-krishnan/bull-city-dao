import React from 'react'
import {Box, 
        Typography,
        Button,} 
from '@mui/material'

import {Link as MuiLink} 
from '@mui/material'
import {styled} from '@mui/system';
import {useTheme} from '@mui/material/styles'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ContentText = ({align, title, author, about, link}) => {

    const theme = useTheme()

    const Link = styled(Button)({
        textAlign: 'center',
        padding: 5,
        borderRadius: 25,
        color: theme.palette.secondary.main,
        fontWeight: 800,
        fontSize: 10,
        backgroundColor: theme.palette.secondary.main,
        borderWidth: 3,
        borderStyle: 'solid',
        textTransform: 'none',
        transition: 'all .2s ease-in-out',
        ":hover": {
            backgroundColor: theme.palette.secondary.main,
            transform: 'scale(1.05)'
        },
        ":active": {
            backgroundColor: theme.palette.secondary.main,
            transform: 'scale(1)'
        },
    })

    const Title = styled(Typography) ( {
        textAlign: align,
        fontSize: 25,
        fontWeight: 800,
    })

    const Author = styled(Typography) ( {
        textAlign: align,
        fontSize: 15,
        fontWeight: 800,
    })

    const About = styled(Typography) ( {
        textAlign: 'justify',
        fontSize: 15,
        fontWeight: 500,
        maxWidth: 750,
    })

    return(
        <Box>
     
        <Box sx = {{display: 'flex' , justifyContent: align}}>
        <MuiLink 
            href="https://docs.google.com/forms/d/e/1FAIpQLScZXqEpIjlWf8jjetVCGMkKwCh43df64zYLNutu3rz2_KCWqg/viewform" 
            target = '_blank' 
            underline="none">
            <Link>
                <OpenInNewIcon color = "primary" />
            </Link>
        </MuiLink>
        
        </Box>
    
        <Box sx={{ p: 1 }}></Box>

        <Box sx = {{display: 'flex' , justifyContent: align}}>
        <Title>
            {title}
        </Title>
        </Box>
        <Box sx = {{display: 'flex' , justifyContent: align}}>
        <Author>
            {author}
        </Author>
        </Box>

        <Box sx={{ p: 1 }}></Box>

        <Box sx = {{display: 'flex' , justifyContent: align}}>
        <About>
            {about}
        </About>
        </Box>
      
        </Box>
    )

}

export default ContentText