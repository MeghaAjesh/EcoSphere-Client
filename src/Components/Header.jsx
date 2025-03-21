import React from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
  Link,
  Stack
} from '@mui/material';
import {
  Home as HomeIcon,
  ShoppingBag as ShoppingBagIcon,
  Spa as SpaIcon
} from '@mui/icons-material';

function Header() {
  return (
    <AppBar position="static" color="default" elevation={1} sx={{ bgcolor: 'white' }}>
      <Container maxWidth="fluid">
        <Toolbar disableGutters>
          {/* Brand/Logo */}
          <Link href="#" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src="https://cdn.pixabay.com/photo/2023/03/13/20/13/button-7850698_1280.png"
              alt="EcoSphere Logo"
              sx={{ height: 40, mr: 1 }}
              loading="lazy"
            />
            <Typography
              variant="h6"
              noWrap
              fontWeight="bold"
              color="text.primary"
            >
             <h3><b> EcoSphere</b></h3>
            </Typography>
          </Link>
          
          {/* Navigation Links */}
          <Stack 
            direction="row" 
            spacing={3} 
            sx={{ ml: 'auto' }}
          >
            <Link href="#" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
              <HomeIcon fontSize="small" sx={{ mr: 0.5 }} />
              <Typography component="span">Home</Typography>
            </Link>
            
            <Link href="#" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
              <ShoppingBagIcon fontSize="small" sx={{ mr: 0.5 }} />
              <Typography component="span">Products</Typography>
            </Link>
            
            <Link href="#" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
              <SpaIcon fontSize="small" sx={{ mr: 0.5 }} />
              <Typography component="span">Startups</Typography>
            </Link>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;