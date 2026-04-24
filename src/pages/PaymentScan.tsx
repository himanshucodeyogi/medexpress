import { ChevronLeft, Smartphone, QrCode, ShieldCheck, CheckCircle2, Clock, Info, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PaymentScan = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Top Progress Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Order ID: <span className="text-slate-900">MEX-2024-8842</span></p>
            <div className="h-4 w-px bg-slate-200"></div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">3 items in your prescription cart</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Amount to Pay:</p>
            <p className="text-sm font-black text-primary">$54.08</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-black text-slate-900 mb-4">Complete Your Payment</h1>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Please scan the QR code to finish your order. Once the payment is confirmed, your medicine delivery will be initiated immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Scan Card */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card p-10 bg-white border border-slate-200 rounded-[32px] shadow-xl shadow-slate-200/50 text-center">
              <h2 className="text-xl font-black text-slate-900 mb-2">Scan to Securely Pay</h2>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">Use any UPI or Banking app to scan the QR code below</p>
              
              <div className="relative inline-block p-8 bg-slate-50 rounded-[40px] border border-slate-100 shadow-inner mb-10">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="QR Scan Illustration" 
                    className="w-64 h-64 object-cover rounded-3xl opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 bg-white rounded-2xl shadow-2xl">
                      <QrCode className="w-24 h-24 text-slate-900" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                <div className="space-y-2">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mx-auto text-blue-500">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Step 1</p>
                  <p className="text-[10px] font-black text-slate-600">Open your preferred payment app</p>
                </div>
                <div className="space-y-2">
                  <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-500">
                    <QrCode className="w-5 h-5" />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Step 2</p>
                  <p className="text-[10px] font-black text-slate-600">Scan the QR and verify amount</p>
                </div>
                <div className="space-y-2">
                  <div className="w-10 h-10 bg-cyan-50 rounded-full flex items-center justify-center mx-auto text-cyan-500">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Step 3</p>
                  <p className="text-[10px] font-black text-slate-600">Complete payment and wait</p>
                </div>
              </div>

              <div className="mt-12 p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center gap-3">
                <Info className="w-4 h-4 text-slate-400" />
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">This payment link will expire in {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')} minutes for your security.</p>
              </div>
            </div>

            <div className="card p-6 bg-white border border-slate-100 rounded-2xl flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-900">Secure 256-bit Encryption</h3>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">Your transaction is protected by bank-grade security protocols.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 grayscale opacity-40">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
              </div>
            </div>
          </div>

          {/* Sidebar Status Card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="card p-8 bg-white border border-slate-200 rounded-[32px] shadow-lg shadow-slate-200/50 text-center">
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 rounded-full border-4 border-slate-100 flex items-center justify-center">
                  <span className="text-2xl font-black text-slate-900">{formatTime(timeLeft)}</span>
                </div>
                <Clock className="absolute -top-1 -right-1 w-6 h-6 text-primary bg-white rounded-full p-1 border-2 border-slate-100" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">Verification Timer</h3>
              <p className="text-xs text-slate-400 font-medium mb-8">Awaiting payment detection...</p>
              
              <button className="w-full btn bg-slate-50 text-slate-400 py-4 font-bold border border-slate-100 mb-3 cursor-not-allowed">Waiting for Payment</button>
              <button 
                onClick={() => navigate('/order-success')}
                className="w-full btn btn-primary py-4 font-bold shadow-lg shadow-primary/20"
              >
                I Have Paid
              </button>
            </div>

            <div className="card p-8 bg-white border border-slate-100 rounded-3xl">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Order Recap</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-black text-slate-900">Amoxicillin 500mg</p>
                    <p className="text-[10px] font-bold text-slate-400">Qty: 2</p>
                  </div>
                  <p className="text-sm font-black text-slate-900">$24.00</p>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-black text-slate-900">Paracetamol 1000mg</p>
                    <p className="text-[10px] font-bold text-slate-400">Qty: 1</p>
                  </div>
                  <p className="text-sm font-black text-slate-900">$12.50</p>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-black text-slate-900">Surgical Masks (Box)</p>
                    <p className="text-[10px] font-bold text-slate-400">Qty: 1</p>
                  </div>
                  <p className="text-sm font-black text-slate-900">$15.00</p>
                </div>
                <div className="pt-4 border-t border-slate-50 space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-400">
                    <span>Subtotal</span>
                    <span>$51.50</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold text-slate-400">
                    <span>Pharmacy Tax</span>
                    <span>$2.58</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold text-slate-400">
                    <span>Delivery Fee</span>
                    <span className="text-emerald-500">Free</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-sm font-black text-slate-900 uppercase">Total Amount</span>
                    <span className="text-sm font-black text-primary">$54.08</span>
                  </div>
                </div>
              </div>

              <Link to="/cart" className="flex items-center justify-center gap-2 mt-8 text-[10px] font-black text-slate-400 hover:text-primary transition-colors uppercase tracking-widest">
                <ArrowLeft className="w-3 h-3" /> Cancel and return to cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentScan;
