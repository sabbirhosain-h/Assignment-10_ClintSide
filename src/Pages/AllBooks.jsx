import React, { useContext } from 'react';
import { ThemeContext } from '../Context/AuthContext';

const AllBooks = () => {
    const {isDark} = useContext(ThemeContext);
    return (
        <div className={`${isDark ? "dark" : "bg-white transition-colors"}`}>
            All Books

        </div>
    );
};

export default AllBooks;