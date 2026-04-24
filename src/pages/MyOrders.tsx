import { ShoppingBag, ChevronRight, Search, Filter, Clock, CheckCircle2, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const MyOrders = () => {
  const orders = [
    { id: 'ORD-8821', status: 'In Progress', items: 'Paracetamol 500mg, Vitamin C', date: 'Oct 24, 2023', amount: '$42.50', type: 'Medicine' },
    { id: 'ORD-8710', status: 'Delivered', items: 'Insulin Glargine, Syringes', date: 'Oct 15, 2023', amount: '$128.00', type: 'Chronic' },
    { id: 'ORD-8655', status: 'Delivered', items: 'Cough Syrup (Benadryl)', date: 'Sep 30, 2023', amount: '$15.20', type: 'OTC' },
    { id: 'ORD-8501', status: 'Cancelled', items: 'Blood Pressure Monitor', date: 'Sep 12, 2023', amount: '$55.00', type: 'Equipment' },
    { id: 'ORD-8422', status: 'Delivered', items: 'Omega 3, Multivitamins', date: 'Aug 28, 2023', amount: '$35.00', type: 'Supplements' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">My Orders</h1>
          <p className="text-slate-500 font-medium">View and track all your medical orders.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/catalog" className="btn btn-primary px-6 font-bold">
            <ShoppingBag className="w-4 h-4" /> Order New Medicine
          </Link>
        </div>
      </div>

      <div className="card p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by Order ID or Medicine..." 
              className="input pl-12 py-3 bg-slate-50 border-none w-full"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl text-slate-600 font-bold text-sm hover:bg-slate-50 transition-all">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {orders.map((order) => (
          <div key={order.id} className="card p-6 md:p-8 hover:border-primary/20 transition-all group">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-bold text-slate-900">{order.id}</h4>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      order.status === 'In Progress' ? 'bg-blue-100 text-blue-600' : 
                      order.status === 'Delivered' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 font-medium mb-1">{order.items}</p>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest">{order.type}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 text-right md:text-left">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Order Date</p>
                  <p className="text-sm font-bold text-slate-900">{order.date}</p>
                </div>
                <div className="hidden md:block">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Payment</p>
                  <p className="text-sm font-bold text-slate-900">Credit Card</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total Amount</p>
                  <p className="text-lg font-bold text-slate-900">{order.amount}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link 
                  to={`/track/${order.id}`}
                  className="flex-1 md:flex-none btn bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-6 py-2.5 text-sm font-bold"
                >
                  Track Order
                </Link>
                <button className="p-2.5 hover:bg-slate-50 rounded-xl text-slate-400 transition-colors border border-transparent hover:border-slate-100">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {order.status === 'In Progress' && (
              <div className="mt-8 pt-8 border-t border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-bold ${
                        i === 1 ? 'bg-primary' : i === 2 ? 'bg-primary/60' : 'bg-slate-200'
                      }`}>
                        {i === 1 ? <Clock className="w-4 h-4" /> : i === 2 ? <CheckCircle2 className="w-4 h-4" /> : i}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Processing at Central Warehouse</p>
                </div>
                <p className="text-xs font-bold text-primary">Estimated Delivery: Oct 26, 2023</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
