import React from 'react';
import { Box, Typography, Link, IconButton, useMediaQuery } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
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
import tayo from 'Assets/tayo.jpg';
import jeff from 'Assets/jeff.jpg';
import Ada from 'Assets/Ada.jpg';
import ngozi from 'Assets/ngozi.jpg';
import calabar from 'Assets/events/calabar.jpg';

const Events = () => {
  const isSmallScreen = useMediaQuery('(max-width:1030px)');

  const tutors = [
    { image: t2, link: '/tutor1' },
    { image: pagent, link: '/tutor2' },
    { image: road, link: '/tutor3' },
    { image: courses, link: '/tutor4' },
    { image: excursion, link: '/tutor5' },
    { image: chemistry, link: '/tutor6' }
  ];

  const student_ = [
    { image: tayo, link: '/tutor1' },
    { image: jeff, link: '/tutor2' },
    { image: Ada, link: '/tutor3' },
    { image: ngozi, link: '/tutor4' },
  ];

  return (
    <div style={{ display: 'block' }}>
      <div style={{ display: isSmallScreen ? 'block' : 'flex', width: 'auto', padding: '40px' }}>

        <div style={{
          display: 'block',
          width: isSmallScreen ? '100%' : '80%'
        }}>
            {/* Slider Container */}
            <div style={{ height: isSmallScreen ? '100%' : '600px', color: 'white' }}>
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
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
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
                          display='flex'
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
                            {index === 1 && 'Obudu Cattle Ranch. Calabar'}
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

            {/* trip testimonials */}
            <div style={{
              marginTop:'20px'
            }}>
              <Typography variant='h3' padding='20px' sx={{
                textAlign: 'center',
                color: '#000',
                
              }}>
                Testimonials
              </Typography>
              <Box>
                {['Testimonial 1', 'Testimonial 2', 'Testimonial 3', 'Testimonial 4'].map((testimonial, index) => (
                  <Box key={index} sx={{ display: 'flex', gap: '20px', mb: 4 }}>
                    {/* Image Container */}
                    <Box sx={{ flex: '1' }}>
                      <Box
                        component="img"
                        alt="testimonial image"
                        src={student_[index % student_.length].image}
                        onError={(e) => e.target.src = school}
                        width="100%"
                        height="100%"
                        sx={{ objectFit: 'cover', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', }}
                      />
                    </Box>

                      {/* Text Container */}
                      <Box sx={{ flex: '2', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant="h3">{['Chinedu', 'Tunde', 'Funke', 'Ejiro'][index]}</Typography>
                        <Typography variant="body1">{`Class: ${['JSS1', 'JSS2', 'JSS3', 'SS1', 'SS2', 'SS3'][index % 6]}`}</Typography>
                        <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</Typography>
                      </Box>

                  </Box>
                ))}
              </Box>
            </div>
        </div>

        <div style={{ display: 'block', mt: 4, padding:'12px'}}>
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
                fontFamily: 'Quicksand',
                fontWeight: '400',
                justifyContent: 'right gap={2}',
                fontStyle: 'normal',
              }}
            >
              All rights reserved.
            </Typography>
          </Box>
          <Box>
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
              Reach out on:
            </Typography>
            <Box>
              <IconButton href="#" target="_blank" rel="noopener" sx={{ color: '#fff' }}>
                <Facebook />
              </IconButton>
              <IconButton href="#" target="_blank" rel="noopener" sx={{ color: '#fff' }}>
                <Twitter />
              </IconButton>
              <IconButton href="#" target="_blank" rel="noopener" sx={{ color: '#fff' }}>
                <Instagram />
              </IconButton>
              <IconButton href="#" target="_blank" rel="noopener" sx={{ color: '#fff' }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Events;
