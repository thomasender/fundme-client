import { createContext, useContext } from 'react';

interface Theme {
  colors: {
    primary: string;
    error: string;
    info: string;
    contrast: string;
    background: string;
    text: string;
    hover: string;
    purple: string;
  };
  button: {
    primary: {
      background: string;
      color: string;
    };
    secondary: {
      background: string;
      color: string;
    };
  }
}
export const light: Theme = {
  colors: {
    primary: '#0070f3',
    error: '#ff0000',
    info: '#0000ff',
    contrast: '#ffffff',
    background: '#ffffff',
    text: '#333',
    hover: '#ccc',
    purple: '#7342DC',
  },
  button: {
    primary: {
      background: '#030303',
      color: '#ffffff',
    },
    secondary: {
      background: '#303030',
      color: '#ffffff',
    },
  }
  // Add more theme variables as needed
};

export const dark: Theme = {
  colors: {
    primary: '#0070f3',
    error: '#ff0000',
    info: '#0000ff',
    contrast: '#ffffff',
    background: '#010101',
    text: '#f3f3f3',
    hover: '#ccc',
    purple: '#7342DC',
  },
  button: {
    primary: {
      background: '#f3f3f3',
      color: '#030303',
    },
    secondary: {
      background: '#3f3f3f',
      color: '#030303',
    },
  }
  // Add more theme variables as needed
};

export const ThemeContext = createContext({
  theme: '',
  toggleTheme: (theme: 'dark' | 'light') => {theme},
});

export const useTheme = () => useContext(ThemeContext);