import React from 'react';
import { Box, Typography, ButtonBase } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const QuickActionButton = ({ title, icon: Icon, shortcut, path, bg, hoverBg, textColor, iconBg, iconColor, arrowColor }) => {

    const navigate = useNavigate();

    return (
        <ButtonBase
            onClick={() => navigate(path)}
            sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2,
                textAlign: 'left',
                bgcolor: bg,
                p: 3,
                borderRadius: '12px',
                transition: 'all 0.2s ease-in-out',
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                // Tailwind-la neenga ezhuthuna 'group-hover' effect idhuthaan
                '&:hover': {
                    bgcolor: hoverBg,
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    '& .arrow-icon': {
                        transform: 'translateX(6px)', // Arrow munnala nagarum
                        color: textColor, // Arrow color text color-ku maaridum
                    }
                }
            }}
        >
            {/* Left Side: Icon & Title */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                    sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '12px',
                        bgcolor: iconBg,
                        color: iconColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                    }}
                >
                    <Icon sx={{ fontSize: '24px' }} />
                </Box>
                <Typography variant="h6" sx={{ color: textColor, fontWeight: 700, fontFamily: '"Sora", sans-serif' }}>
                    {title}
                </Typography>
            </Box>

            {/* Right Side: Shortcut & Arrow */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box sx={{ bgcolor: iconBg, color: iconColor, px: 1.5, py: 0.5, borderRadius: '4px' }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: '1px' }}>
                        {shortcut}
                    </Typography>
                </Box>
                <ArrowForwardIcon
                    className="arrow-icon"
                    sx={{ color: arrowColor, transition: 'all 0.2s', fontSize: '22px' }}
                />
            </Box>
        </ButtonBase>
    )
}
export default QuickActionButton;
