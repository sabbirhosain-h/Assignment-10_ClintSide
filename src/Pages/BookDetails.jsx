import React, { useContext, useEffect, useState } from 'react';
import { AuthContext, DataContext, ThemeContext } from '../Context/AuthContext';
import { Edit, Trash2, Eye, Star, BookOpen, ArrowLeft, User, Calendar, MessageCircle, Send } from 'lucide-react';
import { motion } from 'motion/react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import Loader from '../Router/Loader';
import { formatDistanceToNow } from 'date-fns';

const BookDetails = () => {
    const {isDark} = useContext(ThemeContext);
    const {user} = useContext(AuthContext);
    const [singleBook , setSingleBook] = useState([]);
    const [text, setText] = useState('')
    const navigate = useNavigate();
    const [loading ,setLoading] = useState(true);
    const {id} = useParams();
    const [comments , setComments] = useState()
    
   
   
    
    useEffect(()=>{
        const getSingleBook = async() => {
            try {
                const res =  await axios.get(`http://localhost:3000/Bookdetails/${id}`);
                setSingleBook(res.data);
                setLoading(false);
            } catch (error) {
                alert(error)
            }
        }
        getSingleBook()
    },[id])
    
    useEffect(()=>{
        const getComments = async() => {
            try {
                const res =  await axios.get(`http://localhost:3000/comments/${id}`);
                setComments(res.data.data);
            } catch (error) {
                console.log(error)
            }
        }
        getComments()
    },[id]);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        const commsentData = {
            bookId: singleBook._id,
            userName: user.displayName,
            commentText: text,
            userPhoto: user.photoURL,
            userEmail: user.email,
        }
       
       try {
         await axios.post(`http://localhost:3000/comments`, commsentData);
         setText("");
         e.target.reset();
         
         const res = await axios.get(`http://localhost:3000/comments/${id}`);
         setComments(res.data.data);
       } catch (error) {
        console.log(error);
       }
       



    }

    

    const handleDeleteComment = async (id ,commentId) => {

        try {
            await axios.delete(`http://localhost:3000/comments/${id}/${commentId}`);
           
            const res = await axios.get(`http://localhost:3000/comments/${id}`);
            setComments(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }


    if(loading){
        return <Loader></Loader>
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
                                       {singleBook.createdAt 
                                   ? formatDistanceToNow(new Date(singleBook.createdAt), { addSuffix: true })
                                    : '1 month ago'
                                     }
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
                                            {singleBook.author}
                                        </p>
                                    </div>
                                    <div>
                                        <p className={`${isDark ? "text-slate-400" : "text-slate-600"} text-sm`}>
                                            User Email
                                        </p>
                                        <p className={`${isDark ? "text-white" : "text-slate-900"}`}>
                                            {singleBook.userEmail}
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
                 className={`p-5 border-2 mt-5 rounded-2xl ${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>

                    <div className='flex gap-3 items-center mb-5'>
                        <MessageCircle className={`w-6 h-6  ${isDark ? "text-indigo-400" : "text-indigo-600"} `}>
                        </MessageCircle>
                        <h3 className={`${isDark ? "text-white" : "text-slate-600"}`}>
                            Comments ({comments ? comments.length : 0})
                        </h3>
                    </div>

                    <div className='flex gap-3'>
                        <img className='h-12 w-12 rounded-full mr-3' src={user.photoURL} alt="" />

                        <form onSubmit={handleSubmit} className='w-full'>
                            <input 
                            onChange={(e) => setText(e.target.value)}
                             className={`${isDark ? "bg-slate-900 text-white" : "bg-indigo-100"} border-indigo-150 rounded-2xl w-full p-4`} placeholder='Add a Comment...' required type="text" />

                            <button  type='submit' className={`mt-2 flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors`}>
                                <Send className='w-4 h-4'></Send>
                                <span>Post Comment</span>
                            </button>
                        </form>

                    </div>
                        {/* comments */}
                        
                   {
                    comments && comments.map((comment) => (
        <div key={comment.UserId} className='mt-5 '>
      
      <div className='flex flex-col sm:flex-row gap-4'>

        <img className='h-12 w-12 rounded-full mr-3 sm:mr-0' src={comment.userPhoto} alt="" />

        <div className='gap-y-1.5 flex-1 min-w-0'>
            
          <div className='flex flex-wrap gap-2 sm:gap-4 mb-1'>
            <h1 className={`${isDark ? "text-white" : "text-black"} text-sm sm:text-base font-semibold`}>
              {comment.userName}
            </h1>
            <span className={`${isDark ? "text-slate-400" : "text-slate-800"} text-xs sm:text-sm whitespace-nowrap`}>
              {comment.createdAt 
                ? formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })
                : 'Just now'
              }
            </span>
          </div>

          <p className={`${isDark ? "text-slate-400" : "text-slate-800"} text-sm sm:text-base wrap-break-word`}>
            {comment.commentText}
          </p>
        </div>

        <button 
           onClick={() => handleDeleteComment( id ,comment.UserId)}
          className={`flex gap-2 items-center justify-center rounded-lg transition-colors px-3 py-2 sm:px-4 hover:bg-red-700 text-white self-start sm:self-center whitespace-nowrap ${isDark ? "bg-red-600" : "bg-red-600"}`}>
          <Trash2 className="w-4 h-4" />
          <span className="text-sm sm:text-base">Delete</span>
        </button>

      </div>
       <div className="divider"></div>

    </div>
                    ))
                    }
                    
                </motion.div>



            </div>
            
          
        </div>
    );
};

export default BookDetails;