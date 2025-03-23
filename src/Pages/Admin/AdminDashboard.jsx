import React from "react";
import { 
  Box, 
  CssBaseline, 
  Toolbar, 
  Typography, 
  Grid, 
  Paper, 
  Divider,
  Button,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from "@mui/material";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Legend 
} from "recharts";
import { 
  ShoppingCart, 
  People, 
  TrendingUp, 
  TrendingDown, 
  Store, 
  FilterList,
  Download,
  InsertChartOutlined,
  Refresh
} from "@mui/icons-material";
import AdminSidebar from "../../Components/AdminSidebar";

// Sample Data
const salesData = [
  { name: "Jan", orders: 50, revenue: 4000 },
  { name: "Feb", orders: 60, revenue: 4500 },
  { name: "Mar", orders: 80, revenue: 5500 },
  { name: "Apr", orders: 90, revenue: 7000 },
  { name: "May", orders: 120, revenue: 8500 },
  { name: "Jun", orders: 110, revenue: 8000 },
];

const pieData = [
  { name: "Small Bags", value: 300 },
  { name: "Medium Bags", value: 500 },
  { name: "Large Bags", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const StatCard = ({ icon, title, value, trend, trendUp }) => (
  <Paper 
    elevation={2} 
    sx={{ 
      p: 3, 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "space-between",
      height: "100%",
      borderRadius: 2,
      transition: "transform 0.2s, box-shadow 0.2s",
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: "0 6px 12px rgba(0,0,0,0.1)"
      }
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Box 
        sx={{ 
          color: "#fff", 
          bgcolor: "#1e4620", 
          borderRadius: "12px", 
          p: 1.5,
          display: "flex"
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography variant="body2" color="text.secondary">{title}</Typography>
        <Typography variant="h5" fontWeight="bold">{value}</Typography>
      </Box>
    </Box>
    <Box 
      sx={{ 
        color: trendUp ? "#2e7d32" : "#d32f2f", 
        display: "flex", 
        alignItems: "center", 
        bgcolor: trendUp ? "rgba(46, 125, 50, 0.1)" : "rgba(211, 47, 47, 0.1)",
        borderRadius: 1,
        px: 1,
        py: 0.5
      }}
    >
      {trendUp ? <TrendingUp fontSize="small" /> : <TrendingDown fontSize="small" />}
      <Typography variant="body2" ml={0.5} fontWeight="medium">{trend}</Typography>
    </Box>
  </Paper>
);

const AdminDashboard = () => {
  const [timeRange, setTimeRange] = React.useState("6m");
  
  const handleTimeRangeChange = (event) => {
    setTimeRange(event.target.value);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AdminSidebar />
      
      <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: "#f8f9fa", minHeight: "100vh" }}>
        <Toolbar />

        {/* Header Section */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <Box>
            <Typography variant="h4" fontWeight="bold" color="#1e4620">Dashboard</Typography>
            <Typography variant="body1" color="text.secondary">
              Welcome back! Here's what's happening with EcoSphere today.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button 
            color="success"
              variant="outlined" 
              startIcon={<Download />}
              sx={{ borderRadius: 2 }}
            >
              Export
            </Button>
            <Button 
              variant="contained" 
              sx={{ 
                bgcolor: "#1e4620", 
                "&:hover": { bgcolor: "#143016" },
                borderRadius: 2
              }}
            >
              View Reports
            </Button>
          </Box>
        </Box>

        {/* Stats Grid */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard icon={<ShoppingCart />} title="TOTAL ORDERS" value="520" trend="+12.5%" trendUp={true} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard icon={<People />} title="TOTAL USERS" value="1,245" trend="+8.2%" trendUp={true} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard icon={<Store />} title="TOTAL STARTUPS" value="30" trend="+5%" trendUp={true} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard icon={<InsertChartOutlined />} title="CONVERSION RATE" value="3.2%" trend="-0.5%" trendUp={false} />
          </Grid>
        </Grid>

        {/* Charts Section */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography variant="h6" fontWeight="bold">Revenue & Orders</Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <FormControl size="small" sx={{ minWidth: 120 }}>
                    <InputLabel id="time-range-label">Time Range</InputLabel>
                    <Select
                      labelId="time-range-label"
                      id="time-range"
                      value={timeRange}
                      label="Time Range"
                      onChange={handleTimeRangeChange}
                    >
                      <MenuItem value="1m">Last Month</MenuItem>
                      <MenuItem value="3m">Last 3 Months</MenuItem>
                      <MenuItem value="6m">Last 6 Months</MenuItem>
                      <MenuItem value="1y">Last Year</MenuItem>
                    </Select>
                  </FormControl>
                  <IconButton size="small">
                    <Refresh fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      borderRadius: 8,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      border: "none"
                    }} 
                    formatter={(value, name) => {
                      return [name === "revenue" ? `$${value}` : value, name === "revenue" ? "Revenue" : "Orders"];
                    }}
                  />
                  <Legend 
                    verticalAlign="top" 
                    height={36}
                    formatter={(value) => value === "revenue" ? "Revenue" : "Orders"}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="orders" 
                    stroke="#1e4620" 
                    strokeWidth={2} 
                    dot={{ strokeWidth: 2 }}
                    activeDot={{ r: 8, strokeWidth: 0 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#0088FE" 
                    strokeWidth={2} 
                    dot={{ strokeWidth: 2 }}
                    activeDot={{ r: 8, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, borderRadius: 2, height: "100%" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography variant="h6" fontWeight="bold">Product Distribution</Typography>
                <IconButton size="small">
                  <FilterList fontSize="small" />
                </IconButton>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie 
                      data={pieData} 
                      cx="50%" 
                      cy="50%" 
                      innerRadius={60}
                      outerRadius={100} 
                      fill="#8884d8" 
                      dataKey="value"
                      paddingAngle={2}
                      label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {pieData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={COLORS[index % COLORS.length]} 
                          stroke="none"
                        />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`${value} units`, "Volume"]}
                      contentStyle={{ 
                        borderRadius: 8,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        border: "none"
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
                <Box sx={{ width: "100%", mt: 2 }}>
                  <Typography variant="body2" color="text.secondary" align="center">
                    Medium bags account for 50% of total sales
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AdminDashboard;