import React, {useState } from 'react';
import { Box, Typography, useTheme, Menu, Dialog, Button, DialogActions, DialogContent, MenuItem, IconButton, useMediaQuery } from '@mui/material';
import { NavLink } from 'react-router-dom';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import pagent from 'Assets/pagent.jpg';
import road from 'Assets/road.jpg';
import courses from 'Assets/courses_.jpg';
import excursion from 'Assets/excursion.jpg';
import chemistry from 'Assets/chemistry_class.jpg';
import t2 from 'Assets/t2.jpg';
import school from 'Assets/school_gal.jpg';
import profile from 'Assets/profile.jpg';
import Footer from 'Components/Footer';

const tutors = [
  { image: t2, link: '/tutor1' },
  { image: pagent, link: '/tutor2' },
  { image: road, link: '/tutor3' },
  { image: courses, link: '/tutor4' },
  { image: excursion, link: '/tutor5' },
  { image: chemistry, link: '/tutor6' },
];


const Profile = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery('(max-width:1030px)');
  const isSmallSize = useMediaQuery('(max-width:500px)');
  const isVerySmall = useMediaQuery('(max-width:350px)');

    // State for menu and dialog
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleViewImage = () => {
    setDialogOpen(true);
    handleMenuClose();
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };


  return (
    <div style={{ display: 'block' }}>
      <Box
        sx={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: isSmallScreen ? '1fr' : '3fr 1fr',
        }}
      >
        {/* Profile section */}
        <Box
          sx={{
            display: 'flex',
            mt: '20px',
            flexDirection: 'column',
            margin:'2%',
            border: `1px solid ${theme.palette.divider}`,
            padding: theme.spacing(2),
            borderRadius: theme.shape.borderRadius,
            boxShadow: theme.palette.mode === 'light' ? '0 4px 12px rgba(0, 0, 0, 0.1)' : '0 4px 12px rgba(255, 255, 255, 0.3)',
          }}
        >
          {/* First Sub Container */}
          <Box sx={{ display: 'flex', mb: 2 }}>
            {/* Second Child Container */}
            <Box
              sx={{
                width: '100%',
                height: 125,
                backgroundImage: `url(${school})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: theme.palette.mode === 'light' ? '0 4px 12px rgba(0, 0, 0, 0.1)' : '0 4px 12px rgba(255, 255, 255, 0.3)',
                borderRadius: '10px 10px 0 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative', // Important for overlaying the profile image
              }}
            >
              
              {/* First Child Container (Profile Image) moved inside the Second Child Container */}
              <Box
                sx={{
                  width: isSmallSize ? '22%' : '20%',
                  height: isSmallSize ? 100 : 125,
                  borderRadius: '50%',
                  backgroundColor: theme.palette.mode === 'light' ? '#fff' : theme.palette.background.alt,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute', // Overlay position
                  top: '70%',
                  left: '10%', // Adjust based on your design
                  transform: 'translateY(-50%)', // Center vertically
                }}
              >
                              {/* PhotoIcon at the bottom */}
              <IconButton
                sx={{ position: 'absolute', bottom: '8px', left: isSmallScreen ? 'rem' : '8rem', zIndex: 100 }}
                onClick={handleMenuOpen}
              >
                <PhotoCamera
                  sx={{
                    fontSize: '40px',
                  }}
                />
              </IconButton>

              {/* Menu for PhotoIcon */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleViewImage}>View Image</MenuItem>
                <MenuItem>Edit Image</MenuItem>
              </Menu>
                <img
                  src={profile}
                  alt="Profile"
                  style={{
                    width: '90%',
                    height: '90%',
                    borderRadius: '50%',
                    boxShadow: theme.palette.mode === 'light' ? '0 4px 12px rgba(0, 0, 0, 0.1)' : '0 4px 12px rgba(255, 255, 255, 0.3)',
                    objectFit: 'cover',
                  }}
                  onError={(e) => (e.target.src = 'path/to/alternate_image.jpg')}
                />
              </Box>

              <Typography variant="body1" sx={{ 
                fontStyle: 'italic', 
                fontSize: isSmallSize ? '10px' : '26px', 
                ml: isSmallSize ? 12 : 20, 
                p: '10px',
                pl:'40px',
                pr: '40px',
                // fontWeight: 'bold', 
                color: '#FFF', 
                textShadow: '2px 2px 4px rgba(255, 255, 255, 0.7)',
                background: '#0000008a',
                fontFamily: "Pacifico cursive",
                fontWeight: 400,
                // fontStyle: 'italic',
                borderRadius: '30%'
                }}>
                Go_Tech_School
              </Typography>
            </Box>
          </Box>

          {/* Second Sub Container */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* First Child Container */}
            <Box>
              <Typography variant="h3">Name</Typography>
              <Typography variant="body1">Class</Typography>
            </Box>

            {/* Second Child Container */}
            <Box>
              <Typography variant="h2">Events</Typography>
              <Typography variant="body1">Updates</Typography>
            </Box>

            {/* Third Child Container */}
            <Box>
              <Typography variant="address">Lorem ipsum dolor sit amet.</Typography>
            </Box>
          </Box>
        </Box>

        <Dialog open={isDialogOpen} onClose={handleDialogClose} maxWidth="sm"
          PaperProps={{
            sx: {
              width: '100%',
              maxWidth: '500px',
              margin: 'auto',
              borderRadius: '10px'
            }
          }}
        >
          <DialogContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
            {/* Outer Box Container */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
              {/* Inner Box Container with Image */}
              <Box
                sx={{
                  width: 300, // Adjust width and height as needed
                  height: 300,
                  borderRadius: '50%',
                  overflow: 'hidden', // Ensures the image is clipped to the rounded border
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={profile}
                  alt="School"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="primary">
              Close
            </Button>
            <Button onClick={() => console.log('Save Image Logic')} color="primary">
              Save Image
            </Button>
          </DialogActions>
        </Dialog>


        {/* Others section */}
        <div style={{ display: 'block', margin: '4px 30px 0 30px', padding: '12px', width: 'auto' }}>
          {/* Content omitted for brevity */}
          <div>
                  {/* pagent */}
                  <Box sx={{ pb: '10px' }}>
                      <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                      <Box
                          component="img"
                          alt="backgroundImg"
                          src={pagent}
                          width="100%"
                          height="100%"
                          sx={{ objectFit: 'cover' }}
                          boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
                      />
                      <NavLink
                          to="/our_faces"
                          style={{ textDecoration: 'none', color: '#fff' }}
                      >
                          <Box
                          sx={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              width: '150px',
                              height: '100px',
                              transform: 'translate(-50%, -50%)',
                              backgroundColor: 'rgba(0, 0, 0, 0.5)',
                              boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
                              padding: '10px',
                              borderRadius: '5px',
                              textAlign: 'center',
                          }}
                          >
                          <Typography variant="h2">Faces</Typography>
                          <Typography
                              variant="body1"
                              sx={{
                              fontSize: '12px',
                              }}
                          >
                              visit page
                          </Typography>
                          </Box>
                      </NavLink>
                      </Box>
                  </Box>

                  {/* tutors */}
                  <Box sx={{ pb: '10px' }}>
                      <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                      <img
                          src={tutors[0].image}
                          alt={tutors[0].altImage}
                          style={{
                          width: '100%',
                          height: '100%',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                          }}
                      />
                      <NavLink
                          to="/tutors"
                          style={{ textDecoration: 'none', color: '#fff' }}
                      >
                          <Box
                          sx={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              width: '150px',
                              height: '100px',
                              transform: 'translate(-50%, -50%)',
                              backgroundColor: 'rgba(0, 0, 0, 0.5)',
                              boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
                              padding: '10px',
                              borderRadius: '5px',
                              textAlign: 'center',
                          }}
                          >
                          <Typography variant="h2">Tutors</Typography>
                          <Typography
                              variant="body1"
                              sx={{
                              fontSize: '12px',
                              }}
                          >
                              visit page
                          </Typography>
                          </Box>
                      </NavLink>
                      </Box>
                  </Box>

                  {/* road */}
                  <Box sx={{ pb: '10px' }}>
                      <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                      <Box
                          component="img"
                          alt="backgroundImg"
                          src={road}
                          width="100%"
                          height="100%"
                          sx={{
                          objectFit: 'cover',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                          }}
                      />
                      <NavLink
                          to="/events"
                          style={{ textDecoration: 'none', color: '#fff' }}
                      >
                          <Box
                          sx={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              width: '150px',
                              height: '100px',
                              transform: 'translate(-50%, -50%)',
                              boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
                              backgroundColor: 'rgba(0, 0, 0, 0.5)',
                              padding: '10px',
                              borderRadius: '5px',
                              textAlign: 'center',
                          }}
                          >
                          <Typography variant="h2">Road Trips</Typography>
                          <Typography
                              variant="body1"
                              sx={{
                              fontSize: '12px',
                              }}
                          >
                              visit page
                          </Typography>
                          </Box>
                      </NavLink>
                      </Box>
                  </Box>

                  {/* excursion */}
                  <Box sx={{ pb: '10px' }}>
                      <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                      <Box
                          component="img"
                          alt="backgroundImg"
                          src={excursion}
                          width="100%"
                          height="100%"
                          sx={{ objectFit: 'cover' }}
                          boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
                      />
                      <NavLink
                          to="/excursions"
                          style={{ textDecoration: 'none', color: '#fff' }}
                      >
                          <Box
                          sx={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              width: '150px',
                              height: '100px',
                              transform: 'translate(-50%, -50%)',
                              backgroundColor: 'rgba(0, 0, 0, 0.5)',
                              boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
                              padding: '10px',
                              borderRadius: '5px',
                              textAlign: 'center',
                          }}
                          >
                          <Typography variant="h2">Projects</Typography>
                          <Typography
                              variant="body1"
                              sx={{
                              fontSize: '12px',
                              }}
                          >
                              visit page
                          </Typography>
                          </Box>
                      </NavLink>
                      </Box>
                  </Box>

                  {/* chemistry */}
                  <Box sx={{ pb: '10px' }}>
                      <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                      <Box
                          component="img"
                          alt="backgroundImg"
                          src={chemistry}
                          width="100%"
                          height="100%"
                          sx={{ objectFit: 'cover' }}
                          boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
                      />
                      <NavLink
                          to="/chemistry_class"
                          style={{ textDecoration: 'none', color: '#fff' }}
                      >
                          <Box
                          sx={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              width: '250px',
                              height: '100px',
                              transform: 'translate(-50%, -50%)',
                              backgroundColor: 'rgba(0, 0, 0, 0.5)',
                              boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
                              padding: '10px',
                              borderRadius: '5px',
                              textAlign: 'center',
                          }}
                          >
                          <Typography variant="h2">Laboratory</Typography>
                          <Typography
                              variant="body1"
                              sx={{
                              fontSize: '12px',
                              }}
                          >
                              visit page
                          </Typography>
                          </Box>
                      </NavLink>
                      </Box>
                  </Box>

                              {/* school */}
                  <Box sx={{ pb:'10px' }}>
                  <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Box
                          component="img"
                          alt="backgroundImg"
                          src={school}
                          width="100%"
                          height='100%'
                          sx={{ objectFit: 'cover', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', }}
                      />
                      <NavLink to="/school_facilities" style={{ textDecoration: 'none', color: '#fff' }}>
                      <Box
                      sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          width: '150px',
                          height: '100px',
                          transform: 'translate(-50%, -50%)',
                          boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          padding: '10px',
                          borderRadius: '5px',
                          textAlign: 'center',
                      }}
                      >
                          <Typography variant='h2'>School</Typography>
                          <Typography variant='body1' sx={{
                              fontSize:'12px'
                          }}>visit page</Typography>
                      </Box>
                      </NavLink>
                  </Box>
                  </Box>
              </div>
        </div>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&family=Pacifico&display=swap');
        </style>
      </Box>

      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default Profile;
