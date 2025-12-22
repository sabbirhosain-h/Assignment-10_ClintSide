import React, { useContext } from 'react';
import { ThemeContext } from '../Context/AuthContext';

const BookDetails = () => {
    const {isDark} = useContext(ThemeContext);
    return (
        <div className={`${isDark ? "dark" : "bg-white transition-colors"}`}>
            Book Details Page
        </div>
    );
};

export default BookDetails;