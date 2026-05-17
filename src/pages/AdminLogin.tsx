import { Shield, Mail, Lock, ArrowRight, Eye, CheckCircle, Search, Info } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12">
        <div className="max-w-md w-full">
          {/* Admin Card */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50 p-10 relative overflow-hidden">
            {/* Top Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-500 rounded-full border border-blue-100">
                <Shield className="w-3 h-3" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Admin Portal</span>
              </div>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-3xl font-black text-slate-900 mb-2">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h1>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Manage your pharmacy and deliveries securely.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex p-1 bg-slate-50 border border-slate-100 rounded-2xl mb-8">
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
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="email" 
                    placeholder="admin@medexpress.com" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="password" 
                    placeholder="Enter your security credentials" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 pl-12 pr-12 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                  />
                  <Eye className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 cursor-pointer" />
                </div>
              </div>

              {isLogin && (
                <div className="flex items-center justify-between px-1">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-500 focus:ring-blue-500 transition-all" />
                    <span className="text-xs font-bold text-slate-500 group-hover:text-slate-700">Remember me</span>
                  </label>
                  <button className="text-xs font-bold text-blue-500 hover:underline">Forgot password?</button>
                </div>
              )}

              <button className="w-full bg-blue-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                <ArrowRight className="w-4 h-4" />
                <span>{isLogin ? 'Access Dashboard' : 'Create Admin Account'}</span>
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-50 flex items-center justify-between px-1">
              <div className="flex gap-4">
                <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors">Security Policy</button>
                <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors">Privacy</button>
              </div>
              <button className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors">
                <Info className="w-3 h-3" /> Support Center
              </button>
            </div>

            {/* Bottom Security Box */}
            <div className="mt-6 bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center justify-center gap-2">
              <Lock className="w-3 h-3 text-blue-400" />
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">256-Bit Encrypted Admin Connection</span>
            </div>
          </div>

          {/* Page Footer Info */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 opacity-60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl border border-slate-100 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-blue-500 rounded flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Verified Pharmacy Portal</p>
                <p className="text-[8px] font-bold text-slate-400 leading-tight">OFFICIAL SYSTEM ACCESS</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">IP: 192.168.1.XXX | AUTH_V: 2.4.0</p>
              <div className="flex items-center justify-end gap-1.5 text-blue-500">
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
