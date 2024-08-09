import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { NavLink } from 'react-router-dom';
import pagent from 'Assets/pagent.jpg';
import road from 'Assets/road.jpg';
import courses from 'Assets/courses_.jpg';
import excursion from 'Assets/excursion.jpg';
import chemistry from 'Assets/chemistry_class.jpg';
import t2 from 'Assets/t2.jpg';
import school from 'Assets/school_gal.jpg';
import profile from 'Assets/profile.jpg';
import Footer from 'Components/Footer';

const Profile = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery('(max-width:1030px)');

  const tutors = [
    { image: t2, link: '/tutor1' },
    { image: pagent, link: '/tutor2' },
    { image: road, link: '/tutor3' },
    { image: courses, link: '/tutor4' },
    { image: excursion, link: '/tutor5' },
    { image: chemistry, link: '/tutor6' },
  ];


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
            border: `1px solid ${theme.palette.divider}`,
            padding: theme.spacing(2),
            borderRadius: theme.shape.borderRadius,
          }}
        >
          {/* First Sub Container */}
          <Box sx={{ display: 'flex', mb: 2 }}>
            {/* Second Child Container */}
            <Box
              sx={{
                width: '100%',
                height: 100,
                backgroundImage: `url(${school})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative', // Important for overlaying the profile image
              }}
            >
              {/* First Child Container (Profile Image) moved inside the Second Child Container */}
              <Box
                sx={{
                  width: '20%',
                  height: 100,
                  borderRadius: '50%',
                  backgroundColor: theme.palette.grey[200],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute', // Overlay position
                  top: '50%',
                  left: '10%', // Adjust based on your design
                  transform: 'translateY(-50%)', // Center vertically
                }}
              >
                <img
                  src={profile}
                  alt="Profile"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                  onError={(e) => (e.target.src = 'path/to/alternate_image.jpg')}
                />
              </Box>

              <Typography variant="body1" sx={{ fontStyle: 'italic', ml: 2 }}>
                GO_TECH_SCHOOL
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

        {/* Others section */}
        <div style={{ display: 'block', mt: 4, padding: '12px', width: 'auto' }}>
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
      </Box>

      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default Profile;
