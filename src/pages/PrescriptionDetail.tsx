import { FileText, User, Calendar, CheckCircle2, XCircle, Clock, Download, ExternalLink, Shield, AlertCircle, MessageSquare } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

const PrescriptionDetail = () => {
  const { id } = useParams();

  // Mock data for the prescription
  const prescription = {
    id: id || 'RX-9921',
    patient: {
      id: 'PID-8812',
      name: 'James Carter',
      age: 34,
      gender: 'Male',
      phone: '+1 (555) 123-4567',
      email: 'james.c@example.com'
    },
    doctor: {
      name: 'Dr. Aris Thorne',
      license: 'LIC-882100',
      clinic: 'Central Health Clinic',
      specialty: 'General Physician'
    },
    date: 'Oct 24, 2023',
    status: 'Pending Review',
    notes: 'Patient reported chronic back pain and difficulty sleeping.',
    medicines: [
      { name: 'Amoxicillin 500mg', dosage: '1 tablet twice a day', duration: '7 days', quantity: 14 },
      { name: 'Ibuprofen 400mg', dosage: '1 tablet every 6 hours', duration: 'as needed', quantity: 20 },
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  };

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div className="flex items-center gap-4">
          <Link to="/admin" className="p-2 hover:bg-slate-100 rounded-xl text-slate-400 transition-all">
            <XCircle className="w-6 h-6 rotate-45" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-1">Prescription Review</h1>
            <p className="text-slate-500 font-medium">Reviewing {prescription.id} for {prescription.patient.name}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn bg-white border border-slate-200 text-red-600 px-6 font-bold hover:bg-red-50">
            <XCircle className="w-4 h-4" /> Reject
          </button>
          <button className="btn btn-primary px-8 font-bold shadow-xl shadow-primary/20">
            <CheckCircle2 className="w-4 h-4" /> Approve & Process
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Prescription Image & Main Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="card overflow-hidden">
            <div className="bg-slate-50 p-4 border-b border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Original Document</span>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-primary transition-all shadow-sm">
                  <Download className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-primary transition-all shadow-sm">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-8 flex justify-center bg-slate-200/20">
              <img src={prescription.image} alt="Prescription" className="max-w-full rounded-xl shadow-lg border border-white" />
            </div>
          </div>

          <div className="card p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-8">Extracted Medications</h2>
            <div className="space-y-6">
              {prescription.medicines.map((med, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-6 border border-slate-50 rounded-2xl bg-slate-50/30 group hover:border-primary/20 transition-all">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm border border-slate-100">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors">{med.name}</h4>
                      <p className="text-xs text-slate-500 font-medium">{med.dosage}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-8 text-right">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Duration</p>
                      <p className="text-sm font-bold text-slate-900">{med.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Quantity</p>
                      <p className="text-sm font-bold text-slate-900">{med.quantity} Units</p>
                    </div>
                  </div>
                </div>
              ))}
              <button className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold text-sm hover:border-primary/30 hover:text-primary transition-all">
                + Add Another Medication
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          {/* Patient Card */}
          <div className="card p-8">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Patient Information</h3>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary font-bold text-xl">
                {prescription.patient.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{prescription.patient.name}</h4>
                <p className="text-xs text-slate-500 font-medium">{prescription.patient.gender}, {prescription.patient.age} Years</p>
              </div>
            </div>
            <div className="space-y-4 pt-6 border-t border-slate-50">
              <div className="flex items-center gap-3 text-slate-500">
                <User className="w-4 h-4" />
                <span className="text-sm font-medium">{prescription.patient.id || 'PID-2991'}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">Last Visit: 2 weeks ago</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium">Insurance Verified</span>
              </div>
            </div>
          </div>

          {/* Doctor Card */}
          <div className="card p-8">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Doctor Information</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-1">{prescription.doctor.name}</h4>
                <p className="text-xs font-bold text-primary uppercase tracking-widest">{prescription.doctor.specialty}</p>
              </div>
              <div className="space-y-3 pt-4 border-t border-slate-50">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400 font-medium">License No.</span>
                  <span className="text-slate-900 font-bold">{prescription.doctor.license}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400 font-medium">Clinic</span>
                  <span className="text-slate-900 font-bold">{prescription.doctor.clinic}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pharmacist Notes */}
          <div className="card p-8 bg-slate-900 text-white border-none">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <MessageSquare className="w-4 h-4" /> Internal Notes
            </h3>
            <textarea 
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-slate-300 focus:outline-none focus:ring-1 focus:ring-primary resize-none mb-4"
              rows={4}
              placeholder="Add internal notes here..."
            ></textarea>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
              <AlertCircle className="w-4 h-4" /> Visibility: Pharmacists Only
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionDetail;
