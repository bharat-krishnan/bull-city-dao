import React from 'react'
import {Box, 
        ListItemText, 
        ListItemButton, 
        ListItem, 
        List, 
        Button} 
from '@mui/material'
import { styled } from '@mui/system';
import { Link } from "react-router-dom";

const NavItemsBox =   styled(Box)({
    backgroundColor: 'rgba(255, 255, 255, .8)',
    padding: 7,
    borderRadius: 100,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textDecoration: "none",
    backdropFilter: 'blur(6px)'
    
})

const NavItem = styled(Link)({
    color: 'rgba(15, 13, 13, 0.6)',
    fontWeight: '500',
    textDecoration: "none",
    marginLeft: "2rem",
    marginRight: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"

})

const NavButton = styled(Button)({
    color: "#fff",
    backgroundColor: '#1652f0',
    borderRadius:  100,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    fontWeight: '700',
    fontSize: 15,
    textDecoration: "none",
    textTransform: "none",

})

const NavItems = ({navItems}) => {

    return (
        <div>
        <NavItemsBox 
            sx = {{ display: { xs: 'none', md: 'flex' }}}>

            {navItems.map((item) => (
            <NavItem  key = {item} to = {item}>
                {item}
            </NavItem>
            ))}

            <NavButton>
                Apply
            </NavButton>

        </NavItemsBox>

        <NavItemsBox 
            sx = {{ display: { xs: 'flex', md: 'none' }}}>
            
            <NavButton>
                Apply
            </NavButton>

        </NavItemsBox>
       
        </div>
        
    )

}

const NavItemsXS = ({navItems}) => {

    return (
        <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton >
                <NavItem  key = {item} to = {item}>
                    <ListItemText primary={item} />
                </NavItem>
            </ListItemButton>
          </ListItem>
        ))}
        </List>
    )

}



export {NavItemsXS, NavItems}