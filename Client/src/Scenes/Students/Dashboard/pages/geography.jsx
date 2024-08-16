import React from 'react';
import {Box, Typography, useTheme, useMediaQuery} from '@mui/material';
import Map from 'Components/Maps'; // Make sure the path to your Map component is correct
import Footer from 'Components/Footer';


const Geography = () => {
  const isSmallSize = useMediaQuery('(max-width:500px)');
  const isVerySmall = useMediaQuery('(max-width:350px)');
  const theme = useTheme()

  return (
    <div
      style={{
        display: 'block'
      }}
    >
      <div
        style={{
          margin: '10px',
        }}
      >
        <Box>
          <Typography
            variant='body1'
            sx={{
              fontSize: isSmallSize ? '10px' : '16px',
              fontFamily: 'sans-serif',
              fontStyle: 'italic',
              fontWeight: 'bold',
              p: '20px',
              mb: '20px',
              border: '1px solid #00000030;',
              borderRadius: '10px',
              boxShadow: theme.palette.mode === 'light' ? '0 4px 12px rgba(0, 0, 0, 0.1)' : '0 4px 12px rgba(255, 255, 255, 0.3)',
            }}
          >
            GoTech_School_Website/student/maps
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: isSmallSize ? '400px' : '500px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            overflow: 'hidden',
            mb: '20px',
            p: '20px',
            boxShadow: theme.palette.mode === 'light' ? '0 4px 12px rgba(0, 0, 0, 0.1)' : '0 4px 12px rgba(255, 255, 255, 0.3)',
          }}
        >
          <Map />
        </Box>
      </div>
      <Footer/>
    </div>
  );
};

export default Geography;
