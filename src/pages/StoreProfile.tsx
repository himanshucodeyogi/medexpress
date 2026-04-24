import { Store, Phone, Mail, Clock, MapPin, User, Shield, Info, Edit3, Camera, RotateCcw, ExternalLink, Save, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const StoreProfile = () => {
  const [activeTab, setActiveTab] = useState('store');

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
              <CheckCircle2 className="w-3 h-3" /> Verified Partner
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="btn bg-white border border-slate-200 text-slate-600 px-4 py-2 text-sm font-bold flex items-center gap-2">
              <ExternalLink className="w-4 h-4" /> View Public Page
            </button>
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
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-br from-emerald-500/10 to-teal-500/10"></div>
              <div className="relative z-10">
                <div className="relative inline-block mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
                    alt="Store" 
                    className="w-24 h-24 rounded-3xl object-cover border-4 border-white shadow-xl"
                  />
                  <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <h2 className="text-xl font-black text-slate-900">City Wellness Pharmacy</h2>
                <div className="inline-block mt-2 px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Active Status
                </div>
                
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
              </div>
            </div>

            <div className="card p-4 space-y-1">
              {[
                { id: 'store', label: 'Store Information', icon: <Store className="w-4 h-4" /> },
                { id: 'owner', label: 'Owner Details', icon: <User className="w-4 h-4" /> },
                { id: 'license', label: 'License & Compliance', icon: <Shield className="w-4 h-4" /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl font-bold text-sm transition-all ${
                    activeTab === tab.id 
                      ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Form */}
          <div className="lg:col-span-3 space-y-8">
            {activeTab === 'store' && (
              <div className="card p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                    <Store className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">Store Information</h3>
                    <p className="text-xs text-slate-400 font-medium">Manage your public store profile and contact details.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Store Name</label>
                    <input type="text" defaultValue="City Wellness Pharmacy" className="input bg-slate-50 border-slate-100" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Contact Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input type="tel" defaultValue="+1 (555) 987-6543" className="input pl-12 bg-slate-50 border-slate-100" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input type="email" defaultValue="contact@citywellness.com" className="input pl-12 bg-slate-50 border-slate-100" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Operating Hours</label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input type="text" defaultValue="Mon-Sun: 08:00 AM - 10:00 PM" className="input pl-12 bg-slate-50 border-slate-100" />
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Physical Address</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-4 w-4 h-4 text-slate-400" />
                      <textarea 
                        className="input pl-12 bg-slate-50 border-slate-100 py-4 resize-none"
                        rows={2}
                        defaultValue="890 Medical District Ave, Downtown Plaza, NY 10002"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'owner' && (
              <div className="card p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center">
                    <User className="w-6 h-6 text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">Owner Details</h3>
                    <p className="text-xs text-slate-400 font-medium">Information about the primary store owner or manager.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input type="text" defaultValue="Sarah Jenkins" className="input bg-slate-50 border-slate-100" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Position/Role</label>
                    <input type="text" defaultValue="Lead Pharmacist & Owner" className="input bg-slate-50 border-slate-100" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Contact Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input type="tel" defaultValue="+1 (555) 123-4567" className="input pl-12 bg-slate-50 border-slate-100" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input type="email" defaultValue="sarah.j@citywellness.com" className="input pl-12 bg-slate-50 border-slate-100" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'license' && (
              <div className="card p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">License & Compliance</h3>
                    <p className="text-xs text-slate-400 font-medium">Official pharmacy registration and compliance documents.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pharmacy License No.</label>
                    <input type="text" defaultValue="PH-2023-NY-89302" className="input bg-slate-50 border-slate-100 font-mono" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Expiry Date</label>
                    <input type="date" defaultValue="2025-12-31" className="input bg-slate-50 border-slate-100" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Upload Renewed License</label>
                    <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:border-primary transition-colors cursor-pointer bg-slate-50">
                      <Shield className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                      <p className="text-sm font-bold text-slate-700">Click to upload or drag and drop</p>
                      <p className="text-xs text-slate-500 mt-1">PDF, JPG or PNG (max. 10MB)</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Sticky Footer for Actions */}
            <div className="card p-4 bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 sticky bottom-8 shadow-2xl shadow-slate-200/50">
              <p className="text-xs font-bold text-slate-500 flex items-center gap-2 px-4">
                <Info className="w-4 h-4" /> Ensure all details match official records.
              </p>
              <div className="flex gap-3 w-full md:w-auto">
                <button className="btn bg-white border border-slate-200 text-slate-600 px-6 py-3 text-sm font-bold flex items-center gap-2 hover:bg-slate-50">
                  <RotateCcw className="w-4 h-4" /> Reset
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

export default StoreProfile;
