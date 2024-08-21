import React from 'react';
import { Box, Table, useTheme, TableContainer, Paper, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import Footer from 'Components/Footer';


const examTestData = [
  { subject: 'Mathematics', assignment: 18, test1: 8, test2: 9, exam: 50 },
  { subject: 'English', assignment: 15, test1: 7, test2: 8, exam: 45 },
  { subject: 'Biology', assignment: 17, test1: 9, test2: 8, exam: 55 },
  // Add more subjects as needed
];

const Grades = () => {
  const theme = useTheme();

  return (
    <Box>
      <div
        style={{
          padding: '1rem'
        }}
      >
      <Typography variant="h4"
          sx={{
            backgroundColor: theme.palette.mode === 'light' ? '#0000005e' : theme.palette.background.alt,
            color: '#fff',
            textAlign: 'center',
            padding: '0.5rem',
            marginBottom: '1rem',
          }}
      >Exams and Tests</Typography>
      <TableContainer component={Paper} sx={{ maxWidth: '100%', overflowX: 'auto' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Subject</TableCell>
            <TableCell>Assignment (20 Marks)</TableCell>
            <TableCell>Test 1 (10 Marks)</TableCell>
            <TableCell>Test 2 (10 Marks)</TableCell>
            <TableCell>Exam (60 Marks)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {examTestData.map((data, index) => (
            <TableRow key={index}>
              <TableCell>{data.subject}</TableCell>
              <TableCell>{data.assignment}</TableCell>
              <TableCell>{data.test1}</TableCell>
              <TableCell>{data.test2}</TableCell>
              <TableCell>{data.exam}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      </div>

      <Footer/>
    </Box>
  );
};

export default Grades;
