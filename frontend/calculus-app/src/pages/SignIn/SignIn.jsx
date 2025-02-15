import React from 'react'
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import { assets } from '../../assets/assets';

export const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="signin-container">
      <img src={assets.puzzleImg} alt="puzzleImg" className="bg-image" />

      <div className="signin-form">
        <Box className="signin-box">
          <Typography variant="h2" className="main-title">
            Create Account
          </Typography>

          <Box className="name-fields">
            <TextField 
              placeholder="First Name" 
              variant="outlined" 
              className="signin-input name-input" 
            />
            <TextField 
              placeholder="Last Name" 
              variant="outlined" 
              className="signin-input name-input" 
            />
          </Box>

          <TextField 
            fullWidth 
            placeholder="Email" 
            variant="outlined" 
            className="signin-input" 
          />

          <Box className="name-fields">
            <TextField 
              placeholder="Password" 
              type="password"
              variant="outlined" 
              className="signin-input name-input" 
            />
            <TextField 
              placeholder="Nick Name" 
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
      </div>
    </div>
  )
} 