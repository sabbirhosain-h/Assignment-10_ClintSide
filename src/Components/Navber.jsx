import { BookText } from 'lucide-react';
import React from 'react';
import { Link, NavLink } from 'react-router';



const Navber = () => {
    return (
        <nav className='bg-white transition-colors'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
            <div>
                <Link to='/' className='flex items-center gap-2'>
                    <div className='w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform'>
                <BookText className='text-white'/>
                      </div>
                 <span className="text-slate-900 dark:text-white">The Book Haven</span>
                <div></div>
                </Link>
            </div>

            <div className='gap-5 flex'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/Login'>Login</NavLink>
                

            </div>
                
         </div>

            </div>

        </nav>
       
    );
};

export default Navber;