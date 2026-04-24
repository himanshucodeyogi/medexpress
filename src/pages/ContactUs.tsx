import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Globe, Share2, Pill } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
            <MessageSquare className="w-3 h-3" /> Get In Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">We're here to help you.</h1>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            Have a question about our services or need help with an order? Our team is available 24/7 to assist you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="card p-8 hover:border-primary/20 transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
              <p className="text-slate-500 font-medium mb-4">Monday - Sunday, 24/7 Support</p>
              <p className="text-lg font-bold text-primary">+1 (555) 000-1234</p>
            </div>

            <div className="card p-8 hover:border-secondary/20 transition-all group">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
              <p className="text-slate-500 font-medium mb-4">We'll respond within 24 hours.</p>
              <p className="text-lg font-bold text-secondary">support@medexpress.com</p>
            </div>

            <div className="card p-8 hover:border-orange-500/20 transition-all group">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Visit Us</h3>
              <p className="text-slate-500 font-medium mb-4">Main HQ & Pharmacy Hub</p>
              <p className="text-lg font-bold text-slate-900 leading-tight">123 Healthcare Ave, <br />Medical District, NY 10001</p>
            </div>

            {/* Social Links */}
            <div className="card p-8">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {[Globe, Share2, MessageSquare, Mail].map((Icon, i) => (
                  <button key={i} className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card p-8 md:p-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Send us a message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input type="text" placeholder="John Doe" className="input bg-slate-50 border-slate-100" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="input bg-slate-50 border-slate-100" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="input bg-slate-50 border-slate-100" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Subject</label>
                    <select className="input bg-slate-50 border-slate-100">
                      <option>General Inquiry</option>
                      <option>Order Status</option>
                      <option>Prescription Help</option>
                      <option>Account Issues</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Your Message</label>
                  <textarea 
                    rows={6} 
                    placeholder="How can we help you today?" 
                    className="input bg-slate-50 border-slate-100 py-4 resize-none"
                  ></textarea>
                </div>

                <button className="btn btn-primary w-full md:w-auto px-12 py-4 text-lg font-bold flex items-center justify-center gap-2">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 card h-80 bg-slate-200 overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Map" 
                className="w-full h-full object-cover opacity-50 grayscale"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-4">
                  <div className="bg-primary p-3 rounded-2xl">
                    <Pill className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">MedExpress HQ</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">New York, USA</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
