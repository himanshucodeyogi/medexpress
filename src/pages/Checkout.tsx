import { ChevronLeft, MapPin, CreditCard, ShieldCheck, CheckCircle2, Truck, Calendar, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const steps = [
    { id: 1, label: 'Shipping' },
    { id: 2, label: 'Payment' },
    { id: 3, label: 'Review' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="flex items-center gap-2 mb-8">
          <Link to="/cart" className="p-2 hover:bg-white rounded-full transition-colors text-slate-400 hover:text-primary">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">Checkout</h1>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-center mb-12 max-w-2xl mx-auto">
          {steps.map((s, idx) => (
            <div key={s.id} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center relative">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all border-2 ${step >= s.id ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' : 'bg-white border-slate-200 text-slate-400'}`}>
                  {step > s.id ? <CheckCircle2 className="w-6 h-6" /> : s.id}
                </div>
                <span className={`absolute -bottom-7 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap ${step >= s.id ? 'text-primary' : 'text-slate-400'}`}>
                  {s.label}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div className={`h-1 flex-1 mx-4 rounded-full transition-all ${step > s.id ? 'bg-primary' : 'bg-slate-200'}`}></div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
          <div className="lg:col-span-2 space-y-8">
            {step === 1 && (
              <div className="card p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" /> Shipping Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">First Name</label>
                    <input type="text" placeholder="John" className="input bg-slate-50 border-slate-100" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Last Name</label>
                    <input type="text" placeholder="Doe" className="input bg-slate-50 border-slate-100" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Street Address</label>
                    <input type="text" placeholder="123 Medical Way, Health District" className="input bg-slate-50 border-slate-100" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">City</label>
                    <input type="text" placeholder="New York" className="input bg-slate-50 border-slate-100" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Postal Code</label>
                    <input type="text" placeholder="10001" className="input bg-slate-50 border-slate-100" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="input bg-slate-50 border-slate-100" />
                  </div>
                </div>
                <button 
                  onClick={() => setStep(2)}
                  className="btn btn-primary w-full py-4 mt-10 text-lg group"
                >
                  Continue to Payment <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-2" />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="card p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <CreditCard className="w-6 h-6 text-primary" /> Payment Method
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <button 
                    onClick={() => setPaymentMethod('card')}
                    className={`p-6 rounded-2xl border-2 text-left transition-all ${paymentMethod === 'card' ? 'border-primary bg-primary/5 shadow-md' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <CreditCard className={`w-6 h-6 ${paymentMethod === 'card' ? 'text-primary' : 'text-slate-400'}`} />
                      <div className={`w-4 h-4 rounded-full border-2 ${paymentMethod === 'card' ? 'border-primary bg-primary' : 'border-slate-200'}`}></div>
                    </div>
                    <p className="font-bold text-slate-900">Credit / Debit Card</p>
                    <p className="text-xs text-slate-500 mt-1">Visa, Mastercard, AMEX</p>
                  </button>
                  <button 
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-6 rounded-2xl border-2 text-left transition-all ${paymentMethod === 'cod' ? 'border-primary bg-primary/5 shadow-md' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <Truck className={`w-6 h-6 ${paymentMethod === 'cod' ? 'text-primary' : 'text-slate-400'}`} />
                      <div className={`w-4 h-4 rounded-full border-2 ${paymentMethod === 'cod' ? 'border-primary bg-primary' : 'border-slate-200'}`}></div>
                    </div>
                    <p className="font-bold text-slate-900">Cash on Delivery</p>
                    <p className="text-xs text-slate-500 mt-1">Pay when you receive</p>
                  </button>
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Card Number</label>
                      <input type="text" placeholder="0000 0000 0000 0000" className="input bg-slate-50 border-slate-100" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Expiry Date</label>
                        <input type="text" placeholder="MM/YY" className="input bg-slate-50 border-slate-100" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">CVV</label>
                        <input type="text" placeholder="123" className="input bg-slate-50 border-slate-100" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-4 mt-10">
                  <button onClick={() => setStep(1)} className="btn bg-white border-2 border-slate-100 text-slate-600 px-8">Back</button>
                  <button 
                    onClick={() => setStep(3)}
                    className="btn btn-primary flex-1 py-4 text-lg group"
                  >
                    Review Order <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-2" />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="card p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-primary" /> Review & Confirm
                </h2>
                
                <div className="space-y-6">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Shipping To</h3>
                      <button onClick={() => setStep(1)} className="text-xs font-bold text-primary hover:underline">Edit</button>
                    </div>
                    <p className="text-slate-600">John Doe</p>
                    <p className="text-slate-600">123 Medical Way, Health District</p>
                    <p className="text-slate-600">New York, 10001</p>
                    <p className="text-slate-600">+1 (555) 000-0000</p>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Payment Method</h3>
                      <button onClick={() => setStep(2)} className="text-xs font-bold text-primary hover:underline">Edit</button>
                    </div>
                    <div className="flex items-center gap-3">
                      {paymentMethod === 'card' ? (
                        <>
                          <CreditCard className="w-5 h-5 text-slate-400" />
                          <p className="text-slate-600 font-medium">Visa ending in 4242</p>
                        </>
                      ) : (
                        <>
                          <Truck className="w-5 h-5 text-slate-400" />
                          <p className="text-slate-600 font-medium">Cash on Delivery</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-10">
                  <button onClick={() => setStep(2)} className="btn bg-white border-2 border-slate-100 text-slate-600 px-8">Back</button>
                  <Link to="/payment-scan" className="btn btn-primary flex-1 py-4 text-lg">
                    Proceed to Payment Scan
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="card p-8 sticky top-32">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h2>
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-slate-100 rounded-xl overflow-hidden border border-slate-100">
                    <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300" alt="Med" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-900 leading-tight">Paracetamol Extra Relief</p>
                    <p className="text-xs text-slate-400 font-bold mt-1">QTY: 2 × $12.50</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-slate-100 rounded-xl overflow-hidden border border-slate-100">
                    <img src="https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=300" alt="Med" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-900 leading-tight">Amoxicillin Antibiotic</p>
                    <p className="text-xs text-slate-400 font-bold mt-1">QTY: 1 × $24.99</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div className="flex justify-between text-slate-500 font-medium text-sm">
                  <span>Subtotal</span>
                  <span className="text-slate-900 font-bold">$49.99</span>
                </div>
                <div className="flex justify-between text-slate-500 font-medium text-sm">
                  <span>Delivery</span>
                  <span className="text-slate-900 font-bold">$5.00</span>
                </div>
                <div className="flex justify-between text-slate-500 font-medium text-sm">
                  <span>Tax</span>
                  <span className="text-slate-900 font-bold">$2.50</span>
                </div>
                <div className="pt-4 border-t border-slate-100 flex justify-between">
                  <span className="font-bold text-slate-900">Total</span>
                  <span className="text-xl font-bold text-primary">$57.49</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-slate-50 rounded-2xl border border-slate-100 flex gap-3">
                <Calendar className="w-5 h-5 text-slate-400" />
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Estimated Delivery</p>
                  <p className="text-xs font-bold text-slate-800">Tomorrow, Oct 25</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
