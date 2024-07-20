import React, { useState } from 'react';
import { AppBar, Box, Typography, Link, IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';

const FlexBetweenBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const NavLink = styled(Link)(({ theme }) => ({
  margin: theme.spacing(1),
  textDecoration: 'none',
  color: 'inherit',
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="static"
      sx={{ background: 'none', padding: 0, margin: 0, boxShadow: 'none', width: '100%' }}
    >
      <Box sx={{ width: '100%', padding: 0, margin: 0 }}>
        <FlexBetweenBox flexGrow={1} sx={{ flexDirection: 'column' }}>
          {/* Login/Register and Contact Info Section */}
          <FlexBetweenBox sx={{ width: '100%', background: 'linear-gradient(to right, #460e5b, #0a0000)', color: '#fff', padding: 1, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <Box>
              <NavLink href="/login">
                Login
              </NavLink>
              <NavLink href="/register">
                Register
              </NavLink>
            </Box>
            <Box sx={{ display: isMobile ? 'block' : 'flex' }}>
              <Typography variant="body1" sx={{ margin: 1 }}>
                godswill.ogono@gmail.com
              </Typography>
              <Typography variant="body1" sx={{ margin: 1 }}>
                +23436744231
              </Typography>
            </Box>
          </FlexBetweenBox>
          
          {/* Logo and Menu Section */}
          <FlexBetweenBox sx={{ width: '100%', padding: 1, boxShadow: '0 4px 12px rgba(255, 255, 255, 0.1)', }}>
            <Typography variant="h6" sx={{ 
                margin: 1, 
                color:'#c370c8 !important',
                fontFamily: "Pacifico, cursive",
                fontWeight: '400',
                fontStyle: 'normal',
                textAlign: 'center'  
              }}>
              Gotech_Edu
            </Typography>
            {isMobile ? (
              <>
                <IconButton 
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenuOpen}
                  sx={{ marginLeft: 'auto' }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleMenuClose}>
                    <NavLink href="/" color='#c370c8 !important'>
                      Home
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <NavLink href="/pages" color="inherit">
                      Pages
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <NavLink href="/courses" color="inherit">
                      Courses
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <NavLink href="/contact" color="inherit">
                      Contact
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <NavLink href="/events" color="inherit">
                      Events
                    </NavLink>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Box>
                <NavLink href="/" color='#c370c8 !important'>
                  Home
                </NavLink>
                <NavLink href="/pages">
                  Pages
                </NavLink>
                <NavLink href="/courses">
                  Courses
                </NavLink>
                <NavLink href="/contact">
                  Contact
                </NavLink>
                <NavLink href="/events">
                  Events
                </NavLink>
              </Box>
            )}
          </FlexBetweenBox>
        </FlexBetweenBox>
      </Box>
    </AppBar>
  );
};

export default Navbar;
