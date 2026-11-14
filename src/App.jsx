import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import Dashboard from './Pages/Dashboard/Dashboard'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
       <Router>
        <Routes>
          {/* Yaarachum verum '/' la vantha udane '/dashboard' ku redirect panniduvom */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Adutha adutha pages namma build pannum pothu inga add pannuvom */}
          {/* <Route path="/pos" element={<POS />} /> */}
          {/* <Route path="/inventory" element={<Inventory />} /> */}
        </Routes>
      </Router>

    </ThemeProvider>
  );
}

export default App;