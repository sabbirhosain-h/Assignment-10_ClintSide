import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Home, BookOpen, Search } from 'lucide-react';


const ErrorPage = () => {
    return (
           <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <h1 className="text-slate-900 dark:text-white" style={{ fontSize: '8rem', lineHeight: 1 }}>
              404
            </h1>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4"
            >
              <BookOpen className="w-16 h-16 text-indigo-600 dark:text-indigo-400" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-900 dark:text-white mb-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-600 dark:text-slate-400 text-lg mb-8"
        >
          Oops! The page you're looking for seems to have wandered off. 
          It might be lost in the library somewhere.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          
          <Link
            to="/all-books"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            <Search className="w-5 h-5" />
            <span>Browse Books</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Error Code: 404 - This page could not be found
          </p>
        </motion.div>
      </motion.div>
    </div>
    );
};

export default ErrorPage;