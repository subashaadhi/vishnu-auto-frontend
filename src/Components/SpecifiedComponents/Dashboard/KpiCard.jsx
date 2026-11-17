import React from 'react';
import { Box, Typography } from '@mui/material';

const KpiCard = ({ title, value, icon: Icon, iconBg, iconColor, trend }) => {
    return (
        <Box
            sx={{
                bgcolor: '#ffffff',
                borderRadius: '12px',
                p: 3,
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                // height:'100%',
                // width:'100%,'
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 600, mb: 0.5 }}>
                    {title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.5 }}>
                    <Typography variant="h4" sx={{ color: 'text.primary', fontWeight: 700, fontFamily: '"Sora", sans-serif' }}>
                        {value}
                    </Typography>

                    {/* Trend (+14.8%) iruntha mattum render aagum */}
                    {trend && (
                        <Box sx={{ bgcolor: '#dcfce7', color: '#166534', px: 1, py: 0.25, borderRadius: '16px', display: 'flex', alignItems: 'center' }}>
                            <Typography variant="caption" sx={{ fontWeight: 'bold', fontSize: '11px' }}>
                                {trend}
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Box>

            {/* Icon Box */}
            <Box
                sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '12px',
                    bgcolor: iconBg,
                    color: iconColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    ml: 2,
                }}
            >
                <Icon sx={{ fontSize: '28px' }} />
            </Box>
        </Box>
    );
};

export default KpiCard;