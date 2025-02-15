import React from 'react';
import { UserProfile } from '../../components/UserProfile/UserProfile';
import { PointsHistory } from '../../components/PointsHistory/PointsHistory';
import { Leaderboard } from '../../components/Leaderboard/Leaderboard';
import { GameInstructions } from '../../components/GameInstructions/GameInstructions';
import { Header } from '../../components/Header/Header';
import './Dashboard.css';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header title="Dashboard" userName="Sajith Sanuja" />
      
      <div className="dashboard-content">
        <div className="dashboard-grid">
          <UserProfile 
            name="Sajith"
            nickname="Sajith (Nickname)"
            points={35}
            email="sajithsanuja@gmail.com"
          />
          
          <PointsHistory />

          <GameInstructions />
          
          <Leaderboard />
        </div>
      </div>
    </div>
  );
}; 