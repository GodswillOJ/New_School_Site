import React from 'react';
import LibraryAccessData from 'Components/NavBars/NivoBar';
import Footer from 'Components/Footer';
import { useMediaQuery } from '@mui/material';

const Library = () => {
  const isSmallScreen = useMediaQuery('(max-width:1030px)');
  const isSmallSize = useMediaQuery('(max-width:500px)');

  return (
    <div
      style={{
        display: 'block'
      }}>
      <div
        style={{
          padding:isSmallSize ? '2px' : '10px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
          maxWidth: '800px',
          margin: '4rem auto',
          backgroundColor: '#ffffff',
        }}
      >
        <h2>Library Access Data</h2>
        <LibraryAccessData />
      </div>
        <Footer/>
      </div>
  );
};

export default Library;
