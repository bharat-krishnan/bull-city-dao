import React from 'react'
import {Box, 
        ListItemText, 
        ListItemButton, 
        ListItem, 
        List, 
        Button} 
from '@mui/material'

import {Link as MuiLink} 
from '@mui/material'

import { styled } from '@mui/system';
import { Link } from "react-router-dom";
import {useTheme} from '@mui/material/styles'

const NavItems = ({navItems}) => {

    const theme = useTheme()

    const NavItemsBox =   styled(Box)({
        backgroundColor: theme.palette.nav.main,
        padding: 7,
        borderRadius: 100,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textDecoration: "none",
        backdropFilter: 'blur(6px)',

        [theme.breakpoints.up('xs')]: {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    })

    const NavItemsBoxReverse =  styled(NavItemsBox)({
        [theme.breakpoints.up('xs')]: {
            display: 'flex'
        },
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    })
    
    const NavItem = styled(Link)({
        color: theme.palette.nav.contrastText,
        fontWeight: '500',
        textDecoration: "none",
        marginLeft: "2rem",
        marginRight: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    })
    
    const NavButton = styled(Button)({
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main,
        borderRadius:  100,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        fontWeight: '700',
        fontSize: 15,
        textDecoration: "none",
        textTransform: "none",
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

    return (
        <Box>
            <NavItemsBox>

                {navItems.map((item) => (
                <NavItem key={item} to={item === 'About' ? '/' : item.toLowerCase()}>
                    {item}
                </NavItem>))}

                <MuiLink 
                    href="https://docs.google.com/forms/d/e/1FAIpQLScZXqEpIjlWf8jjetVCGMkKwCh43df64zYLNutu3rz2_KCWqg/viewform" 
                    target = '_blank' 
                    underline="none">
                    <NavButton>           
                        Apply 
                    </NavButton>
                </MuiLink>

            </NavItemsBox>

            <NavItemsBoxReverse>

                <MuiLink 
                    href="https://docs.google.com/forms/d/e/1FAIpQLScZXqEpIjlWf8jjetVCGMkKwCh43df64zYLNutu3rz2_KCWqg/viewform" 
                    target = '_blank' 
                    underline="none">
                    <NavButton>
                        Apply 
                    </NavButton>
                </MuiLink>
                
            </NavItemsBoxReverse>
        </Box> 
    )
}

const NavItemsXS = ({navItems}) => {

    const theme = useTheme()

    const NavItem = styled(Link)({
        color: theme.palette.nav.contrastText,
        fontWeight: '500',
        textDecoration: "none",
        marginLeft: "2rem",
        marginRight: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    })

    return (
        <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton >
                <NavItem key={item} to={item === 'About' ? '/' : item.toLowerCase()}>
                    <ListItemText primary={item} />
                </NavItem>
            </ListItemButton>
          </ListItem>
        ))}
        </List>
    )
}


export {NavItemsXS, NavItems}