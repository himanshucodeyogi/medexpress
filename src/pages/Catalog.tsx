import { Search, Filter, SlidersHorizontal, ShoppingCart, Star, Heart, ArrowUpDown, ChevronLeft, ChevronRight, X, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CatalogPage = () => {
  const categories = [
    { name: 'Tablets', count: 12 },
    { name: 'Syrups', count: 8 },
    { name: 'Vitamins', count: 15 },
    { name: 'Healthcare', count: 10 },
    { name: 'Personal Care', count: 22 },
    { name: 'Baby Care', count: 14 },
  ];

  const products = [
    { id: 1, name: 'Paracetamol Extra Relief 500mg', price: 12.50, oldPrice: 15.00, rating: 4.8, reviews: 120, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300', tag: '30 TABLETS', type: 'Pain Relief' },
    { id: 2, name: 'Amoxicillin Antibiotic Complex', price: 24.99, oldPrice: 29.99, rating: 4.5, reviews: 85, img: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=300', tag: '250mg LIQUID', type: 'Prescription Required' },
    { id: 3, name: 'Vitamin C + Zinc Immune Boost', price: 18.25, oldPrice: 21.00, rating: 4.9, reviews: 210, img: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=300', tag: '60 GUMMIES', type: 'Low Stock' },
    { id: 4, name: 'Cetirizine Allergy Relief', price: 8.99, oldPrice: 10.75, rating: 4.7, reviews: 145, img: 'https://images.unsplash.com/photo-1550572017-ed20027a1276?auto=format&fit=crop&q=80&w=300', tag: '10mg TABLETS', type: 'Allergy' },
    { id: 5, name: 'Metformin Hydrochloride', price: 32.40, oldPrice: 38.00, rating: 4.6, reviews: 92, img: 'https://images.unsplash.com/photo-1471864190281-ad5fe9ac5259?auto=format&fit=crop&q=80&w=300', tag: '500mg ER TABLETS', type: 'Prescription Required' },
    { id: 6, name: 'Omega-3 Fish Oil Concentrate', price: 21.00, oldPrice: 25.00, rating: 4.8, reviews: 175, img: 'https://images.unsplash.com/photo-1559089757-736950c6733f?auto=format&fit=crop&q=80&w=300', tag: '100 SOFTGELS', type: 'Vitamins' },
    { id: 7, name: 'Ibuprofen Liquid Gels', price: 9.50, oldPrice: 11.40, rating: 4.7, reviews: 110, img: 'https://images.unsplash.com/photo-1550572017-ed20027a1276?auto=format&fit=crop&q=80&w=300', tag: '200mg CAPSULES', type: 'Pain Relief' },
    { id: 8, name: 'Ventolin Asthma Inhaler', price: 45.00, oldPrice: 54.00, rating: 4.9, reviews: 68, img: 'https://images.unsplash.com/photo-1599493758264-36ac421928f0?auto=format&fit=crop&q=80&w=300', tag: '100mcg ACTUATION', type: 'Prescription Required' },
    { id: 9, name: 'Melatonin Nightly Sleep', price: 15.75, oldPrice: 18.90, rating: 4.6, reviews: 132, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300', tag: '3mg TABLETS', type: 'Sleep Aid' },
  ];

  const [priceRange, setPriceRange] = useState(50);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
        <Link to="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="font-bold text-slate-800">All Medicines</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Filter className="w-5 h-5" /> Filters
            </h3>
            <button className="text-sm text-primary font-medium hover:underline">Clear All</button>
          </div>

          {/* Search within results */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search results..." 
              className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none"
            />
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h4 className="font-bold text-slate-900 mb-4 flex items-center justify-between">
              Categories
              <ChevronLeft className="w-4 h-4 rotate-270" />
            </h4>
            <div className="flex flex-col gap-3">
              {categories.map((cat) => (
                <label key={cat.name} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" />
                    <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">{cat.name}</span>
                  </div>
                  <span className="text-xs text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-md">{cat.count}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Requirement */}
          <div className="mb-8 border-t border-slate-100 pt-8">
            <h4 className="font-bold text-slate-900 mb-4">Requirement</h4>
            <div className="flex flex-col gap-3">
              {['Over the Counter', 'Prescription Required', 'In Stock Only'].map((req) => (
                <label key={req} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" />
                  <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">{req}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-8 border-t border-slate-100 pt-8">
            <h4 className="font-bold text-slate-900 mb-6">Price Range</h4>
            <input 
              type="range" 
              min="0" 
              max="200" 
              value={priceRange}
              onChange={(e) => setPriceRange(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary" 
            />
            <div className="flex items-center justify-between mt-4">
              <div className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm text-slate-600 font-bold">$0</div>
              <div className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm text-slate-600 font-bold">${priceRange}</div>
            </div>
          </div>

          {/* Need Help Box */}
          <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h5 className="font-bold text-slate-900 mb-2">Need help?</h5>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">Our certified pharmacists are available 24/7 for consultations.</p>
              <button className="text-xs font-bold text-primary hover:underline">Chat Now</button>
            </div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-500"></div>
          </div>
        </aside>

        {/* Product Grid Area */}
        <main className="flex-1">
          {/* Catalog Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Medicine Catalog</h2>
              <p className="text-sm text-slate-500">Showing 248 products found for your health needs</p>
            </div>
            <div className="flex items-center gap-3 self-end md:self-auto">
              <span className="text-sm text-slate-500 font-medium">Sort By:</span>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:border-primary transition-all">
                Relevance <ArrowUpDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Active Filters Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {['Tablets', 'In Stock', '$20 - $80'].map((filter) => (
              <span key={filter} className="px-3 py-1.5 bg-primary/5 border border-primary/20 rounded-lg text-xs font-bold text-primary flex items-center gap-2 cursor-pointer hover:bg-primary/10 transition-all">
                {filter} <X className="w-3 h-3" />
              </span>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="card p-0 overflow-hidden group hover:shadow-card transition-all flex flex-col h-full border-slate-100 hover:border-primary/20">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-50 p-6 flex items-center justify-center">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Status Tags */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.type === 'Prescription Required' && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 text-[10px] font-bold rounded uppercase tracking-wider">Prescription Required</span>
                    )}
                    {product.type === 'Low Stock' && (
                      <span className="px-2 py-1 bg-red-100 text-red-600 text-[10px] font-bold rounded uppercase tracking-wider">Low Stock</span>
                    )}
                  </div>
                  <button className="absolute top-4 right-4 p-2 bg-white hover:text-red-500 rounded-full shadow-sm text-slate-400 transition-all">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{product.tag}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-accent text-accent" />
                      <span className="text-xs font-bold text-slate-800">{product.rating}</span>
                    </div>
                  </div>
                  <Link to={`/product/${product.id}`} className="font-bold text-slate-900 mb-4 hover:text-primary transition-colors leading-tight line-clamp-2">
                    {product.name}
                  </Link>
                  <div className="mt-auto">
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</span>
                      <span className="text-sm text-slate-400 line-through">${product.oldPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2 text-[10px] text-slate-500">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      In Stock - Express Delivery
                    </div>
                    <div className="flex gap-2">
                      <button className="btn btn-primary flex-1 py-2 text-sm">
                        <ShoppingCart className="w-4 h-4" /> Add to Cart
                      </button>
                      <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                        <SlidersHorizontal className="w-4 h-4 text-slate-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-400">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-primary text-white rounded-lg font-bold">1</button>
            <button className="w-10 h-10 border border-slate-200 rounded-lg font-bold text-slate-600 hover:bg-slate-50">2</button>
            <button className="w-10 h-10 border border-slate-200 rounded-lg font-bold text-slate-600 hover:bg-slate-50">3</button>
            <span className="px-2 text-slate-400">...</span>
            <button className="w-10 h-10 border border-slate-200 rounded-lg font-bold text-slate-600 hover:bg-slate-50">12</button>
            <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CatalogPage;
