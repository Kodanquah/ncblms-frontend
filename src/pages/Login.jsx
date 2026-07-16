import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
  Alert
} from "@mui/material";

import { login } from "../services/authService";

function Login() {

  const [employeeNumber, setEmployeeNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {

    try {

      setError("");

      const data = await login(
  employeeNumber,
  password
);

console.log("LOGIN RESPONSE:", data);

localStorage.setItem("token", data.token);

console.log("TOKEN SAVED:", localStorage.getItem("token"));

localStorage.setItem(
  "employee",
  JSON.stringify(data.employee)
);

navigate("/dashboard");

      console.log(data);

    } catch (err) {

      console.error(err);

      setError("Invalid Employee Number or Password");

    }

  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f9",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Container maxWidth="sm">

        <Card elevation={8}>

          <CardContent sx={{ p: 5 }}>

            <Typography
              variant="h4"
              align="center"
              fontWeight="bold"
            >
              🏦 NCBLMS
            </Typography>

            <Typography
              align="center"
              mb={4}
            >
              HR & Payroll Management System
            </Typography>

            {error && (
              <Alert severity="error">
                {error}
              </Alert>
            )}

            <TextField
              fullWidth
              label="Employee Number"
              margin="normal"
              value={employeeNumber}
              onChange={(e) =>
                setEmployeeNumber(e.target.value)
              }
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              onClick={handleLogin}
            >
              Login
            </Button>

          </CardContent>

        </Card>

      </Container>

    </Box>
  );

}

export default Login;