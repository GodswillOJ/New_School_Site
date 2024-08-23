import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const LibraryAccessData = () => {
  // Example data for categories and the number of reads
  const data = [
    { category: 'Free Books', reads: 120 },
    { category: 'Science', reads: 80 },
    { category: 'History', reads: 60 },
    { category: 'Archives', reads: 30 },
    { category: 'Health and Biology', reads: 50 },
    { category: 'Chemistry Textbooks', reads: 40 },
  ];

  const commonProperties = {
    data: data,
    keys: ['reads'],
    indexBy: 'category',
    margin: { top: 50, right: 50, bottom: 50, left: 60 },
    padding: 0.3,
    layout: 'vertical',
    colors: { scheme: 'nivo' },
    borderColor: { from: 'color', modifiers: [['darker', 1.6]] },
    axisTop: null,
    axisRight: null,
    axisBottom: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Category',
      legendPosition: 'middle',
      legendOffset: 32,
      tickValues: 'every 1',
      tickTextColor: '#333',
      format: (value) => value,
      renderTick: (tick) => {
        return (
          <g transform={`translate(${tick.x},${tick.y + 15})`}>
            <text
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fontSize: window.innerWidth < 600 ? '10px' : '14px',
              }}
            >
              {tick.value}
            </text>
          </g>
        );
      },
    },
    axisLeft: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Reads',
      legendPosition: 'middle',
      legendOffset: -40,
      tickTextColor: '#333',
      renderTick: (tick) => {
        return (
          <g transform={`translate(${tick.x - 15},${tick.y})`}>
            <text
              textAnchor="end"
              dominantBaseline="middle"
              style={{
                fontSize: window.innerWidth < 600 ? '10px' : '14px',
              }}
            >
              {tick.value}
            </text>
          </g>
        );
      },
    },
    labelSkipWidth: 12,
    labelSkipHeight: 12,
    labelTextColor: { from: 'color', modifiers: [['darker', 1.6]] },
    animate: true,
    motionStiffness: 90,
    motionDamping: 15,
  };

  return (
    <div style={{ height: '500px' }}>
      <ResponsiveBar {...commonProperties} />
    </div>
  );
};

export default LibraryAccessData;
