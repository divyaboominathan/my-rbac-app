import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { HomeMainBox } from "./style"

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={HomeMainBox}
        >
            <Typography variant="h2" gutterBottom>
                Welcome to the User Management System
            </Typography>
            <Typography variant="body1" gutterBottom>
                Easily manage users, roles, and permissions.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => navigate('/users')}
                sx={{ mt: 2 }}
            >
                Get Started
            </Button>
        </Box>
    );
};

export default HomePage;
