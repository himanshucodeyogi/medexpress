import { Pill, Mail, Lock, User, ArrowRight, ShieldCheck, Globe } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[calc(100-80px)] bg-slate-50 flex items-center justify-center p-4 md:p-8">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 overflow-hidden">
        {/* Left Side - Visual */}
        <div className="hidden lg:block relative bg-primary p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl">
                <Pill className="text-primary w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">MedExpress</span>
            </Link>

            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-white leading-tight">
                Your Health, <br />
                <span className="text-white/70">Simplified.</span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed max-w-md">
                Join thousands of patients who trust MedExpress for their healthcare needs. Get verified prescriptions and fast delivery at your doorstep.
              </p>
              
              <div className="flex -space-x-3 pt-4">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80`}
                    className="w-12 h-12 rounded-full border-4 border-primary ring-2 ring-white/10 object-cover"
                    alt="User"
                  />
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-primary bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-xs font-bold ring-2 ring-white/10">
                  +2k
                </div>
              </div>
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Trusted by 2,000+ Active Patients</p>
            </div>

            <div className="flex items-center gap-3 py-4 px-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
              <ShieldCheck className="w-6 h-6 text-white" />
              <p className="text-white/90 text-sm font-medium">HIPAA Compliant & Secure Data Encryption</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 md:p-16">
          <div className="max-w-md mx-auto h-full flex flex-col justify-center">
            <div className="mb-10">
              <div className="flex p-1 bg-slate-100 rounded-2xl mb-8">
                <button 
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${isLogin ? 'bg-white text-primary shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  Login
                </button>
                <button 
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${!isLogin ? 'bg-white text-primary shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  Register
                </button>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                {isLogin ? 'Welcome back!' : 'Create an account'}
              </h2>
              <p className="text-slate-500 font-medium">
                {isLogin ? 'Enter your credentials to access your portal.' : 'Start your journey to better healthcare today.'}
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input type="text" placeholder="John Doe" className="input pl-12 bg-slate-50 border-slate-100" />
                  </div>
                </div>
              )}
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input type="email" placeholder="john@example.com" className="input pl-12 bg-slate-50 border-slate-100" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Password</label>
                  {isLogin && (
                    <button className="text-xs font-bold text-primary hover:underline">Forgot Password?</button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input type="password" placeholder="••••••••" className="input pl-12 bg-slate-50 border-slate-100" />
                </div>
              </div>

              {isLogin && (
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="remember" className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" />
                  <label htmlFor="remember" className="text-sm font-medium text-slate-600 cursor-pointer">Remember me for 30 days</label>
                </div>
              )}

              <button className="btn btn-primary w-full py-4 text-lg group">
                {isLogin ? 'Sign In' : 'Create Account'}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
                <span className="bg-white px-4 text-slate-400">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-3 px-4 border-2 border-slate-100 rounded-2xl hover:bg-slate-50 transition-all font-bold text-slate-700">
                <Globe className="w-5 h-5" /> Google
              </button>
              <button className="flex items-center justify-center gap-3 py-3 px-4 border-2 border-slate-100 rounded-2xl hover:bg-slate-50 transition-all font-bold text-slate-700">
                <Globe className="w-5 h-5" /> GitHub
              </button>
            </div>
            
            <p className="text-center mt-10 text-sm text-slate-500">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="font-bold text-primary hover:underline"
              >
                {isLogin ? 'Register now' : 'Sign in here'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
