import { Card, CardContent, Typography } from "@mui/material";

function DashboardCard({ title, value, color }) {
  return (
    <Card
      sx={{
        borderLeft: `6px solid ${color}`,
        borderRadius: 2
      }}
      elevation={4}
    >
      <CardContent>
        <Typography color="text.secondary">
          {title}
        </Typography>

        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mt: 1 }}
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DashboardCard;