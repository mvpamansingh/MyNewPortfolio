export const theme = {
  colors: {
    primary: '#007AFF',
    primaryDark: '#0056b3',
    secondary: '#6C757D',
    background: '#FFFFFF',
    text: '#000000',
    lightGray: '#F8F9FA',
    darkGray: '#343A40',
  },
  fonts: {
    primary: "'Inter', sans-serif",
  },
  fontSizes: {
    small: '0.875rem',
    medium: '1rem',
    large: '1.25rem',
    xlarge: '1.5rem',
    xxlarge: '2rem',
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
    xlarge: '2rem',
    xxlarge: '3rem',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
  },
} as const;
