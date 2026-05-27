import { User, Phone, Mail, Shield, Camera, RotateCcw, CheckCircle2, Car, Save, Info } from 'lucide-react';
import { useState } from 'react';

const DeliveryProfile = () => {
  const [activeTab, setActiveTab] = useState('basic');

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="card p-6 md:p-8 bg-white border border-slate-200 rounded-3xl text-center shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-20 md:h-24 bg-gradient-to-br from-blue-500/10 to-indigo-500/10"></div>
              <div className="relative z-10">
                <div className="relative inline-block mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                    alt="Courier" 
                    className="w-20 h-20 md:w-24 md:h-24 rounded-3xl object-cover border-4 border-white shadow-xl"
                  />
                  <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <h2 className="text-lg md:text-xl font-black text-slate-900">Marcus Chen</h2>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mt-1">Certified Medical Courier</p>
                
                <div className="grid grid-cols-2 gap-4 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-slate-50">
                  <div>
                    <p className="text-lg md:text-xl font-black text-slate-900">1,284</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Deliveries</p>
                  </div>
                  <div>
                    <p className="text-lg md:text-xl font-black text-slate-900">4.9</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Rating</p>
                  </div>
                </div>

                <div className="space-y-3 mt-6 md:mt-8">
                  <div className="p-3 bg-slate-50 rounded-xl flex items-center gap-3 text-left">
                    <Car className="w-4 h-4 text-slate-500 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Vehicle</p>
                      <p className="text-xs font-bold text-slate-900 truncate">2021 Toyota Prius</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-2 md:p-4 space-y-1">
              {[
                { id: 'basic', label: 'Basic Information', icon: <User className="w-4 h-4" /> },
                { id: 'compliance', label: 'Identity & Compliance', icon: <Shield className="w-4 h-4" /> },
                { id: 'vehicle', label: 'Vehicle Details', icon: <Car className="w-4 h-4" /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-4 px-4 py-3 md:py-4 rounded-2xl font-bold text-sm transition-all ${
                    activeTab === tab.id 
                      ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span className="shrink-0">{tab.icon}</span> {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Form */}
          <form onSubmit={(e) => e.preventDefault()} className="lg:col-span-3 space-y-6 md:space-y-8">
            {activeTab === 'basic' && (
              <div className="card p-6 md:p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                    <User className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-black text-slate-900">Basic Information</h3>
                    <p className="text-xs text-slate-400 font-medium">Manage your personal and contact details.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="full-name" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input id="full-name" type="text" defaultValue="Marcus Chen" className="input bg-slate-50 border-slate-100" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="dob" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Date of Birth</label>
                    <input id="dob" type="date" defaultValue="1988-03-15" className="input bg-slate-50 border-slate-100" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Contact Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input id="phone" type="tel" defaultValue="+1 (555) 234-8901" className="input pl-12 bg-slate-50 border-slate-100" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input id="email" type="email" defaultValue="marcus.chen@example.com" className="input pl-12 bg-slate-50 border-slate-100" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="emergency-contact" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Emergency Contact</label>
                    <input id="emergency-contact" type="text" defaultValue="Sarah Chen (Wife)" className="input bg-slate-50 border-slate-100" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="emergency-phone" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Emergency Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input id="emergency-phone" type="tel" defaultValue="+1 (555) 890-1234" className="input pl-12 bg-slate-50 border-slate-100" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'compliance' && (
              <div className="card p-6 md:p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-black text-slate-900">Identity & Compliance</h3>
                    <p className="text-xs text-slate-400 font-medium">Driver's license and medical handling certifications.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="license-no" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Driver's License No.</label>
                    <input id="license-no" type="text" defaultValue="DL-890234-NY" className="input bg-slate-50 border-slate-100 font-mono" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="license-expiry" className="text-xs font-bold text-slate-400 uppercase tracking-widest">License Expiry</label>
                    <input id="license-expiry" type="date" defaultValue="2026-08-20" className="input bg-slate-50 border-slate-100" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mhc-cert" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Medical Handling Cert.</label>
                    <input id="mhc-cert" type="text" defaultValue="MHC-2023-998" className="input bg-slate-50 border-slate-100 font-mono" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Background Check</span>
                    <div className="flex items-center gap-2 h-12 px-4 bg-green-50 rounded-xl text-green-700 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4 shrink-0" /> Passed (Oct 2023)
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'vehicle' && (
              <div className="card p-6 md:p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Car className="w-5 h-5 md:w-6 md:h-6 text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-black text-slate-900">Vehicle Details</h3>
                    <p className="text-xs text-slate-400 font-medium">Information about your registered delivery vehicle.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="vehicle-type" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Vehicle Type</label>
                    <select id="vehicle-type" className="input bg-slate-50 border-slate-100">
                      <option>Car</option>
                      <option>Motorcycle</option>
                      <option>Bicycle</option>
                      <option>Van</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="vehicle-model" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Make & Model</label>
                    <input id="vehicle-model" type="text" defaultValue="Toyota Prius" className="input bg-slate-50 border-slate-100" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="license-plate" className="text-xs font-bold text-slate-400 uppercase tracking-widest">License Plate</label>
                    <input id="license-plate" type="text" defaultValue="ABC-1234" className="input bg-slate-50 border-slate-100 font-mono font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="vehicle-year" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Year</label>
                    <input id="vehicle-year" type="text" defaultValue="2021" className="input bg-slate-50 border-slate-100" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Insurance Document</span>
                    <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 md:p-10 text-center hover:border-primary transition-colors cursor-pointer bg-slate-50">
                      <Shield className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                      <p className="text-sm font-bold text-slate-700">Click to upload insurance proof</p>
                      <p className="text-xs text-slate-500 mt-1">PDF, JPG or PNG (max. 10MB)</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Sticky Footer for Actions */}
            <div className="card p-4 bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-4 md:bottom-8 shadow-2xl shadow-slate-200/50 z-20">
              <p className="text-xs font-bold text-slate-500 flex items-center gap-2 px-2 md:px-4">
                <Info className="w-4 h-4 shrink-0" /> <span className="hidden xs:inline">Unsaved changes in basic information.</span><span className="xs:hidden">Unsaved changes.</span>
              </p>
              <div className="flex gap-3 w-full sm:w-auto">
                <button type="reset" className="flex-1 sm:flex-none btn bg-white border border-slate-200 text-slate-600 px-4 md:px-6 py-3 text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-50">
                  <RotateCcw className="w-4 h-4" /> Reset
                </button>
                <button type="submit" className="btn btn-primary flex-[2] sm:flex-none px-6 md:px-10 py-3 text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                  <Save className="w-4 h-4" /> Save Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeliveryProfile;
