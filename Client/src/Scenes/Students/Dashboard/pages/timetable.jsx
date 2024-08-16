import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, Table, TableBody, TableCell, TableHead, TableRow, List, ListItem, Checkbox, useMediaQuery } from '@mui/material';
import Footer from 'Components/Footer';

const timetableData = {
  Jss1: {
    timetable: {
      Monday: [
        { subject: 'Mathematics', period: '40 minutes' },
        { subject: 'English', period: '40 minutes' },
        { subject: 'Biology', period: '40 minutes' },
        { subject: '______', period: '' },
        { subject: 'Physics', period: '40 minutes' },
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: 'History', period: '40 minutes' }
      ],
      Tuesday: [
        { subject: 'English', period: '40 minutes' },
        { subject: 'Biology', period: '40 minutes' },
        { subject: 'Physics', period: '40 minutes' },
        { subject: '______', period: '' },
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: 'History', period: '40 minutes' },
        { subject: 'Economics', period: '40 minutes' }
      ],
      Wednesday: [
        { subject: 'Biology', period: '40 minutes' },
        { subject: 'Physics', period: '40 minutes' },
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'BREAK', period: '' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: 'History', period: '40 minutes' },
        { subject: 'Economics', period: '40 minutes' },
        { subject: 'Computer Science', period: '40 minutes' }
      ],
      Thursday: [
        { subject: 'Physics', period: '40 minutes' },
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: '______', period: '' },
        { subject: 'History', period: '40 minutes' },
        { subject: 'Economics', period: '40 minutes' },
        { subject: 'Computer Science', period: '40 minutes' },
        { subject: 'Physical Education', period: '40 minutes' }
      ],
      Friday: [
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: 'History', period: '40 minutes' },
        { subject: '______', period: '' },
        { subject: 'Economics', period: '40 minutes' },
        { subject: 'Computer Science', period: '40 minutes' },
        { subject: 'Physical Education', period: '40 minutes' },
        { subject: 'Mathematics', period: '40 minutes' }
      ],
    }
  },
  Jss2: {
    timetable: {
      Monday: [
        { subject: 'Mathematics', period: '40 minutes' },
        { subject: 'English', period: '40 minutes' },
        { subject: 'Biology', period: '40 minutes' },
        { subject: '______', period: '' },
        { subject: 'Physics', period: '40 minutes' },
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: 'History', period: '40 minutes' }
      ],
      Tuesday: [
        { subject: 'English', period: '40 minutes' },
        { subject: 'Biology', period: '40 minutes' },
        { subject: 'Physics', period: '40 minutes' },
        { subject: '______', period: '' },
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: 'History', period: '40 minutes' },
        { subject: 'Economics', period: '40 minutes' }
      ],
      Wednesday: [
        { subject: 'Biology', period: '40 minutes' },
        { subject: 'Physics', period: '40 minutes' },
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'BREAK', period: '' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: 'History', period: '40 minutes' },
        { subject: 'Economics', period: '40 minutes' },
        { subject: 'Computer Science', period: '40 minutes' }
      ],
      Thursday: [
        { subject: 'Physics', period: '40 minutes' },
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: '______', period: '' },
        { subject: 'History', period: '40 minutes' },
        { subject: 'Economics', period: '40 minutes' },
        { subject: 'Computer Science', period: '40 minutes' },
        { subject: 'Physical Education', period: '40 minutes' }
      ],
      Friday: [
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: 'History', period: '40 minutes' },
        { subject: '______', period: '' },
        { subject: 'Economics', period: '40 minutes' },
        { subject: 'Computer Science', period: '40 minutes' },
        { subject: 'Physical Education', period: '40 minutes' },
        { subject: 'Mathematics', period: '40 minutes' }
      ],
    }
  },
  Jss3: {
    timetable: {
      Monday: [
        { subject: 'Mathematics', period: '40 minutes' },
        { subject: 'English', period: '40 minutes' },
        { subject: 'Biology', period: '40 minutes' },
        { subject: '______', period: '' },
        { subject: 'Physics', period: '40 minutes' },
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: 'History', period: '40 minutes' }
      ],
      Tuesday: [
        { subject: 'English', period: '40 minutes' },
        { subject: 'Biology', period: '40 minutes' },
        { subject: 'Physics', period: '40 minutes' },
        { subject: '______', period: '' },
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: 'History', period: '40 minutes' },
        { subject: 'Economics', period: '40 minutes' }
      ],
      Wednesday: [
        { subject: 'Biology', period: '40 minutes' },
        { subject: 'Physics', period: '40 minutes' },
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'BREAK', period: '' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: 'History', period: '40 minutes' },
        { subject: 'Economics', period: '40 minutes' },
        { subject: 'Computer Science', period: '40 minutes' }
      ],
      Thursday: [
        { subject: 'Physics', period: '40 minutes' },
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: '______', period: '' },
        { subject: 'History', period: '40 minutes' },
        { subject: 'Economics', period: '40 minutes' },
        { subject: 'Computer Science', period: '40 minutes' },
        { subject: 'Physical Education', period: '40 minutes' }
      ],
      Friday: [
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: 'History', period: '40 minutes' },
        { subject: '______', period: '' },
        { subject: 'Economics', period: '40 minutes' },
        { subject: 'Computer Science', period: '40 minutes' },
        { subject: 'Physical Education', period: '40 minutes' },
        { subject: 'Mathematics', period: '40 minutes' }
      ],
    }
  },
  Ss1: {
    timetable: {
      Monday: [
        { subject: 'Mathematics', period: '40 minutes' },
        { subject: 'English', period: '40 minutes' },
        { subject: 'Biology', period: '40 minutes' },
        { subject: '______', period: '' },
        { subject: 'Physics', period: '40 minutes' },
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: 'History', period: '40 minutes' }
      ],
      Tuesday: [
        { subject: 'English', period: '40 minutes' },
        { subject: 'Biology', period: '40 minutes' },
        { subject: 'Physics', period: '40 minutes' },
        { subject: '______', period: '' },
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: 'History', period: '40 minutes' },
        { subject: 'Economics', period: '40 minutes' }
      ],
      Wednesday: [
        { subject: 'Biology', period: '40 minutes' },
        { subject: 'Physics', period: '40 minutes' },
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'BREAK', period: '' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: 'History', period: '40 minutes' },
        { subject: 'Economics', period: '40 minutes' },
        { subject: 'Computer Science', period: '40 minutes' }
      ],
      Thursday: [
        { subject: 'Physics', period: '40 minutes' },
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: '______', period: '' },
        { subject: 'History', period: '40 minutes' },
        { subject: 'Economics', period: '40 minutes' },
        { subject: 'Computer Science', period: '40 minutes' },
        { subject: 'Physical Education', period: '40 minutes' }
      ],
      Friday: [
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: 'History', period: '40 minutes' },
        { subject: '______', period: '' },
        { subject: 'Economics', period: '40 minutes' },
        { subject: 'Computer Science', period: '40 minutes' },
        { subject: 'Physical Education', period: '40 minutes' },
        { subject: 'Mathematics', period: '40 minutes' }
      ],
    }
  },
  Ss2: {
    timetable: {
      Monday: [
        { subject: 'Mathematics', period: '40 minutes' },
        { subject: 'English', period: '40 minutes' },
        { subject: 'Biology', period: '40 minutes' },
        { subject: '______', period: '' },
        { subject: 'Physics', period: '40 minutes' },
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: 'History', period: '40 minutes' }
      ],
      Tuesday: [
        { subject: 'English', period: '40 minutes' },
        { subject: 'Biology', period: '40 minutes' },
        { subject: 'Physics', period: '40 minutes' },
        { subject: '______', period: '' },
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: 'History', period: '40 minutes' },
        { subject: 'Economics', period: '40 minutes' }
      ],
      Wednesday: [
        { subject: 'Biology', period: '40 minutes' },
        { subject: 'Physics', period: '40 minutes' },
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'BREAK', period: '' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: 'History', period: '40 minutes' },
        { subject: 'Economics', period: '40 minutes' },
        { subject: 'Computer Science', period: '40 minutes' }
      ],
      Thursday: [
        { subject: 'Physics', period: '40 minutes' },
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: '______', period: '' },
        { subject: 'History', period: '40 minutes' },
        { subject: 'Economics', period: '40 minutes' },
        { subject: 'Computer Science', period: '40 minutes' },
        { subject: 'Physical Education', period: '40 minutes' }
      ],
      Friday: [
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: 'History', period: '40 minutes' },
        { subject: '______', period: '' },
        { subject: 'Economics', period: '40 minutes' },
        { subject: 'Computer Science', period: '40 minutes' },
        { subject: 'Physical Education', period: '40 minutes' },
        { subject: 'Mathematics', period: '40 minutes' }
      ],
    }
  },
  Ss3: {
    timetable: {
      Monday: [
        { subject: 'Mathematics', period: '40 minutes' },
        { subject: 'English', period: '40 minutes' },
        { subject: 'Biology', period: '40 minutes' },
        { subject: '______', period: '' },
        { subject: 'Physics', period: '40 minutes' },
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: 'History', period: '40 minutes' }
      ],
      Tuesday: [
        { subject: 'English', period: '40 minutes' },
        { subject: 'Biology', period: '40 minutes' },
        { subject: 'Physics', period: '40 minutes' },
        { subject: '______', period: '' },
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: 'History', period: '40 minutes' },
        { subject: 'Economics', period: '40 minutes' }
      ],
      Wednesday: [
        { subject: 'Biology', period: '40 minutes' },
        { subject: 'Physics', period: '40 minutes' },
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'BREAK', period: '' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: 'History', period: '40 minutes' },
        { subject: 'Economics', period: '40 minutes' },
        { subject: 'Computer Science', period: '40 minutes' }
      ],
      Thursday: [
        { subject: 'Physics', period: '40 minutes' },
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: '______', period: '' },
        { subject: 'History', period: '40 minutes' },
        { subject: 'Economics', period: '40 minutes' },
        { subject: 'Computer Science', period: '40 minutes' },
        { subject: 'Physical Education', period: '40 minutes' }
      ],
      Friday: [
        { subject: 'Chemistry', period: '40 minutes' },
        { subject: 'Geography', period: '40 minutes' },
        { subject: 'History', period: '40 minutes' },
        { subject: '______', period: '' },
        { subject: 'Economics', period: '40 minutes' },
        { subject: 'Computer Science', period: '40 minutes' },
        { subject: 'Physical Education', period: '40 minutes' },
        { subject: 'Mathematics', period: '40 minutes' }
      ],
    }
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
    <div style={{ display: 'block', overflowX: 'hidden' }}>
      <Box sx={{ 
         }}>
        <Box sx={{ padding: 2, display: 'block' }}>
          {/* First Sub-Container */}
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="h2">Time Table</Typography>
            <Typography variant="body1" fontWeight="bold">go_tech_school/student/jss1/timetable</Typography>
          </Box>

          {/* Second Sub-Container */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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
                <Box sx={{ overflow: 'auto', width: '100%', maxHeight: 400 }}>
                  <Table stickyHeader>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{
                            fontSize: isSmallSize ? '8px' : '18px'
                          }}                        
                        >Monday</TableCell>
                        <TableCell
                          sx={{
                            fontSize: isSmallSize ? '8px' : '18px'
                          }}                        
                        >Tuesday</TableCell>
                        <TableCell
                          sx={{
                            fontSize: isSmallSize ? '8px' : '18px'
                          }}                        
                        >Wednesday</TableCell>
                        <TableCell
                          sx={{
                            fontSize: isSmallSize ? '8px' : '18px'
                          }}                        
                        >Thursday</TableCell>
                        <TableCell
                          sx={{
                            fontSize: isSmallSize ? '8px' : '18px'
                          }}                        
                        >Friday</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                          <TableCell key={day}>
                            {timetableData[selectedClass].timetable[day].slice(0, 7).map((entry, index) => (
                              <Box key={index} sx={{ borderBottom: '1px solid #ccc', padding: '8px 0',}}>
                                <Typography sx={{
                                  fontSize: isSmallSize ? '6px' : '18px'
                                }} variant="body1">{entry.subject}</Typography>
                                <Typography sx={{
                                  fontSize: isSmallSize ? '6px' : '18px'
                                }} variant="caption">{entry.period}</Typography>
                              </Box>
                            ))}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableBody>
                  </Table>
                </Box>
              )}
            </Box>

            {/* Registered Courses List */}
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6">Registered Courses</Typography>
              <List sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
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
      </Box>

      <Footer />
    </div>
  );
};

export default Timetable;
