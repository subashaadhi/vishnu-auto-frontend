import React, { useState } from 'react';
import { Button } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const RestockButton = ({ onRestock }) => {
    const [isRequested, setIsRequested] = useState(false);

    const handleClick = () => {
        setIsRequested(true);
        if (onRestock) {
            onRestock();
        }
    }

    return (
        <Button
            size="small"
            variant="contained"
            disableElevation
            disabled={isRequested}
            onClick={handleClick}
            startIcon={
                isRequested ? (
                    <CheckCircleIcon sx={{ fontSize: '16px !important' }} />
                ) : (
                    <AddShoppingCartIcon sx={{ fontSize: '16px !important' }} />
                )
            }
            sx={{
                textTransform: 'none',
                fontFamily: '"Manrope", sans-serif',
                fontWeight: 600,
                fontSize: '12px',
                borderRadius: '8px',
                px: 1.5,
                py: 0.6,
                bgcolor: isRequested ? '#e7e8e9' : 'primary.main',
                color: isRequested ? 'text.secondary' : '#ffffff',
                '&:hover': {
                    bgcolor: 'primary.dark',
                },
                '&.Mui-disabled': {
                    bgcolor: '#e7e8e9',
                    color: 'text.secondary',
                },
            }}
        >
            {isRequested ? 'Requested' : 'Add to List'}
        </Button>
    );
};

export default RestockButton;