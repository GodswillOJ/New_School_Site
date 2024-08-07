import React, { useState } from 'react';
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from 'Components/NavBars/Navbar';
import Sidebar from "Components/NavBars/SideBar";
import { useGetStudentDashboardQuery } from 'state/api';

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userID = useSelector((state) => state.global.user?.userID); // Ensure this is not undefined
  const { data, error } = useGetStudentDashboardQuery(userID, { skip: !userID }); // Only fetch if userID exists
  console.log('data', data, error);

  if (error) {
    console.error('Error fetching student dashboard:', error);
  }

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100vh">
      <Sidebar 
        user={data || {}} // ensures no break in data fetch
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1} display="flex" flexDirection="column" height="100vh">
        <Navbar 
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Box flexGrow={1} overflow="auto" className="custom-scrollbar">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;