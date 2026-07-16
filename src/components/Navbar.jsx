import { AppBar, Toolbar, Typography, Box } from "@mui/material";

function Navbar() {

  const employee = JSON.parse(localStorage.getItem("employee"));

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#1565C0" }}
    >
      <Toolbar>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          NCBLMS Dashboard
        </Typography>

        <Box>
          <Typography fontWeight="bold">
            {employee?.full_name}
          </Typography>

          <Typography variant="body2">
            {employee?.role}
          </Typography>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;