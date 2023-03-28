import React from 'react'
import {Toolbar,
        CssBaseline,
        Box,
        AppBar,
        Container,} from '@mui/material'

import NavLogo from './NavLogo'
import {NavItems, NavItemsXS} from './NavItems'
import logo from '../../Images/logo.svg'
import {CustomDrawer, CustomIconButton} from './NavMobile'

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
    <Box>
      <CssBaseline />
      <AppBar color="transparent" elevation={0} component="nav" >
        <Container>
        <Toolbar>

          <CustomIconButton 
            handleDrawerToggle = {handleDrawerToggle}
            />
          
          <Box  sx = {{flexGrow: '1'}}>
            <NavLogo logo = {logo} brand = 'BullCityDAO'/> 
          </Box>
          
          <NavItems navItems = {navItems}/>

        </Toolbar>
        </Container>
      </AppBar>

      <Box component="nav">
        <CustomDrawer
          container={container}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          drawerWidth = {drawerWidth}
          drawer = {drawer}
        />
      </Box>

      <Box component="main" sx={{ p: 12}}>
      </Box>
    </Box>
  );
}


export default Navbar;