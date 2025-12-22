import { Loader2 } from 'lucide-react';
import React from 'react';

const Loader = () => {
    return (
         <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-12 h-12 animate-spin text-indigo-600 mx-auto mb-4" />
        <p className="text-slate-600 dark:text-slate-400">Loading...</p>
      </div>
    </div>
    );
};

export default Loader;