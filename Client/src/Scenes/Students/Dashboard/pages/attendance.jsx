import React from 'react';
import { Box, Table, TableBody, TableCell, useTheme, TableHead, TableRow, Typography, TableContainer, Paper } from '@mui/material';
import Footer from 'Components/Footer';

const attendanceData = [
  { month: 'January', attendance: { Monday: 1, Tuesday: 1, Wednesday: 0, Thursday: 1, Friday: 1 } },
  { month: 'February', attendance: { Monday: 1, Tuesday: 1, Wednesday: 1, Thursday: 1, Friday: 1 } },
  { month: 'March', attendance: { Monday: 0, Tuesday: 1, Wednesday: 1, Thursday: 0, Friday: 1 } },
  { month: 'April', attendance: { Monday: 1, Tuesday: 0, Wednesday: 1, Thursday: 1, Friday: 1 } },
  { month: 'May', attendance: { Monday: 1, Tuesday: 1, Wednesday: 0, Thursday: 1, Friday: 0 } },
  { month: 'June', attendance: { Monday: 1, Tuesday: 0, Wednesday: 1, Thursday: 1, Friday: 1 } },
  { month: 'July', attendance: { Monday: 1, Tuesday: 1, Wednesday: 0, Thursday: 1, Friday: 1 } },
  { month: 'August', attendance: { Monday: 0, Tuesday: 1, Wednesday: 1, Thursday: 1, Friday: 1 } },
  { month: 'September', attendance: { Monday: 1, Tuesday: 0, Wednesday: 1, Thursday: 0, Friday: 1 } },
  { month: 'October', attendance: { Monday: 1, Tuesday: 1, Wednesday: 0, Thursday: 1, Friday: 1 } },
  { month: 'November', attendance: { Monday: 1, Tuesday: 1, Wednesday: 1, Thursday: 1, Friday: 1 } },
  { month: 'December', attendance: { Monday: 1, Tuesday: 0, Wednesday: 1, Thursday: 1, Friday: 0 } },
];

const getTotalAttendanceForDay = (day) => {
  return attendanceData.reduce((total, record) => total + record.attendance[day], 0);
};

const Attendance = () => {
  const theme = useTheme();

  return (
    <Box sx={{ width: '100%', boxSizing: 'border-box' }}>
      <Box
        sx={{
          padding: '1rem',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            backgroundColor: theme.palette.mode === 'light' ? '#0000005e' : theme.palette.background.alt,
            color: '#fff',
            textAlign: 'center',
            padding: '0.5rem',
            marginBottom: '1rem',
          }}
        >
          Attendance
        </Typography>
        <TableContainer component={Paper} sx={{ maxWidth: '100%', overflowX: 'auto' }}>
          <Table stickyHeader sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Month</TableCell>
                {Object.keys(attendanceData[0].attendance).map((day, index) => (
                  <TableCell key={index}>{day}</TableCell>
                ))}
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {attendanceData.map((record, index) => (
                <TableRow key={index}>
                  <TableCell>{record.month}</TableCell>
                  {Object.values(record.attendance).map((attended, i) => (
                    <TableCell key={i}>{attended}</TableCell>
                  ))}
                  <TableCell>
                    {Object.values(record.attendance).reduce((total, attended) => total + attended, 0)}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell>Sum</TableCell>
                {Object.keys(attendanceData[0].attendance).map((day, index) => (
                  <TableCell key={index}>{getTotalAttendanceForDay(day)}</TableCell>
                ))}
                <TableCell>
                  {attendanceData.reduce(
                    (total, record) =>
                      total + Object.values(record.attendance).reduce((sum, attended) => sum + attended, 0),
                    0
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Footer />
    </Box>
  );
};

export default Attendance;
