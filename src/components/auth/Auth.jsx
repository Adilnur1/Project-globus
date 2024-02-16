import React from "react";
import "./auth.css";
import { useAuth } from "../context/AuthContextProvider";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Copyright, Visibility, VisibilityOff } from "@mui/icons-material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Auth = () => {
  const {
    handleRegister,
    user,
    setUser,
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    handleLogOut,
    handleLogin,
    hasAccount,
    setHasAccount,
  } = useAuth();
  console.log(emailError, passwordError);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Container component="main" maxWidth="xs" sx={{ height: "400px" }}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {hasAccount ? "Login Form" : "Register Now"}
        </Typography>
        <Box onSubmit={handleSubmit} component="form" sx={{ mt: 1 }}>
          <TextField
            label="Email Address"
            name="email"
            autoFocus
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText={emailError}
            fullWidth
            id="email"
          />
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            helperText={passwordError}
            fullWidth
            margin="normal"
            required
            name="password"
            id="password"
            autoComplete="current-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          {hasAccount ? (
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb2: 2 }}
              onClick={handleLogin}
            >
              login
            </Button>
          ) : (
            <Button
              sx={{ mt: 3, mb2: 2 }}
              type="submit"
              variant="contained"
              onClick={handleRegister}
              fullWidth
            >
              Register
            </Button>
          )}
          <Grid container sx={{ mt: 3 }}>
            <Grid>
              <Typography
                variant="body2"
                onClick={() => setHasAccount(!hasAccount)}
                sx={{ cursor: "pointer", textDecoration: "underline" }}
              >
                {hasAccount
                  ? `Dont have an account? Register Now`
                  : "Already an account? Login"}
              </Typography>
            </Grid>
            <Copyright sx={{ ml: 8 }} />
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Auth;
