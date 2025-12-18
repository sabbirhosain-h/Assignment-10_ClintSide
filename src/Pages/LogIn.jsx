import { Chrome, Lock, LogInIcon, Mail } from 'lucide-react';
import React, { use, useState } from 'react';
import { motion } from "motion/react"
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const LogIn = () => {


    const { SignIn, signInWithGoogle, setUser} = use(AuthContext);
    // const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation

    const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;

    SignIn(email, password)
    .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
        setLoading(false);
        e.target.reset();
        navigate(`${location.state ? location.state : "/"}`)
    })
    .catch(()=>{
      alert("Wrong Email or Password");
    })

    signInWithGoogle()
    .then((result)=> {
      const googleuser = result.user
      setUser(googleuser)
      console.log(googleuser);
      navigate("/")
    })
    .catch(() => {
      alert("Google sign-in error:");
      // toast.error("Google sign-in failed");
    })
  };





    return (
       <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <LogInIcon className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-slate-900 dark:text-white mb-2">Welcome Back</h2>
            <p className="text-slate-600 dark:text-slate-400">Sign in to your account to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-slate-700 dark:text-slate-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="email"
                  type="email"
                  name='email'
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-slate-700 dark:text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="password"
                  type="password"
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 text-indigo-600 bg-slate-100 border-slate-300 rounded focus:ring-indigo-500"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-slate-700 dark:text-slate-300">
                  Remember me
                </label>
              </div>
              <button type="button" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <LogInIcon className="w-5 h-5" />
                  <span>Sign In</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300 dark:border-slate-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                  Or continue with
                </span>
              </div>
            </div>

    
            <button onClick={signInWithGoogle} className="btn bg-white text-black border-[#e5e5e5] w-full mt-6">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
          </div>

          <p className="mt-6 text-center text-slate-600 dark:text-slate-400">
            Don't have an account?
              <Link to="/SignUp" className="text-indigo-600 dark:text-indigo-400 hover:underline"> Sign Up</Link>
          </p>
        </div>
      </motion.div>
    </div>
    );
};

export default LogIn;