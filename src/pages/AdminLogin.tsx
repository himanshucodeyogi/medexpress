import { Shield, Mail, Lock, ArrowRight, Eye, Info } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email || 'admin@medexpress.com', 'admin');
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 lg:p-12">
        <div className="max-w-md w-full">
          {/* Admin Card */}
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-2xl shadow-slate-200/50 p-6 md:p-10 relative overflow-hidden">
            {/* Top Badge */}
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-500 rounded-full border border-blue-100">
                <Shield className="w-3 h-3" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Admin Portal</span>
              </div>
            </div>

            <div className="text-center mb-6 md:mb-8">
              <h1 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h1>
              <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed px-4">
                Manage your pharmacy and deliveries securely.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex p-1 bg-slate-50 border border-slate-100 rounded-2xl mb-6 md:mb-8">
              <button 
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${isLogin ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Sign In
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${!isLogin ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Register
              </button>
            </div>

            {/* Form */}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    id="email"
                    type="email" 
                    required
                    placeholder="admin@medexpress.com" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3.5 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    id="password"
                    type="password" 
                    required
                    placeholder="Security credentials" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3.5 pl-12 pr-12 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {isLogin && (
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center gap-2 group cursor-pointer">
                    <input id="remember" type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-500 focus:ring-blue-500 transition-all cursor-pointer" />
                    <label htmlFor="remember" className="text-[10px] md:text-xs font-bold text-slate-500 group-hover:text-slate-700 cursor-pointer">Remember</label>
                  </div>
                  <button type="button" className="text-[10px] md:text-xs font-bold text-blue-500 hover:underline">Forgot password?</button>
                </div>
              )}

              <button type="submit" className="w-full bg-blue-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all text-sm md:text-base">
                <ArrowRight className="w-4 h-4" />
                <span>{isLogin ? 'Access Dashboard' : 'Create Admin Account'}</span>
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-50 flex items-center justify-between px-1">
              <div className="flex gap-4">
                <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors">Security</button>
                <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors">Privacy</button>
              </div>
              <button className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors">
                <Info className="w-3 h-3" /> Support
              </button>
            </div>

            {/* Bottom Security Box */}
            <div className="mt-6 bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center justify-center gap-2">
              <Lock className="w-3 h-3 text-blue-400" />
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest whitespace-nowrap">256-Bit Encrypted Connection</span>
            </div>
          </div>

          {/* Page Footer Info */}
          <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-center justify-between gap-6 opacity-60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl border border-slate-100 flex items-center justify-center shrink-0">
                <div className="w-5 h-5 border-2 border-blue-500 rounded flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Verified Pharmacy Portal</p>
                <p className="text-[8px] font-bold text-slate-400 leading-tight">OFFICIAL SYSTEM ACCESS</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">IP: 192.168.1.XXX | AUTH_V: 2.4.0</p>
              <div className="flex items-center justify-center md:justify-end gap-1.5 text-blue-500">
                <div className="w-6 h-px bg-blue-500/30"></div>
                <span className="text-[10px] font-black uppercase tracking-widest italic">Trustworthy Healthcare</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer copyright */}
      <footer className="py-8 px-6 text-center">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          © 2024 Med Express. All rights reserved. | <Link to="#" className="hover:text-slate-600">Privacy Policy</Link> | <Link to="#" className="hover:text-slate-600">Terms of Service</Link> | <Link to="#" className="hover:text-slate-600">Help Center</Link>
        </p>
      </footer>
    </div>
  );
};

export default AdminLogin;
