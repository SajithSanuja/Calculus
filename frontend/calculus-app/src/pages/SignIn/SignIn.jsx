import React from 'react'
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import { assets } from '../../assets/assets';
import { motion } from "framer-motion";

export const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="signin-container">
      <img src={assets.puzzleImg} alt="puzzleImg" className="bg-image desktop-bg" />
      <img src={assets.mobileBg} alt="mobileBg" className="bg-image mobile-bg" />

      <motion.div 
        className="signin-form-container"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ 
          duration: 0.3,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
      >
        <Box className="signin-box">
          <Typography variant="h2" className="main-title">
            Create Account
          </Typography>

          <Box className="name-fields">
            <TextField
              id='outlined-basic' 
              label='First Name'
              variant="outlined" 
              className="signin-input name-input" 
            />
            <TextField 
              id='outlined-basic' 
              label='Last Name'
              variant="outlined" 
              className="signin-input name-input" 
            />
          </Box>

          <TextField 
            id='outlined-basic' 
            label='Email'
            variant="outlined" 
            className="signin-input email-input" 
          />

          <Box className="name-fields">
            <TextField 
              id='outlined-basic' 
              label='Password'
              type="password"
              variant="outlined" 
              className="signin-input name-input" 
            />
            <TextField 
              id='outlined-basic' 
              label='Nick Name'
              variant="outlined" 
              className="signin-input name-input" 
            />
          </Box>

          <Button variant="contained" fullWidth className="signin-button">
            Sign in
          </Button>

          <Box className="signin-footer">
            <Typography component="span">
              Already have an account?
            </Typography>
            <Typography 
              component="span" 
              className="login-link"
              onClick={() => navigate("/")}
            >
              Login here
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </div>
  )
} 