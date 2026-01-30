import React, { useContext, useEffect, useState } from 'react';
import { AuthContext, DataContext, ThemeContext } from '../Context/AuthContext';
import { BookOpen, User, Tag, Star, FileText, Image, Upload } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import axios from 'axios';

const Update = () => {
    const {isDark} = useContext(ThemeContext);
    const {user} = useContext(AuthContext);
    // const {setBooks} = useContext(DataContext);
    const navigate = useNavigate();
    const genres = ['Fantasy', 'Mystery', 'Romance', 'Sci-Fi', 'Classic', 'Non-Fiction', 'Thriller', 'Horror', 'Biography', 'History'];
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    
    const [title , setTitle] = useState('');
    const [author , setAuthor] = useState('');
    const [genre , setGenre] = useState('');
    const [rating , setRating] = useState('');
    const [summary , setSummary] = useState('');
    const [coverImage , setCoverImage] = useState('');
    
    useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/Bookdetails/${id}`)
        setTitle(res.data.title || '');
        setAuthor(res.data.author || '');
        setGenre(res.data.genre || '');
        setRating(res.data.rating || '');
        setSummary(res.data.summary || '');
        setCoverImage(res.data.coverImage || '');
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);
  
  const userEmail = user.email;
  
  const handleUpdate = async (e) => { 
        e.preventDefault();
        const updatedBook = {
            title,
            author,
            genre,
            rating,
            summary,
            coverImage,
            userEmail
        };

        try {
            await axios.put(`http://localhost:3000/Update/${id}`, updatedBook)
                .then(() => {
                    navigate(`/BookDetails/${id}`);
                    
                })
                .catch((err) => {
                    console.error(err);
                });
        } catch (error) {
            console.error('Error updating book:', error);
        }
    };



    return (
        <div className={`${isDark ? "bg-slate-900" : "bg-white"} min-h-screen`}> 

            <div className='max-w-7xl mx-auto px-10 sm:px-15 py-15'>


                <motion.button 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 onClick={()=> navigate("/MyBooks")} 
                 className={`flex justify-center items-center gap-2 mb-10 hover:text-blue-900 ${isDark ? "text-white" : "text-slate-600"}  `}>
                    <ArrowLeft className='h-5 w-5'></ArrowLeft>
                    <span className='text-[20px]'>Back</span>
                </motion.button>


            <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}  rounded-2xl shadow-sm border p-8`}>
          <form 
          onSubmit={handleUpdate} 
          className="space-y-6">

            {/* Title */}
            <div>
              <label className={`${isDark ? "text-slate-300" : "text-slate-700"} flex items-center gap-2 mb-2`}>
                <BookOpen className="w-5 h-5" />
                <span>Book Title</span>
              </label>
              <input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className={`w-full ${isDark ? "bg-slate-900 border-slate-600 text-white" : "bg-slate-50 border-slate-300"} px-4 py-3  border  rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 `}
                placeholder="Enter book title"
                required />
            </div>

            {/* Author */}
            <div>
              <label  className={`${isDark ? "text-slate-300" : "text-slate-700"} flex items-center gap-2 mb-2`}>
                <User className="w-5 h-5" />
                <span>Author</span>
              </label>
              <input
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                name="author"
                type="text"
                className={`w-full ${isDark ? "bg-slate-900 border-slate-600 text-white" : "bg-slate-50 border-slate-300"} px-4 py-3  border  rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 `}
                placeholder="Enter author name"
                required
              />
            </div>

            {/* Genre and Rating */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={`${isDark ? "text-slate-300" : "text-slate-700"} flex items-center gap-2 mb-2`}>
                  <Tag className="w-5 h-5" />
                  <span>Genre</span>
                </label>
                <select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  id="genre"
                  name="genre"
                  className={`w-full ${isDark ? "bg-slate-900 border-slate-600 text-white" : "bg-slate-50 border-slate-300"} px-4 py-3  border  rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 `}
                  required>
                  <option value="">Select a genre</option>
                  {genres.map(genre => (
                    <option key={genre} value={genre}>{genre}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={`${isDark ? "text-slate-300" : "text-slate-700"} flex items-center gap-2 mb-2`}>
                  <Star className="w-5 h-5" />
                  <span>Rating (1-5)</span>
                </label>
                <input
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  id="rating"
                  name="rating"
                  type="number"
                  min="1.0"
                  max="5.0"
                  className={`w-full ${isDark ? "bg-slate-900 border-slate-600 text-white" : "bg-slate-50 border-slate-300"} px-4 py-3  border  rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 `}
                  required
                />
              </div>
            </div>

            {/* Summary */}
            <div>
              <label className={`${isDark ? "text-slate-300" : "text-slate-700"} flex items-center gap-2 mb-2`}>
                <FileText className="w-5 h-5" />
                <span>Summary</span>
              </label>
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                id="summary"
                name="summary"
                rows={4}
                className={`w-full ${isDark ? "bg-slate-900 border-slate-600 text-white dark:border-slate-600" : "bg-slate-50 border-slate-300"} px-4 py-3  border  rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none`}
                
                placeholder="Enter a brief summary of the book"
                required
              />
            </div>

            {/* Cover Image */}
            <div>
              <label className={`${isDark ? "text-slate-300" : "text-slate-700"} flex items-center gap-2 mb-2`}>
                <Image className="w-5 h-5" />
                <span>Book Cover Image</span>
              </label>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    id="coverImage"
                    value={coverImage}
                    onChange={(e) => setCoverImage(e.target.value)}
                    name="coverImage"
                    type="url"
                    className={`w-full ${isDark ? "bg-slate-900 border-slate-600 text-white" : "bg-slate-50 border-slate-300"} px-4 py-3  border  rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 `}
                    placeholder="Enter image URL or upload below"
                  />
                </div>
                
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <button
                    type="button"
                    className={`${isDark ? "bg-slate-700 text-slate-300 hover:bg-slate-600" : "bg-slate-100 text-slate-700 hover:bg-slate-200"} flex items-center gap-2 px-6 py-3 rounded-lg transition-colors whitespace-nowrap`}>

                    <Upload className="w-5 h-5" />
                    <span>Upload</span>
                  </button>
                </div>

              </div>
                {
                coverImage && (
                  <div className='mt-4'>
                 <h1 className={`mb-1 ${isDark ? "text-slate-300" : "text-slate-700"}`}>Preview:</h1>
               
                <img className='h-50 w-50 rounded-2xl'  src={coverImage} alt="" />
              </div>
                )
                }

            </div>

            {/* User Info (Auto-filled) */}
            <div className={`grid md:grid-cols-2 gap-6 p-4 rounded-lg ${isDark ? "bg-slate-900/50" : "bg-slate-50 "}`}>
              <div>
                <label className={`text-sm mb-1 block  ${isDark ? "text-slate-400" : "text-slate-600"}`}>Added By</label>
                <p className={`${isDark ? "text-white" : "text-slate-900"}`}>{user?.displayName}</p>
              </div>
              <div>
                <label className={`text-sm mb-1 block ${isDark ? "text-slate-400" : "text-slate-600"}`}>Email</label>
                <p className={` ${isDark ? "text-white" : "text-slate-900"}`}>{user?.email}</p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="w-full">

              <button
                type='submit'
                className="w-full items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 
                {loading ? (
                  <>
                   <div className='flex gap-3 justify-center items-center'>
                     <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Adding Book...</span>
                   </div>
                  </>
                ) : (
                  <>
                    <div className='flex gap-3 justify-center items-center'>
                        <BookOpen className='w-5 h-5'></BookOpen>
                        <span>Add Book</span>
                    </div>
                  </>
                )}
              </button>

            </div>
          </form>
        </motion.div>







            </div>
           
        </div>
    );
};

export default Update;