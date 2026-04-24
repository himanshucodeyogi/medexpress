import { Pill, Users, Target, Award, ShieldCheck, HeartPulse, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-[100px] hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
              <Pill className="w-3 h-3" /> Our Story
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Revolutionizing <span className="text-primary">Healthcare</span> Access for Everyone.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              MedExpress started with a simple mission: to make healthcare more accessible, affordable, and transparent through technology. We believe that getting your medicine should be as easy as ordering a meal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/catalog" className="btn btn-primary px-8 py-4 text-lg font-bold">Shop Medicines</Link>
              <Link to="/contact" className="btn bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-bold">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">10M+</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Happy Patients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">50k+</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Medicines Available</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">200+</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Expert Doctors</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">24/7</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Medical team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 max-w-xs hidden md:block">
                <HeartPulse className="w-12 h-12 text-primary mb-4" />
                <p className="text-lg font-bold text-slate-900 mb-2">Your health is our priority.</p>
                <p className="text-sm text-slate-500 font-medium">We work with verified pharmacies only.</p>
              </div>
            </div>
            <div>
              <div className="space-y-12">
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                    <Target className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    To build the world's most trusted healthcare platform that provides instant access to medications and medical consultations, ensuring no one has to wait for essential care.
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                    <Award className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Values</h2>
                  <ul className="space-y-4">
                    {[
                      'Transparency in pricing and availability',
                      'Integrity in medical consultations',
                      'Commitment to patient privacy and security',
                      'Innovation in healthcare delivery'
                    ].map((value) => (
                      <li key={value} className="flex items-center gap-3 text-slate-600 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-green-500" /> {value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Leaders</h2>
            <p className="text-slate-500 font-medium">A diverse team of medical experts and technology enthusiasts working together.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Dr. Sarah Chen', role: 'Chief Medical Officer', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
              { name: 'Michael Ross', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
              { name: 'Elena Rodriguez', role: 'Head of Operations', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
              { name: 'David Kim', role: 'CTO', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
            ].map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <button className="w-full py-3 bg-white/20 backdrop-blur-md text-white rounded-xl font-bold text-sm border border-white/20">View Bio</button>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                <p className="text-sm font-bold text-primary uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to experience better healthcare?</h2>
              <p className="text-white/80 text-lg mb-10">Join our community today and get 20% off on your first order.</p>
              <Link to="/login" className="btn bg-white text-primary px-10 py-4 text-lg font-bold hover:scale-105 transition-transform inline-flex items-center gap-2">
                Join MedExpress <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
