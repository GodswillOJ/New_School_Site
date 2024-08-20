import React from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import Footer from 'Components/Footer';
// ExtraCurricular activities data
const extracurricularData = [
  { activity: 'Sports', grade: 'Excellent' },
  { activity: 'Dancing', grade: 'Average' },
  { activity: 'Exercise', grade: 'Average' },
  { activity: 'Debate & Quiz', grade: 'Amateur' }
];

const Activities = () => {
  return (
    <Box>
      <Typography variant="h4">Extra Curricular Activities</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Activity</TableCell>
            <TableCell>Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {extracurricularData.map((activity, index) => (
            <TableRow key={index}>
              <TableCell>{activity.activity}</TableCell>
              <TableCell>{activity.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Footer/>
    </Box>
  );
};

export default Activities;
