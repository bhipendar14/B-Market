import  { useState } from "react";
import { Grid, TextField, Button, Typography, Paper, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Ensure axios is installed: npm install axios
import toast from "react-hot-toast";
import { url } from "../../context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Navigate back
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Make a POST request to your backend login route
      const response = await axios.post(`${url}/login`, { email, password });

      // Save the token (if needed for future API requests)
      localStorage.setItem("token", response.data.token);

      // Navigate to the Profile page after successful login
      toast.success("Login successful!");
      navigate("/product");
    } catch (error) {
        toast.error("Login failed!");
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear error on change
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(""); // Clear error on change
  };

  return (
    <Grid container alignItems="center" justifyContent="center" style={{ minHeight: "100vh",  backgroundImage: `url('https://i.pinimg.com/originals/9c/b6/21/9cb6213a4bff8ded6afeb0c083be4134.gif')`, backgroundSize: 'cover' }}>
      <Paper
        elevation={3}
        sx={{
          padding: "30px",
          maxWidth: "400px",
          width: "100%",
          position: "relative",
          "@media (max-width: 600px)": { padding: "20px" },
        }}
      >
        <IconButton onClick={handleClose} style={{ position: "absolute", top: "10px", right: "10px", color: "gray" }}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" align="center" gutterBottom>
          Login to Your Account
        </Typography>
        <form onSubmit={handleLogin}>
          {error && <Typography color="error" align="center" gutterBottom>{error}</Typography>}
          <TextField
            fullWidth
            label="Enter Email"
            type="email"
            margin="normal"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            fullWidth
            label="Enter Password"
            type="password"
            margin="normal"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              marginTop: "20px",
              backgroundColor: "#000",
              color: "#fff",
              "&:hover": { backgroundColor: "#333" },
            }}
            disabled={loading || !email || !password}
          >
            {loading ? "Logging in..." : "Login"}

          </Button>
        </form>
        <Typography align="center" marginTop="20px">
          Don&apos;t have an account?{" "}
          <Button variant="text" onClick={() => navigate("/signup")} sx={{ textTransform: "none", color: "black" }}>
            Register
          </Button>
        </Typography>
      </Paper>
      <footer className="footer1">
        <p>© {new Date().getFullYear()}, Bmarket.com, Inc. or its affiliates</p>
      </footer>
    </Grid>

  );
};

export default Login;
