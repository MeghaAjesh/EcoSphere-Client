import React from "react";
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Toolbar, 
  Divider, 
  Typography, 
  Box,
  Avatar
} from "@mui/material";
import { 
  Dashboard, 
  ShoppingCart, 
  People, 
  Settings, 
  Logout,
  Inventory
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import RocketIcon from '@mui/icons-material/Rocket';
const drawerWidth = 240;

function AdminSidebar() {
  const location = useLocation();
  
  // Navigation items configuration
  const mainNavItems = [
    { text: "Dashboard", icon: <Dashboard />, path: "/admin-dashboard" },
    { text: "StartUp", icon: <RocketIcon />, path: "/admin-analytics" },
    { text: "Orders", icon: <ShoppingCart />, path: "/admin-orders" },
    { text: "Products", icon: <Inventory />, path: "/admin-products" },
    { text: "Users", icon: <People />, path: "/admin-users" },
  ];
  
  const secondaryNavItems = [
    { text: "Settings", icon: <Settings />, path: "/admin-settings" },
    { text: "Logout", icon: <Logout />, path: "/logout" },
  ];

  // Check if the current path matches the nav item path
  const isActive = (path) => location.pathname === path;
  
  // Render a nav item
  const renderNavItem = (item) => (
    <ListItem key={item.text} disablePadding>
      <ListItemButton 
        component={Link} 
        to={item.path}
        sx={{ 
          borderRadius: "8px", 
          mx: 1,
          backgroundColor: isActive(item.path) ? "rgba(255, 255, 255, 0.12)" : "transparent",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.08)",
          }
        }}
      >
        <ListItemIcon sx={{ color: "white", minWidth: "40px" }}>
          {item.icon}
        </ListItemIcon>
        <ListItemText 
          primary={item.text} 
          primaryTypographyProps={{ 
            fontWeight: isActive(item.path) ? "medium" : "regular" 
          }} 
        />
      </ListItemButton>
    </ListItem>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#1e4620", // Darker, more professional green
          color: "white",
          position: "fixed",
          height: "100vh",
          top: 0,
          left: 0,
          zIndex: 1000,
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Box 
        sx={{ 
          display: "flex", 
          alignItems: "center", 
          padding: "16px", 
          gap: 2 
        }}
      >
        <Avatar 
          sx={{ 
            bgcolor: "white", 
            color: "#1e4620", 
            width: 40, 
            height: 40 
          }}
        >
          A
        </Avatar>
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          Admin Portal
        </Typography>
      </Box>
      
      <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.12)" }} />
      
      <Box sx={{ overflow: "auto", px: 1, py: 2 }}>
        <List>
          {mainNavItems.map(renderNavItem)}
        </List>
        
        <Divider sx={{ my: 2, backgroundColor: "rgba(255, 255, 255, 0.12)" }} />
        
        <List>
          {secondaryNavItems.map(renderNavItem)}
        </List>
      </Box>
      
      <Box sx={{ mt: "auto", p: 2, borderTop: "1px solid rgba(255, 255, 255, 0.12)" }}>
        <Typography variant="caption" component="div" sx={{ opacity: 0.7 }}>
          © 2025 EcoSphere
        </Typography>
      </Box>
    </Drawer>
  );
}

export default AdminSidebar;