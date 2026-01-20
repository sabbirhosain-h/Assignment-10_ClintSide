import React, { useContext, useState } from 'react';
import { ThemeContext } from '../Context/AuthContext';
import { Edit, Trash2, Eye, Star, BookOpen, Trash } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';


const MyBooks = () => {
    const {isDark} = useContext(ThemeContext);
    const navigate = useNavigate();
    const [deleteId , setDeleteId] = useState(0)



    return (
        <div className={`${isDark ? "bg-slate-900" : "bg-white transition-colors"} min-h-screen`}>
           <div className='max-w-7xl mx-auto lg:py-10 py-4 px-4 sm:px-6 lg:px-8'>

            <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            >
              <h1 className={`${isDark ? "text-white" : "text-slate-900"} mb-2`}>My Books</h1>
              <p className={`${isDark ? "text-slate-400" : "text-slate-600"} mb-2`}>
                Manage Your Book Collection (0) Books</p>
            </motion.div>



          {/* main content */}
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className={`${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"} rounded-xl shadow-sm border overflow-hidden`}
            >

              {/* big screen - hidden on mobile, shown on sm and up */}
                <div className='hidden sm:block overflow-x-auto'>
                  <table className='w-full'>
                      <thead className={`${isDark ? "bg-slate-900/50" : "bg-slate-50"} `}>
                          <tr>
              <th className={`${isDark ? "text-slate-300" : "text-slate-700"} px-6 py-4 text-left`}>Book</th>
              <th className={`${isDark ? "text-slate-300" : "text-slate-700"} px-6 py-4 text-left`}>Author</th>
              <th className={`${isDark ? "text-slate-300" : "text-slate-700"} px-6 py-4 text-left`}>Genre</th>
              <th className={`${isDark ? "text-slate-300" : "text-slate-700"} px-6 py-4 text-left`}>Rating</th>
              <th className={`${isDark ? "text-slate-300" : "text-slate-700"} px-6 py-4 text-center`}>Action</th>
                          </tr>
                      </thead>
                      <tbody className={`${isDark ? "divide-slate-700" : "divide-slate-200"} divide-y`}>
                          <motion.tr
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          // transition={{ delay: index * 0.05 }}
                          className={`${isDark ? "hover:bg-slate-700/50" : "hover:bg-slate-50"} transition-colors`}
                          >
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <img className="w-12 h-16 object-cover rounded" src="https://sabbirhosain-h.github.io/Assigmnent_1/Assets/wc-mini.png" alt="" />
                                    <span className={`${isDark ? "text-white" : "text-slate-900"}`}>Assignment-1</span>
                                </div>
                            </td>
                            <td className={`px-6 py-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}>Hasib</td>
                            <td className='px-6 py-4'>
                              <span className={`${isDark ? "bg-indigo-900/50 text-indigo-400" : "bg-indigo-100 text-indigo-600"} rounded-lg text-sm px-3 py-1`}>
                                Horror  
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className={`${isDark ? "text-white" : "text-slate-900"}`}>5</span>
                              </div>
                            </td>
                            <td className='px-6 py-4'>
                              <div className='flex items-center justify-center gap-2'>
                                <button
                                  onClick={() => navigate(`/BookDetails/${id}`)}
                                  className={`p-2 ${isDark ? "text-indigo-400 bg-indigo-900/30" : "text-indigo-600 bg-indigo-50"} rounded-lg transition-colors`}>
                                    <Eye className="w-5 h-5" />
                                </button>
                                <button
                                  onClick={() => setDeleteId(1)}
                                  className={`p-2 ${isDark ? "text-blue-400 bg-blue-900/30" : "text-blue-600 bg-blue-50"} rounded-lg transition-colors`}>
                                    <Edit className="w-5 h-5" />
                                </button>
                                <button
                                  onClick={() => navigate(`/book-details/1`)}
                                  className={`p-2 ${isDark ? "text-red-400 bg-red-900/30" : "text-red-600 bg-red-50"} rounded-lg transition-colors`}>
                                    <Trash2 className="w-5 h-5" />
                                </button>

                              </div>

                            </td>

                          </motion.tr>
                      </tbody>
                  </table>

                </div>

                {/* small screen - shown on mobile, hidden on sm and up */}
                <div className={`sm:hidden divide-y ${isDark ? "divide-slate-700" : "divide-slate-200"}`}>
                    <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                    //  transition={{ delay: index * 0.05 }}
                     className={`p-4 ${isDark ? "bg-slate-800" : "bg-white"}`}
                    >
                    <div className="flex gap-4 mb-3">
                       <img  className="w-20 h-28 object-cover rounded" src="https://sabbirhosain-h.github.io/Assigmnent_1/Assets/wc-mini.png" alt="" />
                    <div className='py-2 w-50 h-28'>
                          <h1 className={`font-md ${isDark ? "text-white" : "text-slate-800"}`}>Title</h1>
                          <h1 className={`mt-1 px-2 text-[14px] ${isDark ? "text-slate-500" : "text-slate-600"}`}>By Author</h1>

                          <div className='flex gap-2 mt-3'>
                            <span className={`${isDark ? "bg-indigo-900/50 text-indigo-400" : "bg-indigo-200 text-indigo-600"} rounded-lg text-sm px-3 py-1`}>
                                Horror  
                          </span>
                           <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className={`text-[15px] ${isDark ? "text-white" : "text-slate-900"}`}>5</span>
                            </div>
                          </div>

                    </div>
                    </div>

                    {/* buttons */}
                    <div className='flex gap-2'>
                       <button 
                        
                       className={`flex gap-2 items-center justify-center w-full rounded-lg transition-colors px-4 py-2 hover:bg-indigo-700 text-white ${isDark ? "bg-indigo-600" : " bg-indigo-600"}`}>
                          <Eye className="w-5 h-5" />
                          <span>View</span>
                       </button>
                       <button 
                       
                       className={`flex gap-2 items-center justify-center w-full rounded-lg transition-colors px-4 py-2 hover:bg-blue-700 text-white ${isDark ? "bg-blue-600" : " bg-blue-600"}`}>
                          <Edit className="w-4 h-4" />
                          <span>Edit</span>
                       </button>
                       <button 
                       
                       className={`flex gap-2 items-center justify-center w-full rounded-lg transition-colors px-4 py-2 hover:bg-red-700 text-white ${isDark ? "bg-red-600" : " bg-red-600"}`}>
                          <Trash2 className="w-4 h-4" />
                          <span>Delete</span>
                       </button>
                      
                    </div>



                    </motion.div>
                </div>

            </motion.div>

           </div>
          
        </div>
    );
};

export default MyBooks;