import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import teacher1 from 'Assets/Teacher_1.jpg';
import student1 from 'Assets/18644.jpg';

const Home = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isBelow650px = useMediaQuery('(max-width:650px)');

  return (
    <>
      <Box sx={{ position: 'relative', width: '100%' }}>
        <Box
          component="img"
          alt="backgroundImg"
          src={teacher1}
          width="100%"
          height='500px'
          sx={{ objectFit: "cover" }}
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
            paddingLeft: isSmallScreen ? '10px' : '20px', // Adjust padding based on screen size
            flexDirection: 'row'
          }}
        >
          <SchoolIcon sx={{ 
            fontSize: isSmallScreen ? 100 : 250, // Adjust font size based on screen size
            color: 'rgb(182 82 34)', 
            background: 'linear-gradient(to right, #460e5b, #0a0000)', 
            borderRadius: '50%', 
            padding: 1,
            marginBottom: 2,
            transform: 'rotate(-20deg)',
          }} />
          <Typography variant="h1" sx={{ fontSize: isSmallScreen ? '1rem' : '50px' }}>
             <p>
              <b>GOTECH_Edu</b>
             </p>
          </Typography>
        </Box>
      </Box>

      <Box sx={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
          {/* box1 */}
          <Box
            component="img"
            alt="backgroundImg"
            src={student1}
            width="60%"
            sx={{ objectFit: "cover" }}
          />

          {/* box2 */}
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
              textAlign: 'center'
            }}
          >
            <Box 
              sx={{ 
                width: isBelow650px ? '150px' : '200px', 
                height: isBelow650px ? '150px' : '200px', 
                borderRadius: '50%', 
                backgroundColor: 'rgba(255, 0, 0, 0.7)', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                animation: 'blink 10s infinite'
              }}
            >
              <Typography variant="h6" sx={{ color: 'white', padding:'20px' }}>
                  <h3>
                    Free Online Summer Classes
                  </h3>
              </Typography>
            </Box>
          </Box>

          {/* box3 */}
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
              textAlign: 'center'
            }}
          >
            <Box 
              sx={{ 
                width: isBelow650px ? '150px' : '200px', 
                height: isBelow650px ? '150px' : '200px', 
                borderRadius: '50%', 
                background: 'linear-gradient(to right, #460e5b, #0a0000)', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                animation: 'blink 10s infinite'
              }}
            >
              <Typography variant="h6" sx={{ color: 'white', padding:'20px' }}>
                  <h3>
                    Welcome to class.
                  </h3>
              </Typography>
            </Box>
          </Box>
      </Box>

      <style jsx global>{`
        @keyframes blink {
          50%, 100% {
            opacity: 1;
          }
          0%, 50% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
