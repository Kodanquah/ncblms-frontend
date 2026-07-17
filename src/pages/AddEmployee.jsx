import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import { addEmployee } from "../services/employeeService";

import {
  Typography,
  Paper,
  Grid,
  TextField,
  Button
} from "@mui/material";

function AddEmployee() {

  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    employee_number: "",
    full_name: "",
    email: "",
    phone: "",
    position: "",
    department_id: 1,
    role: "employee",
    password: "",
    annual_leave_balance: 21
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      await addEmployee(employee);

      alert("Employee created successfully!");

      navigate("/employees");

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.error ||
        "Failed to create employee."
      );
    }
  };

  return (
    <DashboardLayout>

      <Typography variant="h4" fontWeight="bold" mb={3}>
        Add New Employee
      </Typography>

      <Paper sx={{ p: 4 }}>

        <Grid container spacing={3}>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Employee Number"
              name="employee_number"
              value={employee.employee_number}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Full Name"
              name="full_name"
              value={employee.full_name}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={employee.email}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={employee.phone}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Position"
              name="position"
              value={employee.position}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Role"
              name="role"
              value={employee.role}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              name="password"
              value={employee.password}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              size="large"
              onClick={handleSubmit}
            >
              Save Employee
            </Button>
          </Grid>

        </Grid>

      </Paper>

    </DashboardLayout>
  );
}

export default AddEmployee;