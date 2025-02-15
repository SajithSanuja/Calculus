import React, { useState } from 'react';
import { 
  Typography, 
  Box, 
  TextField, 
  InputAdornment,
  Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { LeaderboardTable } from '../../components/Leaderboard/LeaderboardTable';
import { Header } from '../../components/Header/Header';
import './LeaderboardPage.css';

export const LeaderboardPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const allPlayers = [
    { rank: 1, name: 'Alex Smith', points: 89, playerId: 'AS001' },
    { rank: 2, name: 'Maria Garcia', points: 76, playerId: 'MG002' },
    { rank: 3, name: 'John Doe', points: 90, playerId: 'JD003' },
    { rank: 4, name: 'Emma Wilson', points: 72, playerId: 'EW004' },
    { rank: 5, name: 'James Brown', points: 68, playerId: 'JB005' },
    { rank: 6, name: 'Sofia Chen', points: 65, playerId: 'SC006' },
    { rank: 7, name: 'Lucas Kim', points: 60, playerId: 'LK007' },
    { rank: 8, name: 'Sajith Sanuja', points: 35, playerId: 'SS008' }
  ];

  const filteredPlayers = allPlayers.filter(player => 
    player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.playerId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="leaderboard-page">
      <Header title="Leaderboard" userName="Sajith Sanuja" />
      
      <div className="leaderboard-content">
        <Button
          className="back-button"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/dashboard')}
        >
          Back to Dashboard
        </Button>

        <Box className="search-container">
          <TextField
            fullWidth
            placeholder="Search players..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            className="search-input"
          />
        </Box>

        <Box className="table-container">
          <LeaderboardTable players={filteredPlayers} showPlayerId />
        </Box>
      </div>
    </div>
  );
}; 