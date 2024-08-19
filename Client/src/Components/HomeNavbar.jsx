import React, { useState } from 'react';
import { AppBar, Box, Typography, Link, IconButton, Menu, useTheme, MenuItem, useMediaQuery } from '@mui/material';
import { LightModeOutlined, DarkModeOutlined } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux';
import { setMode, setLoginStatus } from 'state/index';
import { useNavigate } from 'react-router-dom';

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
  const [pagesAnchorEl, setPagesAnchorEl] = useState(null);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const { isLoggedIn } = useSelector((state) => state.global.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme()

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePagesMenuOpen = (event) => {
    setPagesAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setPagesAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    dispatch(setLoginStatus(false));
    navigate('/login');
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
              <NavLink href="/registerStudent">
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
            <Link href='/'>
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
            </Link>
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
                  <MenuItem onClick={handlePagesMenuOpen}>
                    <NavLink href="#" color="inherit">
                      Pages
                    </NavLink>
                  </MenuItem>

                  <Menu
                    anchorEl={pagesAnchorEl}
                    open={Boolean(pagesAnchorEl)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleMenuClose}>
                      <NavLink href={isLoggedIn ? "/student/dashboard" : "/login"} color="inherit">
                        {isLoggedIn ? "Dashboard" : "Login"}
                      </NavLink>
                    </MenuItem>
                    <MenuItem key="settings" onClick={handleMenuClose}>
                      <IconButton onClick={() => dispatch(setMode())}>
                        {theme.palette.mode === "dark" ? (
                          <DarkModeOutlined sx={{ fontSize: "25px" }} />
                        ) : (
                          <LightModeOutlined sx={{ fontSize: "25px" }} />
                        )}
                      </IconButton>
                    </MenuItem>
                    {isLoggedIn && (
                      <MenuItem onClick={handleLogout}>
                        Logout
                      </MenuItem>
                    )}
                  </Menu>
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
                <NavLink
                  href="#"
                  color="inherit"
                  onClick={handlePagesMenuOpen}
                >
                  Pages
                </NavLink>
                <Menu
                  anchorEl={pagesAnchorEl}
                  open={Boolean(pagesAnchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleMenuClose}>
                    <NavLink href={isLoggedIn ? "/student/dashboard" : "/login"} color="inherit">
                      {isLoggedIn ? "Dashboard" : "Login"}
                    </NavLink>
                  </MenuItem>
                  <MenuItem key="settings" onClick={handleMenuClose}>
                      <IconButton onClick={() => dispatch(setMode())}>
                        {theme.palette.mode === "dark" ? (
                          <DarkModeOutlined sx={{ fontSize: "25px" }} />
                        ) : (
                          <LightModeOutlined sx={{ fontSize: "25px" }} />
                        )}
                      </IconButton>
                    </MenuItem>
                  {isLoggedIn && (
                    <MenuItem onClick={handleLogout}>
                      Logout
                    </MenuItem>
                  )}
                </Menu>
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
