import React from 'react'
import {Box, 
        Button,
        Typography} 
from '@mui/material'

import { styled } from '@mui/system';
import {useTheme} from '@mui/material/styles'

const ThirdBox = ({icon, title, description}) => {

    const theme = useTheme()

    const Icon = styled(Button)({
        padding: 10,
        color: theme.palette.secondary.main,
        textTransform: 'none',
        backgroundColor: '#EEE'
    })

    const Title = styled(Typography) ( {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 700,
    })

    const Text = styled(Typography) ( {
        textAlign: 'left',
        fontSize: 16,
        fontWeight: 500,
        margin: 20
    })


    const ThirdBox = styled(Box) ({
        padding: 20,
        borderRadius: 40,
        borderColor: '#EEE',
        borderWidth: 3,
        borderStyle: 'solid',
        flexGrow: 1,
        backgroundColor: '#EEE',
        height: 650
    })


    return (
        <ThirdBox>
            <Box sx = {{display: 'flex' , justifyContent: 'center'}}>
            <Icon>
                {icon}
            </Icon>
            </Box>
        
            <Box sx={{ p: 1 }}></Box>

            <Box sx = {{display: 'flex' , justifyContent: 'center'}}>
            <Title>
                {title}
            </Title>
            </Box>

            <Box sx={{ p: 2 }}></Box>

            <Box sx = {{display: 'flex' , justifyContent: 'center'}}>
            <Text>
                {description}
            </Text>
            </Box>
  
        </ThirdBox>
    )
}

export default ThirdBox