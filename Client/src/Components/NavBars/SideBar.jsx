import React, { useEffect, useState } from 'react';
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
    Link
} from "@mui/material";
import {
    SettingsOutlined,
    ChevronRightOutlined,
    ChevronLeft,
    HomeOutlined,
    Email,
    Assignment,
    PublicOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    TrendingUpOutlined,
    PieChartOutlined,
    AccountCircle,
    EventNote,
    CreditScore,
    AccountBalance,
} from "@mui/icons-material";
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from './flexBetween';
import profile from 'Assets/profile.jpg';

const navItems = [
    { text: "dashboard", icon: <HomeOutlined />, path: "/student/dashboard" },
    { text: "Student Section", icon: null },
    { text: "Profile", icon: <AccountCircle />, path: "/student/profile" },
    { text: "Timetable", icon: <EventNote />, path: "/student/timetable" },
    { text: "Messages", icon: <Email />, path: "/student/messages" },
    { text: "Geography", icon: <PublicOutlined />, path: "student/geography" },
    { text: "Courses", icon: null },
    { text: "Assignments", icon: <Assignment />, path: "/student/assignments" },
    { text: "Attendance", icon: <TodayOutlined />, path: "/student/attendance" },
    { text: "Grades", icon: <CreditScore />, path: "/student/grades" },
    { text: "Results", icon: <CalendarMonthOutlined />, path: "/student/results" },
    { text: "Extra-curricular activities", icon: <PieChartOutlined />, path: "/student/activities" },
    { text: "Management", icon: null },
    { text: "Payments", icon: <AccountBalance />, path: "/student/payments" },
    { text: "Library access", icon: <TrendingUpOutlined />, path: "/student/library" },
];

const Sidebar = ({ user, drawerWidth, isSidebarOpen, setIsSidebarOpen, isNonMobile }) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();

    const userImageUrl = `https://gotech-ecommerce.onrender.com/public/${user.image}`;

    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname]);

    return (
        <Box component="nav">
            {isSidebarOpen && (
                <Drawer
                    open={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    variant="persistent"
                    anchor="left"
                    sx={{
                        width: drawerWidth,
                        "& .MuiDrawer-paper": {
                            color: theme.palette.mode === 'light' ? '#fff' : '#fff', // Adjust dark color as needed
                            backgroundColor: theme.palette.mode === 'light' ? '#181434e6' : '#333', // Adjust dark color as needed
                            boxSizing: "border-box",
                            borderWidth: isNonMobile ? 0 : "2px",
                            width: drawerWidth
                        },
                        "& .MuiPaper-root-MuiDrawer-paper": {
                            width: drawerWidth
                        }
                    }}
                >
                    <Box width="100%">
                        <Box m="1.5rem 0 2rem 0">
                            <FlexBetween color={theme.palette.secondary.main}>
                                <Box display="flex" alignItems="center" gap="0.5rem">
                                    <FlexBetween color={theme.palette.secondary.main}>
                                        <Box display="flex" alignItems="center" ml="2rem">
                                            <Link href="/" sx={{ 
                                                textDecoration: 'none', 
                                                color: theme.palette.mode === 'light' ? '#d1a440;' : '#d1a440',
                                                }}>
                                                <Typography variant="h4" fontWeight="bold" sx={{
                                                    fontFamily: "Pacifico cursive",
                                                    fontStyle: 'italic',
                                                    fontWeight: 'bold',
                                                    textShadow: '0 4px 4px rgb(3 13 12)'
                                                }}>
                                                    Go_tech_School
                                                </Typography>
                                            </Link>
                                        </Box>
                                        <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                            <ChevronLeft 
                                                sx={{
                                                    color: theme.palette.mode === 'light' ? '#b8aa7d' : '#997d3d',
                                                    textShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
                                                }}
                                            />
                                        </IconButton>
                                    </FlexBetween>
                                </Box>
                            </FlexBetween>
                            <List>
                                {navItems.map(({ text, icon, path }) => {
                                    if (!icon) {
                                        return (
                                            <Typography key={text} sx={{ m: "0.25rem 0 1rem 3rem" }}>
                                                {text}
                                            </Typography>
                                        );
                                    }

                                    const lcText = text.toLowerCase();

                                    return (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton
                                            onClick={() => {
                                                navigate(path);
                                                setActive(lcText);
                                            }}
                                            sx={{
                                                backgroundColor: active === lcText 
                                                    ? theme.palette.secondary[300] 
                                                    : "transparent",
                                                color: theme.palette.mode === 'light' 
                                                    ? '#fff' 
                                                    : (active === lcText
                                                        ? theme.palette.primary[600]
                                                        : theme.palette.secondary[100]),
                                                '&:hover': {
                                                    backgroundColor: theme.palette.mode === 'light'
                                                        ? '#070d2cd1'  // Darker color on hover in light mode
                                                        : '#03040659',  // Adjust for dark mode if needed
                                                },
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    ml: "2rem",
                                                    color: theme.palette.mode === 'light' 
                                                        ? '#fff' 
                                                        : (active === lcText 
                                                            ? theme.palette.primary[600] 
                                                            : theme.palette.secondary[200]),
                                                }}
                                            >
                                                {icon}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                            {active === lcText && (
                                                <ChevronRightOutlined sx={{ ml: "auto" }} />
                                            )}
                                        </ListItemButton>
                                    </ListItem>


                                    );
                                })}
                            </List>
                        </Box>
                    </Box>

                    {/* User image */}
                    <Box position="relative" bottom="-5" width='222px'
                    >
                        <Divider />
                        <FlexBetween textTransform="none" gap="1rem" m="1rem 2rem 1rem 3rem">
                            <Box
                                component="img"
                                alt="profile"
                                src={userImageUrl}
                                onError={(e) => { e.target.onerror = null; e.target.src = profile; }}
                                height="40px"
                                width="40px"
                                borderRadius="50%"
                                sx={{ objectFit: "cover" }}
                            />
                            <Box textAlign="left">
                                <Typography fontWeight="bold" fontSize="0.9rem" sx={{ color: theme.palette.secondary[100] }}>
                                    {user.username}
                                </Typography>
                                <Typography fontSize="0.8rem" sx={{ color: theme.palette.secondary[300] }}>
                                    Username
                                </Typography>
                            </Box>
                            <SettingsOutlined sx={{ color: theme.palette.secondary[300] }} fontSize="25px" />
                        </FlexBetween>
                    </Box>
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&family=Pacifico&display=swap');
                    </style>
                </Drawer>
            )}
        </Box>
    );
};

export default Sidebar;
