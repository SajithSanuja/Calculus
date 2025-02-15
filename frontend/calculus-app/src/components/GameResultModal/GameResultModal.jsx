import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useNavigate } from 'react-router-dom';
import './GameResultModal.css';

export const GameResultModal = ({ 
  isOpen, 
  result, 
  points, 
  onNext, 
  onExit 
}) => {
  if (!isOpen) return null;

  const getMessage = () => {
    switch (result) {
      case 'correct':
        return {
          title: 'Great Job! Correct Answer',
          text: `+${points} Points`,
          icon: <EmojiEventsIcon className="result-icon success" />
        };
      case 'wrong':
        return {
          title: 'Bad Luck! Wrong Answer',
          text: `-${Math.abs(points)} Point`,
          icon: <SentimentVeryDissatisfiedIcon className="result-icon error" />
        };
      case 'timeout':
        return {
          title: 'Time Out!',
          text: `Try to be faster next time`,
          icon: <SentimentVeryDissatisfiedIcon className="result-icon error" />
        };
      default:
        return { title: '', text: '', icon: null };
    }
  };

  const { title, text, icon } = getMessage();

  return (
    <div className="modal-overlay">
      <Box className="modal-content">
        {icon}
        <Typography variant="h6" className="modal-title">
          {title}
        </Typography>
        <Typography className="modal-points">
          {text}
        </Typography>
        <Box className="modal-actions">
          <Button 
            variant="contained" 
            className="next-button"
            onClick={onNext}
          >
            Next
          </Button>
          <Button 
            variant="contained" 
            className="exit-button"
            onClick={onExit}
          >
            Exit
          </Button>
        </Box>
      </Box>
    </div>
  );
}; 