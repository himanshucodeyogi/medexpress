import { LayoutDashboard, ShoppingBag, Upload, MapPin, Settings, LogOut, Plus, ChevronRight, Clock, CheckCircle2, AlertCircle, FileText, ExternalLink, Map, Navigation, HeartPulse, Truck, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const PatientDashboard = () => {
  const stats = [
    { icon: <ShoppingBag className="w-6 h-6 text-slate-600" />, label: 'Active Orders', value: '01', bg: 'bg-slate-50' },
    { icon: <CheckCircle2 className="w-6 h-6 text-green-600" />, label: 'Verified Rx', value: '08', bg: 'bg-green-50' },
    { icon: <Clock className="w-6 h-6 text-slate-600" />, label: 'Pending Refills', value: '03', bg: 'bg-slate-50' },
    { icon: <HeartPulse className="w-6 h-6 text-primary" />, label: 'MediPoints', value: '1,250', bg: 'bg-blue-50' },
  ];

  const recentOrders = [
    { id: 'ORD-8821', status: 'In Progress', items: 'Paracetamol 500mg, Vitamin C', date: 'Oct 24, 2023', amount: '$42.50', tracking: true },
    { id: 'ORD-8710', status: 'Delivered', items: 'Insulin Glargine, Syringes', date: 'Oct 15, 2023', amount: '$128.00', tracking: false },
    { id: 'ORD-8655', status: 'Delivered', items: 'Cough Syrup (Benadryl)', date: 'Sep 30, 2023', amount: '$15.20', tracking: false },
    { id: 'ORD-8501', status: 'Cancelled', items: 'Blood Pressure Monitor', date: 'Sep 12, 2023', amount: '$55.00', tracking: false },
  ];

  const documents = [
    { name: 'General Health Rx', date: 'Oct 20, 2023', doctor: 'Dr. Sarah Smith', status: 'Verified' },
    { name: 'Chronic Care Plan', date: 'Sep 05, 2023', doctor: 'Dr. James Wilson', status: 'Under Review' },
    { name: 'Dermatology Cream', date: 'Aug 12, 2023', doctor: 'Dr. Elena Ross', status: 'Verified' },
  ];

  return (
    <div className="flex bg-[#f8fafc] min-h-screen">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-100 p-8 hidden lg:flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          {[
            { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', active: true },
            { icon: <ShoppingBag className="w-5 h-5" />, label: 'My Orders', active: false },
            { icon: <Upload className="w-5 h-5" />, label: 'Upload Prescription', active: false },
            { icon: <MapPin className="w-5 h-5" />, label: 'Addresses', active: false },
            { icon: <Settings className="w-5 h-5" />, label: 'Settings', active: false },
          ].map((item) => (
            <button 
              key={item.label}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-sm transition-all ${item.active ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </div>

        <div className="mt-auto pt-8 border-t border-slate-100 flex flex-col gap-2">
          <button className="flex items-center gap-4 px-4 py-3 text-slate-400 hover:text-red-500 font-bold text-sm transition-all">
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Patient Dashboard</h1>
            <p className="text-slate-500 font-medium">Welcome back, Alex. Your last order is arriving in 48 hours.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="btn bg-white border border-slate-200 text-slate-700 px-6 font-bold shadow-sm hover:bg-slate-50">
              <Plus className="w-4 h-4" /> New Order
            </button>
            <button className="btn btn-primary px-6 font-bold">
              <Upload className="w-4 h-4" /> Upload Rx
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="card flex items-center gap-6 group hover:border-primary/20 transition-all cursor-pointer">
              <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Recent Orders & Tracking */}
          <div className="lg:col-span-2 space-y-10">
            <div className="card p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-slate-900">Recent Orders</h2>
                <button className="text-sm font-bold text-primary hover:underline">View History</button>
              </div>

              <div className="flex flex-col gap-6">
                {recentOrders.map((order) => (
                  <div key={order.id} className="border border-slate-100 rounded-2xl p-6 hover:border-slate-200 transition-all group">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                          <ShoppingBag className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h4 className="font-bold text-slate-900">{order.id}</h4>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                              order.status === 'In Progress' ? 'bg-blue-100 text-blue-600' : 
                              order.status === 'Delivered' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                            }`}>{order.status}</span>
                          </div>
                          <p className="text-xs text-slate-500 font-medium">{order.items}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Order Date</p>
                        <p className="text-sm font-bold text-slate-900">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Amount</p>
                        <p className="text-sm font-bold text-slate-900">{order.amount}</p>
                      </div>
                      <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400 transition-colors">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>

                    {order.tracking && (
                      <div className="pt-6 border-t border-slate-50">
                        <div className="flex items-center justify-between mb-8">
                          <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Delivery Tracking</h5>
                          <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                            <Clock className="w-4 h-4 text-primary" /> Expected in 2 days
                          </div>
                        </div>
                        <div className="relative h-1 bg-slate-100 rounded-full mb-8">
                          <div className="absolute top-0 left-0 w-2/3 h-full bg-primary rounded-full"></div>
                          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-8 h-8 bg-white border-2 border-primary rounded-full flex items-center justify-center shadow-md">
                            <Clock className="w-4 h-4 text-primary" />
                          </div>
                          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-8 h-8 bg-white border-2 border-primary rounded-full flex items-center justify-center shadow-md">
                            <Settings className="w-4 h-4 text-primary" />
                          </div>
                          <div className="absolute top-1/2 left-2/3 -translate-y-1/2 w-8 h-8 bg-white border-2 border-primary rounded-full flex items-center justify-center shadow-md">
                            <Truck className="w-4 h-4 text-primary" />
                          </div>
                          <div className="absolute top-1/2 left-full -translate-x-full -translate-y-1/2 w-8 h-8 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center shadow-sm">
                            <CheckCircle2 className="w-4 h-4 text-slate-300" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          <span>Ordered</span>
                          <span>Processing</span>
                          <span>Shipped</span>
                          <span className="text-slate-300">Delivered</span>
                        </div>
                        <div className="flex items-center justify-end gap-3 mt-8">
                          <button className="text-xs font-bold text-slate-500 hover:text-slate-700">Help Center</button>
                          <button className="btn btn-primary px-6 py-2 text-xs font-bold">Track Live Location</button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-slate-900">Health Documents</h2>
                <button className="text-sm font-bold text-primary hover:underline">Manage All</button>
              </div>
              <div className="flex flex-col gap-4">
                {documents.map((doc, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border border-slate-50 rounded-2xl hover:bg-slate-50/50 transition-all cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 mb-0.5">{doc.name}</h4>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{doc.date} • {doc.doctor}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        doc.status === 'Verified' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'
                      }`}>{doc.status}</span>
                      <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-primary transition-all shadow-sm">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-10">
            {/* Live Tracking Card */}
            <div className="bg-primary rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <div className="inline-block px-2 py-0.5 bg-white/20 rounded text-[10px] font-bold uppercase tracking-widest mb-4">Live Tracking</div>
                <h3 className="text-xl font-bold mb-2">Your medicine is on the way!</h3>
                <p className="text-white/70 text-sm mb-8 leading-relaxed">Delivery partner Michael is 10 mins away from your location.</p>
                <button className="w-full btn bg-white text-primary hover:bg-slate-50 font-bold">
                  <Navigation className="w-4 h-4" /> Open Live Map
                </button>
              </div>
              <Map className="absolute top-1/2 right-0 w-48 h-48 text-white/10 -translate-y-1/2 translate-x-1/4 rotate-12 group-hover:scale-110 transition-transform duration-700" />
            </div>

            {/* Saved Locations */}
            <div className="card p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-slate-900">Saved Locations</h2>
                <button className="p-1.5 bg-slate-50 hover:bg-primary hover:text-white rounded-lg text-slate-400 transition-all">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-6">
                <div className="relative">
                  <div className="aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden mb-4 border border-slate-200">
                    <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=400" alt="Map" className="w-full h-full object-cover opacity-50 grayscale" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-lg animate-pulse">
                        <MapPin className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 px-2 py-1 bg-primary text-white text-[10px] font-bold rounded shadow-sm">Primary</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-bold text-slate-900">Home (Apartment 4B)</h4>
                      <button className="text-slate-400 hover:text-slate-600"><Settings className="w-4 h-4" /></button>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">123 Healthcare Blvd, Medical District<br />New York, NY 10001</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Fast Delivery Area</span>
                      <button className="text-[10px] font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-widest underline">Edit Details</button>
                    </div>
                  </div>
                </div>
                <button className="w-full py-3 border-2 border-dashed border-slate-100 rounded-2xl text-xs font-bold text-slate-400 hover:border-primary/20 hover:text-primary transition-all flex items-center justify-center gap-2">
                  <Plus className="w-4 h-4" /> Add Secondary Address
                </button>
              </div>
            </div>

            {/* Health Tip */}
            <div className="bg-green-50 rounded-3xl p-8 border border-green-100">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-green-600 shadow-sm flex-shrink-0">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Health Tip</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 font-medium">Remember to take your Vitamins with meals for better absorption. Your Vitamin C stock is running low!</p>
                  <button className="text-xs font-bold text-green-600 hover:underline">Refill Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;
