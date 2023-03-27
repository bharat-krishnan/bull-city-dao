import React from 'react'
import {Box, Typography} 
from '@mui/material'

import {useTheme} 
from '@mui/material/styles'

import { styled } from '@mui/system';
import { Link } from 'react-router-dom';


const NavLogo = ({brand,logo}) => {

    const {palette} = useTheme()

    const NavLogoBox =   styled(Link)({
        backgroundColor: palette.nav.main,
        padding: 15,
        borderRadius: 100,
        height: 60,
        whiteSpace: "nowrap",
        display: 'flex',
        textDecoration: "none",
        backdropFilter: 'blur(6px)',
        float: 'left',
        left: '0%'
    })
    
    const Brand = styled(Typography) ({
        color: palette.secondary.main,
        fontWeight: '800',
        fontSize: '1.2rem',
        marginLeft: '1rem',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const Logo = styled(Box) ({
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })

    return (
        <NavLogoBox to = '/'>
            
            <Logo>
                <img src={logo} width="40" height="40" />
            </Logo>
               
            <Brand >
                {brand}
            </Brand>

        </NavLogoBox>
    )

}

export default NavLogo