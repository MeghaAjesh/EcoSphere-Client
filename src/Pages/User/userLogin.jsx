import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  InputAdornment,
  IconButton,
  Divider,
  Alert,
  Snackbar,
  Checkbox,
  FormControlLabel,  

} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom"
import {
  Email,
  LockOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

function UserLogin () {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
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
      console.log("User Login:", formData, "Remember me:", rememberMe);
      // Add authentication logic here (API call)

      setNotification({
        open: true,
        message: "Login successful! Redirecting...",
        severity: "success",
      });
    }
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={4}
        sx={{ mt: 5, mb: 5, borderRadius: 2, overflow: "hidden" }}
      >
        <Box sx={{ bgcolor: "success.main", p: 2, color: "white" }}>
          <Typography variant="h5" fontWeight="500" align="center">
            Welcome Back
          </Typography>
        </Box>

        <Box sx={{ p: 4 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            paragraph
            align="center"
          >
            Sign in to continue your eco-friendly shopping{" "}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <form onSubmit={handleLogin}>
            <TextField
              label="Email Address"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              required
              margin="normal"
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

            <TextField
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              required
              margin="normal"
              value={formData.password}
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
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

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 1,
                mb: 2,
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    color="success"
                    size="small"
                  />
                }
                label={<Typography variant="body2">Remember me</Typography>}
              />
              <Link href="/forgot" variant="body2" underline="hover" color="primary">
                Forgot password?
              </Link>
            </Box>

            <Button
              type="submit"
              variant="contained"
              color="success"
              fullWidth
              size="large"
              sx={{ py: 1.5, textTransform: "none", fontWeight: 600, mt: 1 }}
            >
              Sign In
            </Button>

            <Box textAlign="center" mt={3}>
              <Typography variant="body2" color="text.secondary">
                Don't have an account?{" "}
            <Link to ='/user-register'>
            <Button
                  color="primary"
                  sx={{ textTransform: "none", fontWeight: 600 }}
                >
                  Register
                </Button>
            </Link>
              </Typography>
            </Box>
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

export default UserLogin;
