
import React from 'react';
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from 'Components/HomeNavbar'
import './home_nav.css'


const HomeLayout = () => {
  const isNonMobile = useMediaQuery("(min-width: 760px)");

  return (
    <Box width="100%" height="auto">
      <Box>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default HomeLayout;
