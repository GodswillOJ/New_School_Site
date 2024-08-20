import React from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import Footer from 'Components/Footer';


const assignmentData = [
  { subject: 'Mathematics', score: 18 },
  { subject: 'English', score: 15 },
  { subject: 'Biology', score: 17 },
  { subject: 'Physics', score: 16 },
  { subject: 'Chemistry', score: 19 }
];

const Assignment = () => {
  return (
    <Box>
      <Typography variant="h4">Assignments</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Subject</TableCell>
            <TableCell>Score (20 Marks)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assignmentData.map((assignment, index) => (
            <TableRow key={index}>
              <TableCell>{assignment.subject}</TableCell>
              <TableCell>{assignment.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Footer/>
    </Box>
  );
};

export default Assignment;
