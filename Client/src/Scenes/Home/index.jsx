import React, { useState, useEffect } from 'react';
import { Box, Typography, useMediaQuery, IconButton, Link } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import YouTube from 'react-youtube';
import teacher1 from 'Assets/Teacher_1.jpg';
import student1 from 'Assets/18644.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import school from 'Assets/school_gal.jpg';
import excur from 'Assets/excursion.jpg';
import courses from 'Assets/courses_.jpg';
import pagent from 'Assets/pagent.jpg';
import tutors from 'Assets/our_tutors.jpg';
import road from 'Assets/road.jpg';
import chemistry from 'Assets/chemistry_class.jpg';
import { Pagination, Navigation } from 'swiper/modules';

const Home = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isBelow650px = useMediaQuery('(max-width:650px)');
  const [displayContent, setDisplayContent] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isVisible) {
        setIsVisible(false);
        setTimeout(() => setDisplayContent(false), 6000); // 6 seconds for the disappearance
      } else {
        setDisplayContent(true);
        setTimeout(() => setIsVisible(true), 0);
      }
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [isVisible]);

  const shakeAnimation = {
    '@keyframes shake': {
      '0%': { transform: 'translateX(0px)' },
      '25%': { transform: 'translateX(4px)' },
      '50%': { transform: 'translateX(-4px)' },
      '75%': { transform: 'translateX(1px)' },
      '100%': { transform: 'translateX(0)' },
    },
    animation: 'shake 5s ease-in-out infinite',
  };

  // YouTube video options
  const videoOptions = {
    height: '390',
    width: isBelow650px ? '340' : '640',
    playerVars: {
      autoplay: 1,
    },
  };

  // YouTube video ID
  const videoId = '0alZJK3NBuM'; // Replace with the actual YouTube video ID

  return (
    <div className='Home'>
      <Box sx={{ position: 'relative', width: '100%', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <Box
          component="img"
          alt="backgroundImg"
          src={teacher1}
          width="100%"
          height="500px"
          sx={{
            objectFit: 'cover',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Adds a subtle shadow
            ...shakeAnimation,
          }}
        />
        <Box 
          sx={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            display: 'flex', 
            justifyContent: 'start', 
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            paddingLeft: isSmallScreen ? '50px' : '20px', // Adjust padding based on screen size
            flexDirection: 'row'
          }}
        >
        <SchoolIcon 
          sx={{ 
            fontSize: isSmallScreen ? 100 : 250, // Adjust font size based on screen size
            color: '#000a0d', 
            background: 'linear-gradient(to right, #566e86, #0b0127)', 
            borderRadius: '50%', 
            padding: 1,
            marginBottom: 2,
            transform: 'rotate(-20deg)',
            boxShadow: '0 4px 12px rgba(255, 255, 255, 0.1)', // Adds a fine shadow for dark background
          }} 
        />
          <Box 
              sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  textAlign: 'center',
              }}
          >
              <Typography 
                  variant="h4" 
                  sx={{ 
                      fontSize: isSmallScreen ? '20px' : '50px',
                      fontFamily: "Pacifico, cursive",
                      fontWeight: '400',
                      fontStyle: 'normal',
                  }}
              >
                  <b>GOTECH_Edu</b>
              </Typography>
              <div style={{ position: 'relative', alignItems:'normal', padding:'10px' }}>
                  <Typography 
                      variant="body1" 
                      sx={{ 
                          fontSize: isSmallScreen ? '15px' : '20px',
                          fontFamily: "Quicksand",
                          fontWeight: 'normal', // Adjust the weight as needed (e.g., 'bold', 'lighter', '400', '700')
                          fontStyle: 'normal',
                          textAlign:'left' 
                      }}
                  >
                      Why shoot for the moon
                  </Typography>

                  <Typography 
                      variant="body1" 
                      sx={{ 
                          fontSize: isSmallScreen ? '10px' : '16px',
                          fontFamily: "Quicksand",
                          fontWeight: 'normal', // Adjust the weight as needed (e.g., 'bold', 'lighter', '400', '700')
                          fontStyle: 'normal',
                          textAlign:'left' 
                      }}
                  >
                      when you can aim for the stars..
                  </Typography>

                  <Typography 
                      variant="body1" 
                      sx={{ 
                          fontSize: isSmallScreen ? '15px' : '20px',
                          fontFamily: "Edu AU VIC WA NT Hand, cursive",
                          fontWeight: 'normal', // Adjust the weight as needed (e.g., 'bold', 'lighter', '400', '700')
                          fontStyle: 'normal',
                          textAlign: 'left',
                          fontOpticalSizing: 'auto',
                      }}
                  >
                      Education is key..
                  </Typography>

              </div>
          </Box>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&family=Pacifico&family=Quicksand:wght@300..700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&family=Pacifico&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap');
          </style>

        </Box>
      </Box>

      <Box sx={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div style={{ margin: '2rem' }}>
          {/* box1 */}
          <Box
            component="img"
            alt="backgroundImg"
            src={student1}
            width="60%"
            sx={{ objectFit: "cover" }}
          />

          {/* box2 */}
          {displayContent && (
            <Box 
              sx={{ 
                position: 'absolute', 
                top: '50%', 
                left: '20%',
                transform: 'translate(-50%, -50%)', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                color: 'dark',
                textAlign: 'center',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 6s ease-in-out',
              }}
            >
              <Box 
                sx={{ 
                  width: isSmallScreen ? '100px' : '200px', 
                  height: isSmallScreen ? '100px' : '200px', 
                  borderRadius: '50%', 
                  backgroundColor: 'rgba(255, 0, 0, 0.7)', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6" sx={{ color: 'white', padding: '20px' }}>
                  Free Online Summer Classes
                </Typography>
              </Box>
            </Box>
          )}

          {/* box3 */}
          {displayContent && (
            <Box 
              sx={{ 
                position: 'absolute', 
                top: '70%', 
                left: '70%',
                transform: 'translate(-50%, -50%)', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                color: 'dark',
                textAlign: 'center',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
              }}
            >
              <Box 
                sx={{ 
                  width: isSmallScreen ? '100px' : '200px', 
                  height: isSmallScreen ? '100px' : '200px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(to right, #460e5b, #0a0000)', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6" sx={{ color: 'white', padding: '20px' }}>
                  Welcome to class.
                </Typography>
              </Box>
            </Box>
          )}

          {/* box4 */}
          <Box 
            sx={{ 
              position: 'absolute', 
              top: '50%', 
              left: '70%',
              transform: 'translate(-50%, -50%)', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              color: 'dark',
              textAlign: 'center'
            }}
          >
            <Typography variant="body1" sx={{ color: 'dark', padding: isSmallScreen ? '0' : '20px', fontSize: isSmallScreen ? '16px' : '30px', fontFamily: 'PT Serif, serif', fontStyle: 'italic' }}>
              Check out our 2024 yearly calendar.
            </Typography>
          </Box>
        </div>
      </Box>

      <div style={{ margin: '4rem 1rem 2rem 1rem', color: 'white' }}>
          {/* slider */}
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            pagination={{ clickable: true }}
            navigation
            modules={[Pagination, Navigation]}
          >
            {[pagent, tutors, road, chemistry, school, excur, courses].map((src, index) => (
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
                    width="100%"
                    height={isBelow650px ? '100px' : '200px'}
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
                      sx={{
                        hover: '#b14606',
                        fontSize: isSmallScreen ? '10px' : '20px',
                        padding: '0',
                        fontFamily: 'PT Serif, serif',
                        fontStyle: 'italic',
                      }}
                    >
                      <p style={{ fontWeight: 'bold' }}>
                        {index === 0 && 'Check Out Our Faces of GoTECH_EDU.'}
                        {index === 1 && 'Meet Our Tutors.'}
                        {index === 2 && 'Events: Our upcoming road tour.'}
                        {index === 3 && 'Our Chemistry Class.'}
                        {index === 4 && 'Our School and Facilities.'}
                        {index === 5 && 'Our Excursions.'}
                        {index === 6 && 'Our Courses.'}
                      </p>
                      <Link style={{ fontWeight: 'bold', color: '#21daee' }}>
                        See more..
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
      </div>

      <Box 
          sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center', 
              mt: 4,
              mb: 4
          }}
      >
          <Typography 
              variant='h1' 
              sx={{ 
                  color: 'dark', 
                  textAlign: 'center',
                  padding: '10px', 
                  fontFamily: "Inconsolata monospace",
                  fontOpticalSizing: 'auto',
                  fontWeight: 'weight',
                  fontStyle: 'normal',
                  fontVariationSettings: "width 50",
              }}
          >
              Exciting and Educative Practical Sessions
          </Typography>
          <YouTube videoId={videoId} opts={videoOptions} />
      </Box>


      <Box style={{ position: 'relative', width: '100%' }}>
        <Box
            component="img"
            alt="backgroundImg"
            src={school}
            width="100%"
            height="15rem"
            bottom='0'
            sx={{ objectFit: "cover" }}
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
            <>
              <Box sx={{ 
                padding: isSmallScreen ? '0 0 0 10px' : '0 0 0 0',
               }}>
                <Typography
                sx={{
                  color:'#fff !important',
                  fontFamily: "Pacifico, cursive",
                  fontSize: isSmallScreen ? '18px' : '25px',
                  fontWeight: '400',
                  justifyContent: "right gap={2}",
                  fontStyle: 'normal', 
                }}
                >
                  GoTECH_EDU
                </Typography>
                <Typography
                sx={{
                  color:'#fff !important',
                  fontFamily: "Quicksand",
                  fontWeight: '400',
                  justifyContent: "right gap={2}",
                  fontStyle: 'normal', 
                }}
                >
                  Your excellence education is guaranteed.
                </Typography>
                <Typography
                sx={{
                  color:'#fff !important',
                  fontFamily: "Edu AU VIC WA NT Hand, cursive",
                  fontWeight: '400',
                  justifyContent: "right gap={2}",
                  fontStyle: 'normal', 
                }}
                >
                  Abule Egba, Lagos Nigeria. 
                </Typography>
              </Box>
            </>

            <div 
              style={{
                justifyContent: isSmallScreen ? "left": "right",
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
              <Typography variant="body2" padding='10px' color="white">
                  &copy; mail us.
              </Typography>

              <input type='button' value='email us' style={{
                background: '#4c4c79',
                color: 'white',
                width: '60px',
                border: 'none',
                padding: '5px',
                boxShadow: '0 4px 12px rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
              }}/>
            </Box>

              <Box display="flex" 
              gap={2}>
                  <IconButton href="https://facebook.com" target="_blank" sx={{ color: "primary.main" }}>
                      <Facebook />
                  </IconButton>
                  <IconButton href="https://twitter.com" target="_blank" sx={{ color: "primary.main" }}>
                      <Twitter />
                  </IconButton>
                  <IconButton href="https://instagram.com" target="_blank" sx={{ color: "primary.main" }}>
                      <Instagram />
                  </IconButton>
                  <IconButton href="https://linkedin.com" target="_blank" sx={{ color: "primary.main" }}>
                      <LinkedIn />
                  </IconButton>
              </Box>
              <Box mt={2} sx={{textAlign: 'right'}}>
                  <Typography variant="body2" color="white">
                      &copy; 2024, Developer Godswill Ogono
                  </Typography>
              </Box>
            </div>
        </Box>
    </Box>
      

      </div>
  );
};

export default Home;
