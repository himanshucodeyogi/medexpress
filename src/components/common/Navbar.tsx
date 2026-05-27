import { ShoppingCart, Search, Bell, Menu, X, Pill, Upload, LogOut } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  const isAdmin = location.pathname.startsWith('/admin');
  const isDelivery = location.pathname.startsWith('/delivery');

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  if (isAdmin || isDelivery) {
    return (
      <nav className="sticky top-0 z-50 bg-white border-b border-border px-4 md:px-6 py-3 md:py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="bg-primary p-1.5 md:p-2 rounded-lg">
              <Pill className="text-white w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">MedExpress</span>
          </Link>
        </div>

        <div className="flex-1 max-w-2xl mx-4 md:mx-6 lg:mx-10 hidden sm:block">
          <form onSubmit={(e) => e.preventDefault()} className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 md:w-5 md:h-5" />
            <input 
              type="search" 
              placeholder={isAdmin ? "Search orders, prescriptions, or patients..." : "Search deliveries or routes..."}
              className="w-full pl-9 md:pl-10 pr-4 py-1.5 md:py-2 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm md:text-base"
            />
          </form>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden xl:flex items-center gap-1 px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            {isAdmin ? 'Admin Mode' : 'Delivery Mode'}
          </div>
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors relative">
            <Bell className="w-5 h-5 text-slate-600" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <div className="flex items-center gap-2 md:gap-3 ml-1 md:ml-2 pl-2 md:pl-4 border-l border-slate-200">
            <div className="text-right hidden sm:block">
              <p className="text-xs md:text-sm font-bold text-slate-800">{user?.name || 'User'}</p>
              <button 
                onClick={handleLogout}
                className="flex items-center gap-1 text-[9px] md:text-[10px] font-bold text-red-400 uppercase tracking-widest hover:text-red-600 transition-colors"
              >
                <LogOut className="w-3 h-3" /> Logout
              </button>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
              alt="Profile" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-primary/20 object-cover"
            />
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border px-4 md:px-6 lg:px-8 py-3 md:py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="bg-primary p-1.5 md:p-2 rounded-lg">
            <Pill className="text-white w-5 h-5 md:w-6 md:h-6" />
          </div>
          <span className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">MedExpress</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden 2xl:flex items-center gap-4 lg:gap-6 flex-1 justify-center">
          <Link to="/catalog" className="text-slate-600 hover:text-primary font-bold text-xs transition-colors uppercase tracking-widest whitespace-nowrap">Shop</Link>
          <Link to="/upload" className="text-slate-600 hover:text-primary font-bold text-xs transition-colors flex items-center gap-2 uppercase tracking-widest whitespace-nowrap">
            <Upload className="w-4 h-4" />
            Upload Rx
          </Link>
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="px-3 py-1.5 bg-primary text-white rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-primary/90 transition-all whitespace-nowrap">Customer Login</Link>
              <Link to="/delivery/login" className="px-3 py-1.5 bg-emerald-600 text-white rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-emerald-700 transition-all whitespace-nowrap">Delivery Login</Link>
              <Link to="/admin/login" className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-blue-100 transition-all border border-blue-100 whitespace-nowrap">Admin Login</Link>
            </>
          ) : (
            <Link to={user?.role === 'admin' ? '/admin' : user?.role === 'delivery' ? '/delivery' : '/dashboard'} className="px-3 py-1.5 bg-slate-800 text-white rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-slate-900 transition-all whitespace-nowrap">Go to Dashboard</Link>
          )}
        </div>

        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          {/* Search Bar Desktop */}
          <div className="hidden lg:block lg:w-40 xl:w-64">
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 md:w-5 md:h-5" />
              <input 
                type="search" 
                placeholder="Search medicines..." 
                className="w-full pl-9 md:pl-10 pr-4 py-1.5 md:py-2 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
              />
            </form>
          </div>
          
          <div className="hidden sm:flex items-center gap-2">
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors relative">
              <Bell className="w-5 h-5 text-slate-600" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <Link to="/cart" className="p-2 hover:bg-slate-100 rounded-full transition-colors relative">
              <ShoppingCart className="w-5 h-5 text-slate-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-primary text-white text-[9px] md:text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">2</span>
            </Link>
          </div>
          
          {isAuthenticated ? (
            <div className="flex items-center gap-2 md:gap-3 border-l border-slate-200 pl-2 md:pl-4">
              <div className="text-right hidden sm:block lg:hidden 2xl:block">
                <p className="text-xs md:text-sm font-bold text-slate-800">{user?.name || 'User'}</p>
                <div className="flex items-center gap-1.5 md:gap-2 justify-end">
                  <button 
                    onClick={handleLogout}
                    className="text-[9px] md:text-[10px] font-bold text-red-400 hover:text-red-600 transition-colors uppercase tracking-widest whitespace-nowrap"
                  >
                    Logout
                  </button>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="Profile" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-primary/20 object-cover"
              />
            </div>
          ) : (
            <div className="flex items-center gap-2 md:gap-3 border-l border-slate-200 pl-2 md:pl-4">
              <Link to="/login" className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline whitespace-nowrap">Login</Link>
            </div>
          )}
          <button className="2xl:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="2xl:hidden absolute top-full left-0 w-full bg-white border-b border-border p-4 animate-in slide-in-from-top duration-200 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col gap-4">
            <Link to="/catalog" className="text-slate-600 font-bold text-sm py-2 uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>Shop Medicines</Link>
            <Link to="/upload" className="text-slate-600 font-bold text-sm py-2 flex items-center gap-2 uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>
              <Upload className="w-4 h-4" />
              Upload Prescription
            </Link>
            
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="text-primary font-bold text-sm py-2 uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>Customer Login</Link>
                <Link to="/delivery/login" className="text-emerald-600 font-bold text-sm py-2 uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>Delivery Login</Link>
                <Link to="/admin/login" className="text-blue-600 font-bold text-sm py-2 uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>Admin Login</Link>
              </>
            ) : (
              <>
                <div className="pt-2 pb-1 border-t border-slate-100 mt-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">User: {user?.name}</p>
                  <Link to={user?.role === 'admin' ? '/admin' : user?.role === 'delivery' ? '/delivery' : '/dashboard'} className="text-slate-900 font-bold text-sm py-2 block uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
                  <button 
                    onClick={handleLogout}
                    className="text-red-500 font-bold text-sm py-2 w-full text-left uppercase tracking-widest"
                  >
                    Logout
                  </button>
                </div>
              </>
            )}
            
            <Link to="/register-store" className="text-slate-600 font-bold text-sm py-2 uppercase tracking-widest pt-2 border-t border-slate-50" onClick={() => setIsMenuOpen(false)}>Partner With Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
