import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from "react";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          <Button color="inherit" onClick={() => handleNavigate("/users")}>
            Users
          </Button>
          <Button color="inherit" onClick={(path) => handleNavigate("/roles")}>
            Roles
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
