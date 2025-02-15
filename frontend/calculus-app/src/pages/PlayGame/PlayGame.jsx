import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { Header } from '../../components/Header/Header';
import { Timer } from '../../components/Timer/Timer';
import { GameBoard } from '../../components/GameBoard/GameBoard';
import { PageTransition } from '../../components/PageTransition';
import './PlayGame.css';
import { useNavigate } from 'react-router-dom';
import { GameResultModal } from '../../components/GameResultModal/GameResultModal';

export const PlayGame = () => {
  const [gameData, setGameData] = useState(null); // Stores game data (image URL and solution)
  const [answer, setAnswer] = useState(''); // Stores the user's answer
  const [timeLeft, setTimeLeft] = useState(35); // 35 seconds timer
  const [isLoading, setIsLoading] = useState(true); // Tracks loading state
  const [showModal, setShowModal] = useState(false);
  const [gameResult, setGameResult] = useState(null);
  const navigate = useNavigate();

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
      setGameResult(isCorrect ? 'correct' : 'wrong');
      setShowModal(true);
    }
  };

  // Add these handlers
  const handleNext = async () => {
    setShowModal(false);
    await fetchNewGame();
    setAnswer('');
    setTimeLeft(60); // Reset timer
  };

  const handleExit = () => {
    navigate('/dashboard');
  };

  // Add timeout handler
  useEffect(() => {
    if (timeLeft === 0) {
      setGameResult('timeout');
      setShowModal(true);
    }
  }, [timeLeft]);

  return (
    <div className="play-game-page">
      {/* Header Component */}
      <Header title="Play Game" userName="Sajith Sanuja" />
      
      <div className="play-game-content">
        <Box className="game-container">
          {/* Game Header */}
          <Box className="game-header">
            <Typography variant="h6" className="random-number">
              Random Number: 
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

      <GameResultModal 
        isOpen={showModal}
        result={gameResult}
        points={1}  // Always deduct/add 1 point for any result
        onNext={handleNext}
        onExit={handleExit}
      />
    </div>
  );
};
