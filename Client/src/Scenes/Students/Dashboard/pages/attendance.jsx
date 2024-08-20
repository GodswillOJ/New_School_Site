import React from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import Footer from 'Components/Footer';


const attendanceData = [
  { day: 'Monday', attended: 1 },
  { day: 'Tuesday', attended: 1 },
  { day: 'Wednesday', attended: 0 },
  { day: 'Thursday', attended: 1 },
  { day: 'Friday', attended: 1 }
];

const Attendance = () => {
  const totalAttendance = attendanceData.reduce((total, record) => total + record.attended, 0);

  return (
    <Box>
      <Typography variant="h4">Attendance</Typography>
      <Table>
        <TableHead>
          <TableRow>
            {attendanceData.map((record, index) => (
              <TableCell key={index}>{record.day}</TableCell>
            ))}
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {attendanceData.map((record, index) => (
              <TableCell key={index}>{record.attended}</TableCell>
            ))}
            <TableCell>{totalAttendance}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Footer/>
    </Box>
  );
};

export default Attendance;
