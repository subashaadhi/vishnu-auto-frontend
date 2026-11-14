import React from 'react';
import { Box, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom';
import StatusBadge from './StatusBadge';

const SidebarMenuLink = ({ path, icon: Icon, label, badgeText, badgeType }) => {
    const location = useLocation();
    const isActive = location.pathname == path;

    return (
        <Box
            component={Link}
            to={path}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 2, // px-space-md
                py: 1.5, // py-space-sm
                mb: 0.5,
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'all 0.2s ease-in-out',
                // Active aagiruntha primary green, illana transparent
                backgroundColor: isActive ? 'primary.main' : 'transparent',
                color: isActive ? 'primary.contrastText' : 'text.secondary',
                '&:hover': {
                    backgroundColor: isActive ? 'primary.main' : '#f3f4f5', // hover:bg-surface-container-high
                    color: isActive ? '#fff' : 'text.primary',
                },
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Icon sx={{ fontSize: '20px' }} />
                <Typography variant="body2" sx={{ fontWeight: 600, fontFamily: '"Manrope", sans-serif' }}>
                    {label}
                </Typography>
            </Box>

            {/* Badge iruntha mattum render aagum */}
            {badgeText && <StatusBadge text={badgeText} type={isActive ? 'default' : badgeType} />}
        </Box>
    )
}

export default SidebarMenuLink;
