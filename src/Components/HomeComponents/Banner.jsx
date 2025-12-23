import { ArrowRight, BookText, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
    <div className={`relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden`}>
            
            
           
        <div className="relative flex gap-4 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                
                <div>
                    <span className='text-yellow-300 flex gap-4 pb-5'>
                    <Sparkles></Sparkles>
                    Welcome to The Book Haven
                </span>
                <p className='text-white mb-6'>Discover Your Next Favorite Book</p>
                <p className='text-white mb-6 wrap-break-word'>Join thousands of book lovers in exploring, sharing, and managing your personal library. Find recommendations, track your reading, and connect with fellow readers.</p>

                <div className='flex flex-wrap gap-4'>
                    <Link to="/AllBooks" className='flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors shadow-lg'>
                       <BookText></BookText>
                       Browse All Books
                    </Link>

                    <Link to="/MyBooks" className='flex items-center gap-2 px-6 py-3 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors'>
                       Add you books
                       <ArrowRight></ArrowRight>
                    </Link>

                </div>

                <div className='flex items-center gap-10 mt-12'>
                    <div>
                        <div className='text-white mb-1'>10,000+</div>
                        <p className='text-indigo-200 text-sm'>Books</p>
                    </div>
                    <div>
                        <div className='text-white mb-1'>5,000+</div>
                        <p className='text-indigo-200 text-sm'>Members</p>
                    </div>
                    <div>
                        <div className='text-white mb-1'>50+</div>
                        <p className='text-indigo-200 text-sm'>Genres</p>
                    </div>

                </div>
                </div>

                 <motion.div
                   className='hidden md:block'
                   animate={{ y: [0, -20, 0] }}
                    transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                 }}>
                    <img className='rounded-2xl' src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=900" alt="" />
                 </motion.div>

        </div>

          

    </div>
    );
};

export default Banner;