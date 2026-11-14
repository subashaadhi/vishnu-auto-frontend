import React from 'react';
import { Box, Typography } from '@mui/material';
import Sidebar from '../../Components/WrapperComponents/Global/sidebar';

const Dashboard = () => {
    return (
        <Box sx={{ display: 'flex', bgcolor: 'background.default', minHeight: '100vh' }}>

            {/* Namma uruvaakkina Sidebar Inga varum */}
            <Sidebar />

            {/* Main Content Area (Sidebar-ku appuram varra area) */}
            <Box component="main" sx={{ flexGrow: 1, ml: '256px', p: 4 }}>
                <Typography variant="h4" color="primary" sx={{ mb: 2 }}>
                    Welcome back, Rajesh
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Vishu Automobiles POS & Inventory Dashboard is getting ready! 🚀
                </Typography>
            </Box>

        </Box>
    );
};

export default Dashboard;