import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardCard from "../components/DashboardCard";
import { Grid, Typography } from "@mui/material";
import { getDashboard } from "../services/dashboardService";

function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const data = await getDashboard();
        setStats(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadDashboard();
  }, []);

  if (!stats) {
    return <h2>Loading...</h2>;
  }

  return (
    <DashboardLayout>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        NCBLMS Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <DashboardCard
            title="Employees"
            value={stats.total_employees}
            color="#1976D2"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <DashboardCard
            title="Pending Leaves"
            value={stats.pending_leaves}
            color="#ED6C02"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <DashboardCard
            title="Approved Leaves"
            value={stats.approved_leaves}
            color="#2E7D32"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <DashboardCard
            title="Rejected Leaves"
            value={stats.rejected_leaves}
            color="#D32F2F"
          />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

export default Dashboard;