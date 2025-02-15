import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LeaderboardTable } from './LeaderboardTable';
import './Leaderboard.css';

export const Leaderboard = () => {
  const navigate = useNavigate();
  const players = [
    { rank: 1, name: 'Thamiru', points: 89 },
    { rank: 2, name: 'Thilina', points: 76 },
    { rank: 3, name: 'Nenuka', points: 90 },
    { rank: 8, name: 'Sajith', points: 35 }
  ];

  return (
    <Box className="leaderboard-card">
      <Box className="leaderboard-header">
        <Typography variant="h5" className="leaderboard-title">
          Leaderboard
        </Typography>
        <Button 
          variant="text" 
          onClick={() => navigate('/leaderboard')}
          className="show-all-button"
        >
          Show All
        </Button>
      </Box>
      <LeaderboardTable players={players} />
    </Box>
  );
}; 