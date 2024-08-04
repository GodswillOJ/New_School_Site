import React, { useState } from 'react';
import { Box, Grid, Typography, Button, Modal, IconButton, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';
import school from 'Assets/school_gal.jpg';
import pagent from 'Assets/pagent.jpg';
import road from 'Assets/road.jpg';
import courses from 'Assets/courses_.jpg';
import excursion from 'Assets/excursion.jpg';
import chemistry from 'Assets/chemistry_class.jpg';
import Footer from 'Components/Footer';
import t2 from 'Assets/t2.jpg';
import t1 from 'Assets/t1.jpg';
import t3 from 'Assets/t3.jpg';
import t4 from 'Assets/t4.jpg';
import t5 from 'Assets/t5.jpg';
import t6 from 'Assets/t6.jpg';
import t7 from 'Assets/t7.jpg';

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
      image: t7,
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
    const [open, setOpen] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width:800px)');
  
    const handleSeeProfile = (tutor) => {
      setSelectedTutor(tutor);
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      setSelectedTutor(null);
    };
  
  return (
    <>
    <Modal open={open} onClose={handleClose}>
    <Box
        sx={{
        position: 'relative',
        display: 'block',
        mb: 4,
        ml: 2,
        mr: 2,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
        p: 2,
        maxWidth: '80%',
        mx: 'auto',
        mt: 4,
        maxHeight: '80vh', // Set a maximum height
        overflowY: 'auto', // Enable vertical scrolling
        }}
    >
        <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: (theme) => theme.palette.grey[500],
        }}
        >
        <CloseIcon />
        </IconButton>
        {selectedTutor && (
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
        )}
    </Box>
    </Modal>

      <Box sx={{ display: isSmallScreen ? 'block' : 'flex', m: '1rem' }}>
        <Box sx={{ display: 'flex', width: isSmallScreen ? '100%' : '300%', justifyContent: 'space-between', flexWrap: 'wrap', }}>

          {tutors.map((tutor, index) => (
            <Box key={index} sx={{ display: isSmallScreen ? 'block' : 'flex', width: '100%', mb: 4 }}>
              <Box sx={{ flex: 1 }}>
                <img
                  src={tutor.image}
                  alt={tutor.altImage}
                  style={{ width: '100%', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', }}               
                />
              </Box>

              <Box sx={{ flex: 2, pl: '40px', pt: '20px' }}>
                <Typography variant="h5" fontWeight="bold">{tutor.name}</Typography>
                <Typography variant="subtitle1">{tutor.profession}</Typography>
                <Button variant="contained" onClick={() => handleSeeProfile(tutor)} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', }}>
                  See Profile
                </Button>
              </Box>
            </Box>
          ))}
        </Box>

        <div style={{ display: 'block', mt: 4, width: '100%', padding:'12px' }}>
          <div style={{
          }}>
          {/* pagent */}
            <Box sx={{ pb:'10px', }}>
              <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                <Box
                    component="img"
                    alt="backgroundImg"
                    src={pagent}
                    width="100%"
                    height='100%'
                    sx={{ objectFit: 'cover' }}
                    boxShadow='0 4px 12px rgba(0, 0, 0, 0.1)'
                  />
                <NavLink to="/our_faces" style={{ textDecoration: 'none', color: '#fff' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '200px',
                    height: '100px',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '10px',
                    borderRadius: '5px',
                    textAlign: 'center',
                  }}
                >
                    <Typography variant='h2'>Faces</Typography>
                    <Typography variant='body1' sx={{
                        fontSize:'12px'
                    }}>visit page</Typography>
                </Box>
                </NavLink>
              </Box>
            </Box>

          {/* faces */}
            <Box sx={{ pb:'10px' }}>
              <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                <img
                  src={tutors[0].image}
                  alt={tutors[0].altImage}
                  style={{ width: '100%', height: '100%', boxShadow:'0 4px 12px rgba(0, 0, 0, 0.1)', }}
                />
                <NavLink to="/tutors" style={{ textDecoration: 'none', color: '#fff' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '200px',
                    height: '100px',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '10px',
                    borderRadius: '5px',
                    textAlign: 'center',
                  }}
                >
                    <Typography variant='h2'>Tutors</Typography>
                    <Typography variant='body1' sx={{
                        fontSize:'12px'
                    }}>visit page</Typography>
                </Box>
                </NavLink>
              </Box>
            </Box>

          {/* road */}
            <Box sx={{ pb:'10px' }}>
              <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                <Box
                    component="img"
                    alt="backgroundImg"
                    src={road}
                    width="100%"
                    height='100%'
                    sx={{ objectFit: 'cover', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', }}
                  />
                <NavLink to="/events" style={{ textDecoration: 'none', color: '#fff' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '200px',
                    height: '100px',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '10px',
                    borderRadius: '5px',
                    textAlign: 'center',
                  }}
                >
                    <Typography variant='h2'>Road Trips</Typography>
                    <Typography variant='body1' sx={{
                        fontSize:'12px'
                    }}>visit page</Typography>
                </Box>
                </NavLink>
              </Box>
            </Box>

          {/* excursion */}
            <Box sx={{ pb:'10px' }}>
              <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
              <Box
                    component="img"
                    alt="backgroundImg"
                    src={excursion}
                    width="100%"
                    height='100%'
                    sx={{ objectFit: 'cover', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', }}
                  />
                <NavLink to="/excursions" style={{ textDecoration: 'none', color: '#fff' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '200px',
                    height: '100px',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '10px',
                    borderRadius: '5px',
                    textAlign: 'center',
                  }}
                >
                    <Typography variant='h2'>Excursion</Typography>
                    <Typography variant='body1' sx={{
                        fontSize:'12px'
                    }}>visit page</Typography>
                </Box>
                </NavLink>
              </Box>
            </Box>

          {/* courses */}
            <Box sx={{ pb:'10px' }}>
              <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
              <Box
                    component="img"
                    alt="backgroundImg"
                    src={courses}
                    width="100%"
                    height='100%'
                    sx={{ objectFit: 'cover', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', }}
                  />
                <NavLink to="/courses" style={{ textDecoration: 'none', color: '#fff' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '200px',
                    height: '100px',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '10px',
                    borderRadius: '5px',
                    textAlign: 'center',
                  }}
                >
                    <Typography variant='h2'>Courses</Typography>
                    <Typography variant='body1' sx={{
                        fontSize:'12px'
                    }}>visit page</Typography>
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
                    width: '200px',
                    height: '100px',
                    transform: 'translate(-50%, -50%)',
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

          {/* chemistry */}
            <Box sx={{ pb:'10px' }}>
              <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
              <Box
                    component="img"
                    alt="backgroundImg"
                    src={chemistry}
                    width="100%"
                    height='100%'
                    sx={{ objectFit: 'cover', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', }}
                  />
                <NavLink to="/chemistry_class" style={{ textDecoration: 'none', color: '#fff' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '200px',
                    height: '100px',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '10px',
                    borderRadius: '5px',
                    textAlign: 'center',
                  }}
                >
                    <Typography variant='h2'>Chemistry</Typography>
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

      <Footer/>
    </>
  );
};

export default Tutors;
