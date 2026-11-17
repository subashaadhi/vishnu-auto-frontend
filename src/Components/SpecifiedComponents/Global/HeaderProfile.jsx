import React from 'react';
import {Box, Typography, Avatar} from '@mui/material';

const HeaderProfile = ({name = "Subash P", role="Store Manager", avatarUrl=""}) => {
    return(
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, pl: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'right' }}>
        <Typography 
          variant="subtitle2" 
          sx={{ fontWeight: 700, color: 'text.primary', lineHeight: 1.2 }}
        >
          {name}
        </Typography>
        <Typography 
          variant="caption" 
          sx={{ color: 'text.secondary', fontSize: '11px', mt: 0.5 }}
        >
          {role}
        </Typography>
      </Box>
      <Avatar 
        src={avatarUrl} 
        alt={name} 
        sx={{ 
          width: 36, 
          height: 36, 
          boxShadow: '0 1px 2px rgba(15,23,42,0.05)' 
        }} 
      />
    </Box>
  );

}

export default HeaderProfile;