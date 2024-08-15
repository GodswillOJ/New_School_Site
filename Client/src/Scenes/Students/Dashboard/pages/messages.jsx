import React, { useState } from 'react';
import { Box, useTheme, Typography, useMediaQuery, Checkbox, MenuItem, ListItemIcon, ListItemText, Pagination, TextField, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DescriptionIcon from '@mui/icons-material/Description';
import PushPinIcon from '@mui/icons-material/PushPin';
import Footer from 'Components/Footer';


const messages = Array.from({ length: 15 }, (_, i) => ({
  sender: 'admin',
  title: `Message Title ${i + 1}`,
  time: `${10 + i}:30 AM`,
}));

const Message = () => {
  const isSmallScreen = useMediaQuery('(max-width:690px)');
  const isMediumScreen = useMediaQuery('(max-width:960px)');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const theme = useTheme();
  const messagesPerPage = 8;

  const filteredMessages = messages.filter((message) =>
    message.title.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedMessages = filteredMessages.slice(
    (page - 1) * messagesPerPage,
    page * messagesPerPage
  );

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1); // Reset to first page when searching
  };

  const handlePageChange = (_, value) => {
    setPage(value);
  };

  return (
    <div style={{
      display: 'block',
      width: '100%',
      overflowX: 'none',
    }}>
      <Box
        sx={{
          display: isSmallScreen ? 'block' : 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          position: 'relative',
          margin: isSmallScreen ? '0.5rem' : isMediumScreen ? '1rem' : '1.5rem',
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            id="message_nav"
            sx={{
              width: isSmallScreen ? '100%' : '70px',
              '&:hover': {
                width: isSmallScreen ? '100%' : '150px', // Expand the menubar on hover
                zIndex: 2, // Ensure the menubar appears on top of the message container
              },
              transition: 'width 0.3s ease-in-out',
              overflow: 'hidden',
              border: isSmallScreen ? '0 0 10px 10px' : 1,
              borderColor: 'grey.400',
              borderRadius: isSmallScreen ? 0 : 2,
              display: 'flex',
              flexDirection: isSmallScreen ? 'row' : 'column',
              alignItems: 'center',
              p: 1,
              bgcolor: 'grey.100',
              position: isSmallScreen ? 'relative' : 'absolute', // Position the menubar absolutely within the parent
              top: 0,
              left: 0,
              height: '100%', // Ensure the menubar occupies the full height of the parent
            }}
          >
            <MenuItem sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
              <ListItemIcon sx={{ color: theme.palette.mode === '' ? '#997d3d' : '#11175e' }}>
                <EditIcon/>
              </ListItemIcon>
              <ListItemText primary="Edit" sx={{ ml: 2, display: isSmallScreen ? 'none' : 'block', color: theme.palette.mode === 'dark' ? '#000' : '#11175e' }} />
            </MenuItem>
            <MenuItem sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
              <ListItemIcon sx={{ color: theme.palette.mode === '' ? '#997d3d' : '#8f6868' }}>
                <StarIcon/>
              </ListItemIcon>
              <ListItemText primary="Favorite" sx={{ ml: 2, display: isSmallScreen ? 'none' : 'block', color: theme.palette.mode === 'dark' ? '#000' : '#8f6868' }} />
            </MenuItem>
            <MenuItem sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
              <ListItemIcon sx={{ color: theme.palette.mode === '' ? '#997d3d' : '#206e72' }}>
                <DescriptionIcon/>
              </ListItemIcon>
              <ListItemText primary="Files" sx={{ ml: 2, display: isSmallScreen ? 'none' : 'block', color: theme.palette.mode === 'dark' ? '#000' : '#206e72' }} />
            </MenuItem>
            <MenuItem sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
              <ListItemIcon sx={{ color: theme.palette.mode === '' ? '#997d3d' : '#900d0d' }}>
                <PushPinIcon/>
              </ListItemIcon>
              <ListItemText primary="Pin" sx={{ ml: 2, display: isSmallScreen ? 'none' : 'block', color: theme.palette.mode === 'dark' ? '#000' : '#900d0d' }} />
            </MenuItem>
          </Box>
        </Box>

        {/* message container */}
        <Box
          border={1}
          borderColor="grey.400"
          p={isSmallScreen ? 1 : isMediumScreen ? 2 : 3}
          borderRadius={4}
          mt={isSmallScreen ? 2 : 0}
          ml= {isSmallScreen ? 0 : '100px'}
          sx={{ zIndex: 0, width: isSmallScreen ? '100%' : '100%' }} // Adjust width based on screen size
        >
          <Box mb={3}>
            <Typography variant={isSmallScreen ? 'body1' : 'body1'} fontWeight="bold">
              gotech_school/student/messages
            </Typography>
            <Typography variant={isSmallScreen ? 'body2' : 'body1'}>
              View messages from school admin
            </Typography>
          </Box>

          <Box mb={2} display="flex" alignItems="center">
            <TextField
              variant="outlined"
              placeholder="Search by title..."
              value={search}
              onChange={handleSearchChange}
              sx={{ flexGrow: 1, marginRight: 2 }}
            />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Box>

          <Box>
            {paginatedMessages.map((message, index) => (
              <MenuItem
                key={index}
                sx={{
                  border: 1,
                  borderColor: 'grey.400',
                  borderRadius: 1,
                  mb: 1,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <ListItemIcon sx={{ display: 'flex', alignItems: 'center' }}>
                  <Checkbox />
                  <StarIcon />
                </ListItemIcon>
                <ListItemText
                  primary={`${message.title}`}
                  secondary={`${message.sender} - ${message.time}`}
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 1,
                    justifyContent: 'space-between',
                    ml: '10px',
                    fontSize: isSmallScreen ? '8px' : '16px',
                  }}
                />
              </MenuItem>
            ))}
          </Box>

          <Box mt={2} display="flex" justifyContent="center">
            <Pagination
              count={Math.ceil(filteredMessages.length / messagesPerPage)}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        </Box>
      </Box>
      <Footer/>
    </div>
  );
};

export default Message;
