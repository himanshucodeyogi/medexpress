import { Search, HelpCircle, Book, MessageSquare, ShieldCheck, Truck, CreditCard, ShoppingBag, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HelpCenter = () => {
  const faqs = [
    {
      category: 'Ordering',
      icon: <ShoppingBag className="w-6 h-6" />,
      questions: [
        'How do I place an order?',
        'Can I cancel my order after payment?',
        'How do I upload a prescription?',
        'Is there a minimum order value?'
      ]
    },
    {
      category: 'Delivery',
      icon: <Truck className="w-6 h-6" />,
      questions: [
        'How long does delivery take?',
        'Do you deliver to my city?',
        'How can I track my order?',
        'What are the delivery charges?'
      ]
    },
    {
      category: 'Payments',
      icon: <CreditCard className="w-6 h-6" />,
      questions: [
        'What payment methods do you accept?',
        'Is my payment information secure?',
        'How do I get a refund?',
        'Can I pay cash on delivery?'
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">How can we help you today?</h1>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
            <input 
              type="text" 
              placeholder="Search for articles, topics, or keywords..." 
              className="w-full pl-16 pr-8 py-5 rounded-[2rem] bg-white border-none focus:ring-4 focus:ring-white/20 shadow-2xl shadow-primary/20 text-lg"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-12 pb-24 relative z-20">
        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="card p-8 hover:-translate-y-1 transition-all bg-white shadow-xl shadow-slate-200/50">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
              <Book className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Knowledge Base</h3>
            <p className="text-slate-500 font-medium mb-6">Detailed guides and articles for all our features.</p>
            <button className="flex items-center gap-2 text-primary font-bold hover:underline">
              Browse Articles <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="card p-8 hover:-translate-y-1 transition-all bg-white shadow-xl shadow-slate-200/50">
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-500 mb-6">
              <MessageSquare className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Community Forum</h3>
            <p className="text-slate-500 font-medium mb-6">Get help from other users and our support team.</p>
            <button className="flex items-center gap-2 text-primary font-bold hover:underline">
              Join Discussion <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="card p-8 hover:-translate-y-1 transition-all bg-white shadow-xl shadow-slate-200/50">
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-500 mb-6">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Security & Privacy</h3>
            <p className="text-slate-500 font-medium mb-6">Learn how we protect your data and health info.</p>
            <button className="flex items-center gap-2 text-primary font-bold hover:underline">
              View Policies <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {faqs.map((group) => (
                <div key={group.category} className="space-y-6">
                  <div className="flex items-center gap-3 text-primary">
                    {group.icon}
                    <h3 className="text-xl font-bold">{group.category}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {group.questions.map((q) => (
                      <button 
                        key={q}
                        className="p-6 bg-white rounded-2xl border border-slate-100 text-left hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all group"
                      >
                        <p className="text-slate-700 font-bold group-hover:text-primary transition-colors">{q}</p>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="card p-8 bg-slate-900 text-white sticky top-28 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="relative z-10">
                <HelpCircle className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Still need help?</h3>
                <p className="text-slate-400 font-medium mb-8 leading-relaxed">
                  Can't find the answer you're looking for? Our support team is available 24/7 to help you.
                </p>
                <Link to="/contact" className="btn btn-primary w-full py-4 font-bold flex items-center justify-center gap-2">
                  Contact Support <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Average response time</span>
                    <span className="text-sm font-bold text-green-400">~15 mins</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Satisfaction rate</span>
                    <span className="text-sm font-bold text-primary">98.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
