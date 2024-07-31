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
import 'swiper/css';

const Facilities = () => {
  const isSmallScreen = useMediaQuery('(max-width:800px)');
  const slides = [
    { image: bio, title: 'Biology Laboratory', text: 'Lorem ipsum 1' },
    { image: field, title: 'Field', text: 'Lorem ipsum 2' },
    { image: wrksp, title: 'Work Shop', text: 'Lorem ipsum 3' },
    { image: sch_lab, title: 'Laboratory', text: 'Lorem ipsum 4' },
    { image: hall, title: 'Hall', text: 'Lorem ipsum 5' },
    { image: sch_ent, title: 'Entrance', text: 'Lorem ipsum 6' },
    { image: sch_sick, title: 'Sickbay', text: 'Lorem ipsum 7' },
    { image: classrm, title: 'Class Room', text: 'Lorem ipsum 8' },
    { image: hostel, title: 'Hostel', text: 'Lorem ipsum 9' },
    { image: sch_reharsal, title: 'School Reharsal', text: 'Lorem ipsum 10' },
  ];

  return (
    <div style={{ position: 'relative', display: 'block' }}>
      <Box sx={{ margin: '1rem 4rem 1rem 4rem', }}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={isSmallScreen ? 1 : 1.5}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <Box
                sx={{
                  width: '100%',
                  transform: 'scale(1)',
                  transition: 'transform 0.5s ease, opacity 0.5s ease',
                  '&.swiper-slide-active': {
                    transform: 'scale(1.1)', // Increased scale for the active slide
                    opacity: 1,
                    zIndex: 2,
                  },
                  '&.swiper-slide-prev, &.swiper-slide-next': {
                    transform: 'scale(0.9)',
                    opacity: 0.7,
                    zIndex: 1,
                  },
                }}
              >
                <Box
                  sx={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: 400,
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

        <Box>
          section
        </Box>
      </Box>
      <Footer />
      <style jsx global>{`
        .swiper-button-next {
          right: 80px; /* Move the right arrow backwards by 40px */
        }
        .swiper-button-prev {
          left: 80px; /* Move the left arrow forwards by 40px */
        }
      `}</style>
    </div>
  );
};

export default Facilities;
