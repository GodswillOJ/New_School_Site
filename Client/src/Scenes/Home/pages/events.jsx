import React from 'react';
import { Box, Typography, Link, useMediaQuery } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import pagent from 'Assets/pagent.jpg';
import road from 'Assets/road.jpg';
import courses from 'Assets/courses_.jpg';
import excursion from 'Assets/excursion.jpg';
import chemistry from 'Assets/chemistry_class.jpg';
import t2 from 'Assets/t2.jpg';
import school from 'Assets/school_gal.jpg';
import museum from 'Assets/events/museum.jpg';
import hospital from 'Assets/events/hosp.jpg';
import farm from 'Assets/events/farm.jpg';
import dubai from 'Assets/events/dubai.jpg';
import power from 'Assets/events/power.jpg';
import nnpc from 'Assets/events/nnpc.jpg';
import calabar from 'Assets/events/calabar.jpg';


const Events = () => {
const isSmallScreen = useMediaQuery('(max-width:800px)');
    


  const tutors = [
    { image: t2, link: '/tutor1' },
    { image: pagent, link: '/tutor2' },
    { image: road, link: '/tutor3' },
    { image: courses, link: '/tutor4' },
    { image: excursion, link: '/tutor5' },
    { image: chemistry, link: '/tutor6' }
  ];


  return (
    <div style={{
        display: isSmallScreen ? 'block' : 'flex',
        width: '100%',
        padding: '40px'
    }}>
      {/* Slider Container */}
      <div style={{ width: isSmallScreen ? '100%' : '75%', height: isSmallScreen ? '100%' : '600px', color: 'white' }}>
          {/* slider */}
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            modules={[Pagination, Navigation]}
          >
            {[dubai, calabar, nnpc, hospital, farm, power, museum].map((src, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    backgroundColor: '#eee',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Adds a fine shadow
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <Box
                    component="img"
                    alt="backgroundImg"
                    src={src}
                    width={'100%'}
                    height={isSmallScreen ? '400px' : '600px'}
                    sx={{ objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <Typography
                      variant="body1"
                      display= 'flex'
                      gap='0'
                      flexDirection={'column'}
                      sx={{
                        hover: '#b14606',
                        fontSize: isSmallScreen ? '40px' : '60px',
                        padding: '0',
                        fontFamily: 'PT Serif, serif',
                        fontStyle: 'italic',
                      }}
                    >
                      <Box component="span" style={{ fontWeight: 'bold' }}>
                        {index === 0 && 'A Trip to Dubai'}
                        {index === 1 && 'Meet Our Tutors.'}
                        {index === 2 && 'A Trip to NNPC.'}
                        {index === 3 && 'Hospital Trip.'}
                        {index === 4 && 'Farms.'}
                        {index === 5 && 'Power Grid.'}
                        {index === 6 && 'Museum Trip.'}
                      </Box>
                      {index === 0 && (
                        <NavLink to='/our_faces' style={{ fontWeight: 'bold', color: '#000' }}>
                          See more..
                        </NavLink>
                      )}
                      {index === 1 && (
                        <NavLink to='/tutors' style={{ fontWeight: 'bold', color: '#000' }}>
                          See more..
                        </NavLink>
                      )}
                      {index === 2 && (
                        <NavLink to='/events' style={{ fontWeight: 'bold', color: '#000' }}>
                          See more..
                        </NavLink>
                      )}
                      {index === 3 && (
                        <NavLink to='/chemistry_class' style={{ fontWeight: 'bold', color: '#000' }}>
                          See more..
                        </NavLink>
                      )}
                      {index === 4 && (
                        <NavLink to='/school_facilities' style={{ fontWeight: 'bold', color: '#000' }}>
                          See more..
                        </NavLink>
                      )}
                      {index === 5 && (
                        <NavLink to='/excursions' style={{ fontWeight: 'bold', color: '#000' }}>
                          See more..
                        </NavLink>
                      )}
                      {index === 6 && (
                        <NavLink to='/excursions' style={{ fontWeight: 'bold', color: '#000' }}>
                          See more..
                        </NavLink>
                      )}
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


      <div style={{ display: 'block', mt: 4, padding:'12px' }}>
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
                    width: '150px',
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
                    width: '150px',
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
                <NavLink to="/tutors" style={{ textDecoration: 'none', color: '#fff' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '150px',
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
                <NavLink to="/tutors" style={{ textDecoration: 'none', color: '#fff' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '150px',
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
                <NavLink to="/tutors" style={{ textDecoration: 'none', color: '#fff' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '150px',
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
                <NavLink to="/tutors" style={{ textDecoration: 'none', color: '#fff' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '150px',
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
                <NavLink to="/tutors" style={{ textDecoration: 'none', color: '#fff' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '150px',
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

    </div>
  );
};

export default Events;
