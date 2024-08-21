import React from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, useTheme, Paper, Typography } from '@mui/material';
import Footer from 'Components/Footer';


const examTestData = [
  { subject: 'Mathematics', assignment: 18, test1: 8, test2: 9, exam: 50 },
  { subject: 'English', assignment: 15, test1: 7, test2: 8, exam: 45 },
  { subject: 'Biology', assignment: 17, test1: 9, test2: 8, exam: 55 },
  { subject: 'Physics', assignment: 16, test1: 8, test2: 7, exam: 52 },
  { subject: 'Chemistry', assignment: 19, test1: 10, test2: 9, exam: 58 }
];

// Function to determine the grade based on total marks
const calculateGrade = (total) => {
  if (total > 70) return 'A';
  if (total >= 60) return 'B';
  if (total >= 50) return 'C';
  if (total >= 40) return 'D';
  return 'F';
};

const resultsData = examTestData.map(data => ({
  subject: data.subject,
  total: data.assignment + data.test1 + data.test2 + data.exam,
  grade: calculateGrade(data.assignment + data.test1 + data.test2 + data.exam)
}));

const Result = () => {
const theme = useTheme()

  return (
    <Box>
      <div 
        style={{
          padding: '1rem',
        }}
      >
      <Typography variant="h4"
        variant="h4"
        sx={{
          backgroundColor: theme.palette.mode === 'light' ? '#0000005e' : theme.palette.background.alt,
          color: '#fff',
          textAlign: 'center',
          padding: '0.5rem',
          marginBottom: '1rem',
        }}
      >Results</Typography>
            <TableContainer component={Paper} sx={{ maxWidth: '100%', overflowX: 'auto' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Subject</TableCell>
                  <TableCell>Total Marks (100 Marks)</TableCell>
                  <TableCell>Grade</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {resultsData.map((result, index) => (
                  <TableRow key={index}>
                    <TableCell>{result.subject}</TableCell>
                    <TableCell>{result.total}</TableCell>
                    <TableCell>{result.grade}</TableCell>
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

export default Result;
