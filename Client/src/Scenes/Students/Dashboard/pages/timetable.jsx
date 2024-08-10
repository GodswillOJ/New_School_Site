import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, Table, TableBody, TableCell, TableHead, TableRow, List, ListItem, Checkbox, useMediaQuery } from '@mui/material';
import Footer from 'Components/Footer';
import { NavLink } from 'react-router-dom';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import pagent from 'Assets/pagent.jpg';
import road from 'Assets/road.jpg';
import courses from 'Assets/courses_.jpg';
import excursion from 'Assets/excursion.jpg';
import chemistry from 'Assets/chemistry_class.jpg';
import t2 from 'Assets/t2.jpg';
import school from 'Assets/school_gal.jpg';
import profile from 'Assets/profile.jpg';

const tutors = [
  { image: t2, link: '/tutor1' },
  { image: pagent, link: '/tutor2' },
  { image: road, link: '/tutor3' },
  { image: courses, link: '/tutor4' },
  { image: excursion, link: '/tutor5' },
  { image: chemistry, link: '/tutor6' },
];


const timetableData = {
  Jss1: {
    timetable: [
      { subject: 'Mathematics', period: '40 minutes', day: 'Monday' },
      { subject: 'English', period: '40 minutes', day: 'Tuesday' },
      { subject: 'Biology', period: '40 minutes', day: 'Wednesday' },
      { subject: 'Physics', period: '40 minutes', day: 'Thursday' },
      { subject: 'Chemistry', period: '40 minutes', day: 'Friday' },
      // Add more subjects and days as needed
    ]
  },
  // Add similar structure for Jss2, Ss1, Ss2, Ss3
};

const subjects = [
  'Mathematics', 'English', 'Biology', 'Physics', 'Chemistry', 
  'Geography', 'History', 'Economics', 'Computer Science', 'Physical Education'
];

const Timetable = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const isSmallScreen = useMediaQuery('(max-width:1030px)');
  const isSmallSize = useMediaQuery('(max-width:500px)');
  
  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  return (
    <div
      sx={{
        display: 'block'
      }}
    >
<Box
        sx={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: isSmallScreen ? '1fr' : '3fr 1fr',
        }}
>
<Box sx={{ padding: 2, display: 'block' }}>
      {/* First Sub-Container */}
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h2">Time Table</Typography>
        <Typography variant="body1" fontWeight="bold">go_tech_school/student/jss1/timetable</Typography>
      </Box>

      {/* Second Sub-Container */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        {/* Class Select and Timetable Table */}
        <Box sx={{ flexGrow: 1 }}>
          <Select 
            value={selectedClass} 
            onChange={handleClassChange} 
            displayEmpty 
            fullWidth 
            sx={{ marginBottom: 2 }}
          >
            <MenuItem value="" disabled>Select Class</MenuItem>
            <MenuItem value="Jss1">Jss1</MenuItem>
            <MenuItem value="Jss2">Jss2</MenuItem>
            <MenuItem value="Ss1">Ss1</MenuItem>
            <MenuItem value="Ss2">Ss2</MenuItem>
            <MenuItem value="Ss3">Ss3</MenuItem>
          </Select>

          {selectedClass && (
            <Box sx={{ overflow: 'auto', maxHeight: 400 }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell>Subject</TableCell>
                    <TableCell>Period</TableCell>
                    <TableCell>Day</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {timetableData[selectedClass].timetable.map((entry, index) => (
                    <TableRow key={index}>
                      <TableCell>{entry.subject}</TableCell>
                      <TableCell>{entry.period}</TableCell>
                      <TableCell>{entry.day}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          )}
        </Box>

        {/* Registered Courses List */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6">Registered Courses</Typography>
          <List>
            {subjects.map((subject, index) => (
              <ListItem key={index}>
                <Checkbox checked />
                {subject}
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>

        {/* Others section */}
        <div style={{ display: 'block', mt: 4, padding: '12px', width: 'auto' }}>
          {/* Content omitted for brevity */}
          <div>
                  {/* pagent */}
                  <Box sx={{ pb: '10px' }}>
                      <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                      <Box
                          component="img"
                          alt="backgroundImg"
                          src={pagent}
                          width="100%"
                          height="100%"
                          sx={{ objectFit: 'cover' }}
                          boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
                      />
                      <NavLink
                          to="/our_faces"
                          style={{ textDecoration: 'none', color: '#fff' }}
                      >
                          <Box
                          sx={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              width: '150px',
                              height: '100px',
                              transform: 'translate(-50%, -50%)',
                              backgroundColor: 'rgba(0, 0, 0, 0.5)',
                              boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
                              padding: '10px',
                              borderRadius: '5px',
                              textAlign: 'center',
                          }}
                          >
                          <Typography variant="h2">Faces</Typography>
                          <Typography
                              variant="body1"
                              sx={{
                              fontSize: '12px',
                              }}
                          >
                              visit page
                          </Typography>
                          </Box>
                      </NavLink>
                      </Box>
                  </Box>

                  {/* tutors */}
                  <Box sx={{ pb: '10px' }}>
                      <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                      <img
                          src={tutors[0].image}
                          alt={tutors[0].altImage}
                          style={{
                          width: '100%',
                          height: '100%',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                          }}
                      />
                      <NavLink
                          to="/tutors"
                          style={{ textDecoration: 'none', color: '#fff' }}
                      >
                          <Box
                          sx={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              width: '150px',
                              height: '100px',
                              transform: 'translate(-50%, -50%)',
                              backgroundColor: 'rgba(0, 0, 0, 0.5)',
                              boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
                              padding: '10px',
                              borderRadius: '5px',
                              textAlign: 'center',
                          }}
                          >
                          <Typography variant="h2">Tutors</Typography>
                          <Typography
                              variant="body1"
                              sx={{
                              fontSize: '12px',
                              }}
                          >
                              visit page
                          </Typography>
                          </Box>
                      </NavLink>
                      </Box>
                  </Box>

                  {/* road */}
                  <Box sx={{ pb: '10px' }}>
                      <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                      <Box
                          component="img"
                          alt="backgroundImg"
                          src={road}
                          width="100%"
                          height="100%"
                          sx={{
                          objectFit: 'cover',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                          }}
                      />
                      <NavLink
                          to="/events"
                          style={{ textDecoration: 'none', color: '#fff' }}
                      >
                          <Box
                          sx={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              width: '150px',
                              height: '100px',
                              transform: 'translate(-50%, -50%)',
                              boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
                              backgroundColor: 'rgba(0, 0, 0, 0.5)',
                              padding: '10px',
                              borderRadius: '5px',
                              textAlign: 'center',
                          }}
                          >
                          <Typography variant="h2">Road Trips</Typography>
                          <Typography
                              variant="body1"
                              sx={{
                              fontSize: '12px',
                              }}
                          >
                              visit page
                          </Typography>
                          </Box>
                      </NavLink>
                      </Box>
                  </Box>

                  {/* excursion */}
                  <Box sx={{ pb: '10px' }}>
                      <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                      <Box
                          component="img"
                          alt="backgroundImg"
                          src={excursion}
                          width="100%"
                          height="100%"
                          sx={{ objectFit: 'cover' }}
                          boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
                      />
                      <NavLink
                          to="/excursions"
                          style={{ textDecoration: 'none', color: '#fff' }}
                      >
                          <Box
                          sx={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              width: '150px',
                              height: '100px',
                              transform: 'translate(-50%, -50%)',
                              backgroundColor: 'rgba(0, 0, 0, 0.5)',
                              boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
                              padding: '10px',
                              borderRadius: '5px',
                              textAlign: 'center',
                          }}
                          >
                          <Typography variant="h2">Projects</Typography>
                          <Typography
                              variant="body1"
                              sx={{
                              fontSize: '12px',
                              }}
                          >
                              visit page
                          </Typography>
                          </Box>
                      </NavLink>
                      </Box>
                  </Box>

                  {/* chemistry */}
                  <Box sx={{ pb: '10px' }}>
                      <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                      <Box
                          component="img"
                          alt="backgroundImg"
                          src={chemistry}
                          width="100%"
                          height="100%"
                          sx={{ objectFit: 'cover' }}
                          boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
                      />
                      <NavLink
                          to="/chemistry_class"
                          style={{ textDecoration: 'none', color: '#fff' }}
                      >
                          <Box
                          sx={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              width: '250px',
                              height: '100px',
                              transform: 'translate(-50%, -50%)',
                              backgroundColor: 'rgba(0, 0, 0, 0.5)',
                              boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
                              padding: '10px',
                              borderRadius: '5px',
                              textAlign: 'center',
                          }}
                          >
                          <Typography variant="h2">Laboratory</Typography>
                          <Typography
                              variant="body1"
                              sx={{
                              fontSize: '12px',
                              }}
                          >
                              visit page
                          </Typography>
                          </Box>
                      </NavLink>
                      </Box>
                  </Box>

                              {/* school */}
                  <Box sx={{ pb:'10px' }}>
                  <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Box
                          component="img"
                          alt="backgroundImg"
                          src={school}
                          width="100%"
                          height='100%'
                          sx={{ objectFit: 'cover', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', }}
                      />
                      <NavLink to="/school_facilities" style={{ textDecoration: 'none', color: '#fff' }}>
                      <Box
                      sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          width: '150px',
                          height: '100px',
                          transform: 'translate(-50%, -50%)',
                          boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          padding: '10px',
                          borderRadius: '5px',
                          textAlign: 'center',
                      }}
                      >
                          <Typography variant='h2'>School</Typography>
                          <Typography variant='body1' sx={{
                              fontSize:'12px'
                          }}>visit page</Typography>
                      </Box>
                      </NavLink>
                  </Box>
                  </Box>
              </div>
        </div>
</Box>

    <Footer/>
    </div>
  );
};

export default Timetable;
