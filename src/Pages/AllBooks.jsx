import React, { useContext, useEffect, useState, useMemo } from 'react';
import { DataContext, ThemeContext } from '../Context/AuthContext';
import { Eye, Search, SlidersHorizontal, Star, User } from 'lucide-react';
import Loader from '../Router/Loader';
import { motion } from 'motion/react';
import { Link } from 'react-router';

const AllBooks = () => {
    const {isDark} = useContext(ThemeContext);
    const {books ,setId} = useContext(DataContext);
    const [search , setSearch] = useState("");
    const [genre , setGenre] = useState("All");
    const [sort, setSort] = useState("Latest First");
    const [loading ,setLoading] = useState(true);
    
    const filteredBooks = useMemo(() => {
        let allBooks = [...books];
        
        if (search) {
            allBooks = allBooks.filter(
                (book) => book.title.toLowerCase().includes(search.toLowerCase()) ||
                book.title.toLowerCase().includes(search.toLowerCase()) 
            )
        };
        if ( genre !== "All" ) {
           allBooks = allBooks.filter((book)=> book.genre === genre);

           allBooks.sort((a,b)=>{
               if(sort === "HighestRaring"){
                   return b.rating - a.rating
                }
                else if (sort === "title"){
                return a.title.localCompare(b.rating)
          }
        })
        };

        return allBooks;
    },[books, search, genre, sort]);
    

    useEffect(()=>{
        setTimeout(()=>{ 
            setLoading(false);
        },500)
    },[books])
    if(loading){
        return <Loader></Loader>
    }
    
    
    return (
        <div className={`${isDark ? "bg-slate-900" : "bg-white"}  transition-colors`}>
           
           <div className={`max-w-7xl mx-auto px-10 sm:px-15 py-15`}>
                
                <div className='mb-5'>
                    <h1 className={`${isDark ? "text-white" : "text-slate-900"} text-2xl mb-2`}>
                        All Books
                    </h1>
                    <p className={`${isDark ? "text-slate-600" : "text-slate-400"}`}>
                        Browse our collection of {books.length} books
                    </p>
                </div>

                <div className='relative mb-5'>
                    <Search className=' absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400'></Search>

                    <input 
                        type='text'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search by title'
                        className={`w-full pl-12 px-4 py-3 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500   ${isDark ? "bg-slate-800 border-slate-600 text-white" : "bg-slate-50 border-slate-300"}`}
                    />
                </div>

                <div className='flex flex-col sm:flex-row gap-4 mb-10'>

                    <div className='w-full' > 
                        <div className='flex gap-3 mb-3'>

                            <SlidersHorizontal className={`${isDark ? "text-slate-400" : "text-slate-600"} h-4 w-4`}></SlidersHorizontal>
                            <p className={`${isDark ? "text-slate-300" : "text-slate-500"} text-sm`}>
                                Filter by Genre
                            </p>
                        
                        </div>
                    <select 
                      
                      value={genre}
                      onChange={(e) => setGenre(e.target.value)}
                      className={`w-full pl-10 px-4 py-3 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500   ${isDark ? "bg-slate-800 border-slate-600 text-white" : "bg-slate-50 border-slate-300"}`}>

                        <option value="All">All</option>
                        {
                            books.map((book) => (<option key={book._id} value={book.genre}>{book.genre}</option>))
                        }
                        
                        
                    </select>
                    
                    </div>
                    <div className='w-full'> 
                        <div className='flex gap-3 mb-3'>

                            <Star className={`${isDark ? "text-slate-400" : "text-slate-600"} h-4 w-4`}></Star>
                            <p className={`${isDark ? "text-slate-300" : "text-slate-500"} text-sm`}>
                                Sort By
                            </p>
                        
                        </div>
                    <select 
                      
                      value={sort}
                      onChange={(e) => setSort(e.target.value)}
                      className={`w-full pl-10 px-4 py-3 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500   ${isDark ? "bg-slate-800 border-slate-600 text-white" : "bg-slate-50 border-slate-300"}`}>

                        <option value="LatestFirst">Latest First</option>
                        <option value="HighestRaring">Highest Raring</option>
                        <option value="Title">Title</option>
                        
                        
                    </select>
                    
                    </div>
                    

                </div>

                {/* All books display */}
                {filteredBooks.length === 0 ? (
         
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400">
              No books found matching your criteria
            </p>
          </div>
            ) : (
                   <motion.div
                    initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.2 }}
                     className={`rounded-xl shadow-sm border overflow-hidden  ${isDark ? "bg-slate-800 border-slate-700 " : "bg-white border-slate-200"} `}>
           
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className={`  ${isDark ? "bg-slate-900/50" : "bg-slate-50"}`}>
                <tr>
                    <th className={`px-6 py-4 text-left ${isDark ? "text-slate-300" : "text-slate-700"}`}>Book</th>
                    <th className={`px-6 py-4 text-left ${isDark ? "text-slate-300" : "text-slate-700"}`}>Author</th>
                    <th className={`px-6 py-4 text-left ${isDark ? "text-slate-300" : "text-slate-700"}`}>Genre</th>
                    <th className={`px-6 py-4 text-left ${isDark ? "text-slate-300" : "text-slate-700"}`}>Rating</th>
                    <th className={`px-6 py-4 text-left ${isDark ? "text-slate-300" : "text-slate-700"}`}>Added By</th>
                    <th className={`px-6 py-4 text-center ${isDark ? "text-slate-300" : "text-slate-700"}`}>Action</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {filteredBooks.map((book, index) => (
                    <motion.tr
                      key={book._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`transition-colors  ${isDark ? "hover:bg-slate-700/50" : "hover:bg-slate-50"}`}>
                    
                      <td className="px-6 py-4">
                         <div className="flex items-center gap-3">
                          <img
                            src={book.coverImage}
                            alt={book.title}
                            className="w-12 h-16 object-cover rounded"
                          />
                          <span className={`${isDark ? "text-white" : "text-slate-900"}`}>{book.title}</span>
                        </div>
                      </td>
                      
                    
                      <td className={`px-6 py-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        {book.author}
                      </td>
                      
                     
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-lg text-sm  ${isDark ? "bg-indigo-900/30 text-indigo-400" : "bg-indigo-100 text-indigo-600"}  `}>
                          {book.genre}
                        </span>
                      </td>
                      
                    
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className={`${isDark ? "text-white" : "text-slate-900"}`}>{book.rating}</span>
                        </div>
                      </td>
                      
                   
                      <td className="px-6 py-4">
                        <div className={`flex items-center gap-2 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                          <User className="w-4 h-4" />
                          <span className="text-sm">{book.author}</span>
                        </div>
                      </td>
                      
                     
                      <td className="px-6 py-4 text-center">
                        <Link
                          onClick={() => setId(book._id)}
                          to={`/BookDetails/${book._id}`}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                          <Eye className="w-4 h-4" />
                          <span>View Details</span>
                        </Link>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            
            <div className="lg:hidden divide-y divide-slate-200 dark:divide-slate-700">
              {filteredBooks.map((book, index) => (
                <motion.div
                  key={book._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4">
                  <div className="flex gap-4 mb-3">
                   
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="w-20 h-28 object-cover rounded"/>
                    
                 
                    <div className="flex-1">
                      <h3 className={`mb-1 ${isDark ? "text-white" : "text-slate-900"}`}>{book.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                        by {book.author}
                      </p>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-1 rounded text-sm ${isDark ? "text-indigo-400 bg-indigo-900/30" : "text-indigo-600 bg-indigo-100"}`}>
                          {book.genre}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className={`text-sm ${isDark ? "text-white" : "text-slate-900"}`}>{book.rating}</span>
                        </div>
                      </div>
                      <div className={`flex items-center gap-1 ${isDark ? "text-slate-500" : "text-slate-400"} text-sm`}>
                        <User className="w-3 h-3" />
                        <span>{book.author}</span>
                      </div>
                    </div>
                  </div>
                  
               
                  <Link
                    onClick={() => setId(book._id)}
                    to={`/BookDetails/${book._id}`}
                    className={`block text-center px-4 py-2   rounded-lg hover:bg-indigo-700 transition-colors ${isDark ? "text-slate-400" : "text-white bg-indigo-600"}`}>
                    View Details
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}



           </div>
        </div>
    );
};

export default AllBooks;