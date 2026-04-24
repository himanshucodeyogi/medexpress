import { User, Mail, Phone, MapPin, Shield, Bell, CreditCard, ShoppingBag, LogOut, Camera, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: <User className="w-4 h-4" /> },
    { id: 'security', label: 'Security', icon: <Shield className="w-4 h-4" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-4 h-4" /> },
    { id: 'payments', label: 'Payment Methods', icon: <CreditCard className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div className="lg:w-80 space-y-8">
            <div className="card p-8 text-center">
              <div className="relative inline-block mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="Profile" 
                  className="w-32 h-32 rounded-[2.5rem] border-4 border-white shadow-xl"
                />
                <button className="absolute bottom-0 right-0 p-3 bg-primary text-white rounded-2xl shadow-lg hover:scale-110 transition-transform">
                  <Camera className="w-5 h-5" />
                </button>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Alex Johnson</h2>
              <p className="text-slate-500 font-medium mb-6">Patient ID: #MED-2940</p>
              <div className="flex items-center justify-center gap-2 py-1.5 px-3 bg-green-50 text-green-600 rounded-full text-[10px] font-bold uppercase tracking-widest w-fit mx-auto">
                <CheckCircle2 className="w-3 h-3" /> Verified Account
              </div>
            </div>

            <div className="card p-4 space-y-1">
              {tabs.map((tab) => (
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
              <div className="pt-4 mt-4 border-t border-slate-100">
                <button className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl font-bold text-sm text-red-500 hover:bg-red-50 transition-all">
                  <LogOut className="w-4 h-4" /> Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="card p-8 md:p-12">
              <h1 className="text-3xl font-bold text-slate-900 mb-10">
                {tabs.find(t => t.id === activeTab)?.label}
              </h1>

              {activeTab === 'personal' && (
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input type="text" defaultValue="Alex Johnson" className="input pl-12 bg-slate-50 border-slate-100" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input type="email" defaultValue="alex.j@example.com" className="input pl-12 bg-slate-50 border-slate-100" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input type="tel" defaultValue="+1 (555) 000-1234" className="input pl-12 bg-slate-50 border-slate-100" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Date of Birth</label>
                      <input type="date" defaultValue="1992-05-15" className="input bg-slate-50 border-slate-100" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Residential Address</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
                      <textarea 
                        rows={3} 
                        defaultValue="123 Healthcare Ave, Medical District, New York, NY 10001" 
                        className="input pl-12 bg-slate-50 border-slate-100 py-4 resize-none"
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex justify-end pt-6">
                    <button className="btn btn-primary px-10 py-4 font-bold shadow-lg shadow-primary/20">Save Changes</button>
                  </div>
                </form>
              )}

              {activeTab === 'security' && (
                <div className="space-y-10">
                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                        <Shield className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">Two-Factor Authentication</p>
                        <p className="text-sm text-slate-500 font-medium">Add an extra layer of security to your account.</p>
                      </div>
                    </div>
                    <button className="btn bg-white border border-slate-200 text-slate-700 px-6 font-bold hover:bg-slate-50 transition-all">Enable</button>
                  </div>

                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <h3 className="text-lg font-bold text-slate-900">Change Password</h3>
                    <div className="grid grid-cols-1 gap-6 max-w-md">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Current Password</label>
                        <input type="password" placeholder="••••••••" className="input bg-slate-50 border-slate-100" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">New Password</label>
                        <input type="password" placeholder="••••••••" className="input bg-slate-50 border-slate-100" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Confirm New Password</label>
                        <input type="password" placeholder="••••••••" className="input bg-slate-50 border-slate-100" />
                      </div>
                    </div>
                    <button className="btn btn-primary px-10 py-4 font-bold mt-4">Update Password</button>
                  </form>
                </div>
              )}

              {activeTab === 'payments' && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-8 bg-slate-900 rounded-[2rem] text-white relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-12">
                          <CreditCard className="w-10 h-10 text-primary" />
                          <span className="text-xs font-bold uppercase tracking-widest opacity-60">Primary</span>
                        </div>
                        <p className="text-xl font-medium mb-6 tracking-widest">•••• •••• •••• 4242</p>
                        <div className="flex justify-between items-end">
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">Card Holder</p>
                            <p className="text-sm font-bold uppercase">Alex Johnson</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">Expires</p>
                            <p className="text-sm font-bold">12/25</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="border-2 border-dashed border-slate-200 rounded-[2rem] flex flex-col items-center justify-center gap-4 p-8 hover:border-primary/40 hover:bg-slate-50 transition-all group">
                      <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                        <CreditCard className="w-6 h-6" />
                      </div>
                      <p className="font-bold text-slate-500 group-hover:text-primary">Add New Card</p>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
