import React, { use, useState } from 'react';
import { User, Mail, Lock, Image, Chrome, CheckCircle, XCircle, EyeOff, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import { AuthContext, ThemeContext } from '../Context/AuthContext';
// import { toast } from 'sonner@2.0.3';

const SignUp = () => {
  const [showPassword , setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
//   const { register, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

const {SignUp, signInWithGoogle, setUser} = use(AuthContext);
const {isDark} = use(ThemeContext);

  const passwordValidation = {
    minLength: password.length >= 6,
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
  };

  const isPasswordValid = passwordValidation.minLength && passwordValidation.hasUpperCase && passwordValidation.hasLowerCase;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setLoading(true);

    SignUp(email, password)
    .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
        setLoading(false);
        e.target.reset();
        navigate("/")
    })
    .catch(()=>{
      alert("Sign Up failed. Please try again.");
    })
  };

  const handleGoogleSignUp = () => {
    signInWithGoogle()
    .then(result => {
        const googleuser = result.user
        setUser(googleuser)
        console.log(googleuser);
         navigate("/")
    })
    .catch(() => {
      alert("Google sign-up error:");
    })
       
  };

  return (
         <div className={`min-h-[calc(100vh-4rem)]  dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-slate-700" : "bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <div className={`${isDark ? "bg-slate-800 border-slate-700 border-slate-700" : "bg-white" }  rounded-2xl shadow-xl p-8 border border-slate-200 dark:`}>
          <div className={`text-center mb-8`}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <User className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className={`text-slate-900 ${isDark ? "text-white" : "text-slate-900"} mb-2`}>Create Account</h2>
            <p className={`${isDark ? "text-white" : "text-slate-900"} mb-2`}>Join The Book Haven community</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className={`block text-slate-700 ${isDark ? "text-white" : "text-slate-700"} mb-2`}>
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
                  placeholder="Your full name"
                  required
                />
              </div>
            </div>

            <div>
              <label className={`block text-slate-700 ${isDark ? "text-white" : "text-slate-700"} mb-2`}>
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className={`block text-slate-700 ${isDark ? "text-white" : "text-slate-700"} mb-2`}>
                Photo URL (Optional)
              </label>
              <div className="relative">
                <Image className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="photoURL"
                  type="url"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>
            </div>

            <div>
              <label className={`block text-slate-700 ${isDark ? "text-white" : "text-slate-700"} mb-2`}>
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
                  placeholder="••••••••"
                  required
                />
                <button 
                           type='button' 
                           onClick={() => setShowPassword(!showPassword)}
                           className="absolute right-3 top-[15px] sm:top-[15px] text-gray-500 hover:text-gray-700"
                           aria-label={showPassword ? "Hide password" : "Show password"}
                         >
                           {showPassword ? <Eye className="h-4 w-4 sm:h-5 sm:w-5" /> : <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" />}
                         </button>
              </div>

              {password && (
                <div className="mt-3 space-y-2">
                  <div className={`flex items-center gap-2 text-sm ${passwordValidation.minLength ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {passwordValidation.minLength ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    <span>At least 6 characters</span>
                  </div>
                  <div className={`flex items-center gap-2 text-sm ${passwordValidation.hasUpperCase ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {passwordValidation.hasUpperCase ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    <span>At least one uppercase letter</span>
                  </div>
                  <div className={`flex items-center gap-2 text-sm ${passwordValidation.hasLowerCase ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {passwordValidation.hasLowerCase ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    <span>At least one lowercase letter</span>
                  </div>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || !isPasswordValid}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Creating account...</span>
                </>
              ) : (
                <>
                  <User className="w-5 h-5" />
                  <span>Create Account</span>
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
                <span className={`px-2 ${isDark ? "bg-slate-800 text-white" : "bg-white text-slate-500 "}`}>
                  Or continue with
                </span>
              </div>
            </div>

            <button onClick={handleGoogleSignUp} className="btn bg-white text-black border-[#e5e5e5] w-full mt-6">
                 <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
              Login with Google
           </button>
          </div>

          <p className="mt-6 text-center text-slate-600 dark:text-slate-400">
            Already have an account?{' '}
            <Link to="/login" className="text-indigo-600 dark:text-indigo-400 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
    );
};

export default SignUp;