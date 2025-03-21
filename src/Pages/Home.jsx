import React from 'react';
import { 
  Button, 
  Container, 
  Grid, 
  Typography, 
  Box, 
  Paper,
  Card, 
  CardContent, 
  CardMedia
} from "@mui/material";
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import AdminPanelSettings from '@mui/icons-material/AdminPanelSettings';
import PersonOutline from '@mui/icons-material/PersonOutline';
import Business from '@mui/icons-material/Business';
import NatureIcon from '@mui/icons-material/Nature';
import Recycling from '@mui/icons-material/Recycling';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import ecospherebag from "../assets/ecospherebag.jpg";
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <Box sx={{ 
      background: 'linear-gradient(to bottom, #ffffff, #ffffff)', 
      minHeight: '100vh', 
      paddingY: 5,
      width:"100%"
    }}>
      {/* Full-width Hero Section */}
      <Box 
        elevation={0} 
        sx={{ 
          width: '100%',
          borderRadius: 0, // Remove border radius for full width appearance
          mb: 6,
          background: 'linear-gradient(135deg, #4caf50, #2e7d32)',
          color: 'white',
          border: '1px solid #e0e0e0'
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{ 
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              padding: 4,
            }}
          >
            <Box sx={{ flex: 1, p: 3 }}>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
              EcoSphere
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ mb: 3, opacity: 0.9 }}>
                Connecting eco-conscious buyers with sustainable paper bag suppliers
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                Join our growing community of environmental enthusiasts making a difference, 
                one paper bag at a time.
              </Typography>
              <Button 
                variant="contained" 
                size="large"
                startIcon={<ShoppingCart />}
                sx={{ 
                  bgcolor: 'white', 
                  color: '#2e7d32', 
                  '&:hover': { 
                    bgcolor: '#f1f1f1',
                    transform: 'translateY(-2px)',
                    boxShadow: 3
                  },
                  fontWeight: 'bold',
                  padding: '10px 24px',
                  borderRadius: 2,
                  transition: 'all 0.3s'
                }}
              >
                Shop Now
              </Button>
            </Box>
            <Box sx={{ 
              flex: 1, 
              display: 'flex', 
              justifyContent: 'center',
              mt: { xs: 4, md: 0 }
            }}>
              <Box 
                component="img" 
                src={ecospherebag}
                alt="Eco-friendly Paper Bags" 
                sx={{ 
                  width: '400px', 
                  height: '400px', 
                  borderRadius: 3,
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
      <Container maxWidth="lg">
        {/* Features Section */}
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            textAlign="center" 
            gutterBottom
            sx={{ mb: 4 }}
          >
            Why Choose EcoSphere?
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%', 
                borderRadius: 3,
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-8px)', boxShadow: 4 },
                border: '1px solid #e0e0e0'
              }}>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <NatureIcon sx={{ fontSize: 60, color: '#4caf50', mb: 2 }} />
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Eco-Friendly Materials
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    All products are made from 100% recyclable and biodegradable materials.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%', 
                borderRadius: 3,
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-8px)', boxShadow: 4 },
                border: '1px solid #e0e0e0'
              }}>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Recycling sx={{ fontSize: 60, color: '#4caf50', mb: 2 }} />
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Sustainable Practices
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Supporting startups committed to ethical production and fair trade.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%', 
                borderRadius: 3,
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-8px)', boxShadow: 4 },
                border: '1px solid #e0e0e0'
              }}>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <ShoppingBag sx={{ fontSize: 60, color: '#4caf50', mb: 2 }} />
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Quality Products
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Durable, stylish, and practical paper bags for everyday use.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Login Section */}
        <Paper 
          elevation={1} 
          sx={{ 
            borderRadius: 4, 
            overflow: 'hidden',
            p: 4,
            background: 'white',
            border: '1px solid #e0e0e0'
          }}
        >
          <Typography 
            variant="h5" 
            fontWeight="bold" 
            textAlign="center" 
            gutterBottom
            sx={{ mb: 4 }}
          >
            Access Your Account
          </Typography>
          
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Card sx={{ 
                height: '100%', 
                borderRadius: 3, 
                boxShadow: 2,
                '&:hover': { boxShadow: 6 },
                border: '1px solid #e0e0e0'
              }}>
                <CardContent sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  p: 3
                }}>
                  <AdminPanelSettings sx={{ fontSize: 48, color: '#1976d2', mb: 2 }} />
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Admin Portal
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2, textAlign: 'center' }}>
                    Manage products, vendors, and platform settings
                  </Typography>
              <Link to='/admin-login'>
              <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    sx={{ mt: 'auto', borderRadius: 2 }}
                  >
                    Admin Login
                  </Button>
              </Link>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} sm={4}>
              <Card sx={{ 
                height: '100%', 
                borderRadius: 3, 
                boxShadow: 2,
                '&:hover': { boxShadow: 6 },
                border: '1px solid #e0e0e0'
              }}>
                <CardContent sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  p: 3
                }}>
                  <PersonOutline sx={{ fontSize: 48, color: '#9c27b0', mb: 2 }} />
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Customer Portal
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2, textAlign: 'center' }}>
                    Browse, purchase, and track your eco-friendly bags
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    fullWidth
                    sx={{ mt: 'auto', borderRadius: 2 }}
                  >
                    Customer Login
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} sm={4}>
              <Card sx={{ 
                height: '100%', 
                borderRadius: 3, 
                boxShadow: 2,
                '&:hover': { boxShadow: 6 },
                border: '1px solid #e0e0e0'
              }}>
                <CardContent sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  p: 3
                }}>
                  <Business sx={{ fontSize: 48, color: '#4caf50', mb: 2 }} />
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Startup Portal
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2, textAlign: 'center' }}>
                    List your products and manage your inventory
                  </Typography>
                  <Button 
                    variant="contained" 
                    sx={{ 
                      bgcolor: '#4caf50', 
                      color: 'white',
                      '&:hover': { bgcolor: '#388e3c' },
                      mt: 'auto',
                      borderRadius: 2
                    }}
                    fullWidth
                  >
                    Startup Login
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default HomePage;