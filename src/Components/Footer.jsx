import React from 'react';
import { Link } from 'react-router';
import { BookOpen, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {

    const currentYear = new Date().getFullYear();
    return (
         <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-white">The Book Haven</span>
            </Link>
            <p className="text-slate-400 max-w-md mb-4">
              Your digital sanctuary for discovering, sharing, and managing your favorite books. 
              Join our community of book lovers today.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-indigo-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-indigo-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-indigo-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

         
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link to="/all-books" className="hover:text-indigo-400 transition-colors">All Books</Link></li>
              <li><Link to="/add-book" className="hover:text-indigo-400 transition-colors">Add Book</Link></li>
              <li><Link to="/my-books" className="hover:text-indigo-400 transition-colors">My Books</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            &copy; {currentYear} The Book Haven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;