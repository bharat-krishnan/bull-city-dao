import React from 'react'
import {Box, Typography} 
from '@mui/material'

import {useTheme} 
from '@mui/material/styles'

import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const NavLogoBox =   styled(Link)({
    backgroundColor: 'rgba(255, 255, 255, .8)',
    padding: 15,
    borderRadius: 100,
    height: 60,
    color: "#000",
    whiteSpace: "nowrap",
    display: 'flex',
    textDecoration: "none",
    flexGrow: 1,
    backdropFilter: 'blur(6px)'
})

const Brand = styled(Typography) ({
    color: '#1652f0',
    fontWeight: '800',
    fontSize: '1.2rem',
    marginLeft: '1rem',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',

})

const NavLogo = ({brand,logo}) => {

    return (
        <NavLogoBox 
            sx = {{
                    float: {xs: 'none', sm: 'left'} ,
                    left: {xs: '50%', sm: '0%'}
                }}
            to = '/'
            >
            
            <Box
            sx = {{
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
            
                <img src={logo} width="40" height="40" />

            </Box>

            <Brand >
            {brand}
            </Brand>

        </NavLogoBox>
    )

}

const NavLogoXS = ({brand,logo}) => {

    return (
        <NavLogoBox 
            sx = {{ display: { xs: 'flex', sm: 'none'  }}}>

            <Brand >
            {brand}
            </Brand>

        </NavLogoBox>
    )
    
}


export {NavLogo, NavLogoXS}