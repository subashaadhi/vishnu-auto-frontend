import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#22c55e', // Solid Green
      contrastText: '#fff',
    },
    secondary: {
      main: '#94a3b8', // Light Gray outline buttons
    },
    background: {
      default: '#f8fafc', // Global light gray background
      paper: '#ffffff', // White cards & modals
    },
  },
  typography: {
    fontFamily: '"Manrope", sans-serif',
    h1: { fontFamily: '"Sora", sans-serif', fontWeight: 700 },
    h2: { fontFamily: '"Sora", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Sora", sans-serif', fontWeight: 600 },
    h4: { fontFamily: '"Sora", sans-serif', fontWeight: 600 },
    h5: { fontFamily: '"Sora", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Sora", sans-serif', fontWeight: 600 },
    button: {
      fontFamily: '"Manrope", sans-serif',
      textTransform: 'none', // Prevents default all-caps buttons in MUI
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          boxShadow: 'none',
          padding: '8px 16px',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
          },
        },
      },
    },
  },
});