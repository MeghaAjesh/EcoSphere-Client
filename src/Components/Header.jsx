import React from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
  Link as MuiLink,
  Stack
} from '@mui/material';
import {
  Home as HomeIcon,
  ShoppingBag as ShoppingBagIcon,
  Spa as SpaIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Header({ isAdminDashboard }) {
  return (
    <AppBar 
      position="static" 
      color="default" 
      elevation={1} 
      sx={{ 
        bgcolor: 'white',
        paddingLeft: isAdminDashboard ? '240px' : '0', // Conditionally add padding
      }}
    >
      <Container maxWidth="fluid">
        <Toolbar sx={{ minHeight: 56, px: 2 }} disableGutters>
          {/* Brand/Logo */}
          <MuiLink href="#" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src="https://cdn.pixabay.com/photo/2023/03/13/20/13/button-7850698_1280.png"
              alt="EcoSphere Logo"
              sx={{ height: 40, mr: 1 }}
              loading="lazy"
            />
            <Typography
              variant="h4"
              noWrap
              fontWeight="bold"
              color="text.primary"
            >
              EcoSphere
            </Typography>
          </MuiLink>
          
          {/* Navigation Links */}
          <Stack 
            direction="row" 
            spacing={3} 
            sx={{ ml: 'auto' }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
              <HomeIcon fontSize="small" sx={{ mr: 0.5 }} />
              <Typography component="span">Home</Typography>
            </Link>
            
            <MuiLink href="#" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
              <ShoppingBagIcon fontSize="small" sx={{ mr: 0.5 }} />
              <Typography component="span">Products</Typography>
            </MuiLink>
            
            <MuiLink href="#" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
              <SpaIcon fontSize="small" sx={{ mr: 0.5 }} />
              <Typography component="span">Startups</Typography>
            </MuiLink>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;