import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import './GameBoard.css';

export const GameBoard = ({ imageView, isLoading }) => {
  
  const handleImageError = (e) => {
    console.error('Error loading image:', e);
    e.target.style.display = 'none'; 
  };

  return (
    <Box className="game-board">
      {isLoading ? (
        <Box className="loading-container">
          <CircularProgress />
        </Box>
      ) : (
        imageView && (
          <img 
            src={imageView} 
            alt="Game Board" 
            className="game-image"
            onError={handleImageError}
            crossOrigin="anonymous"  
          />
        )
      )}
    </Box>
  );
}; 