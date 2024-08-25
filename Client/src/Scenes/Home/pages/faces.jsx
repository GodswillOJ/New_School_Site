import React from 'react';
import { Box, Typography, useMediaQuery, IconButton, } from '@mui/material';
import Footer from 'Components/Footer';
import school from 'Assets/school_gal.jpg';
import pagent from 'Assets/pagent.jpg';
import adriana from 'Assets/Ada.jpg';
import jeff from 'Assets/jeff.jpg';
import tayo from 'Assets/tayo.jpg';
import sammy from 'Assets/sammy.jpg';
import Ngozi from 'Assets/ngozi.jpg';

const facesData = [
  { name: 'Chinwe', class: 'JS1', age: 12, gender: 'female', imgSrc: pagent },
  { name: 'Tayo', class: 'SS2', age: 14, gender: 'male', imgSrc: tayo },
  { name: 'Ada', class: 'JS2', age: 13, gender: 'female', imgSrc: adriana },
  { name: 'Sammy', class: 'JS3', age: 15, gender: 'male', imgSrc: sammy },
  { name: 'Ngozi', class: 'SS1', age: 14, gender: 'female', imgSrc: Ngozi },
  { name: 'Jeff', class: 'SS2', age: 13, gender: 'male', imgSrc: jeff },
];

const Faces = () => {
const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <div style={{
      marginTop: '10rem',
    }}>
    <Box sx={{ boxShadow: 3, p: 2, m: 2 }}>
      {facesData.map((face, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            mb: 4,
            p: 2,
            boxShadow: 1,
          }}
        >
          <Box sx={{ flex: 1, textAlign: 'center', p: 2, boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <img src={face.imgSrc} alt={face.name} style={{ width: '100%', height: 'auto', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }} />
          </Box>
          <Box sx={{ flex: 2, p: 2 }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6">Name: {face.name}</Typography>
              <Typography variant="subtitle1">Class: {face.class}</Typography>
              <Typography variant="subtitle1">Age: {face.age}</Typography>
            </Box>
            <Box>
              <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula, arcu in ultrices elementum, nunc velit tincidunt sapien, et venenatis lorem lorem ut libero. Vestibulum non commodo eros. Curabitur ac metus vel turpis vehicula facilisis. Quisque in sapien id odio posuere gravida. Nullam id neque at felis bibendum sollicitudin. Fusce nec ligula et orci sodales tempus. Duis nec suscipit justo. Curabitur faucibus nisl nec magna porttitor, et condimentum nisi vestibulum. Sed non vestibulum nisi. Fusce euismod ultrices diam, nec eleifend elit. Aliquam erat volutpat. In tristique turpis sit amet nulla vestibulum, in dapibus mauris blandit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula, arcu in ultrices elementum, nunc velit tincidunt sapien, et venenatis lorem lorem ut libero. Vestibulum non commodo eros. Curabitur ac metus vel turpis vehicula facilisis. Quisque in sapien id odio posuere gravida. Nullam id neque at felis bibendum sollicitudin. Fusce nec ligula et orci sodales tempus. Duis nec suscipit justo. Curabitur faucibus nisl nec magna porttitor, et condimentum nisi vestibulum. Sed non vestibulum nisi. Fusce euismod ultrices diam, nec eleifend elit. Aliquam erat volutpat. In tristique turpis sit amet nulla vestibulum, in dapibus mauris blandit.
              Suspendisse potenti. Maecenas ut vehicula nisl, sed lobortis ex. Sed scelerisque neque et metus efficitur, at volutpat eros feugiat. Suspendisse potenti. Integer tempus risus id nulla fermentum, vel sodales risus iaculis. Vivamus vehicula orci nec nunc tempor, ut tincidunt erat varius. Ut non metus quam. Quisque vel felis ut libero consequat iaculis ac nec sem. Quisque ultricies justo sed ex interdum tincidunt. Aenean in ligula metus. Vivamus euismod mi non erat vulputate feugiat. Suspendisse vehicula, elit nec vehicula malesuada, risus turpis convallis ligula, sed scelerisque elit quam ac elit. Phasellus dapibus felis et metus sollicitudin, a scelerisque lacus facilisis.
              Praesent accumsan, urna ut ullamcorper auctor, lectus nisi euismod ligula, a consectetur ligula mauris ac elit. Donec ultricies est sed leo iaculis, eget maximus est bibendum. Duis aliquam ultricies augue, ut accumsan nisi congue at. Quisque tristique, velit sed ullamcorper fringilla, ex metus laoreet odio, id consectetur nulla nunc at nisl. Donec non nisi eu turpis posuere aliquet. Vestibulum et tortor in ligula pellentesque venenatis nec non erat. Integer id vehicula orci. Curabitur aliquet egestas lorem non volutpat.
              Integer lacinia sem et eros condimentum vehicula. Integer a auctor urna. Nulla euismod suscipit tincidunt. Sed efficitur sapien id ligula varius, nec consequat justo vulputate. Aliquam erat volutpat. Integer ornare justo ligula, nec fermentum ligula cursus nec. Donec sed gravida lorem. Aliquam erat volutpat. Aliquam congue, magna eget laoreet venenatis, libero dui feugiat augue, ut fermentum elit ex in ipsum. Fusce vitae lectus ac justo consequat posuere. In hac habitasse platea dictumst. Donec cursus ante arcu, at molestie lacus aliquam sit amet. Curabitur vel r

              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
    <Footer/>
    </div>
  );
};

export default Faces;
