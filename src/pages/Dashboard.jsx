import DashboardLayout from "../layouts/DashboardLayout";
import DashboardCard from "../components/DashboardCard";

import { Grid, Typography } from "@mui/material";

function Dashboard() {
  return (
    <DashboardLayout>

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        NCBLMS Dashboard
      </Typography>

      <Grid container spacing={3}>

        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard
            title="Employees"
            value="150"
            color="#1976D2"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard
            title="Present Today"
            value="145"
            color="#2E7D32"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard
            title="On Leave"
            value="5"
            color="#ED6C02"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard
            title="Monthly Payroll"
            value="GH₵520,000"
            color="#9C27B0"
          />
        </Grid>

      </Grid>

    </DashboardLayout>
  );
}

export default Dashboard;