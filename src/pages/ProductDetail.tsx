import { Star, Heart, Share2, ShieldCheck, Truck, Clock, Plus, Minus, Upload, ChevronRight, ShoppingCart, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');
  const [selectedDosage, setSelectedDosage] = useState('500mg');

  const product = {
    name: 'Paracetamol 500mg Tablets',
    price: 12.50,
    oldPrice: 15.00,
    discount: '15% OFF',
    rating: 4.8,
    reviews: '1.2k Reviews',
    stock: 'In Stock',
    category: 'Pain Relief',
    description: 'Paracetamol belongs to a group of medicines called analgesics (painkillers) and antipyretics (fever reducers). It is used for the short-term relief of mild to moderate pain including headache, migraine, muscle ache, and reducing fever. Trusted by pharmacists worldwide.',
    benefits: [
      'Rapidly absorbed to provide quick pain relief within 30 minutes.',
      'Gentle on the stomach when taken as directed, unlike some other painkillers.',
      'Versatile treatment for both internal pains and temperature regulation.'
    ],
    storage: [
      'Store in a cool, dry place below 25°C.',
      'Keep away from direct sunlight and moisture.',
      'Keep out of reach and sight of children.'
    ],
    dosages: ['250mg', '500mg', '650mg'],
    images: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=200',
      'https://images.unsplash.com/photo-1471864190281-ad5fe9ac5259?auto=format&fit=crop&q=80&w=200',
      'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=200',
    ]
  };

  const similarProducts = [
    { name: 'Ibuprofen 400mg', price: 8.99, img: 'https://images.unsplash.com/photo-1550572017-ed20027a1276?auto=format&fit=crop&q=80&w=200' },
    { name: 'Amoxicillin 250mg', price: 18.50, img: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=200' },
    { name: 'Aspirin 81mg', price: 5.45, img: 'https://images.unsplash.com/photo-1471864190281-ad5fe9ac5259?auto=format&fit=crop&q=80&w=200' },
    { name: 'Naproxen Sodium', price: 14.20, img: 'https://images.unsplash.com/photo-1559089757-736950c6733f?auto=format&fit=crop&q=80&w=200' },
    { name: 'Multivitamin Daily', price: 22.00, img: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=200' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
        <Link to="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/catalog" className="hover:text-primary">Medicines</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="font-bold text-slate-800">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Left: Image Gallery */}
        <div className="flex flex-col gap-6">
          <div className="aspect-[4/3] bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 p-12 flex items-center justify-center group relative">
            <img 
              src={product.images[0]} 
              alt={product.name} 
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
            <button className="absolute top-6 right-6 p-3 bg-white hover:text-red-500 rounded-full shadow-md text-slate-400 transition-all">
              <Heart className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, idx) => (
              <button key={idx} className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all p-2 bg-slate-50 ${idx === 0 ? 'border-primary shadow-sm' : 'border-slate-100 hover:border-slate-200'}`}>
                <img src={img} alt={`${product.name} ${idx}`} className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-primary text-xs font-bold rounded-full uppercase tracking-wider">Pain Relief</span>
            <span className="px-3 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" /> Prescription Required
            </span>
          </div>

          <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">{product.name}</h1>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className={`w-4 h-4 ${s <= 4 ? 'fill-accent text-accent' : 'text-slate-200'}`} />
              ))}
              <span className="text-sm font-bold text-slate-800 ml-2">4.8</span>
              <span className="text-sm text-slate-400 font-medium ml-1">(1.2k Reviews)</span>
            </div>
            <div className="w-px h-4 bg-slate-200"></div>
            <div className="flex items-center gap-2 text-sm font-bold text-green-600">
              <CheckCircle2 className="w-4 h-4" /> In Stock
            </div>
          </div>

          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-4xl font-bold text-primary">${product.price.toFixed(2)}</span>
            <span className="text-xl text-slate-400 line-through">${product.oldPrice.toFixed(2)}</span>
            <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-md">{product.discount}</span>
          </div>

          <p className="text-slate-600 leading-relaxed mb-8">{product.description}</p>

          {/* Dosage Selection */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold text-slate-900">Select Dosage</span>
              <button className="text-xs font-bold text-primary hover:underline">Size Guide</button>
            </div>
            <div className="flex flex-wrap gap-3">
              {product.dosages.map((dosage) => (
                <button 
                  key={dosage}
                  onClick={() => setSelectedDosage(dosage)}
                  className={`px-6 py-2 rounded-xl text-sm font-bold transition-all border-2 ${selectedDosage === dosage ? 'bg-primary border-primary text-white shadow-md' : 'bg-white border-slate-100 text-slate-600 hover:border-slate-200'}`}
                >
                  {dosage}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <div className="flex items-center gap-4 px-4 py-2 border-2 border-slate-100 rounded-xl bg-slate-50 w-full sm:w-auto justify-between">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-1 hover:text-primary transition-colors"
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="font-bold text-lg min-w-[2rem] text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="p-1 hover:text-primary transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <Link to="/cart" className="btn btn-primary flex-1 py-4 text-lg w-full flex items-center justify-center gap-2">
              <ShoppingCart className="w-5 h-5" /> Add to Cart
            </Link>
          </div>

          <Link to="/checkout" className="btn bg-white border-2 border-primary text-primary hover:bg-primary/5 py-4 text-lg w-full mb-8 flex items-center justify-center">
            Buy Now
          </Link>

          {/* Prescription Alert */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-8">
            <div className="flex gap-4">
              <div className="p-2 bg-white rounded-xl text-slate-600 shadow-sm h-fit">
                <Upload className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-slate-900 mb-1">Prescription is required for this item</p>
                <p className="text-xs text-slate-500 mb-3 leading-relaxed text-balance">Our pharmacists will verify it before shipping.</p>
                <button className="text-xs font-bold text-primary hover:underline">Upload Prescription</button>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-4 py-6 border-y border-slate-100">
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-primary" />
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fast Delivery</p>
                <p className="text-xs font-bold text-slate-800">Estimated by tomorrow</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-secondary" />
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Verified Seller</p>
                <p className="text-xs font-bold text-slate-800">MediFast Gold Partner</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">7-Day Returns</p>
                <p className="text-xs font-bold text-slate-800">Easy refund policy</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Quality Assured</p>
                <p className="text-xs font-bold text-slate-800">WHO-GMP Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mb-20">
        <div className="flex items-center gap-12 border-b border-slate-100 mb-10">
          {[
            { id: 'details', label: 'Product Details' },
            { id: 'dosage', label: 'Ingredients & Dosage' },
            { id: 'reviews', label: 'Reviews (1,248)' }
          ].map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 text-sm font-bold transition-all relative ${activeTab === tab.id ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}`}
            >
              {tab.label}
              {activeTab === tab.id && <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full"></div>}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Description</h3>
              <p className="text-slate-600 leading-relaxed">{product.description}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Storage Instructions</h3>
              <ul className="space-y-3">
                {product.storage.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100 h-fit">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-primary" /> Key Benefits
            </h3>
            <ul className="space-y-6">
              {product.benefits.map((benefit, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center font-bold text-sm shadow-sm flex-shrink-0 border border-blue-100">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <div>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold text-slate-900">Similar Products</h2>
          <button className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {similarProducts.map((p, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-square bg-slate-50 rounded-2xl overflow-hidden mb-4 border border-slate-100 p-6 flex items-center justify-center group-hover:shadow-soft transition-all">
                <img src={p.img} alt={p.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h4 className="font-bold text-slate-800 text-sm mb-1 group-hover:text-primary transition-colors truncate">{p.name}</h4>
              <p className="text-primary font-bold text-sm">${p.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
