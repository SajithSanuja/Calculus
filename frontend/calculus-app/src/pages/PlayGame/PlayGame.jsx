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
  const [gameData, setGameData] = useState(null); 
  const [answer, setAnswer] = useState(''); 
  const [timeLeft, setTimeLeft] = useState(35); 
  const [isLoading, setIsLoading] = useState(true); 
  const [showModal, setShowModal] = useState(false);
  const [gameResult, setGameResult] = useState(null);
  const navigate = useNavigate();

  const isFetched = useRef(false); 

  
  const fetchNewGame = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://marcconrad.com/uob/banana/api.php?out=json&base64=yes');
      const data = await response.json();

      
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

  
  useEffect(() => {
    if (!isFetched.current) {
      fetchNewGame();
      isFetched.current = true; 
    }
  }, [fetchNewGame]);

  
  const handleSubmit = async () => {
    if (gameData && answer.trim()) {
      const isCorrect = parseInt(answer) === gameData.solution;
      setGameResult(isCorrect ? 'correct' : 'wrong');
      setShowModal(true);
    }
  };

  
  const handleNext = async () => {
    setShowModal(false);
    await fetchNewGame();
    setAnswer('');
    setTimeLeft(60);
  };

  const handleExit = () => {
    navigate('/dashboard');
  };

  
  useEffect(() => {
    if (timeLeft === 0) {
      setGameResult('timeout');
      setShowModal(true);
    }
  }, [timeLeft]);

  return (
    <div className="play-game-page">
  
      <Header title="Play Game" userName="Sajith Sanuja" />
      
      <div className="play-game-content">
        <Box className="game-container">
          
          <Box className="game-header">
            <Typography variant="h6" className="random-number">
              Random Number: 
            </Typography>
            
            <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
          </Box>

          <GameBoard 
            imageView={gameData?.question} 
            isLoading={isLoading}
          />

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
        points={1}  
        onNext={handleNext}
        onExit={handleExit}
      />
    </div>
  );
};
