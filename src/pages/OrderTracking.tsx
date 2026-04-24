import { Clock, MapPin, Truck, CheckCircle2, Package, Phone, MessageSquare, ChevronRight, ShieldCheck, Map, Navigation, Star, HeartPulse, HelpCircle, LayoutDashboard, Plus, Minus } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const OrderTracking = () => {
  const { id } = useParams();

  const order = {
    id: '#MF-882910',
    status: 'In Transit',
    eta: '12:15 PM (in 15 mins)',
    items: '4 Items',
    deliveryType: 'Home Delivery',
    rider: {
      name: 'Daniel Rodriguez',
      vehicle: 'White Honda Activa (MF-442)',
      rating: 4.9,
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    timeline: [
      { time: '11:45 AM', status: 'Out for Delivery', desc: 'Daniel has picked up your order and is heading your way.', active: true },
      { time: '10:15 AM', status: 'Order Packed', desc: 'Your medicines have been verified by our pharmacist and packed securely.', active: false },
      { time: '09:50 AM', status: 'Order Verified', desc: 'Prescription MF-772 checked and approved by Dr. Sarah Miller.', active: false },
      { time: '09:30 AM', status: 'Order Placed', desc: 'We have received your order and payment.', active: false },
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
        <Link to="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/dashboard" className="hover:text-primary">My Dashboard</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="font-bold text-slate-800 tracking-tight">Order {order.id}</span>
      </div>

      {/* Order Header */}
      <div className="card p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-card transition-all group">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <Package className="w-8 h-8" />
          </div>
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-2xl font-bold text-slate-900">Order {order.id}</h1>
              <span className="px-3 py-1 bg-blue-100 text-primary text-[10px] font-bold rounded uppercase tracking-[0.1em]">{order.status}</span>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-slate-500 uppercase tracking-widest">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> ETA: {order.eta}</span>
              <span className="flex items-center gap-2"><Package className="w-4 h-4 text-slate-400" /> {order.items} • {order.deliveryType}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 btn bg-white border-2 border-slate-100 text-slate-700 hover:border-slate-200 px-8 py-3 text-sm font-bold">
            <HelpCircle className="w-4 h-4" /> Help Center
          </button>
          <button className="flex-1 btn btn-primary px-8 py-3 text-sm font-bold">
            Order Details <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Delivery Journey */}
      <div className="card p-10 mb-10">
        <div className="text-center mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Delivery Journey</h2>
          <p className="text-sm text-slate-500 font-medium">Your order is being handled with clinical care.</p>
        </div>
        
        <div className="relative h-1 bg-slate-100 rounded-full mb-12 max-w-4xl mx-auto">
          {/* Progress fill */}
          <div className="absolute top-0 left-0 w-2/3 h-full bg-primary rounded-full"></div>
          
          <div className="absolute top-1/2 left-0 -translate-y-1/2 flex flex-col items-center gap-4">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
              <Package className="w-5 h-5" />
            </div>
            <div className="text-center">
              <p className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-1">Ordered</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">09:30 AM</p>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 flex flex-col items-center gap-4">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-center">
              <p className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-1">Packed</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">10:15 AM</p>
            </div>
          </div>

          <div className="absolute top-1/2 left-2/3 -translate-y-1/2 flex flex-col items-center gap-4">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
              <Truck className="w-5 h-5" />
            </div>
            <div className="text-center">
              <p className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-1">Out for Delivery</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">11:45 AM</p>
            </div>
          </div>

          <div className="absolute top-1/2 left-full -translate-x-full -translate-y-1/2 flex flex-col items-center gap-4">
            <div className="w-10 h-10 bg-white border-2 border-slate-200 text-slate-300 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="text-center">
              <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1">Delivered</p>
              <p className="text-[10px] text-slate-200 font-bold uppercase tracking-widest">Expected 12:15 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Live Map Section */}
        <div className="lg:col-span-2 space-y-10">
          <div className="card p-0 overflow-hidden group border-slate-100">
            <div className="aspect-video relative bg-slate-50">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" alt="Map" className="w-full h-full object-cover grayscale opacity-40" />
              
              {/* Map UI Elements */}
              <div className="absolute inset-0 p-8 pointer-events-none">
                {/* Pharmacy Location */}
                <div className="absolute top-1/3 left-1/4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-white px-3 py-1 rounded-lg shadow-soft text-[10px] font-bold uppercase tracking-widest border border-slate-100">Pharmacy</div>
                    <div className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-primary shadow-soft animate-bounce">
                      <LayoutDashboard className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Rider Location */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-white px-3 py-1 rounded-lg shadow-soft text-[10px] font-bold uppercase tracking-widest border border-slate-100 flex items-center gap-2">
                      <Truck className="w-3 h-3 text-primary" /> Rider is 1.2 miles away
                    </div>
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-primary/20 animate-pulse">
                      <Navigation className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Destination */}
                <div className="absolute bottom-1/4 right-1/4">
                  <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-red-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                {/* Dashed route line (Visual only) */}
                <div className="absolute top-1/2 left-1/4 right-1/4 h-px border-t-2 border-dashed border-primary/30 -translate-y-6"></div>
              </div>

              {/* Map Controls */}
              <div className="absolute bottom-8 right-8 flex flex-col gap-2">
                <button className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary transition-colors shadow-soft pointer-events-auto">
                  <Plus className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary transition-colors shadow-soft pointer-events-auto">
                  <Minus className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary transition-colors shadow-soft pointer-events-auto mt-4">
                  <Navigation className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white border-t border-slate-50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Quality Guarantee</h4>
                  <p className="text-xs text-slate-500 font-medium">Medicines are temperature controlled</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Contactless Delivery</h4>
                  <p className="text-xs text-slate-500 font-medium">Standard for all medical supplies</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rider Info & Timeline */}
        <div className="space-y-10">
          {/* Rider Card */}
          <div className="card p-8 group">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-bold text-slate-900">Your Delivery Hero</h2>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-bold text-slate-900 uppercase tracking-widest">
                <Star className="w-3 h-3 fill-accent text-accent" /> {order.rider.rating} Rating
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-6 mb-8">
              <div className="relative">
                <img src={order.rider.img} alt={order.rider.name} className="w-24 h-24 rounded-full border-4 border-white shadow-xl group-hover:scale-105 transition-transform" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{order.rider.name}</h3>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                  <Truck className="w-4 h-4" /> {order.rider.vehicle}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="btn btn-primary py-3 font-bold shadow-lg shadow-primary/20">
                <Phone className="w-4 h-4" /> Call
              </button>
              <button className="btn bg-white border-2 border-slate-100 text-slate-700 hover:border-slate-200 py-3 font-bold">
                <MessageSquare className="w-4 h-4" /> Message
              </button>
            </div>
          </div>

          {/* Detailed Timeline */}
          <div className="card p-8">
            <h2 className="text-lg font-bold text-slate-900 mb-8">Delivery Timeline</h2>
            <div className="space-y-8 relative">
              {/* Connector line */}
              <div className="absolute top-4 bottom-4 left-2 w-px bg-slate-100"></div>
              
              {order.timeline.map((item, idx) => (
                <div key={idx} className="flex gap-6 relative">
                  <div className={`w-4 h-4 rounded-full border-4 border-white shadow-sm mt-1 flex-shrink-0 z-10 transition-all ${item.active ? 'bg-primary scale-125' : 'bg-slate-200'}`}></div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className={`text-sm font-bold uppercase tracking-widest ${item.active ? 'text-primary' : 'text-slate-400'}`}>{item.status}</h4>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{item.time}</span>
                    </div>
                    <p className={`text-xs leading-relaxed font-medium ${item.active ? 'text-slate-600' : 'text-slate-400'}`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full py-4 border-2 border-dashed border-slate-50 rounded-2xl text-[10px] font-bold text-slate-400 hover:border-primary/20 hover:text-primary transition-all uppercase tracking-[0.2em] mt-8">
              View Full History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
