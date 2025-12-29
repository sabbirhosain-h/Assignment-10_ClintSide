import { BookOpen, Star, Users } from 'lucide-react';
import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/AuthContext';
import { motion } from "motion/react"

const AboutThePage = () => {
    const {isDark} = useContext(ThemeContext);
    return (
        <div className={`py-16   ${isDark ? "bg-slate-900" : "bg-white"} transition-colors`}>
            
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

                <div className='grid lg:grid-cols-2 gap-12 items-center'>

                    <motion.div 
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2 , ease: "easeOut" }}
                    >
                        <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800" alt="" className='rounded-2xl shadow-xl' />
                    </motion.div>

                    <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2 , ease: "easeOut" }}
                    >
                        <h2 className={` ${isDark ? "text-white" : "text-slate-900"} mb-4`}>About The Book Haven</h2>
                        <p className={`${isDark ? "text-slate-400" : "text-slate-600"} mb-6`}>The Book Haven is more than just a library management system—it's a community for book enthusiasts. Whether you're an avid reader looking to track your collection or an author wanting to share your work, we provide the perfect platform to connect, discover, and grow.</p>

                        <div className='space-y-4'>
                            <div className='flex items-start gap-4'>
                                <div className={`w-12 h-12 ${isDark ? "bg-indigo-900/30" : "bg-indigo-100 "} rounded-lg flex items-center justify-center shrink-0`}>
                                    <BookOpen
                                     className={`${isDark ? "text-indigo-400" : "text-indigo-600"} w-6 h-6`}></BookOpen>
                                </div>
                                <div>
                                    <h1 className={`${isDark ? "text-white" : "text-slate-900"} mb-1`}>Manage Your Library</h1>
                                    <p className='text-slate-600 dark:text-slate-400'>Keep track of books you've read, want to read, and share with others</p>
                                </div>
                            </div>
                            <div className='flex items-start gap-4'>
                                <div className={`w-12 h-12 ${isDark ? "bg-purple-900/30" : "bg-purple-100 "} rounded-lg flex items-center justify-center shrink-0`}>
                                    <Users
                                     className={`${isDark ? "text-purple-400" : "text-purple-600"} w-6 h-6`}></Users>
                                </div>
                                <div>
                                    <h1 className={`${isDark ? "text-white" : "text-slate-900"} mb-1`}>Join the Community</h1>
                                    <p className='text-slate-600 dark:text-slate-400'>Connect with fellow readers, share reviews, and discover new favorites</p>
                                </div>
                            </div>
                            <div className='flex items-start gap-4'>
                                <div className={`w-12 h-12 ${isDark ? "bg-pink-900/30" : "bg-pink-100 "} rounded-lg flex items-center justify-center shrink-0`}>
                                    <Star
                                     className={`${isDark ? "text-pink-400" : "text-pink-600"} w-6 h-6`}></Star>
                                </div>
                                <div>
                                    <h1 className={`${isDark ? "text-white" : "text-slate-900"} mb-1`}>Rate & Review</h1>
                                    <p className='text-slate-600 dark:text-slate-400'>Share your thoughts and help others discover great reads</p>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                </div>

            </div>
        </div>
    );
};

export default AboutThePage;