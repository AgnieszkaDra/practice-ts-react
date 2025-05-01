import React, { createContext, useContext, useState } from 'react';

type ThemeType = 'light' | 'dark';

type ThemeContextType = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: React.ReactNode;
    };
    export function ThemeProvider(
     { children }: ThemeProviderProps
    ) {
    const [theme, setTheme] = useState<ThemeType>('light');
     return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        { children }
      </ThemeContext.Provider>
    );
}

export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error(
          'useTheme must be used within a ThemeProvider'
        );
    }
    return context;
    }

// // Hook do łatwego dostępu do kontekstu
// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// };

// Provider do zarządzania stanem motywu
// export const ThemeProvider: React.FC = ({ children }) => {
//   const [theme, setTheme] = useState<ThemeType>('light'); // Możesz ustawić domyślny motyw

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };