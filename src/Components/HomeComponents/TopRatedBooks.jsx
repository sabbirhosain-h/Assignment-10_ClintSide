import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/AuthContext';
import { Star, TrendingUp, User } from 'lucide-react';

const TopRatedBooks = ({books}) => {
    const {isDark} = useContext(ThemeContext)

    const topBooks = books.filter(book => book.rating >= 4.5)
    console.log(topBooks)
    return (
        <div className={`${isDark ? "bg-gray-900" : "bg-gray-50"}`}>

            <div className='py-5 md:py-15 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>

                <div className='flex gap-4 justify-center items-center mb-4 '>
                    <span><TrendingUp className=' w-6 h-6 text-indigo-600'></TrendingUp></span>
                    <h1 className={` ${isDark ? "text-white" : "text-slate-900"}`}>Top Rated Books</h1>
                </div>
                <p className={`max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"} text-center mb-4`}>The highest-rated books loved by our community</p>


             {/* books */}
                
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                    topBooks.slice(0 , 3).map((book) => (
                        <div key={book._id} className={`group rounded-lg overflow-hidden transition-all duration-300 ${isDark
                ? 'bg-gray-800 hover:bg-gray-750 shadow-lg hover:shadow-xl'
                : 'bg-white hover:bg-gray-50 shadow-md hover:shadow-lg'}`}>


                    <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-gray-200">
                        <img src={book.coverImage}  alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                                
                        <div className="absolute top-3 left-3 bg-blue-800 text-white px-2 py-1 rounded-full flex items-center gap-1 text-sm font-semibold shadow-md">
                                  Top Rated
                        </div>
                        <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-2 py-1 rounded-full flex items-center gap-1 text-sm font-semibold shadow-md">
                            <Star className="w-4 h-4 fill-current" />
                                   {book.rating}
                        </div>
                    </div>

                    <div className='p-4'>
                        <h3  className={`font-bold text-lg mb-1 line-clamp-2 group-hover:text-blue-500 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>{book.title}</h3>

                        <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>  By {book.author}</p>

                        <div className='flex justify-between'>
                            <span className={`text-xs px-3 py-1 rounded-full ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                                {book.genre}
                            </span>
                            <span className='flex items-center gap-2'>
                                <User className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                 Admin User
                                 </span>
                            </span>
                        </div>

                        <p className={`mt-3 ${isDark?"text-slate-400":"text-slate-600"}  text-sm line-clamp-2`}>{book.summary}</p>

                    </div>
                    
                </div>
                    ))
                }
                </div>
                

            </div>
        </div>
    );
};

export default TopRatedBooks;