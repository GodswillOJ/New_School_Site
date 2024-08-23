import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import Footer from 'Components/Footer';


// Sample data for fee receipts
const feeData = {
  2022: [
    { item: 'Hostel Accommodation', amount: '50,000' },
    { item: 'Text Books', amount: '20,000' },
    { item: 'Sanitation', amount: '5,000' },
    { item: 'School Fees', amount: '150,000' },
    { item: 'Lesson Fee', amount: '10,000' },
    { item: 'Health Fee', amount: '7,500' },
  ],
  2023: [
    { item: 'Hostel Accommodation', amount: '52,000' },
    { item: 'Text Books', amount: '22,000' },
    { item: 'Sanitation', amount: '5,500' },
    { item: 'School Fees', amount: '155,000' },
    { item: 'Lesson Fee', amount: '12,000' },
    { item: 'Health Fee', amount: '8,000' },
  ],
  2024: [
    { item: 'Hostel Accommodation', amount: '55,000' },
    { item: 'Text Books', amount: '25,000' },
    { item: 'Sanitation', amount: '6,000' },
    { item: 'School Fees', amount: '160,000' },
    { item: 'Lesson Fee', amount: '15,000' },
    { item: 'Health Fee', amount: '9,000' },
  ],
};

const Payment = () => {
  const [selectedSession, setSelectedSession] = useState('2024');

  const handleSessionChange = (event) => {
    setSelectedSession(event.target.value);
  };

  return (
    <div
      style={{
        display: 'block'
      }}
    >
    <Container maxWidth="md" sx={{ mt: 4, mb: '2rem' }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="body1">Payments and receipts</Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* First child container */}
        <Box sx={{ mb: 4 }}>
          <Select
            value={selectedSession}
            onChange={handleSessionChange}
            variant="outlined"
            fullWidth
          >
            <MenuItem value="2022">2022</MenuItem>
            <MenuItem value="2023">2023</MenuItem>
            <MenuItem value="2024">2024</MenuItem>
          </Select>
        </Box>

        {/* Second child container */}
        <Box>
          <TableContainer component={Paper}>
            <Table aria-label="fee receipt table">
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2} align="center">
                    Fee Receipt of {selectedSession} Session
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell align="right">Amount (₦)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {feeData[selectedSession].map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.item}</TableCell>
                    <TableCell align="right">{row.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Container>
    <Footer/>
    </div>
  );
};

export default Payment;
