import React, {useState} from 'react';
import { Box, Typography, Link, IconButton, Button, useMediaQuery } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { ArrowDropDown } from '@mui/icons-material'
import Footer from 'Components/Footer';
import pagent from 'Assets/pagent.jpg';
import road from 'Assets/road.jpg';
import courses from 'Assets/courses_.jpg';
import excursion from 'Assets/excursion.jpg';
import chemistry from 'Assets/chemistry_class.jpg';
import t2 from 'Assets/t2.jpg';
import school from 'Assets/school_gal.jpg';
import museum from 'Assets/events/museum.jpg';
import hospital from 'Assets/events/hosp.jpg';
import farm from 'Assets/events/farm.jpg';
import dubai from 'Assets/events/dubai.jpg';
import power from 'Assets/events/power.jpg';
import nnpc from 'Assets/events/nnpc.jpg';
import tayo from 'Assets/tayo.jpg';
import jeff from 'Assets/jeff.jpg';
import Ada from 'Assets/Ada.jpg';
import ngozi from 'Assets/ngozi.jpg';
import calabar from 'Assets/events/calabar.jpg';

const Courses = () => {
  const isSmallScreen = useMediaQuery('(max-width:1030px)');
  const [showSubjects, setShowSubjects] = useState(false);

  const handleButtonClick = () => {
    setShowSubjects(!showSubjects);
  };

  const tutors = [
    { image: t2, link: '/tutor1' },
    { image: pagent, link: '/tutor2' },
    { image: road, link: '/tutor3' },
    { image: courses, link: '/tutor4' },
    { image: excursion, link: '/tutor5' },
    { image: chemistry, link: '/tutor6' }
  ];

  const subjects = {
    Art: ['Literature', 'History', 'Government', 'Economics', 'Christian Religious Studies', 'Fine Arts', 'Music', 'Theatre Arts', 'Languages'],
    Science: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Agricultural Science', 'Geography', 'Further Mathematics', 'Technical Drawing']
  };


  return (
    <div style={{ display: 'block' }}>
        <div style={{ display: isSmallScreen ? 'block' : 'flex', width: 'auto', padding: '40px' }}>
        <Box>
            <Typography variant="h4">Courses</Typography>
            <Button
            onClick={handleButtonClick}
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}
            >
            <Typography variant="body1">View All Courses</Typography>
            <ArrowDropDown />
            </Button>
            {showSubjects && (
            <Box sx={{ mt: 2 }}>
                <Typography variant="h6">Art</Typography>
                <ul>
                {subjects.Art.map((subject) => (
                    <li key={subject}>{subject}</li>
                ))}
                </ul>
                <Typography variant="h6">Science</Typography>
                <ul>
                {subjects.Science.map((subject) => (
                    <li key={subject}>{subject}</li>
                ))}
                </ul>
                <Link href="/view-tutors">View Tutors</Link>
            </Box>
            )}
        </Box>
        </div>

         <Footer />
  </div>
  );
};

export default Courses;
