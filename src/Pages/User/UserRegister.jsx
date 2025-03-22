import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Paper,
  InputAdornment,
  IconButton,
  Divider,
  Alert,
  Snackbar,
} from "@mui/material";
import { useState } from "react";
import {
  Email,
  Person,
  Phone,
  Visibility,
  VisibilityOff,
  LockOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const UserRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success",
  });

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

    // Full Name validation
    if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Contact validation
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(formData.contact)) {
      newErrors.contact = "Please enter a valid contact number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("User Registered:", formData);
      // Add backend API call for registration here

      setNotification({
        open: true,
        message: "Registration successful! Redirecting...",
        severity: "success",
      });

      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        contact: "",
      });
    }
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <Container maxWidth="md">
      <Paper
        elevation={4}
        sx={{ mt: 5, mb: 5, borderRadius: 2, overflow: "hidden" }}
      >
        <Box sx={{ bgcolor: "success.main", p: 2, color: "white" }}>
          <Typography variant="h5" fontWeight="500" align="center">
            Create Your Account
          </Typography>
        </Box>

        <Box sx={{ p: 4 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            paragraph
            align="center"
          >
            Join EcoSphere! Sign up to shop eco-friendly bags.{" "}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <form onSubmit={handleRegister}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Full Name"
                  name="fullName"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  error={Boolean(errors.fullName)}
                  helperText={errors.fullName}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person color="success" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

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
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email color="success" />
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
                  error={Boolean(errors.password)}
                  helperText={
                    errors.password || "Password must be at least 8 characters"
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlined color="success" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={Boolean(errors.confirmPassword)}
                  helperText={errors.confirmPassword}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlined color="success" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Contact Number"
                  name="contact"
                  type="tel"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.contact}
                  onChange={handleChange}
                  error={Boolean(errors.contact)}
                  helperText={errors.contact}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Phone color="success" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12} sx={{ mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  fullWidth
                  size="large"
                  sx={{ py: 1.5, textTransform: "none", fontWeight: 600 }}
                >
                  Create Account
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Box textAlign="center" mt={1}>
                  <Typography variant="body2" color="text.secondary">
                    Already have an account?
                    <Link to="/user-login">
                      <Button
                        color="primary"
                        sx={{ textTransform: "none", fontWeight: 600 }}
                      >
                        Sign In
                      </Button>
                    </Link>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>

      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseNotification}
          severity={notification.severity}
          sx={{ width: "100%" }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default UserRegister;
