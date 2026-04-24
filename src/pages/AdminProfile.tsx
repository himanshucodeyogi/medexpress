import { User, Store, ShieldCheck, MapPin, Phone, Mail, Clock, Lock, Shield, Eye, Save, RotateCcw, Camera, ExternalLink, Edit3, Award, Info, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [hasChanges, setHasChanges] = useState(false);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/admin" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <RotateCcw className="w-5 h-5 text-slate-400" />
            </Link>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Admin / Store Profile</p>
              <h1 className="text-xl font-black text-slate-900">Admin Profile</h1>
            </div>
            <div className="ml-4 px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> Verified Partner
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/pharmacy/1" className="btn bg-white border border-slate-200 text-slate-600 px-4 py-2 text-sm font-bold flex items-center gap-2">
              <ExternalLink className="w-4 h-4" /> View Public Page
            </Link>
            <button className="btn btn-primary px-6 py-2 text-sm font-bold flex items-center gap-2">
              <Edit3 className="w-4 h-4" /> Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="card p-8 bg-white border border-slate-200 rounded-3xl text-center shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-br from-primary/10 to-blue-500/10"></div>
              <div className="relative z-10">
                <div className="relative inline-block mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1556157382-97dee2dcb96a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                    alt="Admin" 
                    className="w-24 h-24 rounded-3xl object-cover border-4 border-white shadow-xl"
                  />
                  <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <h2 className="text-xl font-black text-slate-900">Marcus Wright</h2>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mt-1">Senior Store Admin</p>
                
                <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-50">
                  <div>
                    <p className="text-xl font-black text-slate-900">1,284</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Orders</p>
                  </div>
                  <div>
                    <p className="text-xl font-black text-slate-900">4.9</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Rating</p>
                  </div>
                </div>

                <div className="space-y-3 mt-8">
                  <div className="p-3 bg-slate-50 rounded-xl flex items-center gap-3 text-left">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Licensed Pharmacist #9921</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl flex items-center gap-3 text-left">
                    <Store className="w-4 h-4 text-blue-500" />
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Downtown Hub Branch</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6 bg-white border border-slate-200 rounded-2xl flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <div>
                  <p className="text-xs font-black text-slate-900">Account Verified</p>
                  <p className="text-[10px] text-slate-400 font-medium">Your identity and pharmacy credentials have been successfully validated.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Form */}
          <div className="lg:col-span-3 space-y-8">
            {/* Basic Information */}
            <div className="card p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">Basic Information</h3>
                  <p className="text-xs text-slate-400 font-medium">Manage your personal identification and contact details used for store operations.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input type="text" defaultValue="Marcus Wright" className="input bg-slate-50 border-slate-100" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Public Display Name</label>
                  <input type="text" defaultValue="Admin Marcus" className="input bg-slate-50 border-slate-100" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input type="email" defaultValue="marcus.wright@medexpress.com" className="input pl-12 bg-slate-50 border-slate-100" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input type="tel" defaultValue="+1 (555) 234-5678" className="input pl-12 bg-slate-50 border-slate-100" />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Professional Bio</label>
                  <textarea 
                    className="input bg-slate-50 border-slate-100 min-h-[100px] py-4"
                    defaultValue="Senior Administrator with over 10 years of experience in pharmaceutical logistics and retail pharmacy management. Specialized in ensuring delivery compliance and local health regulations."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Store & Logistics Info */}
            <div className="card p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
                  <Store className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">Store & Logistics Info</h3>
                  <p className="text-xs text-slate-400 font-medium">Details about your primary pharmacy location and operational parameters.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Store Name</label>
                  <input type="text" defaultValue="Med Express Central - Hub #1" className="input bg-slate-50 border-slate-100" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pharmacy License Number</label>
                  <div className="relative">
                    <Shield className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input type="text" defaultValue="PH-2024-8837-X" className="input pl-12 bg-slate-50 border-slate-100" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Operating Hours</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input type="text" defaultValue="08:00 AM - 10:00 PM" className="input pl-12 bg-slate-50 border-slate-100" />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Store Physical Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input type="text" defaultValue="742 Medical Center Blvd, Floor 2, Suite 204" className="input pl-12 bg-slate-50 border-slate-100" />
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-2xl flex items-center gap-3">
                <Info className="w-5 h-5 text-amber-500 shrink-0" />
                <p className="text-[10px] text-amber-700 font-bold leading-relaxed">Updating the store location may trigger a re-verification of your pharmacy zone.</p>
              </div>
            </div>

            {/* Security & Password */}
            <div className="card p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center">
                  <Lock className="w-6 h-6 text-slate-400" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">Security & Password</h3>
                  <p className="text-xs text-slate-400 font-medium">Keep your administrator account secure with a strong password and multi-factor settings.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 max-w-2xl">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Current Password</label>
                  <div className="relative">
                    <input type="password" defaultValue="password123" className="input bg-slate-50 border-slate-100" />
                    <Eye className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 cursor-pointer" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">New Password</label>
                  <input type="password" placeholder="Create a strong password" className="input bg-slate-50 border-slate-100" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Confirm New Password</label>
                  <input type="password" placeholder="Repeat new password" className="input bg-slate-50 border-slate-100" />
                </div>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-xs font-bold text-slate-900">PASSWORD STRENGTH</p>
                  </div>
                  <div className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Excellent</div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
                    <CheckCircle2 className="w-3 h-3" /> At least 12 characters
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
                    <CheckCircle2 className="w-3 h-3" /> Special symbols included
                  </div>
                </div>
                <div className="pt-4">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="peer hidden" defaultChecked />
                      <div className="w-5 h-5 border-2 border-slate-200 rounded flex items-center justify-center transition-all peer-checked:bg-primary peer-checked:border-primary group-hover:border-primary">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-900">Enable Two-Factor Authentication (MFA)</p>
                      <p className="text-[10px] text-slate-400 font-medium">Recommended for all administrative accounts for enhanced data security.</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Sticky Footer for Actions */}
            <div className="card p-4 bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 sticky bottom-8 shadow-2xl shadow-slate-200/50">
              <p className="text-xs font-bold text-amber-600 flex items-center gap-2 px-4">
                <Info className="w-4 h-4" /> You have unsaved changes in Store Info
              </p>
              <div className="flex gap-3 w-full md:w-auto">
                <button className="btn bg-white border border-slate-200 text-slate-600 px-6 py-3 text-sm font-bold flex items-center gap-2 hover:bg-slate-50">
                  <RotateCcw className="w-4 h-4" /> Reset Changes
                </button>
                <button className="btn btn-primary flex-1 md:flex-none px-10 py-3 text-sm font-bold flex items-center gap-2 shadow-lg shadow-primary/20">
                  <Save className="w-4 h-4" /> Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
