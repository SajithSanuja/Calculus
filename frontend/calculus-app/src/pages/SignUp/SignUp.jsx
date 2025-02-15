import React from 'react'
import { TextField, Button, Box, Typography } from "@mui/material";
import "./SignUp.css";

export const SignUp = () => {
  return (
    <div className="signin-container">
      {/* Left Side - Image */}

      {/* Right Side - Form Section */}
      <div className="signin-form">
        <Box className="signin-box">
          <Typography variant="h5" className="signin-title">
            Sign In
          </Typography>

          {/* Email */}
          <TextField fullWidth label="Email" variant="outlined" className="signin-input" />

          {/* Password */}
          <TextField fullWidth label="Password" type="password" variant="outlined" className="signin-input" />

          {/* Sign In Button */}
          <Button variant="contained" fullWidth className="signin-button">
            Sign In
          </Button>

          {/* Forgot Password */}
          <Typography variant="body2" className="signin-footer">
            Forgot Password?
          </Typography>
        </Box>
      </div>
    </div>
  )
}

