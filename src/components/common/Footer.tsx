import { Pill, Globe, MessageCircle, Camera, PlayCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
  const [openSections, setOpenSections] = useState({
    quickLinks: false,
    userPortals: false,
    support: false,
    newsletter: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-6 md:py-12 px-4 md:px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Footer */}
        <div className="md:hidden">
          {/* Brand Section */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <Pill className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">MedExpress</span>
            </div>
            <p className="text-xs text-slate-400 mb-4">Your trusted medicine delivery partner</p>
            <div className="flex items-center justify-center gap-3">
              <a href="#" className="p-1.5 hover:bg-slate-800 rounded-full transition-colors"><MessageCircle className="w-4 h-4" /></a>
              <a href="#" className="p-1.5 hover:bg-slate-800 rounded-full transition-colors"><Globe className="w-4 h-4" /></a>
              <a href="#" className="p-1.5 hover:bg-slate-800 rounded-full transition-colors"><Camera className="w-4 h-4" /></a>
              <a href="#" className="p-1.5 hover:bg-slate-800 rounded-full transition-colors"><PlayCircle className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="border-t border-slate-800 py-3">
            <button 
              onClick={() => toggleSection('quickLinks')}
              className="flex items-center justify-between w-full text-left"
            >
              <span className="text-sm font-bold text-white">Shop & Services</span>
              {openSections.quickLinks ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {openSections.quickLinks && (
              <ul className="mt-3 flex flex-col gap-2">
                <li><Link to="/catalog" className="text-xs text-slate-400 hover:text-primary">Browse Medicines</Link></li>
                <li><Link to="/upload" className="text-xs text-slate-400 hover:text-primary">Upload Prescription</Link></li>
                <li><Link to="/cart" className="text-xs text-slate-400 hover:text-primary">Shopping Cart</Link></li>
                <li><Link to="/track/882910" className="text-xs text-slate-400 hover:text-primary">Track Order</Link></li>
              </ul>
            )}
          </div>

          {/* User Portals */}
          <div className="border-t border-slate-800 py-3">
            <button 
              onClick={() => toggleSection('userPortals')}
              className="flex items-center justify-between w-full text-left"
            >
              <span className="text-sm font-bold text-white">User Portals</span>
              {openSections.userPortals ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {openSections.userPortals && (
              <ul className="mt-3 flex flex-col gap-2">
                <li><Link to="/dashboard" className="text-xs text-slate-400 hover:text-primary">Patient Dashboard</Link></li>
                <li><Link to="/orders" className="text-xs text-slate-400 hover:text-primary">My Orders</Link></li>
                <li><Link to="/admin" className="text-xs text-slate-400 hover:text-primary">Admin Dashboard</Link></li>
                <li><Link to="/delivery" className="text-xs text-slate-400 hover:text-primary">Delivery Dashboard</Link></li>
              </ul>
            )}
          </div>

          {/* Support */}
          <div className="border-t border-slate-800 py-3">
            <button 
              onClick={() => toggleSection('support')}
              className="flex items-center justify-between w-full text-left"
            >
              <span className="text-sm font-bold text-white">Support</span>
              {openSections.support ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {openSections.support && (
              <ul className="mt-3 flex flex-col gap-2">
                <li><Link to="/help" className="text-xs text-slate-400 hover:text-primary">Help Center</Link></li>
                <li><Link to="/contact" className="text-xs text-slate-400 hover:text-primary">Contact Us</Link></li>
                <li><Link to="/about" className="text-xs text-slate-400 hover:text-primary">About Us</Link></li>
              </ul>
            )}
          </div>
        </div>

        {/* Desktop Footer */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <div className="bg-primary p-2 rounded-lg">
                  <Pill className="text-white w-6 h-6" />
                </div>
                <span className="text-xl font-bold text-white tracking-tight">MedExpress</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Your trusted partner for fast, reliable, and secure medicine delivery. Licensed pharmacists and verified products at your doorstep.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="p-2 hover:bg-slate-800 rounded-full transition-colors"><MessageCircle className="w-5 h-5" /></a>
                <a href="#" className="p-2 hover:bg-slate-800 rounded-full transition-colors"><Globe className="w-5 h-5" /></a>
                <a href="#" className="p-2 hover:bg-slate-800 rounded-full transition-colors"><Camera className="w-5 h-5" /></a>
                <a href="#" className="p-2 hover:bg-slate-800 rounded-full transition-colors"><PlayCircle className="w-5 h-5" /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6">Shop & Services</h4>
              <ul className="flex flex-col gap-4 text-sm">
                <li><Link to="/catalog" className="hover:text-primary transition-colors">Browse Medicines</Link></li>
                <li><Link to="/upload" className="hover:text-primary transition-colors">Upload Prescription</Link></li>
                <li><Link to="/cart" className="hover:text-primary transition-colors">Shopping Cart</Link></li>
                <li><Link to="/checkout" className="hover:text-primary transition-colors">Checkout</Link></li>
                <li><Link to="/track/882910" className="hover:text-primary transition-colors">Track Order</Link></li>
                <li><Link to="/payment-scan" className="hover:text-primary transition-colors">Payment Scan</Link></li>
              </ul>
            </div>

            {/* Portals */}
            <div>
              <h4 className="text-white font-bold mb-6">User Portals</h4>
              <ul className="flex flex-col gap-4 text-sm">
                <li><Link to="/dashboard" className="hover:text-primary transition-colors">Patient Dashboard</Link></li>
                <li><Link to="/orders" className="hover:text-primary transition-colors">My Orders</Link></li>
                <li><Link to="/profile" className="hover:text-primary transition-colors">My Profile</Link></li>
                <li><Link to="/admin" className="hover:text-primary transition-colors">Admin Dashboard</Link></li>
                <li><Link to="/delivery" className="hover:text-primary transition-colors">Delivery Dashboard</Link></li>
                <li><Link to="/register-store" className="hover:text-primary transition-colors">Register Store</Link></li>
              </ul>
            </div>

            {/* Admin & Support */}
            <div>
              <h4 className="text-white font-bold mb-6">Admin & Support</h4>
              <ul className="flex flex-col gap-4 text-sm">
                <li><Link to="/admin/login" className="hover:text-primary transition-colors">Admin Login</Link></li>
                <li><Link to="/admin/store" className="hover:text-primary transition-colors">Store Profile</Link></li>
                <li><Link to="/delivery/profile" className="hover:text-primary transition-colors">Delivery Profile</Link></li>
                <li><Link to="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-6 md:mt-12 pt-4 md:pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] md:text-xs text-slate-500">
          <p>© 2026 MedExpress Inc. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <button className="hover:text-white transition-colors whitespace-nowrap">Privacy Policy</button>
            <button className="hover:text-white transition-colors whitespace-nowrap">Terms of Service</button>
            <button className="hover:text-white transition-colors whitespace-nowrap">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
