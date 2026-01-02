import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/AuthContext';
import { Link } from 'react-router';
import { ArrowRight, Star, User } from 'lucide-react';
import { motion } from "motion/react"

const LatestAdditions = ({ books }) => {
const { isDark } = useContext(ThemeContext);
const latestBooks = [...books].reverse();
return (
<div className={`${isDark ? 'bg-slate-900' : 'bg-gray-50'} py-12 px-4 sm:px-6 lg:px-8`}>
    <div className="max-w-7xl mx-auto">
    
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <div>
        <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
            Latest Additions
        </h2>
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm sm:text-base`}>
            Discover recently added books to our collection
        </p>
        </div>
        <Link to="/AllBooks" className={`flex items-center gap-2 text-indigo-600  hover:gap-3 transition-all`}>
                <span>See All</span>
                <ArrowRight />
            </Link>
    </div>

    
    <motion.div 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {latestBooks.slice(0, 8).map((book) => (
        <Link
            key={book._id}
            to={`/books/${book._id}`}
            className={`group rounded-lg overflow-hidden transition-all duration-300 ${
            isDark
                ? 'bg-gray-800 hover:bg-gray-750 shadow-lg hover:shadow-xl'
                : 'bg-white hover:bg-gray-50 shadow-md hover:shadow-lg'
            }`}
        >
        
            <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-gray-200">
            <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-2 py-1 rounded-full flex items-center gap-1 text-sm font-semibold shadow-md">
                <Star className="w-4 h-4 fill-current" />
                {book.rating}
            </div>
            </div>

            <div className="p-4">
            <h3
                className={`font-bold text-lg mb-1 line-clamp-2 group-hover:text-blue-500 transition-colors ${
                isDark ? 'text-white' : 'text-gray-900'
                }`}
            >
                {book.title}
            </h3>
            <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                By {book.author}
            </p>

            
            <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                <span
                className={`text-xs px-3 py-1 rounded-full ${
                    isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                }`}
                >
                {book.genre}
                </span>
                <div className="flex items-center gap-1">
                <User className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Admin User
                </span>
                </div>
            </div>
            </div>
        </Link>
        ))}
    </motion.div>
    </div>
</div>
);
};

export default LatestAdditions;