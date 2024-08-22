import React from 'react';
import { Box, Table, TableBody, useTheme, TableCell, TableHead, TableRow, Typography, Paper, TableContainer } from '@mui/material';
import Footer from 'Components/Footer';
// ExtraCurricular activities data
const extracurricularData = [
  { activity: 'Sports', grade: 'Excellent' },
  { activity: 'Dancing', grade: 'Average' },
  { activity: 'Exercise', grade: 'Average' },
  { activity: 'Debate & Quiz', grade: 'Amateur' }
];

const Activities = () => {
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
        >Extra Curricular Activities</Typography>
        <TableContainer component={Paper} sx={{ maxWidth: '100%', overflowX: 'auto' }}>
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
        </TableContainer>        
      </div>

      <Footer/>
    </Box>
  );
};

export default Activities;
