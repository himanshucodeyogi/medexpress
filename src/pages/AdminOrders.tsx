import { Package, Search, Filter, ChevronRight, MoreHorizontal, CheckCircle2, XCircle, Clock, Truck, Eye, Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminOrders = () => {
  const orders = [
    { id: '#ORD-9283', customer: 'Sarah Miller', email: 'sarah.m@example.com', items: 3, total: '$142.50', status: 'Delivered', date: 'Oct 24, 2023', type: 'Prescription' },
    { id: '#ORD-9284', customer: 'David Chen', email: 'd.chen@example.com', items: 1, total: '$38.20', status: 'Pending', date: 'Oct 24, 2023', type: 'OTC' },
    { id: '#ORD-9285', customer: 'Emma Wilson', email: 'emma.w@example.com', items: 5, total: '$89.00', status: 'Shipped', date: 'Oct 23, 2023', type: 'Prescription' },
    { id: '#ORD-9286', customer: 'Robert Fox', email: 'robert.f@example.com', items: 2, total: '$210.15', status: 'Processing', date: 'Oct 23, 2023', type: 'Chronic' },
    { id: '#ORD-9287', customer: 'Lily Chang', email: 'lily.c@example.com', items: 1, total: '$55.40', status: 'Delivered', date: 'Oct 22, 2023', type: 'OTC' },
    { id: '#ORD-9288', customer: 'James Brown', email: 'james.b@example.com', items: 4, total: '$120.00', status: 'Cancelled', date: 'Oct 22, 2023', type: 'Prescription' },
  ];

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      <Link to="/admin" className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-primary transition-colors mb-6 group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Dashboard
      </Link>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Order Management</h1>
          <p className="text-slate-500 font-medium">Manage and process all customer orders.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn bg-white border border-slate-200 text-slate-700 px-6 font-bold shadow-sm hover:bg-slate-50">
            <Download className="w-4 h-4" /> Export CSV
          </button>
          <button className="btn btn-primary px-6 font-bold">
            <Package className="w-4 h-4" /> Create Manual Order
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="card p-4 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search orders by ID, customer name or email..." 
              className="input pl-12 py-3 bg-slate-50 border-none w-full"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <select className="bg-slate-50 border-none rounded-2xl px-6 py-3 text-sm font-bold text-slate-600 focus:ring-2 focus:ring-primary/20 outline-none">
              <option>All Status</option>
              <option>Pending</option>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>
            <select className="bg-slate-50 border-none rounded-2xl px-6 py-3 text-sm font-bold text-slate-600 focus:ring-2 focus:ring-primary/20 outline-none">
              <option>All Types</option>
              <option>Prescription</option>
              <option>OTC</option>
              <option>Chronic</option>
            </select>
            <button className="btn bg-white border border-slate-200 text-slate-600 px-6 font-bold text-sm">
              <Filter className="w-4 h-4" /> More Filters
            </button>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Order ID</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Customer</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Type</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Total</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-5">
                    <span className="font-bold text-slate-900 group-hover:text-primary transition-colors">{order.id}</span>
                  </td>
                  <td className="px-8 py-5">
                    <div>
                      <p className="font-bold text-slate-900">{order.customer}</p>
                      <p className="text-xs text-slate-400 font-medium">{order.email}</p>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <p className="text-sm font-bold text-slate-600">{order.date}</p>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                      order.type === 'Prescription' ? 'bg-purple-100 text-purple-600' :
                      order.type === 'Chronic' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {order.type}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-sm font-bold text-slate-900">
                    {order.total}
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${
                        order.status === 'Pending' ? 'bg-amber-400' :
                        order.status === 'Processing' ? 'bg-blue-400' :
                        order.status === 'Shipped' ? 'bg-indigo-400' :
                        order.status === 'Delivered' ? 'bg-green-400' : 'bg-red-400'
                      }`}></span>
                      <span className="text-sm font-bold text-slate-700">{order.status}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-primary transition-all shadow-sm">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-slate-600 transition-all shadow-sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-8 py-6 border-t border-slate-50 flex items-center justify-between">
          <p className="text-sm font-bold text-slate-400">Showing 1 to 6 of 142 orders</p>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 border border-slate-100 rounded-xl text-sm font-bold text-slate-400 cursor-not-allowed">Previous</button>
            <button className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20">1</button>
            <button className="px-4 py-2 border border-slate-100 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50">2</button>
            <button className="px-4 py-2 border border-slate-100 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50">3</button>
            <button className="px-4 py-2 border border-slate-100 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
