import React, { useState } from "react";
import { Grid, TextField, Button, Typography, Paper, IconButton } from "@mui/material";
import toast from "react-hot-toast";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import butterfly from "../../assets/butterfly.gif";;
import { url } from "../../context";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!name.trim()) errors.name = "Name is required.";
    if (!email.trim()) errors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Invalid email format.";
    if (!password) errors.password = "Password is required.";
    else if (password.length < 6) errors.password = "Password must be at least 6 characters long.";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const result = await axios.post(`${url}/signup`, { name, email, password });
      if (result.status === 201) {
        toast.success("Account created successfully!");
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <Grid
    container
    alignItems="center"
    justifyContent="center"
    style={{
      minHeight: "100vh",
      backgroundImage: `url(${butterfly})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
      <Paper elevation={3} style={{ padding: "30px", maxWidth: "400px", position: "relative" }}>
        <IconButton
          onClick={() => navigate(-1)}
          style={{ position: "absolute", top: "10px", right: "10px", color: "gray" }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" align="center" gutterBottom>
          Create an Account
        </Typography>
        <form onSubmit={handleSignup} noValidate>
          <TextField
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            fullWidth
            label="Enter Name"
            margin="normal"
            variant="outlined"
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            fullWidth
            label="Enter Email"
            type="email"
            margin="normal"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            fullWidth
            label="Enter Password"
            type="password"
            margin="normal"
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password}
          />
          <Button type="submit" fullWidth variant="contained" style={{ marginTop: "20px", backgroundColor: "#000", color: "#fff" }}>
            Sign Up
          </Button>
        </form>
        <Typography align="center" marginTop="20px">
          Already have an account?{" "}
          <Button
            variant="text"
            onClick={() => navigate("/login")}
            style={{ textTransform: "none", color: "black" }}
          >
            Login
          </Button>
        </Typography>
      </Paper>
            <footer className="footer1">
        <p>© {new Date().getFullYear()}, Bmarket.com, Inc. or its affiliates</p>
      </footer>
    </Grid>
  );
};

export default Signup;
