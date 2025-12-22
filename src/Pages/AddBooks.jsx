import React, { useContext } from 'react';
import { ThemeContext } from '../Context/AuthContext';

const AddBooks = () => {
    const {isDark} = useContext(ThemeContext);
    return (
        <div className={`${isDark ? "dark" : "bg-white transition-colors"}`}>
            Add Books Page
        </div>
    );
};

export default AddBooks;