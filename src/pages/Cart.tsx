import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, ChevronLeft, ShieldCheck, Truck } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Paracetamol Extra Relief 500mg',
      price: 12.50,
      quantity: 2,
      img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300',
      tag: '30 TABLETS',
      prescription: false
    },
    {
      id: 2,
      name: 'Amoxicillin Antibiotic Complex',
      price: 24.99,
      quantity: 1,
      img: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=300',
      tag: '250mg LIQUID',
      prescription: true
    }
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 5.00;
  const tax = subtotal * 0.05;
  const total = subtotal + deliveryFee + tax;

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="flex items-center gap-2 mb-8">
          <Link to="/catalog" className="p-2 hover:bg-white rounded-full transition-colors text-slate-400 hover:text-primary">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">Your Shopping Cart</h1>
          <span className="ml-2 px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full">
            {cartItems.length} Items
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.length > 0 ? (
              <>
                <div className="card overflow-hidden divide-y divide-slate-100">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6 flex flex-col sm:flex-row gap-6 hover:bg-slate-50/50 transition-colors">
                      <div className="w-full sm:w-32 h-32 bg-slate-100 rounded-2xl overflow-hidden border border-slate-100">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-slate-900 text-lg hover:text-primary transition-colors cursor-pointer">
                              {item.name}
                            </h3>
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.tag}</span>
                            {item.prescription && (
                              <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded uppercase tracking-widest border border-blue-100">
                                Rx Required
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 px-3 py-1.5 border border-slate-200 rounded-xl bg-white shadow-sm">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 hover:text-primary transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-bold text-slate-700 min-w-[1.5rem] text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 hover:text-primary transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Price</p>
                            <p className="text-xl font-bold text-slate-900">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="card p-6 bg-blue-50/50 border-blue-100 flex gap-4">
                    <div className="p-3 bg-white rounded-2xl text-blue-600 shadow-sm h-fit">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Safe & Secure</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">All medicines are verified by our licensed pharmacists before dispensing.</p>
                    </div>
                  </div>
                  <div className="card p-6 bg-green-50/50 border-green-100 flex gap-4">
                    <div className="p-3 bg-white rounded-2xl text-green-600 shadow-sm h-fit">
                      <Truck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Free Delivery</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">You're only $12.50 away from free express delivery on your order!</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="card p-20 text-center">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingCart className="w-10 h-10 text-slate-200" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Your cart is empty</h2>
                <p className="text-slate-500 mb-8 max-w-sm mx-auto">Looks like you haven't added any medicines yet. Browse our catalog to find what you need.</p>
                <Link to="/catalog" className="btn btn-primary px-10">
                  Start Shopping
                </Link>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card p-8 sticky top-32">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-slate-500 font-medium">
                  <span>Subtotal</span>
                  <span className="text-slate-900 font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-500 font-medium">
                  <span>Delivery Fee</span>
                  <span className="text-slate-900 font-bold">${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-500 font-medium">
                  <span>Estimated Tax</span>
                  <span className="text-slate-900 font-bold">${tax.toFixed(2)}</span>
                </div>
                <div className="pt-4 border-t border-slate-100 flex justify-between">
                  <span className="text-lg font-bold text-slate-900">Total</span>
                  <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-4">
                <Link to="/checkout" className="btn btn-primary w-full py-4 text-lg group">
                  Proceed to Checkout <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/catalog" className="btn bg-white border-2 border-slate-100 text-slate-600 w-full py-4 font-bold hover:bg-slate-50">
                  Continue Shopping
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-3 text-slate-400 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Guaranteed Safe Checkout</span>
                </div>
                <div className="flex gap-2 opacity-50 grayscale">
                  <div className="w-10 h-6 bg-slate-200 rounded"></div>
                  <div className="w-10 h-6 bg-slate-200 rounded"></div>
                  <div className="w-10 h-6 bg-slate-200 rounded"></div>
                  <div className="w-10 h-6 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
