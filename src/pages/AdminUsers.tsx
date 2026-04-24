import { Users, Search, Filter, MoreHorizontal, Mail, Phone, MapPin, Calendar, CheckCircle2, XCircle, Shield, UserPlus, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminUsers = () => {
  const users = [
    { id: 'USR-001', name: 'Sarah Miller', email: 'sarah.m@example.com', phone: '+1 (555) 123-4567', role: 'Patient', status: 'Active', joined: 'Oct 12, 2023', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80' },
    { id: 'USR-002', name: 'David Chen', email: 'd.chen@example.com', phone: '+1 (555) 987-6543', role: 'Patient', status: 'Active', joined: 'Oct 15, 2023', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80' },
    { id: 'USR-003', name: 'Dr. Elena Ross', email: 'e.ross@medifast.com', phone: '+1 (555) 456-7890', role: 'Doctor', status: 'Active', joined: 'Sep 28, 2023', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80' },
    { id: 'USR-004', name: 'Robert Fox', email: 'robert.f@example.com', phone: '+1 (555) 222-3333', role: 'Delivery', status: 'Inactive', joined: 'Sep 12, 2023', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80' },
    { id: 'USR-005', name: 'Lily Chang', email: 'lily.c@example.com', phone: '+1 (555) 888-9999', role: 'Patient', status: 'Active', joined: 'Aug 24, 2023', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80' },
    { id: 'USR-006', name: 'Admin User', email: 'admin@medifast.com', phone: '+1 (555) 000-1111', role: 'Admin', status: 'Active', joined: 'Jan 01, 2023', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80' },
  ];

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      <Link to="/admin" className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-primary transition-colors mb-6 group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Dashboard
      </Link>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">User Management</h1>
          <p className="text-slate-500 font-medium">View and manage all system users and their roles.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn bg-white border border-slate-200 text-slate-700 px-6 font-bold shadow-sm hover:bg-slate-50">
            <Shield className="w-4 h-4" /> Role Permissions
          </button>
          <button className="btn btn-primary px-6 font-bold">
            <UserPlus className="w-4 h-4" /> Add New User
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Users', value: '2,842', color: 'text-primary', bg: 'bg-primary/5' },
          { label: 'Active Patients', value: '1,920', color: 'text-green-600', bg: 'bg-green-50' },
          { label: 'Verified Doctors', value: '42', color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Delivery Staff', value: '18', color: 'text-amber-600', bg: 'bg-amber-50' },
        ].map((stat, idx) => (
          <div key={idx} className="card p-6 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
            <div className={`w-12 h-12 ${stat.bg} rounded-2xl flex items-center justify-center`}>
              <Users className={`w-6 h-6 ${stat.color}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="card p-4 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search users by name, email or ID..." 
              className="input pl-12 py-3 bg-slate-50 border-none w-full"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <select className="bg-slate-50 border-none rounded-2xl px-6 py-3 text-sm font-bold text-slate-600 focus:ring-2 focus:ring-primary/20 outline-none">
              <option>All Roles</option>
              <option>Patient</option>
              <option>Doctor</option>
              <option>Delivery</option>
              <option>Admin</option>
            </select>
            <select className="bg-slate-50 border-none rounded-2xl px-6 py-3 text-sm font-bold text-slate-600 focus:ring-2 focus:ring-primary/20 outline-none">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Suspended</option>
            </select>
            <button className="btn bg-white border border-slate-200 text-slate-600 px-6 font-bold text-sm">
              <Filter className="w-4 h-4" /> Filter
            </button>
          </div>
        </div>
      </div>

      {/* Users Grid/List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="card p-6 hover:border-primary/20 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-300 hover:text-slate-600 transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <img src={user.img} alt={user.name} className="w-16 h-16 rounded-2xl object-cover ring-4 ring-slate-50" />
              <div>
                <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">{user.name}</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{user.role}</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-slate-500">
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">{user.email}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">{user.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">Joined {user.joined}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-slate-50">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${user.status === 'Active' ? 'bg-green-400' : 'bg-slate-300'}`}></span>
                <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">{user.status}</span>
              </div>
              <button className="text-xs font-bold text-primary hover:underline">View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUsers;
