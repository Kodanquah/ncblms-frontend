import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PaymentsIcon from "@mui/icons-material/Payments";
import AssessmentIcon from "@mui/icons-material/Assessment";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#0D47A1",
          color: "white",
        },
      }}
    >
      <Toolbar>
        <Box>
          <Typography variant="h6" fontWeight="bold">
            🏦 NCBLMS
          </Typography>
          <Typography variant="body2">
            HR & Payroll
          </Typography>
        </Box>
      </Toolbar>

      <List>
        <ListItemButton>
          <ListItemIcon sx={{ color: "white" }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "white" }}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Employees" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "white" }}>
            <AccessTimeIcon />
          </ListItemIcon>
          <ListItemText primary="Attendance" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "white" }}>
            <EventNoteIcon />
          </ListItemIcon>
          <ListItemText primary="Leave" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "white" }}>
            <PaymentsIcon />
          </ListItemIcon>
          <ListItemText primary="Payroll" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "white" }}>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "white" }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}

export default Sidebar;