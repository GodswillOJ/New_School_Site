import React from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
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
  return (
    <Box>
      <Typography variant="h4">Results</Typography>
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

      <Footer/>
    </Box>
  );
};

export default Result;
