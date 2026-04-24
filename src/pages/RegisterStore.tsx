import { Store, MapPin, Upload, User, Mail, Phone, GraduationCap, CheckCircle2, AlertCircle, Info, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterStore = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 2000);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <Store className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-black text-slate-900 tracking-tight">MedExpress <span className="text-primary">Partner</span></span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/dashboard" className="text-sm font-bold text-slate-500 hover:text-primary transition-colors">Dashboard</Link>
              <Link to="/catalog" className="text-sm font-bold text-slate-500 hover:text-primary transition-colors">Register Store</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">Sign In</Link>
            <button className="btn btn-primary px-6 py-2 text-sm font-bold">Need Help?</button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
            Partner Onboarding
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Register Your Store</h1>
          <p className="text-slate-500 font-medium">Connect your pharmacy to the MedExpress network and reach more customers.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Store Details Section */}
              <div className="card p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Store className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Store Details</h2>
                    <p className="text-xs text-slate-400 font-medium">Provide information about your physical pharmacy location</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Store Name *</label>
                    <input type="text" placeholder="e.g. Central Health Pharmacy" className="input bg-slate-50 border-slate-100" required />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Store Location *</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input type="text" placeholder="Search for your address..." className="input pl-12 bg-slate-50 border-slate-100" required />
                      <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50">Set on Map</button>
                    </div>
                    <div className="mt-4 aspect-video bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center overflow-hidden relative">
                      <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Map Preview" className="w-full h-full object-cover opacity-50" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/40 backdrop-blur-[2px]">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl mb-2">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-xs font-bold text-slate-900">PREVIEW LOCATION</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Store Images *</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <button type="button" className="aspect-square border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-primary hover:bg-primary/5 transition-all group">
                        <Upload className="w-6 h-6 text-slate-400 group-hover:text-primary" />
                        <span className="text-[10px] font-bold text-slate-400 group-hover:text-primary">Upload Photo</span>
                      </button>
                      <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden relative group">
                        <img src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Pharmacy" className="w-full h-full object-cover" />
                        <button type="button" className="absolute top-2 right-2 w-6 h-6 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                          <AlertCircle className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden relative group">
                        <img src="https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Pharmacy" className="w-full h-full object-cover" />
                        <button type="button" className="absolute top-2 right-2 w-6 h-6 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                          <AlertCircle className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="aspect-square border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center gap-2">
                        <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-[10px] font-bold text-slate-400">Uploading...</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Store Description *</label>
                    <textarea 
                      placeholder="Tell us about your pharmacy, specialties, and service hours..." 
                      className="input bg-slate-50 border-slate-100 min-h-[120px] py-4"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Owner Details Section */}
              <div className="card p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <User className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Owner Details</h2>
                    <p className="text-xs text-slate-400 font-medium">Professional and contact information of the store license holder</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2 flex items-center gap-6 mb-4">
                    <div className="relative group">
                      <img 
                        src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                        alt="Owner" 
                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <button type="button" className="absolute bottom-0 right-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                        <Upload className="w-4 h-4" />
                      </button>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Dr. Johnathan Doe</p>
                      <button type="button" className="text-xs font-bold text-primary hover:underline">Change Photo</button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name *</label>
                    <input type="text" defaultValue="Dr. Johnathan Doe" className="input bg-slate-50 border-slate-100" required />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Contact Number *</label>
                    <div className="flex gap-2">
                      <div className="w-20 flex items-center justify-center bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-600">+1</div>
                      <input type="tel" placeholder="(555) 000-0000" className="input flex-1 bg-slate-50 border-slate-100" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address *</label>
                    <input type="email" placeholder="john.doe@example.com" className="input bg-slate-50 border-slate-100" required />
                    <p className="text-[10px] text-red-500 font-bold flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> Please enter a valid work email address
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Professional Education *</label>
                    <input type="text" placeholder="e.g. PharmD, University of Medicine" className="input bg-slate-50 border-slate-100" required />
                  </div>
                </div>
              </div>

              {/* Agreement */}
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative mt-1">
                    <input type="checkbox" className="peer hidden" required />
                    <div className="w-5 h-5 border-2 border-slate-200 rounded flex items-center justify-center transition-all peer-checked:bg-primary peer-checked:border-primary group-hover:border-primary">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-slate-500">I agree to the MedExpress Partner <Link to="#" className="text-primary font-bold hover:underline">Terms of Service</Link> and <Link to="#" className="text-primary font-bold hover:underline">Privacy Policy</Link>.</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative mt-1">
                    <input type="checkbox" className="peer hidden" defaultChecked />
                    <div className="w-5 h-5 border-2 border-slate-200 rounded flex items-center justify-center transition-all peer-checked:bg-primary peer-checked:border-primary group-hover:border-primary">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-slate-500">Subscribe to our partner newsletter for pharmacy growth tips and platform updates.</span>
                </label>
              </div>

              {/* Submission Feedback */}
              {showSuccess && (
                <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center gap-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-emerald-900">Save Successful!</p>
                    <p className="text-xs text-emerald-600">Your draft has been saved. You can return later.</p>
                  </div>
                </div>
              )}

              <div className="flex flex-col md:flex-row gap-4 pt-6">
                <button type="button" className="btn bg-white border border-slate-200 text-slate-600 px-10 py-4 font-bold hover:bg-slate-50">Save Draft</button>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn btn-primary flex-1 py-4 text-lg font-bold shadow-xl shadow-primary/20 relative overflow-hidden"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </div>
                  ) : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="card p-8 bg-blue-50/50 border border-blue-100 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Info className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-slate-900">Registration Tips</h3>
              </div>
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Verification Checklist</span>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Valid Pharmacy License
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Ownership Identity Proof
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-400">
                      <div className="w-4 h-4 border-2 border-slate-200 rounded-full"></div> Storefront Clear Photo
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-400">
                      <div className="w-4 h-4 border-2 border-slate-200 rounded-full"></div> Tax Identification Cert
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-white rounded-xl border border-blue-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">Review Time</span>
                  </div>
                  <p className="text-sm font-bold text-slate-600 mb-1">Expected: 2-3 Business Days</p>
                  <p className="text-xs text-slate-400 leading-relaxed">Our medical compliance team reviews every application manually to ensure network safety.</p>
                </div>

                <button className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 hover:border-primary transition-colors text-left group">
                  <span className="text-sm font-bold text-slate-600 group-hover:text-primary transition-colors">View Verification Policy</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
                </button>
              </div>
            </div>

            <div className="card p-8 bg-white border border-slate-200 rounded-2xl text-center">
              <p className="text-sm font-medium text-slate-500 mb-4">Need help with your application? Our partner support team is available 24/7 at</p>
              <Link to="mailto:support@medexpress.com" className="text-sm font-bold text-primary hover:underline">support@medexpress.com</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterStore;
