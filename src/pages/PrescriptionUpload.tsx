import { Upload, CheckCircle2, FileText, ShieldCheck, Clock, ArrowRight, User, Phone, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const PrescriptionUpload = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [fileName, setFileName] = useState<string | null>(null);

  const steps = [
    { id: 1, label: 'Upload' },
    { id: 2, label: 'Reviewing' },
    { id: 3, label: 'Result' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Prescription Upload</h1>
        <p className="text-slate-500 font-medium">Verified pharmacists will review your document within 15 minutes.</p>
      </div>

      {/* Stepper */}
      <div className="flex items-center justify-between mb-16 relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 -z-10"></div>
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center gap-3 bg-white px-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
              currentStep === step.id ? 'bg-primary text-white shadow-lg shadow-primary/20' : 
              currentStep > step.id ? 'bg-green-500 text-white' : 'bg-slate-100 text-slate-400'
            }`}>
              {currentStep > step.id ? <CheckCircle2 className="w-5 h-5" /> : step.id}
            </div>
            <span className={`text-xs font-bold uppercase tracking-widest ${currentStep === step.id ? 'text-primary' : 'text-slate-400'}`}>
              {step.label}
            </span>
          </div>
        ))}
      </div>

      <div className="card p-8 md:p-12 mb-12">
        <div className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Upload your Medical Document</h2>
          <p className="text-sm text-slate-500 font-medium leading-relaxed">Ensure all details like doctor's signature and date are clearly visible.</p>
        </div>

        {/* Upload Box */}
        <div className="border-2 border-dashed border-slate-200 rounded-[2rem] p-12 text-center mb-10 group hover:border-primary/30 transition-all cursor-pointer bg-slate-50/50">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary group-hover:scale-110 transition-transform">
            <Upload className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Click or drag to upload</h3>
          <p className="text-sm text-slate-400 mb-6 font-medium">PDF, JPG, PNG (Max 10MB)</p>
          <button className="btn bg-white border-2 border-slate-100 text-slate-700 hover:border-slate-200 px-8 py-2.5 shadow-sm text-sm font-bold">
            Select Prescription
          </button>
        </div>

        {/* Patient Information */}
        <div className="space-y-8">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Patient Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-700">Patient Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Full name on prescription" 
                  className="input pl-12 py-3.5 bg-slate-50 border-slate-100"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-700">Contact Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000" 
                  className="input pl-12 py-3.5 bg-slate-50 border-slate-100"
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-700">Notes for Pharmacist (Optional)</label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
              <textarea 
                rows={4}
                placeholder="E.g., I need a specific brand, or allergies to mention..." 
                className="input pl-12 py-4 bg-slate-50 border-slate-100 resize-none"
              ></textarea>
            </div>
          </div>

          <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-2xl flex gap-4">
            <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Your data is encrypted and handled only by certified healthcare professionals according to HIPAA standards.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 mt-10 border-t border-slate-100">
          <button className="text-sm font-bold text-slate-400 hover:text-slate-600 uppercase tracking-widest transition-colors">
            Cancel Upload
          </button>
          <button className="btn btn-primary px-10 py-4 font-bold shadow-xl shadow-primary/20">
            Submit for Review <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Trust Badges Footer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-8">
        {[
          { icon: <FileText className="w-6 h-6" />, title: 'Legal Compliance', desc: 'We adhere to all local health regulations for digital prescription management.' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: '100% Secure', desc: 'Your sensitive medical data is protected with 256-bit AES encryption at all times.' },
          { icon: <Clock className="w-6 h-6" />, title: 'Quick Turnaround', desc: 'Our network of pharmacists operates 24/7 to ensure zero delays in your healthcare.' },
        ].map((badge, idx) => (
          <div key={idx} className="flex flex-col items-center text-center gap-4">
            <div className="text-slate-400">{badge.icon}</div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest">{badge.title}</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-medium px-4">{badge.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrescriptionUpload;
