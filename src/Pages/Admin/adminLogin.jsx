import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  InputAdornment,
  IconButton,
  Paper,
  Link,
  Alert,
  Snackbar,
  Grid,
} from "@mui/material";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom"; // ✅ React Router Link
const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    // Here you would typically handle authentication
    console.log("Login attempt with:", email);

    // Clear form for security after submission attempt
    // setPassword('');
  };

  return (
    <Container maxWidth="lg">
      <Paper
        elevation={4}
        sx={{
          mt: 8,
          mb: 8,
          borderRadius: 2,
          backgroundColor: "#ffffff",
          border: "1px solid #e0e0e0",
          overflow: "hidden",
        }}
      >
        <Grid container>
          {/* Form Section */}
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              onSubmit={handleLogin}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: { xs: 4, sm: 6 },
                height: "100%",
              }}
            >
              {/* Logo Placeholder - Replace with actual logo */}
              <Box
                sx={{
                  mb: 3,
                  color: "#2e7d32",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <Typography
                  variant="h4"
                  component="h1"
                  sx={{
                    fontWeight: 600,
                    color: "#2e7d32",
                  }}
                >
                  Ecosphere
                </Typography>
              </Box>

              <Typography
                variant="h5"
                component="h2"
                sx={{
                  mb: 4,
                  fontWeight: 500,
                  color: "#424242",
                }}
              >
                Admin Portal
              </Typography>

              {error && (
                <Snackbar
                  open={!!error}
                  autoHideDuration={6000}
                  onClose={() => setError("")}
                  anchorOrigin={{ vertical: "top", horizontal: "center" }}
                >
                  <Alert
                    onClose={() => setError("")}
                    severity="error"
                    sx={{ width: "100%" }}
                  >
                    {error}
                  </Alert>
                </Snackbar>
              )}

              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ color: "#757575" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 2 }}
              />

              <TextField
                label="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                fullWidth
                margin="normal"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={{ color: "#757575" }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 1 }}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                  mt: 1,
                  mb: 3,
                }}
              >
                <Link href="#" variant="body2" sx={{ color: "#2e7d32" }}>
                  Forgot password?
                </Link>
              </Box>
              <RouterLink
                to="/admin-dashboard"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    mt: 2,
                    mb: 4,
                    py: 1.5,
                    backgroundColor: "#2e7d32",
                    "&:hover": {
                      backgroundColor: "#1b5e20",
                    },
                    fontWeight: 500,
                  }}
                >
                  Sign In
                </Button>
              </RouterLink>

              <Typography variant="body2" color="text.secondary" align="center">
                For admin access issues, please contact{" "}
                <Link
                  href="mailto:support@ecosphere.com"
                  sx={{ color: "#2e7d32" }}
                >
                  support@ecosphere.com
                </Link>
              </Typography>
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              bgcolor: "#f5f9f5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: { xs: "300px", md: "600px" },
            }}
          >
            {/* Replace with your actual image */}
            <Box
              sx={{
                p: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "100%",
              }}
            >
              {/* Placeholder for image - Replace with your actual image component */}
              <Box
                sx={{
                  width: "100%",
                  height: "70%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                }}
              >
                <img
                  src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?t=st=1742617865~exp=1742621465~hmac=837dafe1c5957863b75e720ced9ff8933739d597234cfd77a62f6c72874c0a99&w=826"
                  alt="Ecosphere sustainable packaging"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    borderRadius: "8px",
                  }}
                />
              </Box>

              <Typography
                variant="h6"
                color="#2e7d32"
                align="center"
                sx={{
                  fontWeight: 500,
                  mb: 2,
                }}
              >
                Empowering Sustainable Business
              </Typography>

              <Typography variant="body1" color="#424242" align="center">
                Manage your eco-friendly product listings and connect with
                conscious consumers through the Ecosphere platform.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AdminLogin;
