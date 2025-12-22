import { BookText, Moon, Sun, Menu, X } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext, ThemeContext } from '../Context/AuthContext';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {user, SignOut} = useContext(AuthContext);
    const {isDark , setIsDark} = useContext(ThemeContext);
    
        
    const toggleDarkMode = () => { 
    setIsDark(!isDark);
    };
    
    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={` bg-white shadow-md `}>


            <div className={`flex items-center justify-between  px-4 sm:px-6 lg:px-8  h-20 ${isDark ? "bg-slate-900" : ''}`}>


                {/* Logo */}
             <div className='flex'>
                        <Link to='/' className='flex items-center gap-2 group'>
                            <div className='w-10 h-10 primary-btn rounded-xl flex items-center justify-center transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 shadow-md'>
                                <BookText className='text-white w-6 h-6'/>
                            </div>
                            <span className={`text-xl font-semibold text-slate-800 sm:block group-hover:text-indigo-600 ${isDark ? 'dark:group-hover:text-indigo-400 text-white' : ''}   transition-colors`}>
                                The Book Haven
                            </span>
                        </Link>
            </div>

            {/* Navigation Links */}
            <div className='hidden md:flex gap-2 lg:gap-3'>

                <NavLink to='/' className={({isActive}) => `px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:scale-105 ${isActive ? 'bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}>
                                Home
                </NavLink>
                <NavLink to='/AllBooks' className={({isActive}) => `px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:scale-105 ${isActive ? 'bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}>
                                All Books
                </NavLink>
                <NavLink to='/AddBooks' className={({isActive}) => `px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:scale-105 ${isActive ? 'bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}>
                                Add Book
                </NavLink>
                <NavLink to='/MyBooks' className={({isActive}) => `px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:scale-105 ${isActive ? 'bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}>
                                My Books
                </NavLink>
                
            </div>

            {/* Dark Mode Toggle & Menu Button */}
            <div className='flex items-center gap-3'>
                {/* themebutton */}
                <button
                     onClick={toggleDarkMode}
                    className={`w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100  transition-all duration-300 text-slate-600  hover:rotate-12
                    ${isDark ? 'dark:bg-slate-700 hover:bg-slate-700 text-slate-300' : 'bg-slate-100'} `}>

                                {isDark ?
                                 <Moon className="w-5 h-5" />
                                 :
                                 <Sun className="w-5 h-5" /> 
                                }
                </button>
                {/* menu button */}
                <div className='gap-3 sm:gap-4  hidden md:flex md:items-center'>
                    {
                     user ? 
                     <div className='flex gap-3 sm:gap-4 justify-center items-center'>
                          <div className='relative group'>
                            <img className='h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover cursor-pointer' src={`${user ? user.photoURL : <CircleUser size={28} color="#373833" strokeWidth={3} />}`} alt="" />
                            <div className='absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none'>
                              {user.displayName}
                            </div>
                          </div>
                          <button onClick={SignOut} className='btn text-sm sm:text-base'>Log out</button>
                        </div> 
                     : 
                     <>
                       <NavLink to='/LogIn' className={({isActive}) => `px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:text-black hover:scale-105 ${isActive ? 'bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'} ${isDark ? "text-black" : ''} `}>
                               Log In
                    </NavLink>
                       
                       <div><Link to='/Signup'><button className={`btn text-white text-sm sm:text-base primary-btn ` }>Sign UP</button></Link></div>
                    </>
                    }
                    

                </div>

                {/* toggle button */}
                    <button
                         onClick={toggleMenu}
                        className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-300">
                                    {isMenuOpen ?
                                     <X className="w-6 h-6" /> 
                                     :
                                    <Menu className="w-6 h-6" />
                                    }
                    </button>

            </div>


            </div>
            
           {/* Button  */}
            {isMenuOpen && (
                    <div className='md:hidden py-4 space-y-2 border-t border-slate-200 dark:border-slate-700'>
                        <NavLink 
                            to='/' 
                            onClick={toggleMenu}
                            className={({isActive}) => `block px-4 py-3 rounded-lg font-medium transition-all ${isActive ? 'bg-indigo-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to='/AllBooks' 
                            onClick={toggleMenu}
                            className={({isActive}) => `block px-4 py-3 rounded-lg font-medium transition-all ${isActive ? 'bg-indigo-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                        >
                            All Books
                        </NavLink>
                        <NavLink 
                            to='/AddBooks' 
                            onClick={toggleMenu}
                            className={({isActive}) => `block px-4 py-3 rounded-lg font-medium transition-all ${isActive ? 'bg-indigo-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                        >
                            Add Books
                        </NavLink>
                        <NavLink 
                            to='/MyBooks' 
                            onClick={toggleMenu}
                            className={({isActive}) => `block px-4 py-3 rounded-lg font-medium transition-all ${isActive ? 'bg-indigo-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                        >
                            My Books
                        </NavLink>
            
                        
                        <div className='pt-4 space-y-2 border-t border-slate-200 dark:border-slate-700'>
                            {user ? (
                                <button 
                                    onClick={() => {
                                        SignOut();
                                        toggleMenu();
                                    }}
                                    className="w-full px-4 py-3 rounded-lg font-medium bg-red-500 hover:bg-red-600 text-white transition-colors"
                                >
                                    Sign Out
                                </button>
                            ) : (
                                <> 
                                    <NavLink 
                                        to='/Login'
                                        onClick={toggleMenu}
                                        className="block px-4 py-3 rounded-lg font-medium text-center text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                    >
                                        Login
                                    </NavLink>
                                    <NavLink 
                                        to='/SignUp'
                                        onClick={toggleMenu}
                                        className="block px-4 py-3 rounded-lg font-medium text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all"
                                    >
                                        Sign Up
                                    </NavLink>
                                </>
            
                            )}
                        </div>
                    </div>
                )}
            
            
        </div>
    );
};

export default Navbar;