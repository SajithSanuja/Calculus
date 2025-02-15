import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { Header } from '../../components/Header/Header';
import { Timer } from '../../components/Timer/Timer';
import { GameBoard } from '../../components/GameBoard/GameBoard';
import { PageTransition } from '../../components/PageTransition';
import './PlayGame.css';

export const PlayGame = () => {
  const [gameData, setGameData] = useState(null); // Stores game data (image URL and solution)
  const [answer, setAnswer] = useState(''); // Stores the user's answer
  const [timeLeft, setTimeLeft] = useState(35); // 35 seconds timer
  const [isLoading, setIsLoading] = useState(true); // Tracks loading state

  const isFetched = useRef(false); // Tracks if API was already called

  // Fetch game data
  const fetchNewGame = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://marcconrad.com/uob/banana/api.php?out=json&base64=yes');
      const data = await response.json();

      // Convert base64 string to an image URL
      const imageView = `data:image/png;base64,${data.question}`;

      setGameData({
        question: imageView,
        solution: data.solution
      });
    } catch (error) {
      console.error('Error fetching game:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initialize game data only once
  useEffect(() => {
    if (!isFetched.current) {
      fetchNewGame();
      isFetched.current = true; // Prevent multiple API calls
    }
  }, [fetchNewGame]);

  // Handle user submission
  const handleSubmit = async () => {
    if (gameData && answer.trim()) {
      const isCorrect = parseInt(answer) === gameData.solution;
      console.log('Answer is:', isCorrect ? 'correct' : 'incorrect'); // Log the result
      await fetchNewGame(); // Fetch a new game
      setAnswer(''); // Reset the answer input
    }
  };

  return (
    <div className="play-game-page">
      {/* Header Component */}
      <Header title="Play Game" userName="Sajith Sanuja" />
      
      <div className="play-game-content">
        <Box className="game-container">
          {/* Game Header */}
          <Box className="game-header">
            <Typography variant="h6" className="random-number">
              Random Number: {gameData?.question || '----'}
            </Typography>
            {/* Timer Component */}
            <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
          </Box>

          {/* GameBoard Component */}
          <GameBoard 
            imageView={gameData?.question} 
            isLoading={isLoading}
          />

          {/* Answer Section */}
          <Box className="answer-section">
            <Typography variant="h6" className="answer-label">
              Answer:
            </Typography>
            <TextField
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              variant="outlined"
              className="answer-input"
              type="number"
            />
            <Button 
              variant="contained" 
              onClick={handleSubmit}
              className="submit-button"
            >
              Submit
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};
