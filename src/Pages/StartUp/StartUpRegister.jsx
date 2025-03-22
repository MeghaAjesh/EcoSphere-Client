import React, { useState, useRef } from "react";
import { 
  Container, 
  TextField, 
  Button, 
  Typography, 
  Box, 
  Grid, 
  InputAdornment, 
  FormHelperText,
  IconButton,
  Paper,
  Divider,
  Link,
  Avatar,
  styled
} from "@mui/material";
import { 
  Email as EmailIcon, 
  Business as BusinessIcon, 
  Phone as PhoneIcon, 
  Visibility as VisibilityIcon, 
  VisibilityOff as VisibilityOffIcon,
  LockOutlined as LockIcon,
  AddAPhoto as AddPhotoIcon
} from "@mui/icons-material";

// Styled components
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const LogoUploadBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  width: '100%'
}));

const StartupRegister = () => {
  const [formData, setFormData] = useState({
    startupName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
    logo: null
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);

  const validateForm = () => {
    const newErrors = {};
    
    // Startup name validation
    if (formData.startupName.trim().length < 2) {
      newErrors.startupName = "Startup name must be at least 2 characters";
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Password validation
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = "Password must include uppercase, lowercase, and numbers";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Update form data with the selected file
      setFormData({ ...formData, logo: file });
      
      // Create image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Startup Registration Data:", formData);
      // For file uploads, you would typically use FormData
      const submitData = new FormData();
      for (const key in formData) {
        submitData.append(key, formData[key]);
      }
      console.log("Ready to submit FormData object");
      // Add backend API call for registration here
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={4} sx={{ mt: 5, mb: 5, borderRadius: 2, overflow: "hidden" }}>
        <Box sx={{ bgcolor: "primary.main", py: 3, px: 2 }}>
          <Typography variant="h4" fontWeight="bold" align="center" color="white">
            Startup Registration
          </Typography>
        </Box>
        
        <Box sx={{ p: 4 }}>
          <Typography variant="body1" color="text.secondary" mb={4} align="center">
            Create your startup account to access exclusive resources and connect with investors
          </Typography>
          
          <form onSubmit={handleSubmit}>
            <LogoUploadBox>
              <Avatar 
                src={previewImage} 
                sx={{ 
                  width: 120, 
                  height: 120, 
                  mb: 2,
                  border: '1px solid #e0e0e0'
                }}
              >
                {!previewImage && <AddPhotoIcon sx={{ fontSize: 40 }} />}
              </Avatar>
              
              <Button
                component="label"
                variant="outlined"
                startIcon={<AddPhotoIcon />}
                sx={{ textTransform: "none" }}
              >
                Upload Startup Logo
                <VisuallyHiddenInput 
                  type="file" 
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </Button>
              <FormHelperText>
                Recommended: Square image, 500x500px or larger
              </FormHelperText>
            </LogoUploadBox>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Startup Name"
                  name="startupName"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.startupName}
                  onChange={handleChange}
                  error={!!errors.startupName}
                  helperText={errors.startupName}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BusinessIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
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
                        <EmailIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
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
                        <LockIcon color="primary" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon color="primary" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={toggleConfirmPasswordVisibility}
                          edge="end"
                        >
                          {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <TextField
                  label="Contact Number"
                  name="contact"
                  type="tel"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.contact}
                  onChange={handleChange}
                  error={!!errors.contact}
                  helperText={errors.contact || "Include country code (e.g., +1 for US)"}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              
              <Grid item xs={12}>
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary" 
                  fullWidth 
                  size="large"
                  sx={{ 
                    mt: 2, 
                    py: 1.5,
                    fontWeight: "bold",
                    textTransform: "none",
                    fontSize: "1rem"
                  }}
                >
                  Create Account
                </Button>
              </Grid>
            </Grid>
          </form>
          
          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Already registered?
            </Typography>
          </Divider>
          
          <Box textAlign="center">
            <Link href="/startup-login" underline="none">
              <Button 
                variant="outlined" 
                color="primary"
                sx={{
                  textTransform: "none",
                  fontWeight: "medium"
                }}
              >
                Sign In to Your Account
              </Button>
            </Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default StartupRegister;