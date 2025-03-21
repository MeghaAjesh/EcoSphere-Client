import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  IconButton,
  Stack
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Phone,
  Email,
  Room,
  Spa
} from '@mui/icons-material';

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'white', color: 'text.secondary', boxShadow: 1 }}>
      {/* Top social section */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        p: 2, 
        borderBottom: 1, 
        borderColor: 'divider' 
      }}>
        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
          <Typography fontWeight="600">Join our sustainable business network</Typography>
        </Box>

        <Box className="social-links">
          <IconButton href="" color="inherit" aria-label="Facebook">
            <Facebook />
          </IconButton>
          <IconButton href="" color="inherit" aria-label="Twitter">
            <Twitter />
          </IconButton>
          <IconButton href="" color="inherit" aria-label="Instagram">
            <Instagram />
          </IconButton>
          <IconButton href="" color="inherit" aria-label="LinkedIn">
            <LinkedIn />
          </IconButton>
        </Box>
      </Box>

      {/* Main content section */}
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* About column */}
          <Grid item xs={12} md={3} lg={4} xl={3}>
            <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'bold', mb: 2, display: 'flex', alignItems: 'center' }}>
              <Spa sx={{ mr: 1 }} />
              EcoSphere
            </Typography>
            <Typography variant="body2" color="text.secondary">
              EcoSphere is a premium marketplace connecting businesses with sustainable packaging solutions. 
              We facilitate partnerships between eco-conscious brands and verified sustainable suppliers.
            </Typography>
          </Grid>

          {/* Solutions column */}
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'bold', mb: 2 }}>
              Solutions
            </Typography>
            <Typography variant="body2" paragraph>
              <Link href="#" underline="none" color="inherit">
                Retail Packaging
              </Link>
            </Typography>
            <Typography variant="body2" paragraph>
              <Link href="#" underline="none" color="inherit">
                Corporate Gifts
              </Link>
            </Typography>
            <Typography variant="body2" paragraph>
              <Link href="#" underline="none" color="inherit">
                Food Service
              </Link>
            </Typography>
            <Typography variant="body2" paragraph>
              <Link href="#" underline="none" color="inherit">
                Custom Branding
              </Link>
            </Typography>
          </Grid>

          {/* Business column */}
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'bold', mb: 2 }}>
              Business
            </Typography>
            <Typography variant="body2" paragraph>
              <Link href="#" underline="none" color="inherit">
                Become a Supplier
              </Link>
            </Typography>
            <Typography variant="body2" paragraph>
              <Link href="#" underline="none" color="inherit">
                Partner Portal
              </Link>
            </Typography>
            <Typography variant="body2" paragraph>
              <Link href="#" underline="none" color="inherit">
                Sustainability Standards
              </Link>
            </Typography>
            <Typography variant="body2" paragraph>
              <Link href="#" underline="none" color="inherit">
                Enterprise Solutions
              </Link>
            </Typography>
          </Grid>

          {/* Contact column */}
          <Grid item xs={12} md={3} lg={3} xl={3}>
            <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'bold', mb: 2 }}>
              Contact
            </Typography>
            <Typography variant="body2" paragraph sx={{ display: 'flex', alignItems: 'start' }}>
              <Room sx={{ mr: 1, fontSize: 'small', mt: 0.5 }} />
              <Box component="span">
                One Sustainable Plaza, Suite 200
                <br />San Francisco, CA 94105
              </Box>
            </Typography>
            <Typography variant="body2" paragraph sx={{ display: 'flex', alignItems: 'center' }}>
              <Email sx={{ mr: 1, fontSize: 'small' }} />
              contact@ecosphere.com
            </Typography>
            <Typography variant="body2" paragraph sx={{ display: 'flex', alignItems: 'center' }}>
              <Phone sx={{ mr: 1, fontSize: 'small' }} />
              +1 (800) 555-0123
            </Typography>
          </Grid>
        </Grid>
      </Container>


      {/* Copyright section */}
      <Box sx={{ textAlign: 'center', py: 2, bgcolor: 'rgba(0, 0, 0, 0.025)' }}>
        <Typography variant="caption">
          © {new Date().getFullYear()} EcoSphere Inc. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;