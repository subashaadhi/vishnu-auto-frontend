import React from 'react';
import { IconButton, Badge } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const HeaderNotification = ({ hasUnread = true }) => {
    return (
        <IconButton
            sx={{
                color: 'text.secondary',
                transition: 'all 0.2s',
                borderRadius: '8px',
                '&:hover': {
                    bgcolor: '#e7e8e9', // hover:bg-surface-container-high
                    color: 'text.primary',
                }
            }}
        >
            <Badge
                color="error"
                variant="dot"
                invisible={!hasUnread}
                sx={{
                    '& .MuiBadge-badge': {
                        right: 4,
                        top: 4,
                    }
                }}
            ><NotificationsNoneIcon sx={{ fontSize: '24px' }} />
            </Badge>

        </IconButton>
    )
}

export default HeaderNotification;