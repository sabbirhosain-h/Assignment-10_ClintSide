import React, { useContext, useEffect, useState } from 'react';
import { AuthContext, DataContext, ThemeContext } from '../Context/AuthContext';
import { Edit, Trash2, Eye, Star, BookOpen, ArrowLeft, User, Calendar, MessageCircle, Send } from 'lucide-react';
import { motion } from 'motion/react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const BookDetails = () => {
    const {isDark} = useContext(ThemeContext);
    const {user} = useContext(AuthContext);
    const {id} = useContext(DataContext);
    const [singleBook , setSingleBook] = useState([]);
    const [text, setText] = useState('')
    const navigate = useNavigate();
    console.log(user)
    
    
    useEffect(()=>{
        const getSingleBook = async() => {
            try {
                const res =  await axios.get(`http://localhost:3000/Bookdetails/${id}`);
                setSingleBook(res.data);
            } catch (error) {
                alert(error)
            }
        }
        getSingleBook()
    },[id])

    const handleClick = () =>{
      console.log(text)
      setText("")
    }

    
    return (
        <div className={`${isDark ? "bg-slate-900" : "bg-white"}`}>
            
            <div className='max-w-7xl mx-auto px-10 sm:px-15 py-15 '>

                <motion.button 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 onClick={()=> navigate(-1)} 
                 className={`flex justify-center items-center gap-2 mb-10 hover:text-blue-900 ${isDark ? "text-white" : "text-slate-600"}  `}>
                    <ArrowLeft className='h-5 w-5'></ArrowLeft>
                    <span className='text-[20px]'>Back</span>
                </motion.button>


                {/* book info  */}
                
                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`md:flex rounded-2xl shadow-sm border overflow-hidden ${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>

                  

                        <img className='md:w-1/2 w-full h-100 md:rounded-l-2xl' src={singleBook.coverImage} alt="" />

                       <div className={`md:w-1/2 rounded-r-2xl p-8 shadow-2xl`}>

                            <h1 className={`${isDark ? "text-white" : "text-slate-900"} mb-3`}>
                                   {singleBook.title}
                            </h1>

                            <div className='flex items-center gap-4 mb-3'>
                                <User className='h-5 w-5 text-slate-500'></User>
                                <span className={`${isDark ? "text-slate-400" : "text-slate-700"}`}>By {singleBook.author}</span>
                            </div>

                            <div className='flex items-center gap-3 mb-4'>

                                <div className={`${isDark ? "bg-yellow-900/20 text-yellow-400"  : "bg-yellow-50 text-yellow-600"} flex items-center gap-1 px-4 py-2 rounded-lg`}>

                                    <Star className='h-5 w-5 fill-yellow-400'></Star>
                                    <span>
                                        {singleBook.rating}/5
                                    </span>
                                </div>
                                <div className={`${isDark ? "bg-indigo-900/20 text-indigo-400"  : "bg-indigo-50 text-indigo-600"} flex items-center gap-1 px-4 py-2 rounded-lg`}>
                                    <span>
                                       {singleBook.genre}
                                    </span>
                                </div>
                                {/* time */}
                                <div className={`${isDark ? "text-slate-400"  : " text-slate-600"} flex items-center gap-1 px-4 py-2 rounded-lg`}>

                                    <Calendar className='h-5 w-5 '></Calendar>
                                    <span>
                                      
                                    </span>
                                </div>

                            </div>

                                <div className='mb-3'>
                                    <h1 className={`text-xl ${isDark ? "text-white" : "text-slate-900"}`}>
                                        Summary
                                    </h1>
                                    <p className={`${isDark ? "text-slate-400" : "text-slate-600"}`}>
                                       {singleBook.summary}
                                    </p>
                                </div>

                                <div className={`${isDark ? "border-slate-700" : "border-slate-200"} pt-6 border-t flex gap-5 `}>
                                    
                                    <div className='flex items-center justify-center h-12 w-12 primary-btn rounded-full'>
                                        <User className='text-white h-5 w-5'></User>
                                    </div>

                                    <div>
                                        <p className={`${isDark ? "text-slate-400" : "text-slate-600"} text-sm`}>
                                            Added By
                                        </p>
                                        <p className={`${isDark ? "text-white" : "text-slate-900"}`}>
                                            Hasib
                                        </p>
                                    </div>
                                    <div>
                                        <p className={`${isDark ? "text-slate-400" : "text-slate-600"} text-sm`}>
                                            User Email
                                        </p>
                                        <p className={`${isDark ? "text-white" : "text-slate-900"}`}>
                                            Hasib
                                        </p>
                                    </div>
                                </div>


                       </div>

                   

                </motion.div>

                {/* comment */}
                <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 className={`p-5 border-2 mt-5 rounded-2xl ${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}
                >

                    <div className='flex gap-3 items-center mb-5'>
                        <MessageCircle className={`w-6 h-6  ${isDark ? "text-indigo-400" : "text-indigo-600"} `}>
                        </MessageCircle>
                        <h3 className={`${isDark ? "text-white" : "text-slate-600"}`}>
                            Comments (0)
                        </h3>
                    </div>

                    <div className='flex gap-3'>
                        <img className='h-12 w-12 rounded-full mr-3' src="https://cdn2.momjunction.com/wp-content/uploads/baby-names/bn-wallpapers/hasib_i_love_wallpaper.jpg.webp" alt="" />

                        <div className='w-full'>
                            <textarea 
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            rows={4} className={`${isDark ? "bg-slate-900 text-white" : "bg-indigo-100"} border-indigo-150 rounded-2xl w-full p-4`} placeholder='Add a Comment...' row type="text" />

                            <button onClick={()=> handleClick()} type='submit' className={`mt-2 flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors`}>
                                <Send className='w-4 h-4'></Send>
                                <span>Post Comment</span>
                            </button>
                        </div>

                    </div>
                        {/* comments */}
                        
                    <div className='mt-5'>
                        
                      <div className='flex gap-4'>
                        <img className='h-10 w-10 rounded-full mr-3' src="https://cdn2.momjunction.com/wp-content/uploads/baby-names/bn-wallpapers/hasib_i_love_wallpaper.jpg.webp" alt="" />

                        <div className='gap-y-1.5'>
                            
                            <div className='flex gap-4'>
                                <h1 className={`${isDark ? "text-white" : "text-black"}`}>hasib</h1>
                                <span className={`${isDark ? "text-slate-400" : "text-slate-800"}`}>12?jan </span>
                            </div>

                            <p className={`${isDark ? "text-slate-400" : "text-slate-800"}`}> asjhvdakjfvajfvavfsbvd erhg eiugerg;</p>
                        </div>
                      </div>

                      

                    </div>
                    
                </motion.div>



            </div>
            
          
        </div>
    );
};

export default BookDetails;