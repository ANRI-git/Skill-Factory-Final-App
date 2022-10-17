import { Box, Toolbar } from '@mui/material';
import React from 'react';
import { Navbar } from '../components/Navbar';

export const AgentsLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
