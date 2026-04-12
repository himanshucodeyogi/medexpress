import { LayoutDashboard, Truck, DollarSign, Calendar, User, LogOut, ChevronRight, Navigation, Clock, CheckCircle2, TrendingUp, Map, MoreHorizontal, Bell, Search, ExternalLink, Package, MapPin } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const DeliveryDashboard = () => {
  const earningsData = [
    { name: 'Mon', amount: 120 },
    { name: 'Tue', amount: 145 },
    { name: 'Wed', amount: 110 },
    { name: 'Thu', amount: 165 },
    { name: 'Fri', amount: 210 },
    { name: 'Sat', amount: 185 },
    { name: 'Sun', amount: 130 },
  ];

  const stats = [
    { label: 'Active Tasks', value: '03', change: '+1 vs yesterday', icon: <Navigation className="w-6 h-6 text-primary" />, bg: 'bg-blue-50' },
    { label: "Today's Earnings", value: '$142.50', change: '+12% vs yesterday', icon: <DollarSign className="w-6 h-6 text-green-600" />, bg: 'bg-green-50' },
    { label: 'Completed Today', value: '12', change: '+2 vs yesterday', icon: <CheckCircle2 className="w-6 h-6 text-accent" />, bg: 'bg-orange-50' },
    { label: 'Avg. Delivery Time', value: '18m', change: '-2m vs yesterday', icon: <Clock className="w-6 h-6 text-blue-600" />, bg: 'bg-indigo-50' },
  ];

  const deliveries = [
    { id: '#MF-9021', status: 'Out for Delivery', pickup: 'MediCare Plus Central', pickupAddr: '122 Healthcare Ave, Downtown', dropoff: 'Sarah Jenkins', dropoffAddr: '45 Bluebell Lane, East Side', items: 'Amoxicillin (500mg), Vitamin C 1000mg' },
    { id: '#MF-8843', status: 'Picked Up', pickup: 'City Pharma Express', pickupAddr: '88 Commerce St, West End', dropoff: 'Robert Wilson', dropoffAddr: '12 Highland Terrace, Apt 4B', items: 'Insulin Glargine, Syringes (10pk)' },
    { id: '#MF-9104', status: 'New Assignment', pickup: 'Family Health Drugs', pickupAddr: '303 Oak St, North Park', dropoff: 'Elena Rodriguez', dropoffAddr: '782 Sunset Blvd, North Park', items: 'Paracetamol Syrup (Children), Thermometer' },
  ];

  return (
    <div className="flex bg-[#f8fafc] min-h-screen">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-100 p-8 hidden lg:flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          {[
            { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', active: true },
            { icon: <Truck className="w-5 h-5" />, label: 'Active Deliveries', active: false },
            { icon: <DollarSign className="w-5 h-5" />, label: 'Earnings', active: false },
            { icon: <Calendar className="w-5 h-5" />, label: 'Schedule', active: false },
            { icon: <User className="w-5 h-5" />, label: 'Profile', active: false },
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
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Delivery Dashboard</h1>
            <p className="text-slate-500 font-medium">Welcome back, Alex. You have 3 active tasks today.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 px-4 py-2 bg-blue-50/50 rounded-xl border border-blue-100">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">Shift: 08:00 AM - 04:00 PM</span>
            </div>
            <button className="btn btn-primary px-8 font-bold">Go Offline</button>
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
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  <p className={`text-[10px] font-bold uppercase tracking-tighter ${stat.change.includes('+') ? 'text-green-500' : 'text-blue-500'}`}>{stat.change}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Active Deliveries List */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <Truck className="w-6 h-6 text-primary" /> Active Deliveries
              </h2>
              <button className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
                View All History <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {deliveries.map((delivery) => (
                <div key={delivery.id} className="card p-8 hover:shadow-card transition-all group">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <h4 className="text-lg font-bold text-slate-900">{delivery.id}</h4>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        delivery.status === 'Out for Delivery' ? 'bg-green-100 text-green-600' : 
                        delivery.status === 'Picked Up' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
                      }`}>{delivery.status}</span>
                    </div>
                    <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative">
                    {/* Connector line */}
                    <div className="hidden md:block absolute top-1/2 left-1/2 w-px h-12 bg-slate-100 -translate-y-1/2"></div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                        <LayoutDashboard className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Pickup</p>
                        <h5 className="text-sm font-bold text-slate-900 mb-0.5">{delivery.pickup}</h5>
                        <p className="text-xs text-slate-500 font-medium">{delivery.pickupAddr}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Dropoff</p>
                        <h5 className="text-sm font-bold text-slate-900 mb-0.5">{delivery.dropoff}</h5>
                        <p className="text-xs text-slate-500 font-medium">{delivery.dropoffAddr}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                      <Package className="w-5 h-5 text-slate-400" />
                      <p className="text-xs text-slate-500 font-bold">{delivery.items}</p>
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-auto">
                      <button className="flex-1 btn bg-white border-2 border-slate-100 text-slate-700 px-8 text-sm py-2.5">
                        <Navigation className="w-4 h-4" /> Navigate
                      </button>
                      {delivery.status === 'Picked Up' && (
                        <button className="flex-1 btn btn-primary px-8 text-sm py-2.5">Out for Delivery</button>
                      )}
                      {delivery.status === 'New Assignment' && (
                        <button className="flex-1 btn btn-primary px-8 text-sm py-2.5">Mark Picked</button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-10">
            {/* Live Route Optimization */}
            <div className="card p-0 overflow-hidden group">
              <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Map className="w-5 h-5 text-primary" /> Live Route Optimization
                </h2>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </div>
              <div className="aspect-[4/5] relative bg-slate-100">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600" alt="Map" className="w-full h-full object-cover grayscale opacity-60" />
                {/* Map Pins Overlay */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform">
                  <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform delay-75">
                  <div className="w-6 h-6 bg-orange-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="absolute top-2/3 left-1/3 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform delay-150">
                  <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Next Stop Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white rounded-2xl shadow-xl border border-slate-100 animate-in slide-in-from-bottom duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-primary">
                        <Navigation className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Next Stop</p>
                        <h5 className="text-sm font-bold text-slate-900">45 Bluebell Lane</h5>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Est. Arrival</p>
                      <p className="text-sm font-bold text-primary">12:14 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Earnings Chart */}
            <div className="card p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Weekly Earnings</h2>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Performance for last 7 days</p>
                </div>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-bold text-slate-600 hover:bg-slate-100 transition-all uppercase tracking-widest">
                  <TrendingUp className="w-3 h-3" /> Withdraw
                </button>
              </div>
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={earningsData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 700 }}
                      dy={10}
                    />
                    <YAxis hide />
                    <Tooltip 
                      cursor={{ fill: '#f8fafc' }}
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                      itemStyle={{ fontWeight: 'bold', color: '#3b82f6' }}
                    />
                    <Bar dataKey="amount" radius={[4, 4, 4, 4]} barSize={20}>
                      {earningsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 4 ? '#3b82f6' : '#bfdbfe'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-50 text-center">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Pending</p>
                  <p className="text-sm font-bold text-slate-900">$24.00</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Tips Earned</p>
                  <p className="text-sm font-bold text-slate-900">$45.50</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Deliveries</p>
                  <p className="text-sm font-bold text-slate-900">64</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DeliveryDashboard;
