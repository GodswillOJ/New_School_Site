import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveBar } from '@nivo/bar';
import Attendance from 'Components/table';
import Footer from 'Components/Footer';

// Sample data for the graphs
const attendanceData = [
  {
    id: 'Attendance',
    data: [
      { x: 'January', y: 4 },
      { x: 'February', y: 5 },
      { x: 'March', y: 3 },
      { x: 'April', y: 4 },
      { x: 'May', y: 4 },
      { x: 'June', y: 4 },
    ],
  },
];

const activityData = [
  {
    id: 'Activities',
    data: [
      { x: 'Sports', y: 5 },
      { x: 'Dancing', y: 3 },
      { x: 'Exercise', y: 3 },
      { x: 'Debate & Quiz', y: 2 },
    ],
  },
];

const assignmentData = [
  {
    id: 'Assignments',
    data: [
      { subject: 'Mathematics', score: 18 },
      { subject: 'English', score: 15 },
      { subject: 'Biology', score: 17 },
      { subject: 'Physics', score: 16 },
      { subject: 'Chemistry', score: 19 },
    ],
  },
];

const Dashboard = () => {
  return (
    <Box sx={{ padding: '1rem' }}>
      <Typography variant="h3" sx={{ textAlign: 'center', mb: '1rem' }}>
        Student Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: '1rem', height: '100%' }}>
            <Typography variant="h5" sx={{ textAlign: 'center', mb: '1rem' }}>
              Attendance Overview
            </Typography>
            <Box sx={{ height: { xs: 250, sm: 300, md: 350, lg: 400 } }}>
              <ResponsiveLine
                data={attendanceData}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                  type: 'linear',
                  min: 'auto',
                  max: 'auto',
                  stacked: true,
                  reverse: false,
                }}
                axisBottom={{
                  orient: 'bottom',
                  legend: 'Month',
                  legendOffset: 36,
                  legendPosition: 'middle',
                }}
                axisLeft={{
                  orient: 'left',
                  legend: 'Attendance',
                  legendOffset: -40,
                  legendPosition: 'middle',
                }}
                colors={{ scheme: 'nivo' }}
                lineWidth={3}
                enablePoints={false}
                enableGridX={false}
                enableGridY={true}
                useMesh={true}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: '1rem', height: '100%' }}>
            <Typography variant="h5" sx={{ textAlign: 'center', mb: '1rem' }}>
              Activities Overview
            </Typography>
            <Box sx={{ height: { xs: 250, sm: 300, md: 350, lg: 400 } }}>
              <ResponsiveBar
                data={activityData[0].data}
                keys={['y']}
                indexBy="x"
                margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                padding={0.3}
                colors={{ scheme: 'nivo' }}
                axisBottom={{
                  orient: 'bottom',
                  legend: 'Activity',
                  legendPosition: 'middle',
                  legendOffset: 32,
                }}
                axisLeft={{
                  orient: 'left',
                  legend: 'Grade',
                  legendPosition: 'middle',
                  legendOffset: -40,
                }}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ padding: '1rem' }}>
            <Typography variant="h5" sx={{ textAlign: 'center', mb: '1rem' }}>
              Assignments Overview
            </Typography>
            <Box sx={{ height: { xs: 250, sm: 300, md: 350, lg: 400 } }}>
              <ResponsivePie
                data={assignmentData[0].data.map((item) => ({
                  id: item.subject,
                  label: item.subject,
                  value: item.score,
                }))}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors={{ scheme: 'nivo' }}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                radialLabelsSkipAngle={10}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor="#333333"
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={16}
                radialLabelsLinkHorizontalLength={24}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor={{ from: 'color' }}
                sliceLabelsSkipAngle={10}
                sliceLabelsTextColor="#333333"
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ padding: '1rem' }}>
            <Typography variant="h5" sx={{ textAlign: 'center', mb: '1rem' }}>
              Attendance
            </Typography>
            <Attendance />
          </Paper>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default Dashboard;
