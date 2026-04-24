import { ArrowRight, ShoppingBag, ShieldCheck, Clock, Truck, PlusCircle, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const features = [
    { icon: <Clock className="w-8 h-8 text-primary" />, title: 'Fast Delivery', desc: 'Our local courier network ensures your medicine arrives in as little as 30 minutes.' },
    { icon: <ShieldCheck className="w-8 h-8 text-secondary" />, title: 'Verified Pharmacists', desc: 'Every order is checked and packed by licensed pharmaceutical professionals.' },
    { icon: <PlusCircle className="w-8 h-8 text-primary" />, title: '24/7 Support', desc: 'Our healthcare experts are available around the clock to assist with your needs.' },
    { icon: <CheckCircle2 className="w-8 h-8 text-secondary" />, title: 'Secure Payments', desc: 'Industry-standard encryption for all your transactions and medical data.' },
  ];

  const featuredProducts = [
    { id: 1, name: 'Amoxicillin 500mg', price: 21.99, rating: 4.8, reviews: 120, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300' },
    { id: 2, name: 'Paracetamol Extra', price: 8.50, rating: 4.5, reviews: 85, img: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=300' },
    { id: 3, name: 'Multivitamin Daily Plus', price: 19.00, rating: 4.9, reviews: 210, img: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=300' },
    { id: 4, name: 'Composed Delayed', price: 12.75, rating: 4.7, reviews: 145, img: 'https://images.unsplash.com/photo-1550572017-ed20027a1276?auto=format&fit=crop&q=80&w=300' },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 rounded-full text-xs font-semibold text-primary uppercase tracking-wider mb-6">
              Official Medical Delivery Partner
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Fast & Reliable <br />
              <span className="text-primary">Medicine Delivery</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Get your medications delivered to your doorstep in minutes. Upload your prescription and let our verified pharmacists take care of the rest.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/catalog" className="btn btn-primary px-8 py-4 text-lg w-full sm:w-auto">
                Order Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/upload" className="btn bg-white border-2 border-slate-200 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg w-full sm:w-auto shadow-sm">
                Upload Prescription
              </Link>
            </div>
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8">
              <div>
                <p className="text-2xl font-bold text-slate-900">10k+</p>
                <p className="text-sm text-slate-500 font-medium">Verified Patients</p>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div>
                <p className="text-2xl font-bold text-slate-900">500+</p>
                <p className="text-sm text-slate-500 font-medium">Partner Pharmacies</p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 animate-in fade-in zoom-in duration-700">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173bdb999ef?auto=format&fit=crop&q=80&w=800" 
                alt="Medicine Delivery" 
                className="rounded-3xl shadow-2xl border-8 border-white"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-blue-50 animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Delivery in progress</p>
                    <p className="text-xs text-slate-500">Arriving in 12 mins</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Why Choose MediFast?</h2>
            <p className="text-slate-600 leading-relaxed">
              We combine modern technology with trusted healthcare practices to provide you with the best delivery experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="card hover:border-primary/30 hover:shadow-card transition-all group">
                <div className="mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Healthcare Products</h2>
              <p className="text-slate-500">Quality medical supplies and medicines at competitive prices.</p>
            </div>
            <Link to="/catalog" className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              View Product Catalog <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden group hover:shadow-card transition-all">
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-slate-900 flex items-center gap-1 shadow-sm">
                    ⭐ {product.rating}
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors truncate">{product.name}</h4>
                  <p className="text-xs text-slate-400 mb-4">{product.reviews} reviews</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold text-primary">${product.price.toFixed(2)}</p>
                    <button className="p-2 bg-slate-50 hover:bg-primary hover:text-white rounded-xl transition-all border border-slate-100">
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-3 py-1 bg-blue-100 rounded-full text-xs font-bold text-primary uppercase tracking-widest mb-4">Simple 3-Step Process</div>
            <h2 className="text-3xl font-bold text-slate-900">How MediFast Works</h2>
            <p className="text-slate-500 mt-4">Getting your medicine is easier than ever. Just follow these simple steps to start your recovery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector lines (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-px bg-slate-100 -translate-y-12"></div>
            
            {[
              { step: '01', title: 'Upload Prescription', desc: 'Take a photo of your valid prescription and upload it securely through our app or website.', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=300' },
              { step: '02', title: 'Place Your Order', desc: 'Once verified, select your medications from our catalog and proceed to set up your delivery.', img: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=300' },
              { step: '03', title: 'Quick Home Delivery', desc: 'Our delivery partner picks up your verified package and delivers it directly to your doorstep.', img: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?auto=format&fit=crop&q=80&w=300' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-8 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform relative z-10">
                  {item.step}
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 w-full mb-8 group-hover:bg-primary/5 transition-colors border border-transparent group-hover:border-primary/20">
                  <img src={item.img} alt={item.title} className="rounded-xl mb-6 shadow-sm grayscale group-hover:grayscale-0 transition-all" />
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[2rem] p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto">Join thousands of patients who trust MediFast for their daily healthcare needs.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/upload" className="btn btn-primary px-10 py-4 w-full sm:w-auto">Upload Now</Link>
              <Link to="/catalog" className="btn bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 w-full sm:w-auto">Shop Catalog</Link>
            </div>
          </div>
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
