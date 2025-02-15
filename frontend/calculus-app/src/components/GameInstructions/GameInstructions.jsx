import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import './GameInstructions.css';

export const GameInstructions = () => {
  return (
    <Box className="instructions-card">
      <Typography variant="h5" className="instructions-title">
        How to Play
      </Typography>

      <Typography variant="body1" className="instructions-text">
        Perform the arithmetic operation on the given number using the 
        discovered solution before time runs out, then arrange the 
        resulting digits in ascending order.
      </Typography>

      <Box className="example-section">
        <Typography variant="h6" className="example-title">
          Example:
        </Typography>
        <Box className="example-content">
          <Typography variant="body2">• Number: 1256</Typography>
          <Typography variant="body2">• Operation: 1256 ÷ 2 = 628</Typography>
          <Typography variant="body2">• Result: 268 (ascending order)</Typography>
        </Box>
      </Box>

      <Button 
        variant="contained" 
        fullWidth 
        className="resume-button"
      >
        Resume
      </Button>
    </Box>
  );
}; 