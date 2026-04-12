import { ShoppingCart, User, Search, Bell, Menu, X, Pill, Upload } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isAdmin = location.pathname.startsWith('/admin');
  const isDelivery = location.pathname.startsWith('/delivery');

  if (isAdmin || isDelivery) {
    return (
      <nav className="sticky top-0 z-50 bg-white border-b border-border px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <Pill className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-slate-800 tracking-tight">MedExpress</span>
          </Link>
        </div>

        <div className="flex-1 max-w-2xl mx-10 hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder={isAdmin ? "Search orders, prescriptions, or patients..." : "Search deliveries or routes..."}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-1 px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            {isAdmin ? 'Admin Mode' : 'Delivery Mode'}
          </div>
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors relative">
            <Bell className="w-5 h-5 text-slate-600" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <div className="flex items-center gap-3 ml-2 pl-4 border-l border-slate-200">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-800">Alex Johnson</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">View Profile</p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
              alt="Profile" 
              className="w-10 h-10 rounded-full border-2 border-primary/20"
            />
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-lg">
            <Pill className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-slate-800 tracking-tight">MedExpress</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/catalog" className="text-slate-600 hover:text-primary font-bold text-sm transition-colors uppercase tracking-widest">Shop Medicines</Link>
          <Link to="/upload" className="text-slate-600 hover:text-primary font-bold text-sm transition-colors flex items-center gap-2 uppercase tracking-widest">
            <Upload className="w-4 h-4" />
            Upload Prescription
          </Link>
        </div>

        {/* Search Bar Desktop */}
        <div className="hidden lg:block flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search medicines, symptoms, or brands..." 
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-4 mr-4">
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors relative">
              <Bell className="w-5 h-5 text-slate-600" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <ShoppingCart className="w-5 h-5 text-slate-600" />
            </button>
          </div>
          <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-800">Alex Johnson</p>
              <Link to="/dashboard" className="text-[10px] font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-widest">Patient Portal</Link>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
              alt="Profile" 
              className="w-10 h-10 rounded-full border-2 border-primary/20"
            />
          </div>
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border p-4 animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="flex flex-col gap-4">
            <Link to="/catalog" className="text-slate-600 font-bold text-sm py-2 uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>Shop Medicines</Link>
            <Link to="/upload" className="text-slate-600 font-bold text-sm py-2 flex items-center gap-2 uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>
              <Upload className="w-4 h-4" />
              Upload Prescription
            </Link>
            <Link to="/dashboard" className="text-slate-600 font-bold text-sm py-2 uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>Patient Portal</Link>
            <Link to="/delivery" className="text-slate-600 font-bold text-sm py-2 uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>Delivery Portal</Link>
            <Link to="/admin" className="text-slate-600 font-bold text-sm py-2 uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>Admin Portal</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
