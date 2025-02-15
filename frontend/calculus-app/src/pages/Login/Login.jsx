import React from 'react'
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { assets } from '../../assets/assets';
import { motion } from "framer-motion";

export const Login = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/signin");
  };

  return (
    <div className="login-container">
      <img src={assets.puzzleImg} alt="puzzleImg" className="bg-image" />

      <motion.div 
        className="login-form"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ 
          duration: 0.3,
          ease: [0.43, 0.13, 0.23, 0.96] // Custom easing for smoother animation
        }}
      >
        <Box className="login-box">
          <Typography variant="h2" className="main-title">
            Welcome!
          </Typography>

          <Box className="login-title">
            <Typography 
              component="span" 
              className="create-account-link"
              onClick={handleCreateAccount}
              style={{ cursor: 'pointer' }}
            >
              Create a free account
            </Typography>
            <Typography 
              component="span" 
              className="inner-login-title"
            >
              or log in to get start
            </Typography>
          </Box>

              <TextField 
                id='outlined-basic' 
                label='Email'
                placeholder="Email" 
                variant="outlined" 
                className="login-input" 
              />

          <TextField 
            id='outlined-basic' 
            label='Password'
            type="password" 
            variant="outlined" 
            className="login-input" 
          />

          <Button variant="contained" fullWidth className="login-button">
            Log in
          </Button>

          <Typography variant="body2" className="login-footer">
            Forget password ?
          </Typography>
        </Box>
      </motion.div>
    </div>
  )
}

