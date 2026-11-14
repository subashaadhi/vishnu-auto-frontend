import React from 'react'
import { Box, Typography } from '@mui/material';

const StatusBadge = ({ text, type = 'default' }) => {

    const getBadgeStyles = () => {
        switch (type) {
            case 'primary':
                return { bg: '#22c55e', color: '#fff' };
            case 'warning':
                return { bg: '#fee2e2', color: '#dc2626' };
            case 'info':
                return { bg: '#dbe1ff', color: '#003ea8' }
            default:
                return { bg: '#e7e8e9', color: '#45474c' }
        }
    }

    const styles = getBadgeStyles();

    return (
    <Box
      sx={{
        backgroundColor: styles.bg,
        color: styles.color,
        px: 1, // px-space-xs (8px)
        py: 0.5, // py-0.5 (4px)
        borderRadius: '8px', // rounded-lg
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      <Typography variant="caption" sx={{ fontWeight: 'bold', fontSize: '11px', letterSpacing: '0.5px' }}>
        {text}
      </Typography>
    </Box>
  );
};

export default StatusBadge;
