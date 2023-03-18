import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import {Toolbar,
        IconButton, 
        Drawer,
        Divider,
        CssBaseline,
        Box,
        AppBar,
        Container,
        Typography} from '@mui/material'

import {NavLogo, NavLogoXS} from './NavLogo'
import {NavItems, NavItemsXS} from './NavItems'
import Logo from '../images/logo.svg'

const drawerWidth = 240
const navItems = ['About', 'Research', 'Incubator']

const Navbar = (props) => {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} >
      <NavItemsXS navItems = {navItems}/>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', flexGrow: 1}}>
      <CssBaseline />
      <AppBar color="transparent" elevation={0} component="nav" >
        <Container>
        <Toolbar sx={{ display: 'flex', flexGrow: 1}}>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Box sx = {{flexGrow: '1'}}>
          <NavLogo logo = {Logo} brand = 'Bull City DAO'/> 
          </Box>
          

          <NavItems 
          
          navItems = {navItems}/>


        </Toolbar>
        </Container>
      </AppBar>

      <Box component="nav">
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
      </Box>

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}


export default Navbar;