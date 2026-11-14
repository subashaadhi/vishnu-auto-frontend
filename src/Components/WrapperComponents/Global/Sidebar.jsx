import React from 'react';
import {Box, Typography} from '@mui/material'
import SidebarMenuLink from '../../SpecifiedComponents/Global/SidebarMenulink';
import GridViewIcon from '@mui/icons-material/GridView';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import InventoryIcon from '@mui/icons-material/Inventory';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

const menuItems = [
    {
        label: 'Dashboard',
        path: '/dashboard',
        icon: GridViewIcon,
        badgeText: 'Live',
        badgeType: 'default'
    },
    {
        label: 'Billing (POS)',
        path: '/pos',
        icon: PointOfSaleIcon,
        badgeText: 'F1',
        badgeType: 'primary'
    },
    {
        label: 'Inventory',
        path: '/inventory',
        icon: InventoryIcon,
        badgeText: '24.8k',
        badgeType: 'info'
    },
    {
        label: 'Sales History',
        path: '/sales-history',
        icon: ReceiptLongIcon,
    }
];

const Sidebar = () => {
    return (
        <Box
      component="aside"
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100vh',
        width: '256px', // w-64 equivalent
        bgcolor: 'background.paper', // White background
        boxShadow: '0 1px 8px rgba(0,0,0,0.04)',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        {/* Logo Section */}
        <Box sx={{ height: '64px', px: 3, display: 'flex', alignItems: 'center', gap: 1.5, borderBottom: '1px solid #f3f4f5' }}>
          {/* Chinna Logo Box */}
          <Box sx={{ width: 32, height: 32, bgcolor: 'primary.main', borderRadius: 1, display: 'flex', alignItems:'center', justifyContent:'center', color: 'white', fontWeight: 'bold' }}>
            V
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {/* HTML-la Kinetic Retail nu irunthathu, namma Vishu Automobiles nu maathitom */}
            <Typography variant="h6" sx={{ fontSize: '16px', lineHeight: 1, color: 'primary.main' }}>
              Vishu Automobiles
            </Typography>
            <Typography variant="caption" sx={{ fontSize: '11px', color: 'text.secondary', letterSpacing: '1px', mt: 0.5, textTransform: 'uppercase' }}>
              Auto & Hardware
            </Typography>
          </Box>
        </Box>

        {/* Navigation Menu Section */}
        <Box sx={{ px: 2, py: 2 }}>
          <Typography 
            variant="caption" 
            sx={{ px: 2, py: 1, display: 'block', color: 'text.secondary', letterSpacing: '1px', textTransform: 'uppercase', mb: 1, fontWeight: 'bold' }}
          >
            Main Menu
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            {/* Inga thaan antha Array-a map pandrom */}
            {menuItems.map((item, index) => (
              <SidebarMenuLink
                key={index}
                path={item.path}
                icon={item.icon}
                label={item.label}
                badgeText={item.badgeText}
                badgeType={item.badgeType}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
    )
}

export default Sidebar;