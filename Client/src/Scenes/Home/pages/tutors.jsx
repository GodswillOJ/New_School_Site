import React, { useState } from 'react';
import { Box, Grid, Typography, Button, IconButton, useMediaQuery } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import school from 'Assets/school_gal.jpg';
import t2 from 'Assets/t2.jpg';
import t1 from 'Assets/t1.jpg';
import t3 from 'Assets/t3.jpg';
import t4 from 'Assets/t4.jpg';
import t5 from 'Assets/t5.jpg';
import t6 from 'Assets/t6.jpg';

const tutors = [
    {
      name: 'John Doe',
      profession: 'Mathematics Teacher',
      image: t2,
      altImage: 'Alt Image Text',
      subject: 'Mathematics',
      fullName: 'John Doe',
      class: 'SS2',
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
    },
    {
      name: 'Jane Smith',
      profession: 'English Teacher',
      image: t1,
      altImage: 'Alt Image Text',
      subject: 'English',
      fullName: 'Jane Smith',
      class: 'JSS1',
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
    },
    {
      name: 'Michael Brown',
      profession: 'Science Teacher',
      image: t3,
      altImage: 'Alt Image Text',
      subject: 'Science',
      fullName: 'Michael Brown',
      class: 'SS1',
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
    },
    {
      name: 'Emily Johnson',
      profession: 'History Teacher',
      image: t6,
      altImage: 'Alt Image Text',
      subject: 'History',
      fullName: 'Emily Johnson',
      class: 'JSS3',
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
    },
    {
      name: 'Mariam Chisom',
      profession: 'Geography Teacher',
      image: t6,
      altImage: 'Alt Image Text',
      subject: 'Geography',
      fullName: 'David Wilson',
      class: 'SS2',
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
    },
    {
      name: 'Sarah Davis',
      profession: 'Art Teacher',
      image: t5,
      altImage: 'Alt Image Text',
      subject: 'Art',
      fullName: 'Sarah Davis',
      class: 'JSS2',
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
    },
    {
      name: 'Chris Lee',
      profession: 'Physical Education Teacher',
      image: t4,
      altImage: 'Alt Image Text',
      subject: 'Physical Education',
      fullName: 'Chris Lee',
      class: 'SS1',
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
    },
  ];

const Tutors = () => {
  const [selectedTutor, setSelectedTutor] = useState(null);
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const handleSeeProfile = (tutor) => {
    setSelectedTutor(tutor);
  };

  return (
    <>
      {selectedTutor && (
        <Box sx={{ display: 'block', mb: 4, ml: 2, mr: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <img
                src={selectedTutor.image}
                alt={selectedTutor.altImage}
                style={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h1">{selectedTutor.subject}</Typography>
                <Typography variant="h4">{selectedTutor.fullName}</Typography>
                <Typography>{selectedTutor.class}</Typography>
              </Box>
              <Box>
                <Typography>{selectedTutor.lorem}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}

      <Box sx={{ display: isSmallScreen ? 'block' : 'flex', m: '1rem' }}>
        <Box sx={{ display: 'flex', width: isSmallScreen ? '100%' : '300%', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {tutors.map((tutor, index) => (
            <Box key={index} sx={{ display: isSmallScreen ? 'block' : 'flex', width: '100%', mb: 4 }}>
              <Box sx={{ flex: 1 }}>
                <img
                  src={tutor.image}
                  alt={tutor.altImage}
                  style={{ width: '100%' }}
                />
              </Box>
              <Box sx={{ flex: 2, pl: '40px', pt: '20px' }}>
                <Typography variant="h5" fontWeight="bold">{tutor.name}</Typography>
                <Typography variant="subtitle1">{tutor.profession}</Typography>
                <Button variant="contained" onClick={() => handleSeeProfile(tutor)} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
                  See Profile
                </Button>
              </Box>
            </Box>
          ))}
        </Box>

        <div sx={{ display: 'block', mt: 4 }}>
          <>
            <Box>
              <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                <img
                  src={tutors[0].image}
                  alt={tutors[0].altImage}
                  style={{ width: '100%', height: '100%' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '10px',
                    borderRadius: '5px',
                    textAlign: 'center',
                  }}
                >
                  <NavLink to="/tutors" style={{ textDecoration: 'none', color: '#fff' }}>
                    <Typography>tutors</Typography>
                  </NavLink>
                </Box>
              </Box>
            </Box>
          </>
        </div>
      </Box>

      {/* Footer Section */}
      <Box style={{ position: 'relative', width: '100%' }}>
        <Box
          component="img"
          alt="backgroundImg"
          src={school}
          width="100%"
          height="15rem"
          bottom="0"
          sx={{ objectFit: 'cover' }}
        />
        {/* Footer Box container */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            flexDirection: isSmallScreen ? 'column' : 'row',
            padding: '0 40px 0 40px',
            alignItems: 'center',
            justifyContent: isSmallScreen ? 'center' : 'space-between',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'dark',
            width: '100%',
            height: '240px',
          }}
        >
          <Box sx={{ padding: isSmallScreen ? '0 0 0 10px' : '0 0 0 0' }}>
            <Typography
              sx={{
                color: '#fff !important',
                fontFamily: 'Pacifico, cursive',
                fontSize: isSmallScreen ? '18px' : '25px',
                fontWeight: '400',
                justifyContent: 'right gap={2}',
                fontStyle: 'normal',
              }}
            >
              GoTECH_EDU
            </Typography>
            <Typography
              sx={{
                color: '#fff !important',
                fontFamily: 'Quicksand',
                fontWeight: '400',
                justifyContent: 'right gap={2}',
                fontStyle: 'normal',
              }}
            >
              Your excellence education is guaranteed.
            </Typography>
            <Typography
              sx={{
                color: '#fff !important',
                fontFamily: 'Edu AU VIC WA NT Hand, cursive',
                fontWeight: '400',
                justifyContent: 'right gap={2}',
                fontStyle: 'normal',
              }}
            >
              Abule Egba, Lagos Nigeria.
            </Typography>
          </Box>

          <div
            style={{
              justifyContent: isSmallScreen ? 'left' : 'right',
              paddingRight: isSmallScreen ? '60px' : '0',
            }}
          >
            <Box mt={2} sx={{
              display: 'flex',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '5px',
              boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
              justifyContent: 'space-between',
            }}>
              <Typography variant="body2" padding="10px" color="white">
                &copy; mail us.
              </Typography>
              <input type="button" value="email us" style={{
                background: '#4c4c79',
                color: 'white',
                width: '60px',
                border: 'none',
                padding: '5px',
                boxShadow: '0 4px 12px rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
              }} />
            </Box>

            <Box display="flex"
              gap={2}>
              <IconButton href="https://facebook.com" target="_blank" sx={{ color: 'primary.main' }}>
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" sx={{ color: 'primary.main' }}>
                <Twitter />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" sx={{ color: 'primary.main' }}>
                <Instagram />
              </IconButton>
              <IconButton href="https://linkedin.com" target="_blank" sx={{ color: 'primary.main' }}>
                <LinkedIn />
              </IconButton>
            </Box>
            <Box mt={2} sx={{ textAlign: 'right' }}>
              <Typography variant="body2" color="white">
                &copy; 2024, Developer Godswill Ogono
              </Typography>
            </Box>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Tutors;
