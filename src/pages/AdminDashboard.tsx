import { ShoppingCart, DollarSign, Truck, FileText, Clock, AlertTriangle, ChevronRight, MoreHorizontal, CheckCircle2, XCircle, BarChart3, Users, Package, FileCheck, TrendingUp, TrendingDown, Settings, LogOut } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AdminDashboard = () => {
  const data = [
    { name: 'Mon', sales: 4000 },
    { name: 'Tue', sales: 3500 },
    { name: 'Wed', sales: 4800 },
    { name: 'Thu', sales: 4200 },
    { name: 'Fri', sales: 5800 },
    { name: 'Sat', sales: 5200 },
    { name: 'Sun', sales: 4800 },
  ];

  const stats = [
    { label: 'Total Orders', value: '1,284', change: '+12.5%', icon: <ShoppingCart className="w-6 h-6 text-primary" />, trend: 'up' },
    { label: 'Total Revenue', value: '$48,920', change: '+8.2%', icon: <DollarSign className="w-6 h-6 text-slate-600" />, trend: 'up' },
    { label: 'Active Deliveries', value: '42', change: '-4%', icon: <Truck className="w-6 h-6 text-slate-600" />, trend: 'down' },
    { label: 'Pending Prescr.', value: '18', change: '+5', icon: <FileText className="w-6 h-6 text-slate-600" />, trend: 'up' },
    { label: 'Avg. Delivery', value: '24m 12s', change: '-2m', icon: <Clock className="w-6 h-6 text-green-600" />, trend: 'down' },
    { label: 'Stock Alerts', value: '4', change: '+2', icon: <AlertTriangle className="w-6 h-6 text-red-600" />, trend: 'up' },
  ];

  const lowStock = [
    { name: 'Amoxicillin 500mg', left: '12 units left', threshold: 50, color: 'text-red-500' },
    { name: 'Lisinopril 10mg', left: '45 units left', threshold: 100, color: 'text-slate-400' },
    { name: 'Metformin 850mg', left: '8 units left', threshold: 30, color: 'text-red-500' },
    { name: 'Atorvastatin 20mg', left: '62 units left', threshold: 80, color: 'text-slate-400' },
  ];

  const recentOrders = [
    { id: '#ORD-9283', customer: 'Sarah Miller', total: '$142.50', status: 'Delivered', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80' },
    { id: '#ORD-9284', customer: 'David Chen', total: '$38.20', status: 'Pending', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80' },
    { id: '#ORD-9285', customer: 'Emma Wilson', total: '$89.00', status: 'Shipped', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80' },
    { id: '#ORD-9286', customer: 'Robert Fox', total: '$210.15', status: 'Pending', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80' },
    { id: '#ORD-9287', customer: 'Lily Chang', total: '$55.40', status: 'Delivered', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80' },
  ];

  const prescriptions = [
    { patient: 'James Carter', doctor: 'Dr. Aris Thorne', time: '2 mins ago', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80' },
    { patient: 'Maria Garcia', doctor: 'Dr. Elena Vance', time: '15 mins ago', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80' },
    { patient: 'Kevin Space', doctor: 'Dr. Marcus Aurelius', time: '1 hour ago', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80' },
  ];

  return (
    <div className="flex bg-[#f8fafc] min-h-screen">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-100 p-8 hidden lg:flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          {[
            { icon: <BarChart3 className="w-5 h-5" />, label: 'Overview', active: true },
            { icon: <Package className="w-5 h-5" />, label: 'Orders', active: false },
            { icon: <ShoppingCart className="w-5 h-5" />, label: 'Products', active: false },
            { icon: <Users className="w-5 h-5" />, label: 'Users', active: false },
            { icon: <FileCheck className="w-5 h-5" />, label: 'Prescriptions', active: false },
            { icon: <TrendingUp className="w-5 h-5" />, label: 'Reports', active: false },
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
            <LogOut className="w-5 h-5 rotate-180" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Admin Dashboard</h1>
            <p className="text-slate-500 font-medium">Real-time overview of MediFast pharmacy operations.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="btn bg-white border border-slate-200 text-slate-700 px-6 font-bold shadow-sm hover:bg-slate-50">
              Export Report
            </button>
            <button className="btn btn-primary px-6 font-bold">
              Manage Orders
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 mb-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="card p-5 group hover:border-primary/20 transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className={`flex items-center gap-1 text-[10px] font-bold ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {stat.change}
                </div>
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 truncate">{stat.label}</p>
              <p className="text-xl font-bold text-slate-900">{stat.value}</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-2 tracking-tighter">This Month</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Sales Overview Chart */}
          <div className="lg:col-span-2 space-y-10">
            <div className="card p-8">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Sales Overview</h2>
                  <p className="text-xs text-slate-400 font-bold uppercase mt-1 tracking-widest">Daily revenue trends for the last 7 days</p>
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-100 rounded-lg text-[10px] font-bold text-slate-500 hover:bg-slate-50 transition-colors uppercase tracking-widest">
                  Last 7 Days <ChevronRight className="w-3 h-3 rotate-90" />
                </button>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
                      tickFormatter={(value) => `$${value/1000}k`}
                    />
                    <Tooltip 
                      contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                      itemStyle={{ fontWeight: 'bold', color: '#3b82f6' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="sales" 
                      stroke="#3b82f6" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorSales)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Orders Table */}
            <div className="card p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Recent Orders</h2>
                  <p className="text-xs text-slate-400 font-bold uppercase mt-1 tracking-widest">Managing the latest customer transactions</p>
                </div>
                <button className="text-xs font-bold text-primary hover:underline uppercase tracking-widest">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b border-slate-50">
                      <th className="pb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Order ID</th>
                      <th className="pb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Customer</th>
                      <th className="pb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total</th>
                      <th className="pb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                      <th className="pb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="group hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 text-xs font-bold text-slate-900">{order.id}</td>
                        <td className="py-4">
                          <div className="flex items-center gap-3">
                            <img src={order.img} alt={order.customer} className="w-8 h-8 rounded-full border border-slate-100" />
                            <span className="text-xs font-bold text-slate-700">{order.customer}</span>
                          </div>
                        </td>
                        <td className="py-4 text-xs font-bold text-slate-900">{order.total}</td>
                        <td className="py-4">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                            order.status === 'Delivered' ? 'bg-green-100 text-green-600' : 
                            order.status === 'Pending' ? 'bg-slate-100 text-slate-400' : 'bg-blue-100 text-blue-600'
                          }`}>{order.status}</span>
                        </td>
                        <td className="py-4 text-right">
                          <button className="p-1.5 hover:bg-white rounded-lg text-slate-400 hover:text-slate-600 transition-all shadow-sm opacity-0 group-hover:opacity-100">
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-10">
            {/* Low Stock Alerts */}
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-8">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Low Stock Alerts</h2>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-widest leading-tight">Critical inventory items needing attention</p>
                </div>
              </div>
              <div className="space-y-6">
                {lowStock.map((item, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                      <span className={`text-[10px] font-bold ${item.color} uppercase tracking-widest`}>{item.left}</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${item.threshold < 50 ? 'bg-red-500' : 'bg-slate-400'} rounded-full`} style={{ width: `${item.threshold}%` }}></div>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                      <span className="text-slate-400">Threshold: {item.threshold}</span>
                      <button className="text-primary hover:underline">Restock Now <ChevronRight className="w-3 h-3 inline" /></button>
                    </div>
                  </div>
                ))}
                <button className="w-full py-4 border-2 border-slate-50 rounded-2xl text-xs font-bold text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-all uppercase tracking-widest mt-4">
                  View All Inventory
                </button>
              </div>
            </div>

            {/* Prescription Queue */}
            <div className="card p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Prescription Queue</h2>
                  <p className="text-xs text-slate-400 font-bold uppercase mt-1 tracking-widest">Pending verification tasks</p>
                </div>
                <span className="px-2 py-1 bg-red-100 text-red-600 text-[10px] font-bold rounded uppercase tracking-widest">3 Urgent</span>
              </div>
              <div className="space-y-6">
                {prescriptions.map((rx, idx) => (
                  <div key={idx} className="flex flex-col gap-4 p-4 border border-slate-50 rounded-2xl hover:bg-slate-50/50 transition-all group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src={rx.img} alt={rx.patient} className="w-10 h-10 rounded-xl border border-slate-100 shadow-sm" />
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">{rx.patient}</h4>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{rx.doctor}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5 flex items-center justify-end gap-1">
                          <Clock className="w-3 h-3" /> {rx.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="flex-1 btn btn-primary py-2 text-xs font-bold">Review</button>
                      <button className="p-2 border border-slate-100 rounded-xl text-slate-400 hover:text-green-600 hover:bg-white hover:shadow-sm transition-all">
                        <CheckCircle2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 border border-slate-100 rounded-xl text-slate-400 hover:text-red-500 hover:bg-white hover:shadow-sm transition-all">
                        <XCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
