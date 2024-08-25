import React from 'react';
import { Box, Typography } from '@mui/material';
import Footer from 'Components/Footer';

const AboutUs = () => {
  return (
    <div
        style={{
            position: 'relative',
            display: 'block',
            marginTop: '10rem',
        }}
    >
    <Box sx={{
        display: 'block',
        padding: '20px',
        mb:'60px'
    }}>
      <Box display="block">
        <Typography variant="h4"
            sx={{
                fontWeight: 'bold',
                pb: '20px'
            }}
        >About Us</Typography>
        <Typography variant="body1">
          We are dedicated to providing quality education to our students, fostering a learning environment that encourages excellence and innovation.
        </Typography>
      </Box>
      <Box display="block" mt={2}>
        <Typography variant="body1">
          Gotech_School is a secondary school that offers a comprehensive curriculum across various disciplines. Our school is staffed by highly qualified teachers who are committed to student success. We emphasize practical learning through hands-on classes, regular excursions, and a variety of events that keep our students engaged. Our graduates are known for their outstanding performance, both academically and in the real world.
        </Typography>
      </Box>
      <Box display="block" mt={2}>
        <Typography variant="body1">Telephone: 07036744231</Typography>
        <Typography variant="body1">Email: godswill.ogono@gmail.com</Typography>
        <Typography variant="body1">Address: No 47 Ajah Lekki Lagos Nigeria</Typography>
      </Box>
    </Box>
      <Footer/>
    </div>
  );
};

export default AboutUs;
