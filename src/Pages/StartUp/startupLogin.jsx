import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  InputAdornment,
  IconButton,
  Link,
  Divider,
  Grid,
} from "@mui/material";
import {
  Email as EmailIcon,
  LockOutlined as LockIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@mui/icons-material";

const StartupLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (formData.password.length < 1) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Startup Login:", formData);
      // Add authentication logic here (API call)
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container maxWidth="md">
      <Paper
        elevation={4}
        sx={{ mt: 5, mb: 5, borderRadius: 2, overflow: "hidden" }}
      >
        <Box sx={{ bgcolor: "success.main", py: 3, px: 2 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            align="center"
            color="white"
          >
            Startup Login
          </Typography>
        </Box>

        <Box sx={{ p: 4 }}>
          <Typography
            variant="body1"
            color="text.secondary"
            mb={3}
            align="center"
          >
         Sign in to manage your eco-friendly bag sales🌿
          </Typography>

          <form onSubmit={handleLogin}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Email Address"
                  name="email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon color="success" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon color="success" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={togglePasswordVisibility}
                          edge="end"
                          aria-label={
                            showPassword ? "hide password" : "show password"
                          }
                        >
                          {showPassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12} display="flex" justifyContent="flex-end">
                <Link href="/forgot-password" underline="hover" variant="body2">
                  Forgot password?
                </Link>
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  fullWidth
                  size="large"
                  sx={{
                    mt: 2,
                    py: 1.5,
                    fontWeight: "bold",
                    textTransform: "none",
                    fontSize: "1rem",
                  }}
                >
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </form>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" color="text.secondary">
              New to the platform?
            </Typography>
          </Divider>

          <Box textAlign="center">
            <Link href="/startup-register" underline="none">
              <Button
                variant="contained"
                color="success"
                sx={{
                  textTransform: "none",
                  fontWeight: "medium",
                }}
              >
                Create Startup Account
              </Button>
            </Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default StartupLogin;
