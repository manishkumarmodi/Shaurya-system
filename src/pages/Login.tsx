import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { getAuth, GoogleAuthProvider, signInWithPopup, User as FirebaseUser } from 'firebase/auth';
import { app } from '@/firebase';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Eye, EyeOff, User, Lock, Mail, ArrowRight } from 'lucide-react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const formRef = useRef<HTMLDivElement>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [googleUser, setGoogleUser] = useState<FirebaseUser | null>(null);
  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    try {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setGoogleUser(result.user);
    } catch (error) {
      // Optionally handle error
    } finally {
      setGoogleLoading(false);
    }
  };
  const [showLightFlow, setShowLightFlow] = useState(false);

  // Animate form transitions with GSAP
  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out' }
      );
    }
  }, [isLogin]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login success for preview
    setLoggedIn(true);
    setShowLightFlow(true);
    setTimeout(() => setShowLightFlow(false), 1200); // Hide after animation
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const tricolorAnimation = {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
    transition: { duration: 2, ease: "easeInOut" as const } // use valid framer-motion easing
  };


  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-2 sm:px-0">
      {/* Animated Tricolor Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

        {/* Animated tricolor stripes */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-full opacity-20"
        >
          <div className="h-1/3 bg-gradient-to-r from-transparent via-saffron to-transparent"></div>
          <div className="h-1/3 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <div className="h-1/3 bg-gradient-to-r from-transparent via-indianGreen to-transparent"></div>
        </motion.div>

        {/* Tricolor light flow animation (on login) */}
        {showLightFlow && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ zIndex: 50 }}
          >
            <div className="h-1/3 bg-gradient-to-r from-saffron via-saffron/80 to-transparent opacity-70 blur-xl"></div>
            <div className="h-1/3 bg-gradient-to-r from-white via-white/80 to-transparent opacity-70 blur-xl"></div>
            <div className="h-1/3 bg-gradient-to-r from-indianGreen via-indianGreen/80 to-transparent opacity-70 blur-xl"></div>
          </motion.div>
        )}

        {/* Floating tricolor particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              i % 3 === 0 ? 'bg-saffron' : i % 3 === 1 ? 'bg-white' : 'bg-indianGreen'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Tricolor wave effect */}
        <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
          <motion.div
            animate={{
              x: [0, -100],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-[200%] h-full"
          >
            <div className="w-1/6 h-full bg-gradient-to-t from-saffron/30 to-transparent"></div>
            <div className="w-1/6 h-full bg-gradient-to-t from-white/30 to-transparent"></div>
            <div className="w-1/6 h-full bg-gradient-to-t from-indianGreen/30 to-transparent"></div>
            <div className="w-1/6 h-full bg-gradient-to-t from-saffron/30 to-transparent"></div>
            <div className="w-1/6 h-full bg-gradient-to-t from-white/30 to-transparent"></div>
            <div className="w-1/6 h-full bg-gradient-to-t from-indianGreen/30 to-transparent"></div>
          </motion.div>
        </div>
      </div>

      {/* Login Form */}
      <motion.div
        className="relative z-10 w-full max-w-md mx-2 sm:mx-4 md:max-w-lg lg:max-w-xl xl:max-w-2xl"
        ref={formRef}
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden flex flex-col">
          {/* Animated tricolor header */}
          <div className="relative h-2 overflow-hidden">
            <motion.div
              initial={tricolorAnimation.initial}
              animate={tricolorAnimation.animate}
              transition={tricolorAnimation.transition}
              className="absolute inset-0 bg-gradient-to-r from-saffron via-white to-indianGreen origin-left"
            />
          </div>

          <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
            {/* Logo and Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-6 sm:mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-4"
              >
                <Shield className="h-16 w-16 text-saffron mx-auto" />
              </motion.div>
              <h1 className="text-2xl font-bold text-white mb-2">Shaurya Systems</h1>
              <p className="text-gray-300">Secure Defense Portal</p>
            </motion.div>

            {/* Toggle Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row bg-white/10 rounded-lg p-1 mb-4 sm:mb-6 gap-2 sm:gap-0"
            >
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                  isLogin
                    ? 'bg-saffron text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                  !isLogin
                    ? 'bg-saffron text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Register
              </button>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-6"
            >
              {!isLogin && (
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent backdrop-blur-sm text-sm sm:text-base"
                    required={!isLogin}
                  />
                </div>
              )}

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent backdrop-blur-sm text-sm sm:text-base"
                  required
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent backdrop-blur-sm text-sm sm:text-base"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>

              {!isLogin && (
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent backdrop-blur-sm text-sm sm:text-base"
                    required={!isLogin}
                  />
                </div>
              )}

              {isLogin && (
                <div className="flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm gap-2 sm:gap-0">
                  <label className="flex items-center text-gray-300">
                    <input type="checkbox" className="mr-2 rounded" />
                    Remember me
                  </label>
                  <a href="#" className="text-saffron hover:text-saffron/80 transition-colors">
                    Forgot password?
                  </a>
                </div>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-saffron to-orange-600 hover:from-saffron/90 hover:to-orange-600/90 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg"
              >
                <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>

            </motion.form>

            {/* Google Sign-In Button and User Preview */}
            <div className="my-6 flex flex-col items-center">
              {!googleUser ? (
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="w-full bg-white border border-gray-300 text-gray-800 font-semibold py-3 text-lg flex items-center justify-center gap-2 shadow-sm hover:bg-gray-100 rounded-lg transition-all duration-200"
                  disabled={googleLoading}
                >
                  <svg width="20" height="20" viewBox="0 0 48 48" className="inline-block"><g><path fill="#4285F4" d="M43.611 20.083h-1.964V20H24v8h11.284C33.962 32.334 29.418 35 24 35c-6.065 0-11-4.935-11-11s4.935-11 11-11c2.507 0 4.81.857 6.654 2.278l6.084-6.084C33.527 6.537 28.973 4.5 24 4.5 12.954 4.5 4 13.454 4 24.5s8.954 20 20 20c9.94 0 19.5-7.5 19.5-20 0-1.341-.138-2.65-.389-3.917z"/><path fill="#34A853" d="M6.306 14.691l6.571 4.819C14.655 16.163 19.01 13 24 13c2.507 0 4.81.857 6.654 2.278l6.084-6.084C33.527 6.537 28.973 4.5 24 4.5c-6.627 0-12.24 4.02-14.694 10.191z"/><path fill="#FBBC05" d="M24 44.5c5.418 0 9.962-2.666 13.284-7.001l-6.284-5.146C28.81 36.143 26.507 37 24 37c-5.01 0-9.365-3.163-11.123-7.51l-6.571 4.819C11.76 40.48 17.373 44.5 24 44.5z"/><path fill="#EA4335" d="M43.611 20.083h-1.964V20H24v8h11.284C34.62 31.334 29.418 35 24 35c-5.418 0-9.962-2.666-13.284-7.001l-6.571 4.819C11.76 40.48 17.373 44.5 24 44.5c9.94 0 19.5-7.5 19.5-20 0-1.341-.138-2.65-.389-3.917z"/></g></svg>
                  {googleLoading ? 'Signing in...' : 'Sign in with Google'}
                </button>
              ) : (
                <div className="flex flex-col items-center mt-4">
                  <img src={googleUser.photoURL} alt="User" className="w-16 h-16 rounded-full border mb-2" />
                  <div className="text-lg font-semibold text-white">{googleUser.displayName}</div>
                  <div className="text-sm text-gray-300">{googleUser.email}</div>
                  <span className="inline-block bg-saffron/80 text-white text-xs font-semibold px-3 py-1 rounded-full mt-2">Google Account</span>
                </div>
              )}
            </div>

            {/* User Profile Preview for custom form */}
            {loggedIn && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-8 flex flex-col items-center justify-center"
              >
                <div className="bg-white/20 backdrop-blur-lg rounded-xl shadow-lg border border-white/30 p-6 w-full max-w-xs flex flex-col items-center">
                  <Shield className="h-12 w-12 text-saffron mb-2" />
                  <h2 className="text-lg font-bold text-white mb-1">{formData.name || 'User Name'}</h2>
                  <p className="text-gray-200 text-sm mb-2">{formData.email || 'user@email.com'}</p>
                  <span className="inline-block bg-saffron/80 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">Profile Preview</span>
                  <div className="flex gap-2 mt-2">
                    <span className="bg-indianGreen/80 text-white px-2 py-1 rounded text-xs">Secure Access</span>
                    <span className="bg-white/80 text-gray-800 px-2 py-1 rounded text-xs">Shaurya Systems</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-6 text-center"
            >
              <Link
                to="/"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                ← Back to Home
              </Link>
            </motion.div>
          </div>

          {/* Animated tricolor footer */}
          <div className="relative h-2 overflow-hidden">
            <motion.div
              initial={tricolorAnimation.initial}
              animate={tricolorAnimation.animate}
              transition={{ ...tricolorAnimation.transition, delay: 0.5 }}
              className="absolute inset-0 bg-gradient-to-r from-indianGreen via-white to-saffron origin-right"
            />
          </div>
        </div>

        {/* Patriotic Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-6"
        >
          <p className="text-white/80 text-sm italic">
            "सत्यमेव जयते" - Truth Alone Triumphs
          </p>
          <p className="text-white/60 text-xs mt-1">
            Securing India's Future Through Innovation
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
