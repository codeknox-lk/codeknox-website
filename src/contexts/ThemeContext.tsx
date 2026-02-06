import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Force light mode only
  const [isDark] = useState(false);

  useEffect(() => {
    try {
      if (typeof window === 'undefined') return;
      
      // Always set light mode
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
      
      // Update meta theme-color for mobile browsers
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', '#ffffff'); // white
      }
    } catch (error) {
      // Silent error handling for production
    }
  }, []);

  // No-op function since we're forcing light mode
  const toggleTheme = () => {
    // Do nothing - light mode only
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};