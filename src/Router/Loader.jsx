import { Loader2 } from 'lucide-react';
import React, { useContext } from 'react';
import { ThemeContext } from '../Context/AuthContext';

const Loader = () => {
   const {isDark} = useContext(ThemeContext);
    return (
         <div className={`${isDark ? "bg-slate-900 text-white" : "bg-white text-slate-800"} min-h-screen flex items-center justify-center`}>
          <div>
      <div className="text-center">
        <Loader2 className="w-12 h-12 animate-spin text-indigo-600 mx-auto mb-4" />
        <p className="text-slate-600 dark:text-slate-400">Loading...</p>
      </div>
    </div>
         </div>
    );
};

export default Loader;