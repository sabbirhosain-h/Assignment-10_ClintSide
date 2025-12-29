import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/AuthContext';

const ExplorebyGenre = () => {
    const { isDark } = useContext(ThemeContext);
    return (
        <div className={` ${isDark ? 'bg-gray-900' : 'bg-gray-100' }`}>
           
           <div className='py-5 md:py-15 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>

                <h1 className={` ${isDark ? "text-white" : "text-slate-900"} text-center mb-4`}>Explore by Genre</h1>
                <p className={`max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"} text-center mb-4`}>From fantasy to non-fiction, discover books across diverse genres</p>

            {/* genra cards */}
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
               
               <div className='group cursor-pointer'>
                 <div className='relative overflow-hidden rounded-xl aspect-3/4 mb-3'>
                    <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300' src="https://images.unsplash.com/photo-1589998059171-988d887df646?w=400" alt="" />

                 <div className='absolute inset-0 bg-linear-to-t from-purple-500 to-pink-500 opacity-60 group-hover:opacity-40 transition-opacity'>

                    <div className='absolute inset-0 flex items-center justify-center'>
                        <span className='text-white '>Fantasy</span>
                    </div>
                 </div>

                 </div>
               </div>

               <div className='group cursor-pointer'>
                 <div className='relative overflow-hidden rounded-xl aspect-3/4 mb-3'>
                    <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300' src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400" alt="" />

                 <div className='absolute inset-0 bg-linear-to-t from-blue-500 to-cyan-500 opacity-60 group-hover:opacity-40 transition-opacity'>

                    <div className='absolute inset-0 flex items-center justify-center'>
                        <span className='text-white '>Mystry</span>
                    </div>
                 </div>

                 </div>
               </div>

               <div className='group cursor-pointer'>
                 <div className='relative overflow-hidden rounded-xl aspect-3/4 mb-3'>
                    <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300' src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400" alt="" />

                 <div className='absolute inset-0 bg-linear-to-t from-rose-500 to-pink-500 opacity-60 group-hover:opacity-40 transition-opacity'>

                    <div className='absolute inset-0 flex items-center justify-center'>
                        <span className='text-white '>Romance</span>
                    </div>
                 </div>

                 </div>
               </div>

               <div className='group cursor-pointer'>
                 <div className='relative overflow-hidden rounded-xl aspect-3/4 mb-3'>
                    <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300' src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400" alt="" />

                 <div className='absolute inset-0 bg-linear-to-t from-amber-500 to-orange-500 opacity-60 group-hover:opacity-40 transition-opacity'>

                    <div className='absolute inset-0 flex items-center justify-center'>
                        <span className='text-white '>Classic</span>
                    </div>
                 </div>

                 </div>
               </div>

               <div className='group cursor-pointer'>
                 <div className='relative overflow-hidden rounded-xl aspect-3/4 mb-3'>
                    <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300' src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400" alt="" />

                 <div className='absolute inset-0 bg-linear-to-t from-indigo-500 to-purple-500 opacity-60 group-hover:opacity-40 transition-opacity'>

                    <div className='absolute inset-0 flex items-center justify-center'>
                        <span className='text-white '>Si-Fi</span>
                    </div>
                 </div>

                 </div>
               </div>

               <div className='group cursor-pointer'>
                 <div className='relative overflow-hidden rounded-xl aspect-3/4 mb-3'>
                    <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300' src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400" alt="" />

                 <div className='absolute inset-0 bg-linear-to-t from-green-500 to-emerald-500 opacity-60 group-hover:opacity-40 transition-opacity'>

                    <div className='absolute inset-0 flex items-center justify-center'>
                        <span className='text-white '>Non-Fiction</span>
                    </div>
                 </div>

                 </div>
               </div>

              

              

           </div>




           </div>
           
        </div>
    );
};

export default ExplorebyGenre;