import React, { useState } from 'react';
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
  Snackbar
} from "@mui/material";
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    // Here you would typically handle authentication
    console.log('Login attempt with:', email);
    
    // Clear form for security after submission attempt
    // setPassword('');
  };
  
  return (
    <Container maxWidth="sm">
      <Paper
        elevation={4}
        sx={{
          mt: 8,
          mb: 8,
          p: { xs: 3, sm: 5 },
          borderRadius: 2,
          backgroundColor: '#ffffff',
          border: '1px solid #e0e0e0'
        }}
      >
        <Box 
          component="form" 
          onSubmit={handleLogin}
          sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {/* Logo Placeholder - Replace with actual logo */}
          <Box 
            sx={{ 
              mb: 3, 
              color: '#2e7d32', 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1
            }}
          >
            <Typography 
              variant="h4" 
              component="h1" 
              sx={{ 
                fontWeight: 600,
                color: '#2e7d32'
              }}
            >
              Ecosphere
            </Typography>
          </Box>
          
          <Typography 
            variant="h5" 
            component="h2" 
            sx={{ 
              mb: 3, 
              fontWeight: 500,
              color: '#424242'
            }}
          >
            Admin Portal
          </Typography>
          
          {error && (
            <Snackbar 
              open={!!error} 
              autoHideDuration={6000} 
              onClose={() => setError('')}
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
              <Alert 
                onClose={() => setError('')} 
                severity="error" 
                sx={{ width: '100%' }}
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
                  <Email sx={{ color: '#757575' }} />
                </InputAdornment>
              ),
            }}
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
                  <Lock sx={{ color: '#757575' }} />
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
              )
            }}
          />
          
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'flex-end',
              width: '100%',
              mt: 1,
              mb: 2
            }}
          >
            <Link href="#" variant="body2" sx={{ color: '#2e7d32' }}>
              Forgot password?
            </Link>
          </Box>
          
          <Button 
            type="submit"
            variant="contained" 
            fullWidth
            size="large"
            sx={{ 
              mt: 2,
              mb: 3,
              py: 1.5,
              backgroundColor: '#2e7d32',
              '&:hover': {
                backgroundColor: '#1b5e20',
              },
              fontWeight: 500
            }}
          >
            Sign In
          </Button>
          
          <Typography variant="body2" color="text.secondary" align="center">
            For admin access issues, please contact{' '}
            <Link href="mailto:support@ecosphere.com" sx={{ color: '#2e7d32' }}>
              support@ecosphere.com
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default AdminLogin;