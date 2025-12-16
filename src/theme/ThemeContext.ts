import { createContext } from "react";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.LIGHT,  // значение по умолчанию
  setTheme: () => {
    console.warn('ThemeProvider не найден');
  }
});

export const LOCAL_STORAGE_THEME_KEY = 'theme'