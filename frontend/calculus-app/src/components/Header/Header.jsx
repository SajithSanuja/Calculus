import React from 'react';
import { Typography, Avatar } from '@mui/material';
import './Header.css';

export const Header = ({ title, userName }) => {
  return (
    <div className="header">
      <Typography variant="h4" className="header-title">
        {title}
      </Typography>
      <div className="header-profile">
        <Typography>{userName}</Typography>
        <Avatar>{userName[0]}</Avatar>
      </div>
    </div>
  );
}; 