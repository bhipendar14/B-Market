import React from 'react';
import { Grid, Typography, Paper, Button, IconButton, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    navigate(-1); // Navigate back to the previous page
  };

  const handleConfirmLogout = () => {
    alert('You are successfully logged out.');
    navigate('/'); // Redirect to the home page or login page
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh', backgroundColor: '#f9f9f9' }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: '40px',
          maxWidth: '500px',
          width: '100%',
          position: 'relative',
          textAlign: 'center',
        }}
      >
        {/* Cross Button */}
        <IconButton
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            color: '#000',
            backgroundColor: '#f0f0f0',
            borderRadius: '50%',
            padding: '5px',
          }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h5" gutterBottom>
          Logout
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
          Are you sure you want to logout?
        </Typography>

        {/* Dialog Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <Button
            onClick={handleConfirmLogout}
            sx={{
              backgroundColor: '#000',
              color: '#fff',
              padding: '10px 30px',
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >
            Yes
          </Button>
          <Button
            onClick={handleClose}
            sx={{
              color: '#000',
              border: '1px solid #000',
              padding: '10px 30px',
              '&:hover': {
                backgroundColor: '#f9f9f9',
              },
            }}
          >
            Cancel
          </Button>
        </div>
      </Paper>
            
    </Grid>
  );
};

export default Logout;
