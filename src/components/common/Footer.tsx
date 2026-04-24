import { Pill, Mail, Globe, MessageCircle, Camera, PlayCircle, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-bold mb-6">Newsletter</h4>
          <p className="text-sm text-slate-400 mb-6 leading-relaxed">Stay updated with healthcare tips and offers.</p>
          <div className="flex flex-col gap-3">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-white"
              />
            </div>
            <button className="btn btn-primary w-full">Join Now</button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© 2026 MediFast Inc. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <button className="hover:text-white transition-colors">Privacy Policy</button>
          <button className="hover:text-white transition-colors">Terms of Service</button>
          <button className="hover:text-white transition-colors">Cookies</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
