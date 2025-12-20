import React, { useState } from 'react';
import { ThemeContext } from './AuthContext';

const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false);
    const themeInfo = {
        isDark,
        setIsDark,
    }
    return (
        <ThemeContext value={themeInfo}>
            {children}
        </ThemeContext>
    );
};

export default ThemeProvider;