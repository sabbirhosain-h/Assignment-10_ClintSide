import React, { useContext } from 'react';
import { ThemeContext } from '../Context/AuthContext';

const MyBooks = () => {
    const {isDark} = useContext(ThemeContext);
    return (
        <div className={`${isDark ? "dark" : "bg-white transition-colors"}`}>
            My Books
        </div>
    );
};

export default MyBooks;