// src/theme.ts
'use client';

import { createTheme, ThemeOptions } from '@mui/material/styles';

// Shared typography and component settings
const sharedTypography = {
  fontFamily: '"Inter", "Playfair Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  h1: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '2.5rem',
    fontWeight: 700,
    letterSpacing: '-0.02em',
  },
  h2: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '2rem',
    fontWeight: 600,
    letterSpacing: '-0.01em',
  },
  h3: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '1.75rem',
    fontWeight: 600,
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 600,
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 500,
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 500,
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.7,
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.6,
  },
  button: {
    textTransform: 'none' as const,
    fontWeight: 500,
  },
};

// Shared component overrides
const sharedComponents: ThemeOptions['components'] = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 4,
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        borderBottom: '1px solid',
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        boxShadow: 'none',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        boxShadow: 'none',
        border: '1px solid',
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 4,
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },
  },
};

// Light theme - Lavender palette
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#7c4dff',
      light: '#b47cff',
      dark: '#651fff',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#e040fb',
      light: '#ff79ff',
      dark: '#aa00c7',
      contrastText: '#ffffff',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
    divider: 'rgba(0, 0, 0, 0.08)',
  },
  typography: sharedTypography,
  components: {
    ...sharedComponents,
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          backgroundColor: '#ffffff',
          color: '#212121',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: 'none',
          border: '1px solid rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
});

// Dark theme - Lavender palette
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#b388ff',
      light: '#e7b9ff',
      dark: '#7c4dff',
      contrastText: '#000000',
    },
    secondary: {
      main: '#ea80fc',
      light: '#ffb2ff',
      dark: '#b64fc8',
      contrastText: '#000000',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
  },
  typography: sharedTypography,
  components: {
    ...sharedComponents,
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
          backgroundColor: '#1e1e1e',
          color: '#ffffff',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: 'none',
          border: '1px solid rgba(255, 255, 255, 0.12)',
        },
      },
    },
  },
});

// Default export for backwards compatibility
export default lightTheme;
