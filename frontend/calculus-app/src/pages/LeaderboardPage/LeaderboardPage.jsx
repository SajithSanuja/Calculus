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
    { rank: 1, name: 'Sajith Sanuja', points: 89, playerId: 'SS001' },
    { rank: 2, name: 'Thamiru Yasith', points: 76, playerId: 'TY002' },
    { rank: 3, name: 'Nenuka Nugawela', points: 90, playerId: 'NN003' },
    { rank: 4, name: 'Sudeera Dilshan', points: 72, playerId: 'SD004' },
    { rank: 5, name: 'Sachini Fernando', points: 68, playerId: 'SF005' },
    { rank: 6, name: 'Sanduni', points: 65, playerId: 'SC006' },
    { rank: 7, name: 'Thathsara', points: 60, playerId: 'TK007' },
    { rank: 8, name: 'Chameera Fernando', points: 35, playerId: 'CF008' }
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