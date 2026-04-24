import { CheckCircle2, Package, Truck, Calendar, ArrowRight, ShoppingBag, Download, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  const orderId = "ORD-" + Math.floor(1000 + Math.random() * 9000);
  const deliveryDate = "Oct 28, 2023";

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="card p-8 md:p-12 text-center relative overflow-hidden">
          {/* Confetti-like decoration */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-green-500/5 rounded-full -ml-16 -mt-16 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mb-16 blur-2xl"></div>

          <div className="relative z-10">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-8 shadow-lg shadow-green-100/50">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Order Confirmed!</h1>
            <p className="text-lg text-slate-500 font-medium mb-10">
              Your order <span className="text-slate-900 font-bold">#{orderId}</span> has been placed successfully. <br className="hidden md:block" />
              We've sent a confirmation email to <span className="text-slate-900 font-bold">user@example.com</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 text-left">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Estimated Delivery</p>
                    <p className="text-sm font-bold text-slate-900">{deliveryDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-secondary shadow-sm">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Delivery Method</p>
                    <p className="text-sm font-bold text-slate-900">Standard Delivery (Express)</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 text-left">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-orange-500 shadow-sm">
                    <Package className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Order Status</p>
                    <p className="text-sm font-bold text-slate-900">Processing Payment</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-500 shadow-sm">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Items Count</p>
                    <p className="text-sm font-bold text-slate-900">4 Items ordered</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to={`/track/${orderId}`}
                className="btn btn-primary w-full sm:w-auto px-10 py-4 text-lg font-bold flex items-center justify-center gap-2"
              >
                Track My Order <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/catalog"
                className="btn bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 w-full sm:w-auto px-10 py-4 text-lg font-bold"
              >
                Continue Shopping
              </Link>
            </div>

            <div className="mt-12 pt-12 border-t border-slate-100 flex items-center justify-center gap-8">
              <button className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-primary transition-colors">
                <Download className="w-4 h-4" /> Download Receipt
              </button>
              <button className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-primary transition-colors">
                <Share2 className="w-4 h-4" /> Share Order
              </button>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-8 text-center">
          <p className="text-slate-500 font-medium">
            Need help with your order? <Link to="/contact" className="text-primary font-bold hover:underline">Contact Support</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
