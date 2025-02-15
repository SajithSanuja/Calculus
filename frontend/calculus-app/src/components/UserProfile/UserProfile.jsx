import React from 'react';
import { Typography, Box, Avatar } from '@mui/material';
import './UserProfile.css';

export const UserProfile = ({ name, points, email, nickname }) => {
  return (
    <Box className="profile-card">
      <Typography variant="h4" className="profile-title">
        Hello {nickname || name}!
      </Typography>

      <Box className="profile-avatar-container">
        <Avatar 
          className="profile-avatar"
          alt={nickname || name}
          src="/path-to-profile-pic.jpg"  
        >
          {(nickname || name)[0]}  {/* Shows first letter if no image */}
        </Avatar>
      </Box>

      <Box className="profile-info">
        <Typography variant="body1" className="profile-points">
          Total Points: {points}
        </Typography>
        <Typography variant="body2" className="profile-email">
          {email}
        </Typography>
      </Box>
    </Box>
  );
}; 