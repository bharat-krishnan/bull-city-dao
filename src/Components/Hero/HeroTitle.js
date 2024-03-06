import React from 'react'
import {Box, 
        Button,
        Typography, Link} 
from '@mui/material'
import { styled } from '@mui/system';
import {useTheme} from '@mui/material/styles'

const HeroTitle = () => {
    const theme = useTheme()

    const HeroHeader = styled(Typography)({
        margin: 'none',
        fontWeight: 800,
        lineHeight: 1.2,
        color: theme.palette.primary.contrastText,

        [theme.breakpoints.up('xs')]: {
            justifySelf: 'center',
            fontSize: 48,
            textAlign: 'center'
        },
        [theme.breakpoints.up('md')]: {
            justifySelf: 'left',
            fontSize: 78,
            textAlign: 'left'
        }
    })

    const HeroHeaderBlue = styled(HeroHeader)({
        color: theme.palette.secondary.main
    })

    const HeroSubtitle = styled(Typography)({
        margin: 'none',
        color: theme.palette.primary.contrastText,
        fontWeight: 500,
        fontSize: 18,

        [theme.breakpoints.up('xs')]: {
            justifySelf: 'center',
            textAlign: 'center'
        },
        [theme.breakpoints.up('md')]: {
            justifySelf: 'left',
            textAlign: 'left'
        }
    })

    const HeroButton = styled(Button) ({
        
        backgroundColor: theme.palette.secondary.main,
        fontWeight: '800',
        fontSize: 20,
        borderRadius: 100,
        padding: 15,
        paddingLeft: 40,
        paddingRight: 40,
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

        [theme.breakpoints.up('xs')]: {
            justifySelf: 'center',
            minWidth: '100%'
           
        },
        [theme.breakpoints.up('md')]: {
            justifySelf: 'left',
            minWidth: '0%'
        }
    })

    return (
        <Box>
            <HeroHeaderBlue>
                BullCityDAO:
            </HeroHeaderBlue>
                
            <HeroHeader>
                innovation in
                blockchain
                Max Testing
            </HeroHeader>
              
            <Box sx={{ p: 2 }}></Box>

            <HeroSubtitle>
            Bull City DAO is a community-run organization exploring and advancing web3 through investing, research and engineering. 
            </HeroSubtitle>

            <Box sx={{ p: 2 }}></Box>

            <Link 
                href="https://docs.google.com/forms/d/e/1FAIpQLScZXqEpIjlWf8jjetVCGMkKwCh43df64zYLNutu3rz2_KCWqg/viewform" 
                target = '_blank' 
                underline="none">
                <HeroButton>
                    Apply Now
                </HeroButton>
            </Link>
        </Box>
    )
}

export default HeroTitle

