import React, { useState } from 'react';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';
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
  const [showText, setShowText] = useState(new Array(10).fill(false));

  const slides = [
    { image: bio, title: 'Biology Laboratory', hint: 'Serene for you', text: 'The Biology Laboratory is equipped with modern tools and specimens for comprehensive biological studies and experiments. Students can explore various biological concepts and conduct experiments that deepen their understanding of living organisms. The lab is designed to foster curiosity and hands-on learning, providing a stimulating environment for budding scientists. With a wide range of equipment and materials, the Biology Laboratory supports both individual and group projects, encouraging collaboration and critical thinking. Safety protocols are strictly followed to ensure a secure learning experience for all students.' },
    { image: field, title: 'Field', hint: 'Lets exercise', text: 'Our spacious field provides ample space for various sports and outdoor activities, promoting physical fitness and teamwork. It serves as the venue for physical education classes, sports practices, and competitions, accommodating a range of activities from soccer to track and field. The field is well-maintained and equipped with necessary facilities to support athletic training. Students are encouraged to participate in sports to develop their physical skills, discipline, and team spirit. The field also hosts school events, fostering a sense of community and school spirit.' },
    { image: wrksp, title: 'Work Shop', hint: 'So much to work on', text: 'The workshop is designed for hands-on learning in technical subjects, featuring the latest equipment and safety measures. It provides a space where students can engage in practical activities related to subjects like woodworking, metalworking, and robotics. The workshop encourages creativity, problem-solving, and technical skills development. With guidance from skilled instructors, students learn to use various tools and machines safely and effectively. The workshop environment promotes innovation and experimentation, preparing students for careers in engineering, manufacturing, and other technical fields.' },
    { image: sch_lab, title: 'Laboratory', hint: 'Let experiment', text: 'Our laboratories are well-stocked with supplies for conducting scientific experiments and fostering a love for science. Students can engage in hands-on activities that complement their theoretical learning, gaining practical experience in subjects like chemistry, physics, and biology. The laboratories are equipped with modern instruments and materials, allowing students to conduct experiments safely and accurately. By providing a space for inquiry and discovery, the laboratories help students develop a deeper understanding of scientific principles and methodologies. Safety is a top priority, with strict protocols in place to protect all users.' },
    { image: hall, title: 'Hall', hint: 'Take a time to chill', text: 'The hall serves as a venue for school events, assemblies, and other large gatherings, accommodating all students and staff. It is equipped with audio-visual facilities to support presentations, performances, and ceremonies. The hall is a central hub for community-building activities, fostering a sense of belonging and school pride. It provides a space for students to showcase their talents, celebrate achievements, and participate in cultural and academic events. The versatile design of the hall allows it to be used for various purposes, from formal meetings to festive celebrations.' },
    { image: sch_ent, title: 'Entrance', hint: 'Lets go to school', text: 'The main entrance to the school is welcoming and secure, ensuring a safe environment for all who enter. It features a reception area where visitors are greeted and directed. The entrance is designed to make a positive first impression, reflecting the school’s commitment to safety, hospitality, and professionalism. Security measures are in place to monitor and control access, providing peace of mind to students, staff, and parents. The entrance also serves as a point of information, with displays and announcements about school activities and achievements.' },
    { image: sch_sick, title: 'Sickbay', hint: 'See our sickbay', text: 'The sickbay is staffed with trained medical professionals to provide care and support to students in need. It is equipped to handle minor injuries and illnesses, offering a safe and comfortable space for students to receive medical attention. The sickbay ensures that health issues are promptly addressed, reducing the risk of complications and supporting students’ well-being. Regular health check-ups and preventive measures are also conducted to maintain a healthy school environment. The sickbay is an essential facility that underscores the school’s commitment to student health and safety.' },
    { image: classrm, title: 'Class Room', hint: 'Curious to learn', text: 'Our classrooms are equipped with modern teaching aids and comfortable seating to enhance the learning experience. They provide a conducive environment for academic instruction, with resources that support interactive and engaging lessons. Classrooms are designed to facilitate effective communication between teachers and students, promoting active participation and collaboration. Each classroom is equipped with technological tools such as projectors and computers, enhancing the educational experience. The layout and furniture are arranged to maximize comfort and focus, ensuring that students can learn effectively and efficiently.' },
    { image: hostel, title: 'Hostel', hint: 'School is homemade', text: 'The hostel offers a comfortable and secure living environment for students who reside on campus. It provides well-furnished rooms, common areas for socializing, and facilities for studying and recreation. The hostel is staffed with supervisors who ensure the safety and well-being of the students. Living in the hostel fosters independence, responsibility, and community spirit. Students learn to balance their academic and personal lives, developing essential life skills. The hostel also organizes various activities and events, creating a vibrant and supportive residential community.' },
    { image: sch_reharsal, title: 'School Rehearsal', hint: 'Meet and learn', text: 'The rehearsal space is designed for music and drama practices, supporting our vibrant arts program. It is equipped with instruments, stage props, and audio-visual systems to facilitate creative expression and performance preparation. The rehearsal space allows students to develop their artistic talents, work collaboratively, and build confidence. It provides a supportive environment for practicing and refining their skills. The arts program includes regular performances and showcases, giving students the opportunity to present their work to the school community. This space is integral to nurturing the school’s artistic culture.' },
  ];

  const toggleText = (index) => {
    setShowText((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div style={{ position: 'relative', display: 'block', marginTop: '10rem', }}>
      <Box sx={{ margin: isSmallScreen ? '1rem 1rem 1rem 1rem' : '1rem 4rem 1rem 4rem', borderRadius: '5px', }}>
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
            <SwiperSlide
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                animation: 'slideAnimation 20s linear infinite',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  transform: 'scale(1)',
                  transition: 'transform 0.5s ease, opacity 0.5s ease',
                  '&.swiper-slide-active': {
                    transform: 'scale(1.1)',
                    opacity: 1,
                    zIndex: 2,
                  },
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
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
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    borderRadius: '5px',
                    height: 400,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    '&:hover .hint-text': {
                      fontWeight: 'bold',
                      color: '#9db5e4', // Customize this color to match your theme
                    },
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
                    <Typography variant="body1" className="hint-text">
                      {slide.hint}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        <Box>
          {slides.map((slide, index) => (
            <Box key={index} sx={{ margin: '20px 0', padding: '20px', border: '1px solid #ccc', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box
                  sx={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: 400,
                    width: '100%',
                    marginBottom: '10px',
                    transition: 'transform 0.5s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  }}
                />
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  {slide.title}
                </Typography>
                <Button onClick={() => toggleText(index)} variant="contained" sx={{ margin: '10px 0', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', }}>
                  See more information
                </Button>
                {showText[index] && (
                  <Typography variant="body1" sx={{ marginTop: '10px' }}>
                    {slide.text}
                  </Typography>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Footer />
      <style jsx global>{`
        @keyframes slideAnimation {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        .swiper-button-next {
          right: 80px;
        }
        .swiper-button-prev {
          left: 80px;
        }
      `}</style>
    </div>
  );
};

export default Facilities;
