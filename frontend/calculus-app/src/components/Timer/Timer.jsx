import React, { useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import './Timer.css';

export const Timer = ({ timeLeft, setTimeLeft }) => {
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft, setTimeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Box className="timer-container">
      <Typography className="timer-text">
        {formatTime(timeLeft)}
      </Typography>
    </Box>
  );
}; 