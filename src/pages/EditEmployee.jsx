import DashboardLayout from "../layouts/DashboardLayout";
import { Typography } from "@mui/material";

function EditEmployee() {
  return (
    <DashboardLayout>
      <Typography variant="h4" fontWeight="bold">
        Edit Employee
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Employee editing form will appear here.
      </Typography>
    </DashboardLayout>
  );
}

export default EditEmployee;