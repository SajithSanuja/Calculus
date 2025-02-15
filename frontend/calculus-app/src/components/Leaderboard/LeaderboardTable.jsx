import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  TableSortLabel 
} from '@mui/material';
import './LeaderboardTable.css';

export const LeaderboardTable = ({ players, showPlayerId }) => {
  const [orderBy, setOrderBy] = useState('rank');
  const [order, setOrder] = useState('asc');

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedPlayers = [...players].sort((a, b) => {
    const isAsc = order === 'asc';
    
    switch (orderBy) {
      case 'rank':
        return isAsc ? a.rank - b.rank : b.rank - a.rank;
      case 'name':
        return isAsc 
          ? a.name.localeCompare(b.name) 
          : b.name.localeCompare(a.name);
      case 'playerId':
        return isAsc 
          ? a.playerId.localeCompare(b.playerId) 
          : b.playerId.localeCompare(a.playerId);
      case 'points':
        return isAsc ? a.points - b.points : b.points - a.points;
      default:
        return 0;
    }
  });

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" className="table-header">
              <TableSortLabel
                active={orderBy === 'rank'}
                direction={orderBy === 'rank' ? order : 'asc'}
                onClick={() => handleSort('rank')}
              >
                Rank
              </TableSortLabel>
            </TableCell>
            <TableCell align="center" className="table-header">
              <TableSortLabel
                active={orderBy === 'name'}
                direction={orderBy === 'name' ? order : 'asc'}
                onClick={() => handleSort('name')}
              >
                Player
              </TableSortLabel>
            </TableCell>
            {showPlayerId && (
              <TableCell align="center" className="table-header">
                <TableSortLabel
                  active={orderBy === 'playerId'}
                  direction={orderBy === 'playerId' ? order : 'asc'}
                  onClick={() => handleSort('playerId')}
                >
                  Player ID
                </TableSortLabel>
              </TableCell>
            )}
            <TableCell align="center" className="table-header">
              <TableSortLabel
                active={orderBy === 'points'}
                direction={orderBy === 'points' ? order : 'asc'}
                onClick={() => handleSort('points')}
              >
                Points
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedPlayers.map((player) => (
            <TableRow key={player.rank} className="table-row">
              <TableCell align="center" className="rank-cell">
                <span className={`rank rank-${player.rank <= 3 ? player.rank : 'other'}`}>
                  {player.rank}
                </span>
              </TableCell>
              <TableCell align="center" className="player-cell">{player.name}</TableCell>
              {showPlayerId && <TableCell align="center" className="player-cell">{player.playerId}</TableCell>}
              <TableCell align="center" className="points-cell">{player.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}; 