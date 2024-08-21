import React from 'react';
import { Box, useTheme, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import Footer from 'Components/Footer';


const assignmentData = [
  { subject: 'Mathematics', score: 18 },
  { subject: 'English', score: 15 },
  { subject: 'Biology', score: 17 },
  { subject: 'Physics', score: 16 },
  { subject: 'Chemistry', score: 19 }
];

const Assignment = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        mb: '0',
        overflowX: '0'
      }}
    >
      <div
        style={{
          margin: '10px',
          padding: '1rem',
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
      >Assignments</Typography>
      <TableContainer component={Paper} sx={{ maxWidth: '100%', overflowX: 'auto' }}>
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
      </TableContainer>

      </div>

      <Footer/>
    </Box>
  );
};

export default Assignment;
