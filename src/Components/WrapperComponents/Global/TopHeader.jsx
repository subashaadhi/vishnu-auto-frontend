import React from 'react';
import { Box, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HeaderNotification from '../../SpecifiedComponents/Global/HeaderNotification';
import HeaderProfile from '../../SpecifiedComponents/Global/HeaderProfile';

const TopHeader = () => {

    const today = new Date().toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <Box
            component="header"
            sx={{
                position: 'fixed',
                top: 0,
                left: '256px', // Sidebar width-ku thalli irukkanum
                right: 0,
                height: '64px',
                bgcolor: 'background.paper',
                // Slight transparent & blur effect for modern look
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 1px 8px rgba(0,0,0,0.04)',
                zIndex: 40,
                px: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            {/* Left Side: Date */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
                <CalendarTodayIcon sx={{ fontSize: '18px' }} />
                <Typography variant="body2" sx={{ fontFamily: '"Manrope", sans-serif', fontWeight: 600 }}>
                    {today}
                </Typography>
            </Box>

            {/* Right Side: Notification & Profile */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

                {/* Low stock iruntha alert kaata idhu use aagum */}
                <HeaderNotification hasUnread={true} />

                {/* Divider Line */}
                <Box sx={{ height: '24px', width: '1px', bgcolor: '#e1e3e4' }} />

                {/* Profile (No DB, fully static for the shop owner) */}
                <HeaderProfile
                    name="Vishnu"
                    role="Shop Owner"
                    // Default avatar-ku oru placeholder image
                    avatarUrl="https://ui-avatars.com/api/?name=Rajesh&background=22c55e&color=fff"
                />
            </Box>
        </Box>
    );
}

export default TopHeader;