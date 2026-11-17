import React from 'react';
import { Box, InputBase, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const DashboardSearch = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                px: 2,
                py: 1,
                width: { xs: '100%', sm: '320px', md: '384px' }, // Responsive width
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                border: '1px solid #e1e3e4',
            }}
        >
            <SearchIcon sx={{ color: 'text.secondary', fontSize: '20px', mr: 1.5 }} />
            <InputBase
                placeholder="Search items, bills, or customers..."
                sx={{ flex: 1, fontSize: '14px', fontFamily: '"Manrope", sans-serif' }}
            />
            {/* ⌘K Badge */}
            <Box
                sx={{
                    bgcolor: '#f3f4f5',
                    px: 1,
                    py: 0.25,
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '11px' }}>
                    ⌘K
                </Typography>
            </Box>
        </Box>
    );
};

export default DashboardSearch;