import React from 'react';
import {Box, Typography, useTheme} from '@mui/material';
import Map from 'Components/Maps'; // Make sure the path to your Map component is correct
import Footer from 'Components/Footer';


const Geography = () => {
  const theme = useTheme()

  return (
    <div>
      <Box>
        <Typography
          variant='body1'
          sx={{
            fontSize:'18px',
            fontFamily: 'sans-serif',
            fontStyle: 'italic',
            fontWeight: 'bold',
            p: '20px',
            m: '10px',
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
          height: '500px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          overflow: 'hidden',
          m: '10px',
          boxShadow: theme.palette.mode === 'light' ? '0 4px 12px rgba(0, 0, 0, 0.1)' : '0 4px 12px rgba(255, 255, 255, 0.3)',
        }}
      >
        <Map />
      </Box>
      <Footer/>
    </div>
  );
};

export default Geography;
