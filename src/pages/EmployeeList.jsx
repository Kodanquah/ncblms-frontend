import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import { getEmployees } from "../services/employeeService";

import {
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TextField,
  Box,
  IconButton
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadEmployees();
  }, []);

  return (
    <DashboardLayout>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Employee Management
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <TextField
          label="Search Employee"
          size="small"
        />

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate("/employees/add")}
        >
          Add Employee
        </Button>
      </Box>

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Employee No</b></TableCell>
              <TableCell><b>Full Name</b></TableCell>
              <TableCell><b>Email</b></TableCell>
              <TableCell><b>Phone</b></TableCell>
              <TableCell><b>Position</b></TableCell>
              <TableCell><b>Role</b></TableCell>
              <TableCell><b>Leave Balance</b></TableCell>
              <TableCell align="center"><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {employees.map((emp) => (
              <TableRow key={emp.employee_id}>
                <TableCell>{emp.employee_number}</TableCell>
                <TableCell>{emp.full_name}</TableCell>
                <TableCell>{emp.email}</TableCell>
                <TableCell>{emp.phone}</TableCell>
                <TableCell>{emp.position}</TableCell>
                <TableCell>{emp.role}</TableCell>
                <TableCell>{emp.annual_leave_balance}</TableCell>

                <TableCell align="center">
                  <IconButton color="primary">
                    <EditIcon />
                  </IconButton>

                  <IconButton color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </DashboardLayout>
  );
}

export default EmployeeList;