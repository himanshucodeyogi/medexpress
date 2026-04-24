import { MapPin, Clock, Phone, Globe, Share2, Star, ShieldCheck, CheckCircle2, Heart, MessageSquare, ChevronRight, ShoppingBag, Info, Award, GraduationCap } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const PharmacyDetail = () => {
  const { id } = useParams();

  // Mock data for the pharmacy
  const pharmacy = {
    name: "CureAll Wellness Pharmacy",
    rating: 4.9,
    reviews: 124,
    verified: true,
    description: "CureAll Wellness Pharmacy has been serving the Health City community for over 15 years. We specialize in personalized medication management, compound prescriptions, and holistic wellness consultations. Our mission is to provide accessible, high-quality pharmaceutical care with a personal touch that you won't find at big-chain retailers. We believe in building lasting relationships with our patients to ensure the best possible health outcomes.",
    address: "123 Medical Plaza, Health City, HC 56789",
    hours: [
      { day: "Mon - Fri", time: "08:00 AM - 09:00 PM" },
      { day: "Saturday", time: "09:00 AM - 06:00 PM" },
      { day: "Sunday", time: "Closed", closed: true }
    ],
    tags: ["Family Owned", "Licensed & Insured", "Medicaid Accepted"],
    images: [
      "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    ],
    pharmacist: {
      name: "Dr. Sarah Jenkins",
      role: "Lead Pharmacist & Founder",
      education: "Pharm.D., Johns Hopkins University",
      license: "LIC-PH-9928341",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      bio: "I believe healthcare should be personal. My team and I are here to ensure you not only get your medications but also the knowledge to use them safely."
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified Pharmacy
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-black text-slate-900">{pharmacy.rating}</span>
                  <span className="text-sm font-bold text-slate-400">({pharmacy.reviews} reviews)</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                {pharmacy.name}
              </h1>
              <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
                Dedicated to providing expert pharmaceutical care and wellness solutions to our community with integrity and compassion.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/catalog" className="btn btn-primary px-8 py-4 text-lg font-bold group">
                  Browse Products <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="btn bg-white border border-slate-200 text-slate-700 px-8 py-4 text-lg font-bold hover:bg-slate-50 transition-colors">
                  Contact Store
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
                <img src={pharmacy.images[0]} alt="Pharmacy Main" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50">
                <img src={pharmacy.images[1]} alt="Pharmacy Interior" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden relative shadow-xl shadow-slate-200/50">
                <img src={pharmacy.images[2]} alt="Pharmacy Products" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white font-black text-xl">+8 Photos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* About Section */}
            <section className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-[10px] font-bold uppercase tracking-widest">
                About the Pharmacy
              </div>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                {pharmacy.description}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {pharmacy.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-xs font-bold uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Trust & Accreditations */}
            <section className="space-y-8">
              <h2 className="text-2xl font-black text-slate-900">Trust & Accreditations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white border border-slate-100 rounded-2xl flex items-start gap-4 shadow-sm">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">FDA Approved Facility</h3>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed">Compliant with all federal safety and storage standards for medical supplies.</p>
                  </div>
                </div>
                <div className="p-6 bg-white border border-slate-100 rounded-2xl flex items-start gap-4 shadow-sm">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">State Board Excellence</h3>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed">Consistently rated in the top 5% of pharmacies for patient safety protocols.</p>
                  </div>
                </div>
                <div className="p-6 bg-white border border-slate-100 rounded-2xl flex items-start gap-4 shadow-sm">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Certified Pharmacists</h3>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed">All staff hold active state licenses and advanced clinical certifications.</p>
                  </div>
                </div>
                <div className="p-6 bg-white border border-slate-100 rounded-2xl flex items-start gap-4 shadow-sm">
                  <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center shrink-0">
                    <Info className="w-6 h-6 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">HIPAA Compliant</h3>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed">Your medical data and personal information are protected by bank-grade security.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Meet the Pharmacist */}
            <section className="space-y-8">
              <h2 className="text-2xl font-black text-slate-900">Meet Our Pharmacist</h2>
              <div className="card p-8 bg-white border border-slate-100 rounded-3xl shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -mr-10 -mt-10 transition-all group-hover:scale-110"></div>
                <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                  <div className="relative">
                    <img src={pharmacy.pharmacist.image} alt={pharmacy.pharmacist.name} className="w-32 h-32 rounded-2xl object-cover shadow-xl border-4 border-white" />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 border-4 border-white rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center md:text-left space-y-2">
                    <h3 className="text-xl font-black text-slate-900">{pharmacy.pharmacist.name}</h3>
                    <p className="text-sm font-bold text-primary uppercase tracking-widest">{pharmacy.pharmacist.role}</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-bold text-slate-400 pt-2">
                      <span className="flex items-center gap-1.5"><GraduationCap className="w-4 h-4" /> {pharmacy.pharmacist.education}</span>
                      <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4" /> License: {pharmacy.pharmacist.license}</span>
                    </div>
                    <p className="text-slate-500 font-medium italic pt-4 leading-relaxed">
                      "{pharmacy.pharmacist.bio}"
                    </p>
                    <button className="btn btn-primary px-6 py-3 mt-6 text-sm font-bold shadow-lg shadow-primary/20">
                      Reveal Contact Details
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Store Information Card */}
            <div className="card p-8 bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-200/50 sticky top-32">
              <div className="flex items-center gap-3 mb-8">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-black text-slate-900">Store Information</h3>
              </div>
              
              <div className="space-y-8">
                {/* Map Placeholder */}
                <div className="aspect-video bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Map" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-xl animate-bounce">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-slate-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Physical Address</p>
                      <p className="text-sm font-bold text-slate-700 leading-snug">{pharmacy.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-slate-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Business Hours</p>
                      <div className="space-y-2">
                        {pharmacy.hours.map(h => (
                          <div key={h.day} className="flex justify-between text-xs font-bold">
                            <span className="text-slate-400">{h.day}</span>
                            <span className={h.closed ? "text-red-500" : "text-slate-700"}>{h.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-50">
                  <Link to="/catalog" className="btn btn-primary w-full py-4 font-bold shadow-lg shadow-primary/20">
                    View Product Catalog
                  </Link>
                  <button className="btn bg-slate-50 text-slate-600 w-full py-4 font-bold hover:bg-slate-100 transition-colors">
                    Get Directions
                  </button>
                </div>

                <div className="flex justify-center gap-4 pt-2">
                  <button className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-primary hover:bg-primary/5 transition-all">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-primary hover:bg-primary/5 transition-all">
                    <Globe className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Help Card */}
            <div className="card p-8 bg-blue-50/50 border border-blue-100 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-black text-slate-900">Need Assistance?</h3>
              </div>
              <p className="text-sm font-medium text-slate-500 mb-6 leading-relaxed">
                Our verified pharmacists are available for digital consultation. Connect with us instantly through the portal.
              </p>
              <Link to="/help" className="text-xs font-black text-primary hover:underline flex items-center gap-1 uppercase tracking-widest">
                Learn about our safety standards <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyDetail;
