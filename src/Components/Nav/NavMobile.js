
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import {IconButton, 
        Drawer} from '@mui/material'

import {useTheme} 
from '@mui/material/styles'

const CustomDrawer = ({container, mobileOpen, handleDrawerToggle, drawer, drawerWidth}) => {
    return (
        <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            >
            {drawer}
        </Drawer>
    )
}

const CustomIconButton = ({handleDrawerToggle}) => {

    const {palette} = useTheme()

    return (
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
                backgroundColor: palette.nav.main, 
                backdropFilter: 'blur(6px)',
                mr: 2, 
                display: { md: 'none' } 
                }}
        >
            <MenuIcon />
        </IconButton>
    )
}

export {CustomDrawer, CustomIconButton} 

