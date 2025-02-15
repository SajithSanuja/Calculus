import React from 'react';
import { Typography, Box } from '@mui/material';
import { LineChart } from './LineChart';
import './PointsHistory.css';

export const PointsHistory = () => {
  const data = [
    { month: 'May', points: 0 },
    { month: 'Jul', points: 35 },
    { month: 'Sep', points: 25 },
    { month: 'Nov', points: 70 },
    { month: 'Dec', points: 30 }
  ];

  return (
    <Box className="points-history-card">
      <Typography variant="h5" className="points-history-title">
        Points History
      </Typography>
      <LineChart data={data} />
    </Box>
  );
}; 