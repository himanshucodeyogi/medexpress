import { Pill, Mail, Lock, User, ArrowRight, ShieldCheck, Globe, Truck, MapPin, Package } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const DeliveryLoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email || 'delivery@medexpress.com', 'delivery');
    navigate('/delivery');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-0 md:p-8">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white md:rounded-[2rem] md:shadow-2xl md:shadow-slate-200/50 overflow-hidden min-h-screen md:min-h-0">
        {/* Left Side - Visual (Hidden on mobile) */}
        <div className="hidden lg:block relative bg-emerald-600 p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl">
                <Pill className="text-emerald-600 w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">MedExpress</span>
            </Link>

            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-white leading-tight">
                Deliver Health, <br />
                <span className="text-white/70">Earn Rewards.</span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed max-w-md">
                Join our delivery fleet and be part of the healthcare journey. Flexible hours, competitive pay, and real-time earnings tracking.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <Truck className="w-8 h-8 text-white mb-2" />
                  <h4 className="text-white font-bold text-sm">Flexible Shifts</h4>
                  <p className="text-white/60 text-xs">Choose your own hours</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <MapPin className="w-8 h-8 text-white mb-2" />
                  <h4 className="text-white font-bold text-sm">Local Routes</h4>
                  <p className="text-white/60 text-xs">Deliver in your area</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 py-4 px-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
              <ShieldCheck className="w-6 h-6 text-white shrink-0" />
              <p className="text-white/90 text-sm font-medium">Verified Delivery Partners & Insurance Covered</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-6 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <div className="mb-8 md:mb-10 text-center lg:text-left">
              <div className="lg:hidden flex justify-center mb-8">
                <Link to="/" className="flex items-center gap-2">
                  <div className="bg-emerald-600 p-2 rounded-xl">
                    <Pill className="text-white w-6 h-6" />
                  </div>
                  <span className="text-2xl font-bold text-slate-900 tracking-tight">MedExpress</span>
                </Link>
              </div>

              <div className="flex p-1 bg-slate-100 rounded-2xl mb-4 md:mb-8">
                <Link 
                  to="/login"
                  className="flex-1 py-3 text-sm font-bold rounded-xl transition-all text-slate-400 hover:text-slate-600 text-center"
                >
                  Customer
                </Link>
                <button 
                  className="flex-1 py-3 text-sm font-bold rounded-xl transition-all bg-emerald-600 text-white shadow-sm"
                >
                  Delivery
                </button>
              </div>
              
              <div className="flex p-1 bg-slate-100 rounded-2xl mb-6">
                <button 
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${isLogin ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  Login
                </button>
                <button 
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${!isLogin ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  Sign Up
                </button>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 mt-4">
                {isLogin ? 'Welcome back!' : 'Join our fleet'}
              </h2>
              <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
                {isLogin ? 'Enter your credentials to start delivering.' : 'Sign up and start earning today.'}
              </p>
            </div>

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {!isLogin && (
                <>
                  <div className="space-y-2">
                    <label htmlFor="full-name" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input id="full-name" type="text" placeholder="John Doe" className="input pl-12 bg-slate-50 border-slate-100 py-3 md:py-4" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <div className="relative">
                      <Package className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="input pl-12 bg-slate-50 border-slate-100 py-3 md:py-4" />
                    </div>
                  </div>
                </>
              )}
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input 
                    id="email" 
                    type="email" 
                    required 
                    placeholder="john@example.com" 
                    className="input pl-12 bg-slate-50 border-slate-100 py-3 md:py-4" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label htmlFor="password" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Password</label>
                  {isLogin && (
                    <button type="button" className="text-[10px] font-bold text-emerald-600 hover:underline uppercase tracking-widest">Forgot?</button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input 
                    id="password" 
                    type="password" 
                    required 
                    placeholder="••••••••" 
                    className="input pl-12 bg-slate-50 border-slate-100 py-3 md:py-4" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {isLogin && (
                <div className="flex items-center gap-3 px-1">
                  <input type="checkbox" id="remember" className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600" />
                  <label htmlFor="remember" className="text-sm font-medium text-slate-600 cursor-pointer">Remember me</label>
                </div>
              )}

              <button type="submit" className="btn bg-emerald-600 hover:bg-emerald-700 text-white w-full py-4 text-base md:text-lg group shadow-xl shadow-emerald-600/20 flex items-center justify-center">
                {isLogin ? 'Sign In' : 'Apply Now'}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="relative my-8 md:my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold">
                <span className="bg-white px-4 text-slate-400">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-3 px-4 border-2 border-slate-100 rounded-2xl hover:bg-slate-50 transition-all font-bold text-slate-700 text-sm">
                <Globe className="w-5 h-5" /> Google
              </button>
              <button className="flex items-center justify-center gap-3 py-3 px-4 border-2 border-slate-100 rounded-2xl hover:bg-slate-50 transition-all font-bold text-slate-700 text-sm">
                <Globe className="w-5 h-5" /> Phone
              </button>
            </div>
            
            <p className="text-center mt-8 md:mt-10 text-sm text-slate-500">
              {isLogin ? "Don't have an account?" : "Already a delivery partner?"}{' '}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="font-bold text-emerald-600 hover:underline"
              >
                {isLogin ? 'Sign up now' : 'Sign in here'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryLoginPage;
