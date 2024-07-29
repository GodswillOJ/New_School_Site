import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Footer from 'Components/Footer';
import bio from 'Assets/school_pics/bio_l.jpg';
import field from 'Assets/school_pics/field.jpg';
import classrm from 'Assets/school_pics/classrm.jpg';
import hostel from 'Assets/school_pics/hostel.jpg';
import wrksp from 'Assets/school_pics/wrkshp.jpg';
import sch_lab from 'Assets/school_pics/sch_lab.jpg';
import hall from 'Assets/school_pics/sch_hall.jpg';
import sch_ent from 'Assets/school_pics/sch_ent.jpg';
import sch_reharsal from 'Assets/school_pics/sch_reharsal.jpg';
import sch_sick from 'Assets/school_pics/sch_sick.jpg';

const Facilities = () => {
  const isSmallScreen = useMediaQuery('(max-width:800px)');
  const slides = [
    { image: bio, title: 'Title 1', text: 'Lorem ipsum 1' },
    { image: field, title: 'Title 2', text: 'Lorem ipsum 2' },
    { image: wrksp, title: 'Title 3', text: 'Lorem ipsum 3' },
    { image: sch_lab, title: 'Title 4', text: 'Lorem ipsum 4' },
    { image: hall, title: 'Title 5', text: 'Lorem ipsum 5' },
    { image: sch_ent, title: 'Title 6', text: 'Lorem ipsum 6' },
    { image: sch_sick, title: 'Title 6', text: 'Lorem ipsum 6' },
    { image: classrm, title: 'Title 6', text: 'Lorem ipsum 6' },
    { image: hostel, title: 'Title 6', text: 'Lorem ipsum 6' },
    { image: sch_reharsal, title: 'Title 6', text: 'Lorem ipsum 6' },
  ];

  return (
    <div style={{ position: 'relative', display: 'block' }}>
      <Box sx={{ margin: '1rem' }}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box
                sx={{
                  width: isSmallScreen ? '80%' : '60%',
                  transform: 'scale(1)',
                  transition: 'transform 0.5s ease',
                  '&.swiper-slide-active': {
                    transform: isSmallScreen ? 'scale(1.1)' : 'scale(1.3)',
                  },
                }}
              >
                <Box
                  sx={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: 200,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      color: 'white',
                      padding: '20px',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h2">{slide.title}</Typography>
                    <Typography variant="body1">{slide.text}</Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Footer />
    </div>
  );
};

export default Facilities;
