import { Package, Search, Filter, Plus, MoreHorizontal, ArrowUpDown, ChevronLeft, ChevronRight, Edit3, Trash2, Download } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const InventoryPage = () => {
  const [inventory] = useState([
    { id: 'INV-001', name: 'Amoxicillin 500mg', category: 'Antibiotics', stock: 12, unit: 'Boxes', status: 'Low Stock', price: '$24.99', lastUpdated: '2 hours ago' },
    { id: 'INV-002', name: 'Paracetamol 500mg', category: 'Pain Relief', stock: 450, unit: 'Tablets', status: 'In Stock', price: '$8.50', lastUpdated: '5 hours ago' },
    { id: 'INV-003', name: 'Lisinopril 10mg', category: 'Blood Pressure', stock: 85, unit: 'Packs', status: 'In Stock', price: '$32.00', lastUpdated: '1 day ago' },
    { id: 'INV-004', name: 'Metformin 850mg', category: 'Diabetes', stock: 8, unit: 'Boxes', status: 'Critical', price: '$15.75', lastUpdated: '1 hour ago' },
    { id: 'INV-005', name: 'Atorvastatin 20mg', category: 'Cholesterol', stock: 62, unit: 'Packs', status: 'In Stock', price: '$45.20', lastUpdated: '3 days ago' },
    { id: 'INV-006', name: 'Ventolin Inhaler', category: 'Asthma', stock: 0, unit: 'Units', status: 'Out of Stock', price: '$54.00', lastUpdated: '12 mins ago' },
    { id: 'INV-007', name: 'Cetirizine 10mg', category: 'Allergy', stock: 120, unit: 'Tablets', status: 'In Stock', price: '$12.99', lastUpdated: '1 week ago' },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock': return 'bg-green-100 text-green-600';
      case 'Low Stock': return 'bg-orange-100 text-orange-600';
      case 'Critical': return 'bg-red-100 text-red-600';
      case 'Out of Stock': return 'bg-slate-100 text-slate-600';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 md:mb-10">
          <div>
            <div className="flex items-center gap-2 text-slate-400 mb-2 overflow-hidden">
              <Link to="/admin" className="hover:text-primary transition-colors font-bold text-[10px] md:text-xs uppercase tracking-widest whitespace-nowrap">Admin Dashboard</Link>
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
              <span className="text-slate-900 font-bold text-[10px] md:text-xs uppercase tracking-widest truncate">Inventory Management</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3">
              <Package className="w-6 h-6 md:w-8 md:h-8 text-primary shrink-0" /> Inventory
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button className="btn bg-white border border-slate-200 text-slate-700 px-6 py-3 font-bold shadow-sm hover:bg-slate-50 flex items-center justify-center gap-2">
              <Download className="w-4 h-4" /> Export CSV
            </button>
            <button className="btn btn-primary px-6 py-3 font-bold flex items-center justify-center gap-2">
              <Plus className="w-5 h-5" /> Add New Product
            </button>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="card p-4 md:p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <form onSubmit={(e) => e.preventDefault()} className="flex-1 relative">
              <label htmlFor="inventory-search" className="sr-only">Search products</label>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                id="inventory-search"
                type="search" 
                placeholder="Search products..." 
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
              />
            </form>
            <div className="grid grid-cols-2 md:flex items-center gap-3">
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-600 font-bold text-sm hover:bg-slate-50 transition-all">
                <Filter className="w-4 h-4" /> Filter
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-600 font-bold text-sm hover:bg-slate-50 transition-all">
                <ArrowUpDown className="w-4 h-4" /> Sort By
              </button>
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
          <div className="card p-4 md:p-6 border-l-4 border-l-primary">
            <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Total SKUs</p>
            <p className="text-2xl md:text-3xl font-bold text-slate-900">1,284</p>
          </div>
          <div className="card p-4 md:p-6 border-l-4 border-l-orange-500">
            <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Low Stock</p>
            <p className="text-2xl md:text-3xl font-bold text-orange-500">18</p>
          </div>
          <div className="card p-4 md:p-6 border-l-4 border-l-red-500">
            <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Out of Stock</p>
            <p className="text-2xl md:text-3xl font-bold text-red-500">04</p>
          </div>
          <div className="card p-4 md:p-6 border-l-4 border-l-green-500">
            <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Value</p>
            <p className="text-2xl md:text-3xl font-bold text-green-500">$124.5k</p>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="card overflow-hidden">
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Product Info</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Category</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Stock Level</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Price</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Last Updated</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {inventory.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/30 transition-colors group">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                          <Package className="w-5 h-5 text-slate-400" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-slate-900 truncate">{item.name}</p>
                          <p className="text-[10px] font-bold text-slate-400 truncate">{item.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-sm text-slate-600 font-medium whitespace-nowrap">{item.category}</span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col gap-1.5">
                        <span className="text-sm font-bold text-slate-900">{item.stock} {item.unit}</span>
                        <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${item.stock < 20 ? 'bg-red-500' : item.stock < 100 ? 'bg-orange-500' : 'bg-green-500'}`}
                            style={{ width: `${Math.min(100, (item.stock / 500) * 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm font-bold text-slate-900 whitespace-nowrap">{item.price}</td>
                    <td className="px-6 py-5">
                      <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest whitespace-nowrap ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-xs text-slate-400 font-medium whitespace-nowrap">{item.lastUpdated}</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 md:opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors text-slate-400" title="Edit">
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-red-50 hover:text-red-500 rounded-lg transition-colors text-slate-400" title="Delete">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-400">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 md:p-6 bg-slate-50/50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Showing 7 of 1,284 products</p>
            <div className="flex items-center gap-2">
              <button className="p-2 border border-slate-200 rounded-lg hover:bg-white transition-all text-slate-400 disabled:opacity-50" disabled>
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-primary text-white rounded-lg font-bold text-xs shadow-md shadow-primary/20">1</button>
              <button className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:bg-white border border-transparent hover:border-slate-200 rounded-lg font-bold text-xs text-slate-600 transition-all">2</button>
              <button className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:bg-white border border-transparent hover:border-slate-200 rounded-lg font-bold text-xs text-slate-600 transition-all">3</button>
              <span className="text-slate-400 px-1">...</span>
              <button className="p-2 border border-slate-200 rounded-lg hover:bg-white transition-all text-slate-400">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
